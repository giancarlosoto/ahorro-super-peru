// Módulo de Documentación y Arquitectura de Web Scraping para Supermercados del Perú
// Este archivo contiene guías técnicas, selectores CSS reales, endpoints de APIs de VTEX
// y plantillas de código listas para producción en Node.js + Playwright.

export const SCRAPING_ARCH = {
  overview: `
El web scraping de e-commerce en Perú presenta desafíos significativos debido a las medidas de seguridad perimetral (como Cloudflare y Akamai) que implementan supermercados como Tottus o Wong. A continuación se detallan las dos aproximaciones técnicas principales de nivel profesional.
  `,
  
  vtexExplanation: `
### 1. Extracción mediante APIs Internas de VTEX (Plaza Vea, Metro, Wong)
La mayoría de supermercados pertenecientes a conglomerados grandes en Perú (como Supermercados Peruanos - Inretail para Plaza Vea/Vivanda, y Cencosud para Wong/Metro) utilizan la plataforma de e-commerce **VTEX**.
VTEX expone por defecto un potente motor de búsqueda interna en formato JSON. Si bien tiene protecciones de CORS para clientes web estándar, puede ser consumido libremente mediante un servidor proxy backend o scripts con headers adecuados.

**Endpoints Clave de Búsqueda:**
*   **Plaza Vea:** \`https://www.plazavea.com.pe/api/catalog_system/pub/products/search?ft=\${query}\`
*   **Metro:** \`https://www.metro.pe/api/catalog_system/pub/products/search?ft=\${query}\`
*   **Wong:** \`https://www.wong.com.pe/api/catalog_system/pub/products/search?ft=\${query}\`

**Ventajas:**
*   Retorna un JSON estructurado con marcas, stock, múltiples SKUs, imágenes y precios regulares vs. precios con tarjeta de crédito (Oh! o Cencosud).
*   No requiere levantar navegadores virtuales pesados (Puppeteer/Playwright), por lo que es extremadamente rápido.
  `,

  nodeVtexCode: `// Ejemplo de microservicio en Node.js (Express) para consultar la API de VTEX
// Guarda este archivo como 'vtex-proxy.js' y ejecútalo con Node.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Permitir peticiones desde tu interfaz web comparadora

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
];

app.get('/api/buscar', async (req, res) => {
  const { tienda, query } = req.query;
  
  let targetUrl = '';
  if (tienda === 'plazavea') {
    targetUrl = \`https://www.plazavea.com.pe/api/catalog_system/pub/products/search?ft=\${encodeURIComponent(query)}\`;
  } else if (tienda === 'metro') {
    targetUrl = \`https://www.metro.pe/api/catalog_system/pub/products/search?ft=\${encodeURIComponent(query)}\`;
  } else if (tienda === 'wong') {
    targetUrl = \`https://www.wong.com.pe/api/catalog_system/pub/products/search?ft=\${encodeURIComponent(query)}\`;
  } else {
    return res.status(400).json({ error: 'Tienda no soportada para API directa' });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
        'Accept': 'application/json',
        'Accept-Language': 'es-ES,es;q=0.9',
        'Cache-Control': 'no-cache'
      },
      timeout: 8000
    });

    // Mapear el JSON de VTEX a un formato unificado
    const products = response.data.map(item => {
      const sku = item.items[0];
      const seller = sku.sellers[0];
      const commRecord = seller.commertialRecord;
      
      return {
        id: item.productId,
        name: item.productName,
        brand: item.brand,
        link: item.link,
        imageUrl: sku.images[0]?.imageUrl,
        priceRegular: commRecord.ListPrice,
        priceSale: commRecord.Price,
        inStock: commRecord.AvailableQuantity > 0
      };
    });

    res.json(products);
  } catch (error) {
    console.error(\`Error al scrapear \${tienda}:\`, error.message);
    res.status(500).json({ error: 'Error al consultar el inventario de la tienda' });
  }
});

app.listen(3000, () => console.log('Proxy VTEX corriendo en puerto 3000'));`,

  playwrightExplanation: `
### 2. Extracción Avanzada con Playwright (Tottus y Evasión Anti-Bots)
**Tottus** no utiliza VTEX y emplea una arquitectura de SPA altamente protegida contra peticiones HTTP planas (axios/fetch). Para resolver esto, es necesario simular a un usuario real utilizando un navegador controlado como **Playwright**, el cual renderiza el JavaScript de la página y permite extraer la información mediante selectores CSS.

**Estrategias para evadir bloqueos:**
1.  **Playwright-Extra con stealth:** Oculta las variables automatizadas del navegador web (ej. \`navigator.webdriver = true\`).
2.  **Manejo de cookies y localizaciones:** Los supermercados en Perú exigen seleccionar una "tienda de despacho" o "ciudad" (ej. Lima Metropolitana) para mostrar los precios y stock correctos. Se deben simular estos clics en el flujo.
3.  **Selectores CSS dinámicos:** Los selectores cambian a menudo. Abajo se muestran los selectores consolidados actuales.
  `,

  nodePlaywrightCode: `// Scraper Robusto con Playwright para Tottus y Tiendas Protegidas
// Instalar: npm install playwright playwright-extra user-agents

const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);

const UserAgents = require('user-agents');

async function scrapeTottus(productQuery) {
  // Generar User Agent realista
  const userAgent = new UserAgents({ deviceCategory: 'desktop' }).toString();
  
  const browser = await chromium.launch({ 
    headless: true, // Cambiar a false para depuración visual
    args: ['--disable-web-security', '--allow-running-insecure-content'] 
  });
  
  const context = await browser.newContext({
    userAgent: userAgent,
    viewport: { width: 1280, height: 800 },
    locale: 'es-PE'
  });
  
  const page = await context.newPage();
  
  try {
    // 1. Navegar a la búsqueda de Tottus Perú
    const searchUrl = \`https://www.tottus.com.pe/buscar?q=\${encodeURIComponent(productQuery)}\`;
    console.log(\`Navegando a \${searchUrl}...\`);
    
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // 2. Esperar a que los elementos del catálogo carguen en pantalla
    // Selector del contenedor del producto principal
    const productCardSelector = 'div.product-card'; 
    await page.waitForSelector(productCardSelector, { timeout: 15000 });
    
    // 3. Extraer la información de los productos en pantalla
    const products = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('div.product-card'));
      return cards.slice(0, 5).map(card => {
        // Selector del título del producto
        const titleEl = card.querySelector('h2.product-card-title, .product-title');
        // Selector de precio regular y precio oferta
        const priceSaleEl = card.querySelector('.price-offer, .price-sale');
        const priceRegEl = card.querySelector('.price-regular, .price-list');
        // Selector de la imagen
        const imageEl = card.querySelector('img.product-card-image, img');
        // Selector de enlace
        const linkEl = card.querySelector('a.product-card-link, a');

        return {
          name: titleEl ? titleEl.innerText.trim() : 'Sin nombre',
          priceSale: priceSaleEl ? parseFloat(priceSaleEl.innerText.replace(/[^0-9.]/g, '')) : null,
          priceRegular: priceRegEl ? parseFloat(priceRegEl.innerText.replace(/[^0-9.]/g, '')) : null,
          imageUrl: imageEl ? imageEl.src : null,
          link: linkEl ? linkEl.href : null
        };
      });
    });

    console.log('Resultados de Scraping en Tottus:', products);
    return products;
  } catch (error) {
    console.error('Error durante el scraping en Tottus:', error.message);
    return [];
  } finally {
    await browser.close();
  }
}

// Ejecutar prueba
scrapeTottus('leche evaporada gloria');`,

  selectorsTable: [
    {
      store: "Plaza Vea",
      type: "API VTEX / HTML",
      searchUrl: "https://www.plazavea.com.pe/buscar?q={query}",
      productCard: "div.Showcase",
      titleSelector: "a.Showcase__name",
      priceSelector: "span.Showcase__salePrice"
    },
    {
      store: "Metro",
      type: "API VTEX / HTML",
      searchUrl: "https://www.metro.pe/buscar?q={query}",
      productCard: "div.product-item",
      titleSelector: "a.product-item__name",
      priceSelector: "span.product-prices__value--sale"
    },
    {
      store: "Wong",
      type: "API VTEX / HTML",
      searchUrl: "https://www.wong.com.pe/buscar?q={query}",
      productCard: "div.product-item",
      titleSelector: "a.product-item__name",
      priceSelector: "span.product-prices__value--sale"
    },
    {
      store: "Tottus",
      type: "HTML Dinámico (SPA)",
      searchUrl: "https://www.tottus.com.pe/buscar?q={query}",
      productCard: "div.product-card",
      titleSelector: "h2.product-card-title",
      priceSelector: "span.price-offer"
    }
  ]
};
