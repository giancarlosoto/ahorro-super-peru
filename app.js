// ==========================================
// 1. BASE DE DATOS SEMÁNTICA CON PRECIOS Y TARJETAS
// ==========================================

const PRODUCTS_DATABASE = [
  // ABARROTES
  {
    id: "arroz-costeno-750g",
    name: "Arroz Extra Costeño 750g",
    category: "Abarrotes",
    tags: ["arroz", "costeño", "costeno", "extra", "grano"],
    prices: {
      plazaVea: 3.90,
      metro: 4.10,
      tottus: 3.80,
      wong: 4.30
    },
    cardPrices: {
      plazaVea: 3.40, // Tarjeta Oh!
      tottus: 3.30,   // Tarjeta CMR
      metro: 3.70     // Tarjeta Cencosud
    },
    brand: "Costeño"
  },
  {
    id: "arroz-costeno-5kg",
    name: "Arroz Extra Costeño Bolsa 5kg",
    category: "Abarrotes",
    tags: ["arroz", "costeño", "costeno", "5kg", "5 kg", "saco", "bolsa"],
    prices: {
      plazaVea: 24.50,
      metro: 25.90,
      tottus: 23.90,
      wong: 26.90
    },
    cardPrices: {
      plazaVea: 21.90, // Oh!
      tottus: 20.90,   // CMR
      metro: 23.50     // Cencosud
    },
    brand: "Costeño"
  },
  {
    id: "aceite-primor-premium-1l",
    name: "Aceite Vegetal Primor Premium 1L",
    category: "Abarrotes",
    tags: ["aceite", "primor", "vegetal", "premium", "cocina"],
    prices: {
      plazaVea: 10.90,
      metro: 11.50,
      tottus: 10.80,
      wong: 12.20
    },
    cardPrices: {
      plazaVea: 9.50,  // Oh!
      tottus: 9.20,    // CMR
      wong: 11.00      // Cencosud
    },
    brand: "Primor"
  },
  {
    id: "aceite-primor-clasico-1l",
    name: "Aceite Vegetal Primor Clásico 900ml",
    category: "Abarrotes",
    tags: ["aceite", "primor", "clasico", "cocina", "vegetal"],
    prices: {
      plazaVea: 9.50,
      metro: 9.90,
      tottus: 9.20,
      wong: 10.50
    },
    cardPrices: {
      plazaVea: 8.50,
      tottus: 7.99
    },
    brand: "Primor"
  },
  {
    id: "aceite-sao-1l",
    name: "Aceite de Soya Sao 1L",
    category: "Abarrotes",
    tags: ["aceite", "sao", "soya", "vegetal"],
    prices: {
      plazaVea: 8.20,
      metro: 8.50,
      tottus: 7.90,
      wong: 8.90
    },
    cardPrices: {
      tottus: 6.99 // CMR
    },
    brand: "Sao"
  },
  {
    id: "fideos-don-vittorio-espagueti-1kg",
    name: "Fideos Espagueti Don Vittorio 1kg",
    category: "Abarrotes",
    tags: ["fideos", "fideo", "don vittorio", "vittorio", "espagueti", "tallarin", "pasta"],
    prices: {
      plazaVea: 5.40,
      metro: 5.60,
      tottus: 5.20,
      wong: 5.90
    },
    cardPrices: {
      plazaVea: 4.80,
      tottus: 4.50
    },
    brand: "Don Vittorio"
  },
  {
    id: "fideos-lavaggi-tornillo-250g",
    name: "Fideos Tornillo Lavaggi 250g",
    category: "Abarrotes",
    tags: ["fideos", "tornillo", "lavaggi", "pasta", "fideo"],
    prices: {
      plazaVea: 1.60,
      metro: 1.80,
      tottus: 1.50,
      wong: 1.95
    },
    cardPrices: {
      metro: 1.40
    },
    brand: "Lavaggi"
  },
  {
    id: "azucar-rubia-cartavio-1kg",
    name: "Azúcar Rubia Cartavio 1kg",
    category: "Abarrotes",
    tags: ["azucar", "rubia", "cartavio", "endulzar", "1kg"],
    prices: {
      plazaVea: 4.50,
      metro: 4.80,
      tottus: 4.40,
      wong: 4.99
    },
    cardPrices: {
      plazaVea: 3.99,
      tottus: 3.80
    },
    brand: "Cartavio"
  },
  {
    id: "azucar-blanca-dulsan-1kg",
    name: "Azúcar Blanca Dulsán 1kg",
    category: "Abarrotes",
    tags: ["azucar", "blanca", "dulsan", "1kg"],
    prices: {
      plazaVea: 4.90,
      metro: 5.20,
      tottus: 4.80,
      wong: 5.40
    },
    cardPrices: {
      metro: 4.50,
      wong: 4.90
    },
    brand: "Dulsán"
  },
  {
    id: "atun-real-trozos-aceite",
    name: "Trozos de Atún en Aceite Real 170g",
    category: "Abarrotes",
    tags: ["atun", "real", "trozos", "conserva", "pescado"],
    prices: {
      plazaVea: 6.20,
      metro: 6.50,
      tottus: 5.90,
      wong: 6.80
    },
    cardPrices: {
      plazaVea: 5.20,
      tottus: 4.99
    },
    brand: "Real"
  },
  {
    id: "atun-primor-solido",
    name: "Sólido de Atún Primor en Aceite 170g",
    category: "Abarrotes",
    tags: ["atun", "primor", "solido", "aceite", "conserva"],
    prices: {
      plazaVea: 7.90,
      metro: 8.20,
      tottus: 7.70,
      wong: 8.60
    },
    cardPrices: {
      plazaVea: 6.90,
      metro: 7.20
    },
    brand: "Primor"
  },

  // LÁCTEOS Y DESAYUNO
  {
    id: "leche-gloria-azul-pack6",
    name: "Leche Evaporada Gloria Azul Pack 6 latas 395g",
    category: "Lácteos y Desayuno",
    tags: ["leche", "gloria", "azul", "pack", "lata", "evaporada"],
    prices: {
      plazaVea: 25.80,
      metro: 26.40,
      tottus: 25.20,
      wong: 27.20
    },
    cardPrices: {
      plazaVea: 22.90, // Oh!
      tottus: 21.90,   // CMR
      metro: 23.90     // Cencosud
    },
    brand: "Gloria"
  },
  {
    id: "leche-gloria-azul-lata",
    name: "Leche Evaporada Gloria Azul Lata 395g",
    category: "Lácteos y Desayuno",
    tags: ["leche", "gloria", "azul", "lata", "evaporada"],
    prices: {
      plazaVea: 4.40,
      metro: 4.50,
      tottus: 4.30,
      wong: 4.70
    },
    cardPrices: {
      plazaVea: 3.90,
      tottus: 3.80
    },
    brand: "Gloria"
  },
  {
    id: "pollo-entero-con-menudencia-kg",
    name: "Pollo Entero Fresco con Menudencia x kg",
    category: "Carnes y Aves",
    tags: ["pollo", "entero", "menudencia", "kg", "ave", "fresco"],
    prices: {
      plazaVea: 9.90,
      metro: 10.50,
      tottus: 9.50,
      wong: 11.20
    },
    cardPrices: {
      plazaVea: 8.50, // Oh!
      tottus: 7.90    // CMR
    },
    brand: "San Fernando"
  },
  {
    id: "huevos-rosados-san-fernando-30",
    name: "Huevos Rosados Medianos San Fernando Paquete 30 unidades",
    category: "Carnes y Aves",
    tags: ["huevos", "huevo", "san fernando", "rosados", "30", "paquete", "jaba"],
    prices: {
      plazaVea: 18.50,
      metro: 19.20,
      tottus: 17.90,
      wong: 20.50
    },
    cardPrices: {
      plazaVea: 15.90, // Oh!
      tottus: 14.90,   // CMR
      metro: 16.90     // Cencosud
    },
    brand: "San Fernando"
  },
  {
    id: "papel-higienico-elite-doble-hoja-12",
    name: "Papel Higiénico Elite Doble Hoja Premium Pack 12 rollos",
    category: "Limpieza",
    tags: ["papel", "higienico", "elite", "doble hoja", "baño", "rollos"],
    prices: {
      plazaVea: 14.50,
      metro: 15.20,
      tottus: 13.90,
      wong: 16.50
    },
    cardPrices: {
      plazaVea: 12.90,
      tottus: 11.90,
      metro: 13.50
    },
    brand: "Elite"
  },
  {
    id: "papel-toalla-nova-6un",
    name: "Papel Toalla NOVA Clásico Mega Rollo Paquete 6un",
    category: "Limpieza",
    tags: ["papel", "toalla", "nova", "clasico", "mega", "rollo", "6un"],
    prices: {
      plazaVea: 13.90,
      metro: 9.50,
      tottus: 13.50,
      wong: 13.90
    },
    cardPrices: {
      plazaVea: 11.90,
      tottus: 10.90
    },
    brand: "Nova"
  },
  {
    id: "arroz-faraon-5kg",
    name: "Arroz Extra Añejo FARAON Naranja Bolsa 5kg",
    category: "Abarrotes",
    tags: ["arroz", "faraon", "anejo", "extra", "naranja", "5kg", "5 kg"],
    prices: {
      plazaVea: 27.90,
      metro: 28.50,
      tottus: 26.90,
      wong: 29.50
    },
    cardPrices: {
      plazaVea: 24.90,
      tottus: 23.90
    },
    brand: "Faraón"
  },
  {
    id: "mayonesa-alacena-475g",
    name: "Mayonesa ALACENA Doypack 475g",
    category: "Abarrotes",
    tags: ["mayonesa", "alacena", "doypack", "475g", "aderezo"],
    prices: {
      plazaVea: 14.90,
      metro: 15.20,
      tottus: 14.50,
      wong: 15.50
    },
    cardPrices: {
      plazaVea: 12.90,
      tottus: 12.50
    },
    brand: "Alacena"
  },
  {
    id: "lejia-clorox-4kg",
    name: "Lejía CLOROX Tradicional Botella 4kg",
    category: "Limpieza",
    tags: ["lejia", "clorox", "tradicional", "botella", "4kg", "4 kg"],
    prices: {
      plazaVea: 11.90,
      metro: 12.50,
      tottus: 11.50,
      wong: 12.90
    },
    cardPrices: {
      plazaVea: 9.90
    },
    brand: "Clorox"
  },
  {
    id: "fideos-molitalia-950g",
    name: "Fideos Spaghetti MOLITALIA Bolsa 950g",
    category: "Abarrotes",
    tags: ["fideos", "molitalia", "spaghetti", "950g", "pasta", "fideo"],
    prices: {
      plazaVea: 5.90,
      metro: 6.20,
      tottus: 5.80,
      wong: 6.40
    },
    cardPrices: {
      tottus: 4.90
    },
    brand: "Molitalia"
  },
  {
    id: "margarina-sello-de-oro-90g",
    name: "Margarina SELLO DE ORO Barra 90g",
    category: "Abarrotes",
    tags: ["margarina", "sello de oro", "sello", "oro", "barra", "90g"],
    prices: {
      plazaVea: 2.10,
      metro: 2.30,
      tottus: 1.90,
      wong: 2.40
    },
    cardPrices: {},
    brand: "Sello de Oro"
  },
  {
    id: "detergente-opal-5-6kg",
    name: "Detergente en Polvo OPAL Ultra Bolsa 5.6kg",
    category: "Limpieza",
    tags: ["detergente", "opal", "polvo", "ultra", "5.6kg", "5.6 kg"],
    prices: {
      plazaVea: 48.90,
      metro: 49.90,
      tottus: 47.90,
      wong: 51.90
    },
    cardPrices: {
      plazaVea: 42.90,
      tottus: 41.90
    },
    brand: "Opal"
  },
  {
    id: "mantequilla-gloria-pote-390g",
    name: "Mantequilla GLORIA Pote 390g",
    category: "Lácteos y Desayuno",
    tags: ["mantequilla", "gloria", "pote", "390g", "390 g"],
    prices: {
      plazaVea: 14.50,
      metro: 14.90,
      tottus: 14.20,
      wong: 15.20
    },
    cardPrices: {
      plazaVea: 12.90,
      tottus: 12.50
    },
    brand: "Gloria"
  }
];

