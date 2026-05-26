document.addEventListener('DOMContentLoaded', () => {
  renderAuditDashboard();
  setupEventListeners();
  loadTheme();
});

const DOM = {
  themeToggle: document.getElementById('theme-toggle'),
  auditLogBody: document.getElementById('audit-log-body-page'),
  btnClearAudit: document.getElementById('btn-clear-audit-page'),
  btnExportAudit: document.getElementById('btn-export-audit'),
  scrollTopBtn: document.getElementById('scroll-top-btn'),
  
  // Estadísticas
  statQueries: document.getElementById('stat-total-queries'),
  statItems: document.getElementById('stat-total-items'),
  statSavings: document.getElementById('stat-total-savings')
};

let expandedRows = new Set(); // Guarda los IDs de las filas expandidas

function setupEventListeners() {
  DOM.themeToggle.addEventListener('click', toggleTheme);
  DOM.btnClearAudit.addEventListener('click', handleClearAudit);
  DOM.btnExportAudit.addEventListener('click', handleExportCSV);
  
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

function renderAuditDashboard() {
  const logs = JSON.parse(localStorage.getItem('auditLogs') || '[]');
  
  // 1. Calcular estadísticas consolidadas
  let totalQueries = logs.length;
  let totalItems = 0;
  let totalSavings = 0;
  
  logs.forEach(log => {
    totalItems += log.itemsCount;
    totalSavings += log.totalSavings || 0;
  });
  
  DOM.statQueries.innerText = totalQueries;
  DOM.statItems.innerText = totalItems;
  DOM.statSavings.innerText = `S/. ${totalSavings.toFixed(2)}`;
  
  // 2. Renderizar tabla con soporte interactivo de expansión
  if (totalQueries === 0) {
    DOM.auditLogBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 48px;">
          Ninguna consulta registrada. Ve al comparador y realiza búsquedas para auditar la información.
        </td>
      </tr>
    `;
    return;
  }
  
  DOM.auditLogBody.innerHTML = "";
  
  logs.forEach(log => {
    const isExpanded = expandedRows.has(log.id);
    
    // Crear fila principal
    const mainRow = document.createElement('tr');
    mainRow.className = "audit-row";
    mainRow.addEventListener('click', () => toggleRowExpansion(log.id));
    
    mainRow.innerHTML = `
      <td style="font-weight: 600; white-space: nowrap;">${log.timestamp}</td>
      <td>
        <div style="font-weight: 500; max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${log.queryText}
        </div>
        ${isExpanded ? `<div class="row-expanded-detail"><strong>Lista Completa:</strong><br>${log.queryText}</div>` : ''}
      </td>
      <td style="text-align: center; font-weight: 600;">${log.itemsCount}</td>
      <td><span class="split-store-badge" style="background-color: var(--accent-color);">${log.cheapestStore}</span></td>
      <td style="text-align: right; font-weight: 600; font-family: 'Outfit';">S/. ${log.totalCost.toFixed(2)}</td>
      <td style="text-align: right; font-weight: 700; color: var(--success); font-family: 'Outfit';">S/. ${log.totalSavings.toFixed(2)}</td>
    `;
    
    DOM.auditLogBody.appendChild(mainRow);
  });
}

function toggleRowExpansion(rowId) {
  if (expandedRows.has(rowId)) {
    expandedRows.delete(rowId);
  } else {
    expandedRows.add(rowId);
  }
  renderAuditDashboard(); // Volver a pintar para reflejar el estado expandido
}

function handleClearAudit() {
  if (confirm("¿Estás seguro de que deseas vaciar de forma permanente todo el historial de auditoría? Esta acción no se puede deshacer.")) {
    localStorage.removeItem('auditLogs');
    expandedRows.clear();
    renderAuditDashboard();
  }
}

function handleExportCSV() {
  const logs = JSON.parse(localStorage.getItem('auditLogs') || '[]');
  if (logs.length === 0) {
    alert("No hay registros para exportar.");
    return;
  }
  
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent += "ID,Fecha/Hora,Items Consultados,Cantidad,Tienda Recomendada,Costo Optimizado,Ahorro Maximo\n";
  
  logs.forEach(log => {
    const row = [
      log.id,
      `"${log.timestamp}"`,
      `"${log.queryText.replace(/"/g, '""')}"`,
      log.itemsCount,
      `"${log.cheapestStore}"`,
      log.totalCost.toFixed(2),
      log.totalSavings.toFixed(2)
    ].join(",");
    
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `reporte_auditoria_ahorros_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  DOM.themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  DOM.themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
}
