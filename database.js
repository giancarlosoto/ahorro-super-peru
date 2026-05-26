// Canasta Básica de Supermercados de Perú (Plaza Vea, Metro, Tottus, Wong)
// Base de datos semántica para comparación de precios

export const PRODUCTS_DATABASE = [
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
    brand: "Costeño",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "arroz-costeno-5kg",
    name: "Arroz Extra Costeño Bolsa 5kg",
    category: "Abarrotes",
    tags: ["arroz", "costeño", "costeno", "5kg", "5 kg", "saco"],
    prices: {
      plazaVea: 24.50,
      metro: 25.90,
      tottus: 23.90,
      wong: 26.90
    },
    brand: "Costeño",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200"
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
    brand: "Primor"
  },
  {
    id: "sal-marina-emsal-1kg",
    name: "Sal de Mesa Yodada Flúor Emsal 1kg",
    category: "Abarrotes",
    tags: ["sal", "emsal", "yodada", "cocina"],
    prices: {
      plazaVea: 1.80,
      metro: 1.90,
      tottus: 1.70,
      wong: 2.10
    },
    brand: "Emsal"
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
    brand: "Gloria"
  },
  {
    id: "leche-gloria-roja-deslactosada",
    name: "Leche Gloria Deslactosada Lata 395g",
    category: "Lácteos y Desayuno",
    tags: ["leche", "gloria", "roja", "deslactosada", "lata"],
    prices: {
      plazaVea: 4.70,
      metro: 4.80,
      tottus: 4.60,
      wong: 5.10
    },
    brand: "Gloria"
  },
  {
    id: "yogurt-gloria-fresa-1kg",
    name: "Yogurt Gloria Sabor Fresa Botella 1kg",
    category: "Lácteos y Desayuno",
    tags: ["yogurt", "yogur", "gloria", "fresa", "botella", "1kg"],
    prices: {
      plazaVea: 6.90,
      metro: 7.20,
      tottus: 6.80,
      wong: 7.60
    },
    brand: "Gloria"
  },
  {
    id: "mantequilla-gloria-con-sal-200g",
    name: "Mantequilla Gloria con Sal Barra 200g",
    category: "Lácteos y Desayuno",
    tags: ["mantequilla", "gloria", "sal", "barra", "pan"],
    prices: {
      plazaVea: 9.20,
      metro: 9.50,
      tottus: 8.90,
      wong: 9.90
    },
    brand: "Gloria"
  },
  {
    id: "cafe-altomayo-clasico-180g",
    name: "Café Altomayo Clásico Frasco 180g",
    category: "Lácteos y Desayuno",
    tags: ["cafe", "altomayo", "clasico", "instantaneo", "desayuno"],
    prices: {
      plazaVea: 18.90,
      metro: 19.50,
      tottus: 18.50,
      wong: 20.90
    },
    brand: "Altomayo"
  },
  {
    id: "cafe-nescafe-kirma-190g",
    name: "Café Kirma Instantáneo 190g",
    category: "Lácteos y Desayuno",
    tags: ["cafe", "kirma", "nescafe", "instantaneo"],
    prices: {
      plazaVea: 16.50,
      metro: 17.20,
      tottus: 16.20,
      wong: 17.90
    },
    brand: "Kirma"
  },
  {
    id: "milo-activ-go-400g",
    name: "Milo Modificador de Leche Doypack 400g",
    category: "Lácteos y Desayuno",
    tags: ["milo", "chocolate", "leche", "modificador", "doypack"],
    prices: {
      plazaVea: 12.90,
      metro: 13.50,
      tottus: 12.70,
      wong: 14.10
    },
    brand: "Milo"
  },
  {
    id: "avena-3-ositos-avena-cacao-270g",
    name: "Avena 3 Ositos Bolsa 270g",
    category: "Lácteos y Desayuno",
    tags: ["avena", "3 ositos", "tres ositos", "desayuno", "quaker"],
    prices: {
      plazaVea: 3.20,
      metro: 3.40,
      tottus: 3.10,
      wong: 3.65
    },
    brand: "3 Ositos"
  },
  {
    id: "pan-molde-bimbo-blanco-grande",
    name: "Pan de Molde Bimbo Blanco Grande 480g",
    category: "Lácteos y Desayuno",
    tags: ["pan", "molde", "bimbo", "blanco", "grande", "desayuno"],
    prices: {
      plazaVea: 9.80,
      metro: 10.20,
      tottus: 9.60,
      wong: 10.90
    },
    brand: "Bimbo"
  },

  // CARNES, AVES Y PESCADOS
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
    brand: "San Fernando / Redondos"
  },
  {
    id: "pechuga-pollo-con-hueso-kg",
    name: "Pechuga de Pollo Especial Fresca x kg",
    category: "Carnes y Aves",
    tags: ["pollo", "pechuga", "hueso", "kg", "ave", "san fernando"],
    prices: {
      plazaVea: 16.90,
      metro: 17.50,
      tottus: 16.40,
      wong: 18.50
    },
    brand: "San Fernando"
  },
  {
    id: "lomo-fino-res-kg",
    name: "Lomo Fino de Res Nacional x kg",
    category: "Carnes y Aves",
    tags: ["lomo", "fino", "res", "carne", "vacuno", "nacional", "kg"],
    prices: {
      plazaVea: 62.90,
      metro: 64.90,
      tottus: 61.90,
      wong: 69.90
    },
    brand: "Nacional"
  },
  {
    id: "carne-molida-super-especial-kg",
    name: "Carne Molida Súper Especial de Res x kg",
    category: "Carnes y Aves",
    tags: ["carne", "molida", "res", "vacuno", "especial", "kg"],
    prices: {
      plazaVea: 24.90,
      metro: 26.20,
      tottus: 23.90,
      wong: 27.90
    },
    brand: "Nacional"
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
    brand: "San Fernando"
  },
  {
    id: "huevos-rosados-calibre-pza-12",
    name: "Huevos Rosados Tottus 12 unidades",
    category: "Carnes y Aves",
    tags: ["huevos", "huevo", "12", "docena"],
    prices: {
      plazaVea: 7.90,
      metro: 8.20,
      tottus: 7.20,
      wong: 8.60
    },
    brand: "Genérico"
  },

  // FRUTAS Y VERDURAS
  {
    id: "platanos-seda-kg",
    name: "Plátano de Seda x kg",
    category: "Frutas y Verduras",
    tags: ["platano", "seda", "banana", "fruta", "platanos", "kg"],
    prices: {
      plazaVea: 3.20,
      metro: 3.50,
      tottus: 2.90,
      wong: 3.90
    },
    brand: "Chanchamayo"
  },
  {
    id: "manzana-delicia-kg",
    name: "Manzana Delicia x kg",
    category: "Frutas y Verduras",
    tags: ["manzana", "delicia", "fruta", "manzanas", "kg"],
    prices: {
      plazaVea: 4.90,
      metro: 5.20,
      tottus: 4.80,
      wong: 5.80
    },
    brand: "Nacional"
  },
  {
    id: "limon-acido-kg",
    name: "Limón Sutil x kg",
    category: "Frutas y Verduras",
    tags: ["limon", "sutil", "ceviche", "verdura", "acido", "limones", "kg"],
    prices: {
      plazaVea: 5.50,
      metro: 5.90,
      tottus: 5.40,
      wong: 6.50
    },
    brand: "Piura"
  },
  {
    id: "cebolla-roja-kg",
    name: "Cebolla Roja x kg",
    category: "Frutas y Verduras",
    tags: ["cebolla", "roja", "verdura", "cebollas", "kg"],
    prices: {
      plazaVea: 2.90,
      metro: 3.20,
      tottus: 2.80,
      wong: 3.50
    },
    brand: "Arequipa"
  },
  {
    id: "papa-yungay-kg",
    name: "Papa Yungay x kg",
    category: "Frutas y Verduras",
    tags: ["papa", "yungay", "verdura", "papas", "tuberculo", "kg"],
    prices: {
      plazaVea: 2.40,
      metro: 2.60,
      tottus: 2.30,
      wong: 2.90
    },
    brand: "Huánuco"
  },
  {
    id: "papa-amarilla-kg",
    name: "Papa Amarilla x kg",
    category: "Frutas y Verduras",
    tags: ["papa", "amarilla", "tuberculo", "kg"],
    prices: {
      plazaVea: 4.50,
      metro: 4.80,
      tottus: 4.20,
      wong: 5.20
    },
    brand: "Sierra"
  },
  {
    id: "tomate-italiano-kg",
    name: "Tomate Italiano x kg",
    category: "Frutas y Verduras",
    tags: ["tomate", "italiano", "verdura", "tomates", "kg"],
    prices: {
      plazaVea: 3.80,
      metro: 4.20,
      tottus: 3.60,
      wong: 4.60
    },
    brand: "Nacional"
  },
  {
    id: "palta-fuerte-kg",
    name: "Palta Fuerte x kg",
    category: "Frutas y Verduras",
    tags: ["palta", "aguacate", "fuerte", "fruta", "paltas", "kg"],
    prices: {
      plazaVea: 8.90,
      metro: 9.50,
      tottus: 8.50,
      wong: 10.90
    },
    brand: "Moquegua"
  },

  // BEBIDAS
  {
    id: "coca-cola-original-3l",
    name: "Gaseosa Coca-Cola Sabor Original Botella 3L",
    category: "Bebidas",
    tags: ["gaseosa", "coca", "cola", "cocacola", "refresco", "bebida", "3l", "original"],
    prices: {
      plazaVea: 11.20,
      metro: 11.60,
      tottus: 10.90,
      wong: 12.20
    },
    brand: "Coca-Cola"
  },
  {
    id: "inca-kola-original-3l",
    name: "Gaseosa Inca Kola Original Botella 3L",
    category: "Bebidas",
    tags: ["gaseosa", "inca", "kola", "incakola", "refresco", "bebida", "3l", "original"],
    prices: {
      plazaVea: 11.20,
      metro: 11.60,
      tottus: 10.90,
      wong: 12.20
    },
    brand: "Inca Kola"
  },
  {
    id: "agua-san-mateo-sin-gas-2-5l",
    name: "Agua Mineral San Mateo sin Gas 2.5L",
    category: "Bebidas",
    tags: ["agua", "san mateo", "mateo", "mineral", "sin gas", "bebida"],
    prices: {
      plazaVea: 3.50,
      metro: 3.70,
      tottus: 3.40,
      wong: 3.99
    },
    brand: "San Mateo"
  },
  {
    id: "cerveza-pilsen-callao-lata-473ml-6pack",
    name: "Cerveza Pilsen Callao Six Pack Latas 473ml",
    category: "Bebidas",
    tags: ["cerveza", "pilsen", "callao", "six pack", "pack", "lata", "alcohol", "trago"],
    prices: {
      plazaVea: 28.90,
      metro: 29.50,
      tottus: 28.50,
      wong: 30.90
    },
    brand: "Pilsen"
  },
  {
    id: "jugo-frugos-naranja-1l",
    name: "Jugo Frugos Del Valle Naranja 1L",
    category: "Bebidas",
    tags: ["jugo", "frugos", "valle", "naranja", "caja", "bebida"],
    prices: {
      plazaVea: 4.80,
      metro: 4.99,
      tottus: 4.60,
      wong: 5.30
    },
    brand: "Frugos"
  },

  // LIMPIEZA Y CUIDADO PERSONAL
  {
    id: "detergente-bolivar-flores-celestes-3kg",
    name: "Detergente Bolívar Flores Celestes Bolsa 3kg",
    category: "Limpieza",
    tags: ["detergente", "bolivar", "polvo", "lavar", "ropa", "limpieza", "3kg"],
    prices: {
      plazaVea: 28.90,
      metro: 29.90,
      tottus: 27.90,
      wong: 31.90
    },
    brand: "Bolívar"
  },
  {
    id: "lavavajilla-ayudin-limon-clasico-900g",
    name: "Lavavajilla en Pasta Ayudín Limón 900g",
    category: "Limpieza",
    tags: ["lavavajilla", "ayudin", "platos", "limon", "pasta", "pote"],
    prices: {
      plazaVea: 9.90,
      metro: 10.20,
      tottus: 9.50,
      wong: 10.90
    },
    brand: "Ayudín"
  },
  {
    id: "jabon-protex-avena-3x110g",
    name: "Jabón Protex Avena Pack 3 unidades x 110g",
    category: "Cuidado Personal",
    tags: ["jabon", "protex", "avena", "pack", "cuerpo", "baño"],
    prices: {
      plazaVea: 11.50,
      metro: 11.90,
      tottus: 10.90,
      wong: 12.50
    },
    brand: "Protex"
  },
  {
    id: "shampoo-head-shoulders-suave-manzana-700ml",
    name: "Shampoo Head & Shoulders Suave y Manejable 700ml",
    category: "Cuidado Personal",
    tags: ["shampoo", "champú", "champu", "head and shoulders", "h&s", "pelo", "cabello"],
    prices: {
      plazaVea: 28.50,
      metro: 29.90,
      tottus: 27.90,
      wong: 31.50
    },
    brand: "Head & Shoulders"
  },
  {
    id: "colgate-triple-accion-pack2-75ml",
    name: "Pasta Dental Colgate Triple Acción Pack 2 tubos 75ml",
    category: "Cuidado Personal",
    tags: ["pasta", "dental", "dientes", "colgate", "triple accion", "dentifrico", "pack"],
    prices: {
      plazaVea: 8.50,
      metro: 8.90,
      tottus: 8.20,
      wong: 9.50
    },
    brand: "Colgate"
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
    brand: "Elite"
  }
];