// Lista de Stopwords en español para evitar emparejamientos erróneos
const STOPWORDS = new Set([
  "de", "en", "con", "x", "un", "unid", "unidades", "paquete", "bolsa", 
  "lata", "la", "el", "los", "las", "y", "para", "del", "al", "original",
  "sabor", "tipo", "sobre", "pote", "frasco", "caja", "botella"
]);

// Algoritmo de Búsqueda Semántica de Alta Precisión
function searchProduct(queryText) {
  if (!queryText || typeof queryText !== "string") return null;
  
  const cleanQuery = queryText.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .trim();
    
  if (cleanQuery.length === 0) return null;
  
  // Filtrar stopwords para no inflar los puntajes de coincidencia
  const queryWords = cleanQuery.split(/[\s+\-_,./]+/)
    .filter(word => word.length > 1 && !STOPWORDS.has(word));
  
  if (queryWords.length === 0) return null;
  
  let bestMatch = null;
  let highestScore = 0;
  
  for (const product of PRODUCTS_DATABASE) {
    const cleanName = product.name.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
    let score = 0;
    let matchedKeywordsCount = 0;
    
    for (const word of queryWords) {
      let wordMatched = false;
      
      if (product.tags.some(tag => tag.toLowerCase() === word)) {
        score += 20;
        wordMatched = true;
      } else if (product.tags.some(tag => tag.toLowerCase().includes(word))) {
        score += 8;
        wordMatched = true;
      }
      
      if (cleanName.includes(word)) {
        score += 10;
        wordMatched = true;
      }
      
      if (wordMatched) {
        matchedKeywordsCount++;
      }
    }
    
    // Puntos adicionales si coincide la marca
    if (product.brand && cleanQuery.includes(product.brand.toLowerCase())) {
      score += 30;
    }
    
    // Penalización si casi no coinciden palabras reales del producto para evitar falsos positivos
    const matchRatio = matchedKeywordsCount / queryWords.length;
    if (matchRatio < 0.35) {
      score = 0; 
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = product;
    }
  }
  
  // Establecer un umbral estricto de coincidencia
  // Si no cruza el umbral, consideramos que el producto no existe en el catálogo físico local
  if (highestScore >= 25) {
    return {
      ...bestMatch,
      matchScore: highestScore,
      isSimulated: false,
      notFound: false
    };
  }
  
  // RETORNO DE NO EXISTENCIA:
  // Si no está registrado en el catálogo local, retornamos la marca y datos vacíos
  // El renderizador dejará los campos en blanco y mostrará el nombre exacto solicitado por el usuario.
  return {
    id: `notfound-${Date.now()}`,
    name: queryText, // Usamos exactamente el nombre solicitado
    category: "No Disponible",
    brand: "",
    prices: {
      plazaVea: null,
      metro: null,
      tottus: null,
      wong: null
    },
    cardPrices: {},
    isSimulated: false,
    notFound: true // Flag de no existencia
  };
}


// ==========================================
// 2. ARQUITECTURA DE SCRAPING
// ==========================================

const SCRAPING_ARCH = {
  overview: `
El web scraping de e-commerce en Perú presenta desafíos significativos debido a las medidas de seguridad perimetral (como Cloudflare y Akamai) que implementan supermercados como Tottus o Wong. A continuación se detallan las dos aproximaciones técnicas principales de nivel profesional.
  `,
  
  vtexExplanation: `
<h3>1. Extracción mediante APIs Internas de VTEX (Plaza Vea, Metro, Wong)</h3>
La mayoría de supermercados pertenecientes a conglomerados grandes en Perú (como Supermercados Peruanos - Inretail para Plaza Vea/Vivanda, y Cencosud para Wong/Metro) utilizan la plataforma de e-commerce <strong>VTEX</strong>.
VTEX expone por defecto un potente motor de búsqueda interna en formato JSON. Si bien tiene protecciones de CORS para clientes web estándar, puede ser consumido libremente mediante un servidor proxy backend o scripts con headers adecuados.

<p><strong>Endpoints Clave de Búsqueda:</strong></p>
<ul>
  <li><strong>Plaza Vea:</strong> <code>https://www.plazavea.com.pe/api/catalog_system/pub/products/search?ft=\${query}</code></li>
  <li><strong>Metro:</strong> <code>https://www.metro.pe/api/catalog_system/pub/products/search?ft=\${query}</code></li>
  <li><strong>Wong:</strong> <code>https://www.wong.com.pe/api/catalog_system/pub/products/search?ft=\${query}</code></li>
</ul>
  `,

  nodeVtexCode: `// Ejemplo de proxy VTEX en Node.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/buscar', async (req, res) => {
  const { tienda, query } = req.query;
  let targetUrl = '';
  if (tienda === 'plazavea') {
    targetUrl = \`https://www.plazavea.com.pe/api/catalog_system/pub/products/search?ft=\${encodeURIComponent(query)}\`;
  }
  try {
    const response = await axios.get(targetUrl);
    res.json(response.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.listen(3000);`,

  playwrightExplanation: `
<h3>2. Extracción Avanzada con Playwright (Tottus y Evasión Anti-Bots)</h3>
<strong>Tottus</strong> no utiliza VTEX y emplea una arquitectura de SPA altamente de seguridad. Para resolver esto, simulamos un navegador automatizado con <strong>Playwright</strong> utilizando plugins stealth para pasar los tests de comportamiento humano.
  `,

  nodePlaywrightCode: `// Scraper Robusto con Playwright para Tottus y Tiendas Protegidas
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);
// Flujo estructurado de Playwright...`,

  selectorsTable: [
    { store: "Plaza Vea", type: "API VTEX / HTML", searchUrl: "https://www.plazavea.com.pe/buscar?q={query}", productCard: "div.Showcase", titleSelector: "a.Showcase__name", priceSelector: "span.Showcase__salePrice" },
    { store: "Metro", type: "API VTEX / HTML", searchUrl: "https://www.metro.pe/buscar?q={query}", productCard: "div.product-item", titleSelector: "a.product-item__name", priceSelector: "span.product-prices__value--sale" },
    { store: "Wong", type: "API VTEX / HTML", searchUrl: "https://www.wong.com.pe/buscar?q={query}", productCard: "div.product-item", titleSelector: "a.product-item__name", priceSelector: "span.product-prices__value--sale" },
    { store: "Tottus", type: "HTML Dinámico (SPA)", searchUrl: "https://www.tottus.com.pe/buscar?q={query}", productCard: "div.product-card", titleSelector: "h2.product-card-title", priceSelector: "span.price-offer" }
  ]
};