// Algoritmo de Búsqueda Semántica Inteligente
export function searchProduct(queryText) {
  if (!queryText || typeof queryText !== "string") return null;
  
  const cleanQuery = queryText.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remover tildes
    .trim();
    
  if (cleanQuery.length === 0) return null;
  
  const queryWords = cleanQuery.split(/\s+/);
  
  let bestMatch = null;
  let highestScore = 0;
  
  for (const product of PRODUCTS_DATABASE) {
    const cleanName = product.name.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
    let score = 0;
    
    // 1. Coincidencia exacta de palabras en las etiquetas
    for (const word of queryWords) {
      if (product.tags.some(tag => tag.toLowerCase() === word)) {
        score += 15;
      } else if (product.tags.some(tag => tag.toLowerCase().includes(word))) {
        score += 5;
      }
      
      // Coincidencia en el nombre completo
      if (cleanName.includes(word)) {
        score += 8;
      }
    }
    
    // 2. Coincidencia de marca
    if (product.brand && cleanQuery.includes(product.brand.toLowerCase())) {
      score += 20;
    }
    
    // 3. Coincidencia de categoría
    if (cleanQuery.includes(product.category.toLowerCase())) {
      score += 10;
    }
    
    // Ajustar por similitud de palabras
    if (score > highestScore) {
      highestScore = score;
      bestMatch = product;
    }
  }
  
  // Establecemos un umbral mínimo de score para evitar falsos positivos ridículos
  if (highestScore >= 10) {
    return {
      ...bestMatch,
      matchScore: highestScore
    };
  }
  
  // Si no se encuentra, generamos un producto dinámico con un precio estimado basado en un algoritmo heurístico
  // de modo que la matriz NUNCA falle, sino que simule el scraping para productos aleatorios con lógica consistente.
  return generateDynamicProduct(queryText);
}