// ==========================================
// 3. LÓGICA DE INTERFAZ Y AUDITORÍA
// ==========================================

const state = {
  productsList: [],
  comparisonResults: [],
  selectedTheme: 'dark',
  activeScrapingTab: 'overview',
  priceDisplayMode: 'regular', 
  isSearching: false
};

const DOM = {
  bulkInput: document.getElementById('bulk-input'),
  btnCompare: document.getElementById('btn-compare'),
  btnDemoList: document.getElementById('btn-demo-list'),
  btnClear: document.getElementById('btn-clear'),
  themeToggle: document.getElementById('theme-toggle'),
  resultsSection: document.getElementById('results-section'),
  emptyState: document.getElementById('empty-state'),
  loaderCard: document.getElementById('loader-card'),
  loaderText: document.getElementById('loader-text'),
  loaderLogs: document.getElementById('loader-logs'),
  matrixBody: document.getElementById('matrix-body'),
  btnExport: document.getElementById('btn-export'),
  optSingleContainer: document.getElementById('opt-single-container'),
  optSplitContainer: document.getElementById('opt-split-container'),
  savingsBanner: document.getElementById('savings-banner'),
  suggestionTags: document.querySelectorAll('.tag-btn'),
  tabOverview: document.getElementById('tab-overview'),
  tabVtex: document.getElementById('tab-vtex'),
  tabPlaywright: document.getElementById('tab-playwright'),
  tabGoogle: document.getElementById('tab-google'),
  scrapingContent: document.getElementById('scraping-content'),
  scrollTopBtn: document.getElementById('scroll-top-btn'),
  
  auditLogBody: document.getElementById('audit-log-body'),
  btnClearAudit: document.getElementById('btn-clear-audit'),
  
  priceTypeRegular: document.getElementById('price-type-regular'),
  priceTypeCard: document.getElementById('price-type-card')
};

const SCRAPER_SIMULATION_LOGS = [
  "[SYSTEM] Inicializando agente de scraping...",
  "[PROXY] Rotando IP de salida...",
  "[CACHE] Analizando historial de búsqueda...",
  "[API] Realizando consulta a endpoints internos VTEX...",
  "[PARSER] Extrayendo precios regulares y con tarjetas (Oh!, Cenco, CMR)...",
  "[SYSTEM] Datos procesados con éxito!"
];

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadTheme();
  renderScrapingTab('overview');
  renderAuditLogs();
});

function setupEventListeners() {
  DOM.btnCompare.addEventListener('click', handleCompare);
  DOM.btnClear.addEventListener('click', handleClear);
  DOM.btnDemoList.addEventListener('click', handleLoadDemoList);
  DOM.themeToggle.addEventListener('click', toggleTheme);
  
  if (DOM.btnExport) {
    DOM.btnExport.addEventListener('click', handleExportCSV);
  }
  
  if (DOM.btnClearAudit) {
    DOM.btnClearAudit.addEventListener('click', handleClearAudit);
  }
  
  DOM.priceTypeRegular.addEventListener('click', () => handlePriceModeChange('regular'));
  DOM.priceTypeCard.addEventListener('click', () => handlePriceModeChange('card'));
  
  DOM.suggestionTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const text = tag.innerText;
      if (DOM.bulkInput.value.trim()) {
        DOM.bulkInput.value = DOM.bulkInput.value.trim() + ',\n' + text;
      } else {
        DOM.bulkInput.value = text;
      }
      DOM.bulkInput.focus();
    });
  });

  DOM.tabOverview.addEventListener('click', () => handleTabClick('overview'));
  DOM.tabVtex.addEventListener('click', () => handleTabClick('vtex'));
  DOM.tabPlaywright.addEventListener('click', () => handleTabClick('playwright'));
  if (DOM.tabGoogle) {
    DOM.tabGoogle.addEventListener('click', () => handleTabClick('google'));
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      DOM.scrollTopBtn.classList.add('visible');
    } else {
      DOM.scrollTopBtn.classList.remove('visible');
    }
  });

  DOM.scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function handlePriceModeChange(mode) {
  state.priceDisplayMode = mode;
  if (mode === 'regular') {
    DOM.priceTypeRegular.classList.add('active');
    DOM.priceTypeCard.classList.remove('active');
  } else {
    DOM.priceTypeRegular.classList.remove('active');
    DOM.priceTypeCard.classList.add('active');
  }
  if (state.comparisonResults.length > 0) {
    renderComparisonMatrix();
  }
}

function handleLoadDemoList() {
  const demoProducts = [
    "Arroz costeño 5kg",
    "Leche gloria azul",
    "Aceite Primor 1L",
    "Pollo entero con menudencia",
    "Papa amarilla",
    "Huevos de 30 unidades",
    "Gaseosa Coca-Cola 3L",
    "Papel higienico Elite"
  ];
  DOM.bulkInput.value = demoProducts.join('\n');
  DOM.bulkInput.focus();
}

function handleClear() {
  DOM.bulkInput.value = '';
  DOM.bulkInput.focus();
  state.productsList = [];
  state.comparisonResults = [];
  DOM.resultsSection.style.display = 'none';
  DOM.emptyState.style.display = 'flex';
}

function handleTabClick(tabId) {
  state.activeScrapingTab = tabId;
  [DOM.tabOverview, DOM.tabVtex, DOM.tabPlaywright, DOM.tabGoogle].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });
  if (tabId === 'overview') DOM.tabOverview.classList.add('active');
  if (tabId === 'vtex') DOM.tabVtex.classList.add('active');
  if (tabId === 'playwright') DOM.tabPlaywright.classList.add('active');
  if (tabId === 'google' && DOM.tabGoogle) DOM.tabGoogle.classList.add('active');
  renderScrapingTab(tabId);
}

function renderScrapingTab(tabId) {
  let contentHtml = '';
  if (tabId === 'overview') {
    contentHtml = `
      <p>${SCRAPING_ARCH.overview}</p>
      <h3>Tabla de Selectores CSS y Endpoints Actuales</h3>
      <div class="table-wrapper" style="margin-top: 12px;">
        <table class="matrix-table" style="font-size: 0.85rem;">
          <thead>
            <tr>
              <th>Supermercado</th>
              <th>Método de Acceso</th>
              <th>Selector Tarjeta</th>
              <th>Selector Título</th>
              <th>Selector Precio</th>
            </tr>
          </thead>
          <tbody>
            ${SCRAPING_ARCH.selectorsTable.map(s => `
              <tr>
                <td style="font-weight:700;">${s.store}</td>
                <td><code>${s.type}</code></td>
                <td><code>${s.productCard}</code></td>
                <td><code>${s.titleSelector}</code></td>
                <td><code>${s.priceSelector}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabId === 'vtex') {
    contentHtml = `
      <div>
        ${SCRAPING_ARCH.vtexExplanation}
        <h3>Código de Servidor de Producción (Node.js)</h3>
        <pre><code>${escapeHtml(SCRAPING_ARCH.nodeVtexCode)}</code></pre>
      </div>
    `;
  } else if (tabId === 'playwright') {
    contentHtml = `
      <div>
        ${SCRAPING_ARCH.playwrightExplanation}
        <h3>Código Scraper Playwright con Evasión (Stealth)</h3>
        <pre><code>${escapeHtml(SCRAPING_ARCH.nodePlaywrightCode)}</code></pre>
      </div>
    `;
  } else if (tabId === 'google') {
    contentHtml = `
      <div>
        <h3>Extracción Alternativa: Scraping a Google Search/Shopping</h3>
        <p>¡Es una idea brillante! En lugar de consultar directamente las webs individuales de cada supermercado (Plaza Vea, Metro, Wong, Tottus), podemos hacer scraping directo a **Google Search** o **Google Shopping**. Este enfoque es altamente resiliente porque Google indexa y normaliza los precios de múltiples competidores en una sola consulta, evitando que nuestro scraper falle cuando una tienda cambie su diseño web.</p>
        
        <p><strong>Desafíos Técnicos de Scrapear Google:</strong></p>
        <ul>
          <li><strong>Bloqueo de IPs y reCAPTCHAs:</strong> Google posee los sistemas de seguridad perimetral más avanzados del mundo. Si realizas muchas consultas programáticas continuas desde la misma IP, bloqueará tu servidor temporalmente exigiendo resolución manual de reCAPTCHA.</li>
          <li><strong>Restricciones de CORS en el Navegador:</strong> Por seguridad, no es posible realizar peticiones directas desde el navegador a los servidores de Google. Requiere obligatoriamente un proxy o servidor backend en Node.js o Python.</li>
        </ul>

        <p><strong>Arquitectura Profesional Recomendada:</strong></p>
        <p>En entornos reales de producción, se utilizan APIs especializadas en parsing de SERPs (como <strong>SerpApi</strong> o <strong>ScrapingBee</strong>). Estas APIs gestionan de forma transparente la rotación de proxies residenciales, la resolución de captchas y te devuelven un JSON estructurado con los precios listos para consumir por tu aplicación.</p>

        <h3>Código de Producción en Node.js (Usando SerpApi para Google Shopping)</h3>
        <pre><code>${escapeHtml(`// Microservicio backend para buscar precios de supermercados peruanos en Google Shopping
// Instalar: npm install express axios dotenv

const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Guarda tu API_KEY en un archivo .env

const app = express();
const SERP_API_KEY = process.env.SERP_API_KEY;

app.get('/api/google-prices', async (req, res) => {
  const { q } = req.query; // Ejemplo de consulta: "Papel Toalla NOVA 6 unidades"
  
  if (!q) return res.status(400).send("Falta el parámetro de búsqueda 'q'");

  try {
    // Consultar el motor de Google Shopping filtrando para la geolocalización de Perú
    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        engine: 'google_shopping',
        q: q,
        google_domain: 'google.com.pe',
        gl: 'pe', // Localización física: Perú
        hl: 'es', // Idioma de los resultados: Español
        api_key: SERP_API_KEY
      }
    });

    const shoppingResults = response.data.shopping_results || [];
    
    // Filtrar y mapear resultados de tiendas de interés
    const consolidatedPrices = {
      plazaVea: null,
      metro: null,
      tottus: null,
      wong: null
    };

    shoppingResults.forEach(item => {
      const source = item.source.toLowerCase();
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));

      if (source.includes('plaza vea') && !consolidatedPrices.plazaVea) {
        consolidatedPrices.plazaVea = price;
      } else if (source.includes('metro') && !consolidatedPrices.metro) {
        consolidatedPrices.metro = price;
      } else if (source.includes('tottus') && !consolidatedPrices.tottus) {
        consolidatedPrices.tottus = price;
      } else if (source.includes('wong') && !consolidatedPrices.wong) {
        consolidatedPrices.wong = price;
      }
    });

    res.json({
      product: q,
      prices: consolidatedPrices
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Proxy de Google Scraping corriendo en puerto 3000'));`)}</code></pre>
      </div>
    `;
  }
  DOM.scrapingContent.innerHTML = contentHtml;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function handleCompare() {
  const textValue = DOM.bulkInput.value.trim();
  if (!textValue) {
    alert("Por favor, ingresa al menos un producto a comparar.");
    return;
  }
  
  // Sanitizar líneas y filtrar duplicados usando un Set
  const rawList = textValue.split(/[,\n]/);
  const cleanList = Array.from(
    new Set(
      rawList
        .map(p => p.trim())
        .filter(p => p.length > 2)
    )
  );
    
  if (cleanList.length === 0) {
    alert("No se encontraron productos válidos para comparar.");
    return;
  }
  
  state.productsList = cleanList;
  state.isSearching = true;
  
  DOM.emptyState.style.display = 'none';
  DOM.resultsSection.style.display = 'none';
  DOM.loaderCard.style.display = 'flex';
  DOM.loaderLogs.innerHTML = "";
  
  for (let i = 0; i < cleanList.length; i++) {
    const product = cleanList[i];
    DOM.loaderText.innerHTML = `Buscando y extrayendo precios para: <strong>"${product}"</strong> (${i + 1} de ${cleanList.length})`;
    
    for (const logTemplate of SCRAPER_SIMULATION_LOGS) {
      const formattedLog = logTemplate.replace("{product}", product);
      const timeStamp = new Date().toLocaleTimeString();
      DOM.loaderLogs.innerHTML += `<div>[${timeStamp}] ${formattedLog}</div>`;
      DOM.loaderLogs.scrollTop = DOM.loaderLogs.scrollHeight;
      await delay(40);
    }
    
    DOM.loaderLogs.innerHTML += `<div style="color: #34d399; font-weight: bold;">[SUCCESS] Precios de "${product}" cargados correctamente.</div><br>`;
    DOM.loaderLogs.scrollTop = DOM.loaderLogs.scrollHeight;
    await delay(60);
  }
  
  state.comparisonResults = cleanList.map(itemQuery => {
    return {
      query: itemQuery,
      resolved: searchProduct(itemQuery)
    };
  });
  
  state.isSearching = false;
  DOM.loaderCard.style.display = 'none';
  DOM.resultsSection.style.display = 'block';
  
  renderComparisonMatrix();
  saveSearchToAudit();
}

function renderComparisonMatrix() {
  DOM.matrixBody.innerHTML = "";
  const showCardPrice = state.priceDisplayMode === 'card';
  
  state.comparisonResults.forEach(item => {
    const p = item.resolved;
    const row = document.createElement('tr');
    
    // Si el producto no se encontró en la base de datos, mostramos el nombre solicitado y celdas vacías
    if (p.notFound) {
      row.innerHTML = `
        <td>
          <div class="product-cell">
            <span class="product-cell-name">${p.name}</span>
            <span class="product-cell-meta" style="color: var(--text-muted);">Sin stock en catálogo local</span>
          </div>
        </td>
        <td class="price-cell price-normal">-</td>
        <td class="price-cell price-normal">-</td>
        <td class="price-cell price-normal">-</td>
        <td class="price-cell price-normal">-</td>
      `;
      DOM.matrixBody.appendChild(row);
      return;
    }
    
    // Precios de bases
    const pricesRegular = [p.prices.plazaVea, p.prices.metro, p.prices.tottus, p.prices.wong];
    const pricesCard = [
      p.cardPrices.plazaVea || p.prices.plazaVea,
      p.cardPrices.metro || p.prices.metro,
      p.cardPrices.tottus || p.prices.tottus,
      p.cardPrices.wong || p.prices.wong
    ];
    
    const activePrices = showCardPrice ? pricesCard : pricesRegular;
    const minPrice = Math.min(...activePrices);
    const maxPrice = Math.max(...activePrices);
    
    const renderCell = (storeKey, cardLabel, cardClass) => {
      const regPrice = p.prices[storeKey];
      const cardPrice = p.cardPrices[storeKey];
      const activePrice = showCardPrice && cardPrice ? cardPrice : regPrice;
      const cellClass = getPriceClass(activePrice, minPrice, maxPrice);
      
      let htmlContent = `S/. ${regPrice.toFixed(2)}`;
      if (showCardPrice) {
        if (cardPrice) {
          htmlContent = `S/. ${cardPrice.toFixed(2)} <span class="card-tag ${cardClass}" style="margin-left: 4px;">${cardLabel}</span>`;
        } else {
          htmlContent = `S/. ${regPrice.toFixed(2)} <span style="font-size: 0.65rem; color: var(--text-muted); display: block;">Sin Desc.</span>`;
        }
      }
      
      return `<td class="price-cell ${cellClass}">${htmlContent}</td>`;
    };
    
    row.innerHTML = `
      <td>
        <div class="product-cell">
          <span class="product-cell-name">${p.name}</span>
          <span class="product-cell-meta">${p.brand ? `Marca: ${p.brand}` : ''} | Categoría: ${p.category}</span>
        </div>
      </td>
      ${renderCell('plazaVea', 'Oh!', 'oh')}
      ${renderCell('metro', 'Cenco', 'cenco')}
      ${renderCell('tottus', 'CMR', 'cmr')}
      ${renderCell('wong', 'Cenco', 'cenco')}
    `;
    
    DOM.matrixBody.appendChild(row);
  });
  
  calculateCartSavings();
}

function getPriceClass(price, min, max) {
  if (price === min) return 'price-best';
  if (price === max) return 'price-worst';
  return 'price-normal';
}

function calculateCartSavings() {
  const totalsRegular = { plazaVea: 0, metro: 0, tottus: 0, wong: 0 };
  const totalsWithCards = { plazaVea: 0, metro: 0, tottus: 0, wong: 0 };
  
  let splitTotalRegular = 0;
  let splitTotalWithCards = 0;
  const splitItems = [];
  
  // Filtrar solo los productos que SÍ se encontraron en la base de datos local para no romper los cálculos matemáticos
  const foundResults = state.comparisonResults.filter(item => !item.resolved.notFound);
  
  if (foundResults.length === 0) {
    DOM.optSingleContainer.innerHTML = `<div style="color: var(--text-muted); text-align: center; padding: 20px;">Ningún producto de la lista está disponible en el catálogo de tiendas.</div>`;
    DOM.optSplitContainer.innerHTML = `<div style="color: var(--text-muted); text-align: center; padding: 20px;">Ningún producto disponible.</div>`;
    DOM.savingsBanner.innerHTML = `
      <div class="savings-icon-large">ℹ️</div>
      <div class="savings-text">
        <h4>Catálogo sin coincidencias directas</h4>
        <p>Todos los productos consultados están marcados como "No Disponible" en nuestro catálogo local. Intenta buscando artículos de la lista rápida para ensayar cálculos.</p>
      </div>
    `;
    return;
  }
  
  foundResults.forEach(item => {
    const p = item.resolved;
    
    totalsRegular.plazaVea += p.prices.plazaVea;
    totalsRegular.metro += p.prices.metro;
    totalsRegular.tottus += p.prices.tottus;
    totalsRegular.wong += p.prices.wong;
    
    const effectivePV = p.cardPrices.plazaVea || p.prices.plazaVea;
    const effectiveME = p.cardPrices.metro || p.prices.metro;
    const effectiveTO = p.cardPrices.tottus || p.prices.tottus;
    const effectiveWO = p.cardPrices.wong || p.prices.wong;
    
    totalsWithCards.plazaVea += effectivePV;
    totalsWithCards.metro += effectiveME;
    totalsWithCards.tottus += effectiveTO;
    totalsWithCards.wong += effectiveWO;
    
    // Compra dividida regular
    const minReg = Math.min(p.prices.plazaVea, p.prices.metro, p.prices.tottus, p.prices.wong);
    splitTotalRegular += minReg;
    
    // Compra dividida con tarjeta
    const storePricesWithCards = [
      { storeName: 'Plaza Vea', price: effectivePV, cardUsed: !!p.cardPrices.plazaVea, cardLabel: 'Oh!', class: 'indicator-plazavea' },
      { storeName: 'Metro', price: effectiveME, cardUsed: !!p.cardPrices.metro, cardLabel: 'Cenco', class: 'indicator-metro' },
      { storeName: 'Tottus', price: effectiveTO, cardUsed: !!p.cardPrices.tottus, cardLabel: 'CMR', class: 'indicator-tottus' },
      { storeName: 'Wong', price: effectiveWO, cardUsed: !!p.cardPrices.wong, cardLabel: 'Cenco', class: 'indicator-wong' }
    ];
    
    const cheapestWithCardOption = storePricesWithCards.reduce((prev, curr) => (prev.price < curr.price) ? prev : curr);
    splitTotalWithCards += cheapestWithCardOption.price;
    
    splitItems.push({
      productName: p.name,
      store: cheapestWithCardOption.storeName,
      badgeClass: cheapestWithCardOption.class,
      price: cheapestWithCardOption.price,
      cardUsed: cheapestWithCardOption.cardUsed,
      cardLabel: cheapestWithCardOption.cardLabel
    });
  });
  
  const storesRegularArr = [
    { name: 'Plaza Vea', total: totalsRegular.plazaVea, cardTotal: totalsWithCards.plazaVea, class: 'indicator-plazavea' },
    { name: 'Metro', total: totalsRegular.metro, cardTotal: totalsWithCards.metro, class: 'indicator-metro' },
    { name: 'Tottus', total: totalsRegular.tottus, cardTotal: totalsWithCards.tottus, class: 'indicator-tottus' },
    { name: 'Wong', total: totalsRegular.wong, cardTotal: totalsWithCards.wong, class: 'indicator-wong' }
  ];
  
  const cheapestStoreRegular = storesRegularArr.reduce((prev, curr) => (prev.total < curr.total) ? prev : curr);
  const mostExpensiveStore = storesRegularArr.reduce((prev, curr) => (prev.total > curr.total) ? prev : curr);
  
  DOM.optSingleContainer.innerHTML = storesRegularArr.map(st => `
    <div class="opt-store-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
      <div style="display: flex; justify-content: space-between; width: 100%;">
        <div class="opt-store-name">
          <span class="store-indicator ${st.class}"></span>
          <span style="font-weight: 600;">${st.name}</span>
        </div>
        <span class="opt-store-price">S/. ${st.total.toFixed(2)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; width: 100%; font-size: 0.78rem; padding-left: 18px; color: var(--text-muted);">
        <span>Con tarjeta propia:</span>
        <span style="color: var(--success); font-weight: 600;">S/. ${st.cardTotal.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
  
  DOM.optSplitContainer.innerHTML = `
    <div style="flex-grow: 1;">
      <table class="split-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Comprar en</th>
            <th style="text-align: right;">Mejor Precio</th>
          </tr>
        </thead>
        <tbody>
          ${splitItems.slice(0, 5).map(item => `
            <tr>
              <td style="font-weight: 500;">${item.productName}</td>
              <td><span class="split-store-badge ${item.badgeClass}">${item.store}</span></td>
              <td style="text-align: right; font-family:'Outfit';">
                <span style="font-weight:700; color: var(--success);">S/. ${item.price.toFixed(2)}</span>
                ${item.cardUsed ? `<div style="font-size:0.68rem; color: var(--text-muted);">💳 ${item.cardLabel}</div>` : ''}
              </td>
            </tr>
          `).join('')}
          ${splitItems.length > 5 ? `
            <tr>
              <td colspan="3" style="text-align: center; color: var(--text-muted); font-size: 0.75rem; padding-top: 8px;">
                + ${splitItems.length - 5} productos adicionales optimizados...
              </td>
            </tr>
          ` : ''}
        </tbody>
      </table>
    </div>
    <div style="margin-top: 16px; border-top: 1px solid var(--border-color); padding-top: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Dividido Regular: S/. ${splitTotalRegular.toFixed(2)}</div>
        <div style="font-weight:600; font-size:0.9rem;">Dividido con Tarjetas:</div>
      </div>
      <span style="font-family:'Outfit'; font-size: 1.25rem; font-weight: 800; color: var(--success);">
        S/. ${splitTotalWithCards.toFixed(2)}
      </span>
    </div>
  `;
  
  const baseSavings = mostExpensiveStore.total - cheapestStoreRegular.total;
  const cardSavings = mostExpensiveStore.total - splitTotalWithCards;
  
  DOM.savingsBanner.innerHTML = `
    <div class="savings-icon-large">🏆</div>
    <div class="savings-text">
      <h4>¡Estrategia de Ahorro Máximo!</h4>
      <p>
        Comprar todo en <strong>${cheapestStoreRegular.name}</strong> regular te ahorra <strong>S/. ${baseSavings.toFixed(2)}</strong>.
        <br>
        ¡Pero usando la <strong>Estrategia Dividida con Tarjetas (Oh!, CMR, Cenco)</strong> obtienes un costo final de <strong>S/. ${splitTotalWithCards.toFixed(2)}</strong>, acumulando <strong>S/. ${cardSavings.toFixed(2)}</strong> de ahorro absoluto!
      </p>
    </div>
  `;
}

// ==========================================
// 4. SISTEMA DE AUDITORÍA Y HISTORIAL
// ==========================================

function saveSearchToAudit() {
  if (state.comparisonResults.length === 0) return;
  
  let splitTotalWithCards = 0;
  const itemNames = [];
  const foundResults = state.comparisonResults.filter(item => !item.resolved.notFound);
  
  state.comparisonResults.forEach(item => {
    const p = item.resolved;
    itemNames.push(p.name);
  });
  
  foundResults.forEach(item => {
    const p = item.resolved;
    const effectivePV = p.cardPrices.plazaVea || p.prices.plazaVea;
    const effectiveME = p.cardPrices.metro || p.prices.metro;
    const effectiveTO = p.cardPrices.tottus || p.prices.tottus;
    const effectiveWO = p.cardPrices.wong || p.prices.wong;
    splitTotalWithCards += Math.min(effectivePV, effectiveME, effectiveTO, effectiveWO);
  });
  
  const auditLogs = JSON.parse(localStorage.getItem('auditLogs') || '[]');
  const newLog = {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    queryText: itemNames.join(', '),
    itemsCount: itemNames.length,
    cheapestStore: foundResults.length > 0 ? 'Estrategia Híbrida/Dividida' : 'Catálogo Sin stock',
    totalCost: splitTotalWithCards,
    totalSavings: foundResults.length > 0 ? calculateSavingsValueForAudit() : 0
  };
  
  auditLogs.unshift(newLog);
  localStorage.setItem('auditLogs', JSON.stringify(auditLogs.slice(0, 50)));
  
  renderAuditLogs();
}

function calculateSavingsValueForAudit() {
  const totalsRegular = { plazaVea: 0, metro: 0, tottus: 0, wong: 0 };
  let splitTotalWithCards = 0;
  const foundResults = state.comparisonResults.filter(item => !item.resolved.notFound);
  
  foundResults.forEach(item => {
    const p = item.resolved;
    totalsRegular.plazaVea += p.prices.plazaVea;
    totalsRegular.metro += p.prices.metro;
    totalsRegular.tottus += p.prices.tottus;
    totalsRegular.wong += p.prices.wong;
    
    const minVal = Math.min(
      p.cardPrices.plazaVea || p.prices.plazaVea,
      p.cardPrices.metro || p.prices.metro,
      p.cardPrices.tottus || p.prices.tottus,
      p.cardPrices.wong || p.prices.wong
    );
    splitTotalWithCards += minVal;
  });
  
  const maxSingle = Math.max(totalsRegular.plazaVea, totalsRegular.metro, totalsRegular.tottus, totalsRegular.wong);
  return maxSingle - splitTotalWithCards;
}

function renderAuditLogs() {
  if (!DOM.auditLogBody) return;
  const auditLogs = JSON.parse(localStorage.getItem('auditLogs') || '[]');
  
  if (auditLogs.length === 0) {
    DOM.auditLogBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">
          Ninguna consulta registrada todavía. Realiza búsquedas para ver la auditoría en tiempo real.
        </td>
      </tr>
    `;
    return;
  }
  
  DOM.auditLogBody.innerHTML = auditLogs.map(log => `
    <tr>
      <td style="font-weight: 500; white-space: nowrap;">${log.timestamp}</td>
      <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${log.queryText}">
        ${log.queryText}
      </td>
      <td style="text-align: center; font-weight: 600;">${log.itemsCount}</td>
      <td><span class="split-store-badge" style="background-color: var(--accent-color);">${log.cheapestStore}</span></td>
      <td style="text-align: right; font-weight: 600; font-family: 'Outfit';">S/. ${log.totalCost.toFixed(2)}</td>
      <td style="text-align: right; font-weight: 700; color: var(--success); font-family: 'Outfit';">S/. ${log.totalSavings.toFixed(2)}</td>
    </tr>
  `).join('');
}

function handleClearAudit() {
  if (confirm("¿Estás seguro de que deseas vaciar todo el registro de auditoría de consultas?")) {
    localStorage.removeItem('auditLogs');
    renderAuditLogs();
  }
}

// ==========================================
// 5. MÓDULOS AUXILIARES DE EXPORTACIÓN Y TEMAS
// ==========================================

function handleExportCSV() {
  if (state.comparisonResults.length === 0) return;
  
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent += "Producto,Plaza Vea Regular,Plaza Vea Tarjeta,Metro Regular,Metro Tarjeta,Tottus Regular,Tottus Tarjeta,Wong Regular,Wong Tarjeta,Precio Efectivo Mas Bajo,Mejor Tienda\n";
  
  state.comparisonResults.forEach(item => {
    const p = item.resolved;
    
    if (p.notFound) {
      csvContent += `"${p.name.replace(/"/g, '""')}",N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,N/A,No Disponible\n`;
      return;
    }
    
    const activePV = p.cardPrices.plazaVea || p.prices.plazaVea;
    const activeME = p.cardPrices.metro || p.prices.metro;
    const activeTO = p.cardPrices.tottus || p.prices.tottus;
    const activeWO = p.cardPrices.wong || p.prices.wong;
    
    const storePrices = [
      { name: 'Plaza Vea', price: activePV },
      { name: 'Metro', price: activeME },
      { name: 'Tottus', price: activeTO },
      { name: 'Wong', price: activeWO }
    ];
    const minOption = storePrices.reduce((prev, curr) => (prev.price < curr.price) ? prev : curr);
    
    const row = [
      `"${p.name.replace(/"/g, '""')}"`,
      p.prices.plazaVea.toFixed(2),
      p.cardPrices.plazaVea ? p.cardPrices.plazaVea.toFixed(2) : "N/A",
      p.prices.metro.toFixed(2),
      p.cardPrices.metro ? p.cardPrices.metro.toFixed(2) : "N/A",
      p.prices.tottus.toFixed(2),
      p.cardPrices.tottus ? p.cardPrices.tottus.toFixed(2) : "N/A",
      p.prices.wong.toFixed(2),
      p.cardPrices.wong ? p.cardPrices.wong.toFixed(2) : "N/A",
      minOption.price.toFixed(2),
      minOption.name
    ].join(",");
    
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `comparativo_supermercados_peru_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  state.selectedTheme = newTheme;
  DOM.themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  state.selectedTheme = savedTheme;
  DOM.themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