// Genera un precio dinámico realista para cualquier producto no listado usando hash de strings
function generateDynamicProduct(name) {
  const cleanName = name.charAt(0).toUpperCase() + name.slice(1);
  
  // Generamos precios consistentes usando el código ASCII de las letras del nombre como semilla
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  
  // Rango de precio realista entre S/. 3.50 y S/. 45.00
  const basePrice = 3.5 + (hash % 415) / 10;
  
  // Simular variaciones entre supermercados
  // Tottus suele ser el más económico, Wong el premium, Plaza Vea y Metro equilibrados
  const plazaVeaVar = 1.0 + ((hash % 7) - 3) / 100; // -3% a +3%
  const metroVar = 1.0 + ((hash % 9) - 4) / 100; // -4% a +4%
  const tottusVar = 0.95 + ((hash % 5) - 2) / 100; // -7% a -3% (más económico)
  const wongVar = 1.08 + ((hash % 6) - 1) / 100; // +7% a +12% (premium)
  
  return {
    id: `dyn-${hash}`,
    name: `${cleanName} (Estimado)`,
    category: "General",
    brand: "Búsqueda Dinámica",
    prices: {
      plazaVea: parseFloat((basePrice * plazaVeaVar).toFixed(2)),
      metro: parseFloat((basePrice * metroVar).toFixed(2)),
      tottus: parseFloat((basePrice * tottusVar).toFixed(2)),
      wong: parseFloat((basePrice * wongVar).toFixed(2))
    },
    isSimulated: true
  };
}
