/* =========================================================
   CONFIGURARE RAPIDĂ SITE (modifică aici datele tale de contact)
   ========================================================= */
const SITE_CONFIG = {
  brandName: "CDS Suite",
  developerName: "Ciucă Denis Software",
  appVersion: "1.0.4",
  // Completează cu numărul tău (ex: "0744 123 456" și pentru WhatsApp "40744123456")
  phoneDisplay: "Prezentare & Suport Direct (Solicită apel în formular)",
  whatsappNumber: "", // ex: "40744123456" (fără + sau spații)
  contactEmail: "",   // ex: "contact@cdssuite.ro"
  companyLegalNote: "", // ex: "CUI / SEAP când va fi activă firma"
};

/* =========================================================
   PRESETĂRI CULORI ACCENT (identice cu main.py din CDS Suite)
   ========================================================= */
const ACCENT_PRESETS = [
  { name: "Albastru",   accent: "#007aff", hover: "#0062cc", dim: "rgba(0, 122, 255, 0.16)" },
  { name: "Verde",      accent: "#34c759", hover: "#28a745", dim: "rgba(52, 199, 89, 0.16)" },
  { name: "Portocaliu", accent: "#ff9500", hover: "#cc7700", dim: "rgba(255, 149, 0, 0.16)" },
  { name: "Mov",        accent: "#af52de", hover: "#8e3eb5", dim: "rgba(175, 82, 222, 0.16)" },
  { name: "Rosu",       accent: "#ff3b30", hover: "#cc2a21", dim: "rgba(255, 59, 48, 0.16)" },
  { name: "Cyan",       accent: "#32ade6", hover: "#1a8ec4", dim: "rgba(50, 173, 230, 0.16)" },
  { name: "Indigo",     accent: "#5856d6", hover: "#3634b0", dim: "rgba(88, 86, 214, 0.16)" },
  { name: "Roz",        accent: "#ff2d55", hover: "#cc1a3a", dim: "rgba(255, 45, 85, 0.16)" },
];

/* =========================================================
   CELE 9 MODULE REALE ALE SUITEI CDS SUITE
   ========================================================= */
const MODULES_DATA = [
  {
    id: "patrimoniu",
    name: "Patrimoniu & Inventar",
    category: "Secretariat",
    filterGroup: "secretariat",
    icon: "🏛️",
    badgeCount: "248 bunuri (241 active)",
    badgeAlert: "⚠ 1 scadență ITP ≤30z",
    badgeTone: "warning",
    fav: true,
    shortDesc: "Evidența completă a bunurilor din Domeniul Public, Domeniul Privat și Obiecte de inventar, cu etichete QR și procese-verbale oficiale.",
    features: [
      "Domeniu Public, Domeniu Privat & Obiecte de inventar",
      "Etichete QR în masă (14 etichete/coală A4)",
      "PV Transfer între gestiuni & PV Casare (PDF)",
      "Listă inventariere PDF / Excel & Semnături comisie",
      "Alerte automate ITP, RCA și contracte închiriere",
    ],
  },
  {
    id: "hotarari",
    name: "Registru Hotărâri Consiliul Local",
    category: "Secretariat",
    filterGroup: "secretariat",
    icon: "📜",
    badgeCount: "142 hotărâri (136 în vigoare)",
    badgeAlert: null,
    badgeTone: null,
    fav: true,
    shortDesc: "Registrul electronic al HCL pe ani și stadii (În vigoare, Modificată, Abrogată), cu PDF-ul hotărârii la un click distanță.",
    features: [
      "Clasificare HCL: În vigoare / Modificată / Abrogată",
      "Atașare și vizualizare PDF integrată în aplicație",
      "Căutare instantanee după număr, an, titlu sau inițiator",
      "Export rapid și printare directă pentru control",
    ],
  },
  {
    id: "registratura",
    name: "Registru Intrări/Ieșiri",
    category: "Secretariat",
    filterGroup: "secretariat",
    icon: "📬",
    badgeCount: "614 înregistrări (9 în așteptare)",
    badgeAlert: "⏰ 1 urgent ≤7z",
    badgeTone: "warning",
    fav: false,
    shortDesc: "Evidența corespondenței intrate și ieșite din primărie, cu repartizare pe compartimente și alerte pentru termenele legale de răspuns.",
    features: [
      "Numerotare automată și evidență Intrări / Ieșiri",
      "Urmărire termen de răspuns cu alertare ≤7 zile",
      "Repartizare pe responsabil / compartiment",
      "Document PDF scanat atașat la fiecare poziție",
    ],
  },
  {
    id: "cartus_hcl",
    name: "Cartuș Hotărâri Consiliul Local",
    category: "Secretariat",
    filterGroup: "secretariat",
    icon: "🗂️",
    badgeCount: "54 cartușe generate",
    badgeAlert: null,
    badgeTone: null,
    fav: false,
    shortDesc: "Generează automat cartușul oficial al ședinței de Consiliu Local în Word (.docx) cu cvorum, voturi, președinte și secretar general.",
    features: [
      "Completare rapidă voturi (Pentru / Împotrivă / Abțineri)",
      "Calendar integrat pentru data adoptării HCL",
      "Generare curată din șablonul oficial .docx",
      "Păstrează istoricul cartușelor salvate 30 de zile",
    ],
  },
  {
    id: "generator_avize",
    name: "Generator Avize Hotărâri CL",
    category: "Secretariat",
    filterGroup: "secretariat",
    icon: "⚖️",
    badgeCount: "38 avize generate",
    badgeAlert: null,
    badgeTone: null,
    fav: false,
    shortDesc: "Emite în câteva secunde avizele pentru comisiile de specialitate ale Consiliului Local: Învățământ, Juridic și Urbanism.",
    features: [
      "Șabloane dedicate: Aviz Învățământ, Juridic, Urbanism",
      "Completare automată proiect de hotărâre și aviz",
      "Export instantaneu în format Word (.docx) gata de semnat",
      "Integrare cu tema și antetul configurate în Launcher",
    ],
  },
  {
    id: "contracte",
    name: "Centralizator Contracte",
    category: "Achiziții publice",
    filterGroup: "achizitii",
    icon: "📑",
    badgeCount: "34 contracte (21 active)",
    badgeAlert: "⏳ 1 expiră ≤30z · 📎 2 fără PDF",
    badgeTone: "warning",
    fav: true,
    shortDesc: "Monitorizează toate contractele primăriei (furnizare, servicii, lucrări), valorile, actele adiționale și datele de expirare.",
    features: [
      "Alertă automată în Dashboard la 15 / 30 / 60 zile",
      "Marchează contractele executate vs. active",
      "Atașare PDF contract + vizualizare și printare internă",
      "Căutare rapidă după număr, furnizor sau obiect",
    ],
  },
  {
    id: "pv_receptie",
    name: "Proces-Verbal Lucrări & Servicii",
    category: "Achiziții publice",
    filterGroup: "achizitii",
    icon: "🛠️",
    badgeCount: "19 PV-uri generate",
    badgeAlert: null,
    badgeTone: null,
    fav: false,
    shortDesc: "Generator dedicat pentru Procesele-Verbale de recepție servicii și lucrări publice, completate din șabloane Word oficiale.",
    features: [
      "Șabloane separate: PV Servicii și PV Lucrări",
      "Completare automată furnizor, contract, comisie și valori",
      "Elimină erorile de copiere din Word",
      "Salvare organizată în folderul DocumenteGenerate",
    ],
  },
  {
    id: "pv_produse",
    name: "Proces-Verbal Produse",
    category: "Achiziții publice",
    filterGroup: "achizitii",
    icon: "📦",
    badgeCount: "27 PV-uri generate",
    badgeAlert: null,
    badgeTone: null,
    fav: false,
    shortDesc: "Generează rapid Procesul-Verbal de recepție a bunurilor și produselor achiziționate de primărie, cu tabel complet și totaluri.",
    features: [
      "Listă dinamică de produse cu cantități și prețuri",
      "Calcul automat valori fără TVA și cu TVA",
      "Completare automată comisie de recepție",
      "Export Word (.docx) formatat profesional",
    ],
  },
  {
    id: "pontaje",
    name: "Generator Pontaje",
    category: "Resurse Umane",
    filterGroup: "ru",
    icon: "🕒",
    badgeCount: "24 fișiere (Excel & PDF)",
    badgeAlert: null,
    badgeTone: null,
    fav: false,
    shortDesc: "Întocmește Foaia Colectivă de Prezență lunară pe departamente cu coduri colorate (L, Co, Bo, M, N) și export simultan Excel + PDF A4.",
    features: [
      "Export profesional în Excel (.xlsx) și PDF landscape A4",
      "Coduri marcaj colorate: L, Co, Bo, Bp, M, O, N, Prm, Prb",
      "Evidențiere automată sâmbătă/duminică & total ore",
      "Antet instituție și semnături specifice pe compartiment",
    ],
  },
];

/* =========================================================
   DATE DEMO PENTRU CĂUTAREA GLOBALĂ ÎN SIMULATOR
   ========================================================= */
const DEMO_DB_RECORDS = [
  {
    modulId: "contracte",
    categorie: "Contracte",
    titlu: "Contract nr. 48/2026 — SC ECO SALUBRITATE SRL",
    detalii: "Servicii | 42.500,00 lei | Colectare și transport deșeuri menajere (expiră în 18 zile)",
  },
  {
    modulId: "contracte",
    categorie: "Contracte",
    titlu: "Contract nr. 12/2026 — SC DRUMURI LOCALE SA",
    detalii: "Lucrări | 118.000,00 lei | Întreținere și pietruire drumuri comunale DC14",
  },
  {
    modulId: "patrimoniu",
    categorie: "Patrimoniu",
    titlu: "Inv. INV-2026-0037 — Telefon SAMSUNG Galaxy A36 5G / Laptop Lenovo ThinkPad",
    detalii: "Dept: Urbanism / Secretariat | Resp: Popescu Maria | 2.450,00 RON",
  },
  {
    modulId: "patrimoniu",
    categorie: "Patrimoniu",
    titlu: "Inv. INV-2024-0011 — Autoutilitară Dacia Dokker GJ-08-UAT",
    detalii: "Dept: Gospodărie Comunală | ITP scadent în 12 zile | 48.900,00 RON",
  },
  {
    modulId: "hotarari",
    categorie: "Hotărâri HCL",
    titlu: "HCL nr. 24/2026 (29.10.2026) — Aprobare buget local și listă investiții",
    detalii: "Inițiator: Primar | Stadiu: În vigoare | PDF atașat",
  },
  {
    modulId: "registratura",
    categorie: "Intrări/Ieșiri",
    titlu: "Reg. 1428/2026 (Intrare) — Solicitare adeverință APIA teren intravilan",
    detalii: "Resp: Compartiment Agricol | Termen răspuns: 4 zile rămase",
  },
];

/* =========================================================
   INIȚIALIZARE LA ÎNCĂRCAREA PAGINII
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initConfigBindings();
  initSiteTheme();
  initMobileNav();
  initModulesShowcase();
  initDocSamplesShowcase();
  initSimulator();
  initTimeCalculator();
  initFaqAccordion();
  initPricingSelection();
  initOfferGenerator();
  initContactForm();
  initFloatingWhatsapp();
});

function initConfigBindings() {
  const yr = document.getElementById("footerYear");
  if (yr) yr.textContent = new Date().getFullYear();

  const ver = document.getElementById("simVersionLabel");
  if (ver) ver.textContent = `v${SITE_CONFIG.appVersion}`;

  const devEl = document.getElementById("cfgDevName");
  if (devEl) devEl.textContent = `${SITE_CONFIG.developerName} — ${SITE_CONFIG.brandName}`;

  const phEl = document.getElementById("cfgPhoneDisplay");
  if (phEl) phEl.textContent = SITE_CONFIG.phoneDisplay;

  const emEl = document.getElementById("cfgEmailDisplay");
  if (emEl) emEl.textContent = SITE_CONFIG.contactEmail || "Răspuns rapid în aceeași zi lucrătoare";
}

function initSiteTheme() {
  const btn = document.getElementById("siteThemeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("theme-light");
    btn.textContent = isLight ? "🌙 Dark" : "☀️ Light";
  });
}

function initMobileNav() {
  const btn = document.getElementById("mobileMenuBtn");
  const links = document.getElementById("navLinks");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    links.classList.toggle("mobile-open");
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("mobile-open"));
  });
}

/* =========================================================
   CELE 9 MODULE DETALIATE + FILTRE COMPARTIMENTE
   ========================================================= */
function initModulesShowcase() {
  const grid = document.getElementById("modulesDetailGrid");
  const filterWrap = document.getElementById("moduleFilters");
  if (!grid) return;

  function renderGrid(filter = "all") {
    grid.innerHTML = "";
    MODULES_DATA.forEach((mod) => {
      if (filter !== "all" && mod.filterGroup !== filter) return;
      const card = document.createElement("article");
      card.className = "module-card";
      card.innerHTML = `
        <div class="module-card-hdr">
          <div class="module-icon">${mod.icon}</div>
          <span class="module-cat">${mod.category}</span>
        </div>
        <h3>${mod.name}</h3>
        <p>${mod.shortDesc}</p>
        <ul class="module-features">
          ${mod.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <button type="button" class="btn btn-secondary btn-sm" data-sim-jump="${mod.id}">
          🖥️ Previzualizează în Simulator →
        </button>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll("[data-sim-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modId = btn.getAttribute("data-sim-jump");
        document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => window.openSimulatorModule?.(modId), 320);
      });
    });
  }

  renderGrid("all");

  filterWrap?.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      filterWrap.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderGrid(pill.getAttribute("data-filter"));
    });
  });
}

/* =========================================================
   SIMULATOR INTERACTIV CDS SUITE
   ========================================================= */
function initSimulator() {
  const simWindow = document.getElementById("simWindow");
  const dotsWrap = document.getElementById("simAccentDots");
  const accentLabel = document.getElementById("simAccentName");
  const simThemeToggle = document.getElementById("simThemeToggle");
  const simQuickLightBtn = document.getElementById("simQuickLightBtn");
  const simViewToggle = document.getElementById("simViewToggle");
  const simQuickCompactBtn = document.getElementById("simQuickCompactBtn");
  const simBackHomeBtn = document.getElementById("simBackHomeBtn");
  const simModuleBackBtn = document.getElementById("simModuleBackBtn");
  const launcherView = document.getElementById("simLauncherView");
  const moduleView = document.getElementById("simModuleView");
  const moduleViewTitle = document.getElementById("simModuleViewTitle");
  const moduleViewSub = document.getElementById("simModuleViewSub");
  const moduleViewContent = document.getElementById("simModuleViewContent");
  const cardsContainer = document.getElementById("simCardsContainer");
  const searchInput = document.getElementById("simSearchInput");
  const searchClear = document.getElementById("simSearchClear");
  const toastEl = document.getElementById("simToast");

  if (!simWindow || !cardsContainer) return;

  let isCompact = false;
  let isLight = false;
  let toastTimer = null;

  function showSimToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }

  function applySimAccent(preset) {
    simWindow.style.setProperty("--sim-accent", preset.accent);
    simWindow.style.setProperty("--sim-accent-hover", preset.hover);
    simWindow.style.setProperty("--sim-accent-dim", preset.dim);
    if (accentLabel) {
      accentLabel.textContent = preset.name;
      accentLabel.style.color = preset.accent;
    }
  }

  if (dotsWrap) {
    ACCENT_PRESETS.forEach((preset, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "accent-dot" + (idx === 0 ? " active" : "");
      dot.style.background = preset.accent;
      dot.title = preset.name;
      dot.addEventListener("click", () => {
        dotsWrap.querySelectorAll(".accent-dot").forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
        applySimAccent(preset);
        showSimToast(`🎨 Culoare accent aplicată: ${preset.name}`);
      });
      dotsWrap.appendChild(dot);
    });
  }

  function syncThemeButtons() {
    if (simThemeToggle) {
      simThemeToggle.textContent = isLight ? "🌙 Mod Dark în Simulator" : "☀️ Mod Light în Simulator";
    }
    if (simQuickLightBtn) {
      simQuickLightBtn.textContent = isLight ? "🌙 Comută Dark" : "☀️ Comută Light";
    }
  }

  function toggleSimTheme() {
    isLight = !isLight;
    simWindow.classList.toggle("sim-light", isLight);
    syncThemeButtons();
  }

  simThemeToggle?.addEventListener("click", toggleSimTheme);
  simQuickLightBtn?.addEventListener("click", toggleSimTheme);

  function toggleViewMode() {
    isCompact = !isCompact;
    const lbl = isCompact ? "⊞ Carduri" : "☰ Listă";
    if (simViewToggle) simViewToggle.textContent = lbl;
    if (simQuickCompactBtn) simQuickCompactBtn.textContent = lbl;
    renderLauncherCards();
  }

  simViewToggle?.addEventListener("click", toggleViewMode);
  simQuickCompactBtn?.addEventListener("click", toggleViewMode);

  function scrollSimulatorIntoView() {
    const simAnchor = document.querySelector(".simulator-controls-bar") || simWindow;
    const rect = simAnchor.getBoundingClientRect();
    if (rect.top < 80 || rect.top > window.innerHeight * 0.5) {
      simAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function closeModuleView() {
    moduleView.classList.remove("active");
    launcherView.classList.remove("hidden");
    if (simBackHomeBtn) simBackHomeBtn.style.display = "none";
    requestAnimationFrame(scrollSimulatorIntoView);
  }

  simBackHomeBtn?.addEventListener("click", closeModuleView);
  simModuleBackBtn?.addEventListener("click", closeModuleView);

  function createSimCard(mod) {
    const card = document.createElement("div");
    card.className = "sim-card" + (isCompact ? " compact-row" : "");

    const badgeHtml = isCompact
      ? `<span>${mod.badgeCount}</span>`
      : `<span>${mod.badgeCount}</span>${
          mod.badgeAlert
            ? `<span class="alert-text ${mod.badgeTone || "warning"}">${mod.badgeAlert}</span>`
            : ""
        }`;

    card.innerHTML = `
      <div class="sim-card-accent"></div>
      <div class="sim-card-inner">
        <div class="sim-card-top">
          <div class="sim-card-name">${mod.icon} ${mod.name}</div>
          <div class="sim-card-icons">
            <button type="button" class="sim-star ${mod.fav ? "active" : ""}" title="Adaugă/scoate din Favorite">
              ${mod.fav ? "★" : "☆"}
            </button>
            <span class="sim-dot" title="Status modul">●</span>
          </div>
        </div>
        <div class="sim-card-badge">${badgeHtml}</div>
        <div class="sim-card-actions">
          <button type="button" class="sim-open-btn">Deschide</button>
          <button type="button" class="sim-folder-btn" title="Vezi documentele salvate">📁</button>
        </div>
      </div>
    `;

    card.querySelector(".sim-star").addEventListener("click", (e) => {
      e.stopPropagation();
      mod.fav = !mod.fav;
      renderLauncherCards();
      showSimToast(mod.fav ? `★ ${mod.name} adăugat la Favorite` : `☆ ${mod.name} scos din Favorite`);
    });

    card.querySelector(".sim-open-btn").addEventListener("click", () => {
      openModuleView(mod.id);
    });

    card.querySelector(".sim-folder-btn").addEventListener("click", () => {
      showSimToast(`📁 Deschide folderul de export pentru "${mod.name}" (cu vizualizator PDF & print integrat).`);
    });

    return card;
  }

  function renderLauncherCards() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    if (searchClear) searchClear.classList.toggle("visible", query.length > 0);
    cardsContainer.innerHTML = "";

    if (query) {
      const modMatches = MODULES_DATA.filter(
        (m) => m.name.toLowerCase().includes(query) || m.category.toLowerCase().includes(query)
      );
      const dbMatches =
        query.length >= 2
          ? DEMO_DB_RECORDS.filter(
              (r) =>
                r.titlu.toLowerCase().includes(query) ||
                r.detalii.toLowerCase().includes(query) ||
                r.categorie.toLowerCase().includes(query)
            )
          : [];

      if (!modMatches.length && !dbMatches.length) {
        cardsContainer.innerHTML = `<p style="text-align:center;color:var(--sim-muted);padding:26px 0;">Niciun rezultat găsit pentru „${escapeHtml(query)}”.</p>`;
        return;
      }

      if (modMatches.length) {
        const grid = document.createElement("div");
        grid.className = "sim-grid" + (isCompact ? " compact" : "");
        modMatches.forEach((m) => grid.appendChild(createSimCard(m)));
        cardsContainer.appendChild(grid);
      }

      if (dbMatches.length) {
        const dbBlock = document.createElement("div");
        dbBlock.className = "sim-cat-block";
        dbBlock.style.marginTop = "20px";
        dbBlock.innerHTML = `
          <div class="sim-cat-hdr">
            <h4 style="color:var(--sim-accent);">🔎 Înregistrări găsite în bazele de date (${dbMatches.length})</h4>
            <div class="sim-cat-line"></div>
          </div>
        `;
        dbMatches.forEach((hit) => {
          const row = document.createElement("div");
          row.className = "sim-db-hit";
          row.innerHTML = `
            <span class="sim-db-tag">${hit.categorie}</span>
            <div class="sim-db-info">
              <strong>${hit.titlu}</strong>
              <span>${hit.detalii}</span>
            </div>
            <button type="button" class="sim-open-btn">Deschide modul</button>
          `;
          row.querySelector("button").addEventListener("click", () => openModuleView(hit.modulId));
          dbBlock.appendChild(row);
        });
        cardsContainer.appendChild(dbBlock);
      }
      return;
    }

    const favMods = MODULES_DATA.filter((m) => m.fav);
    if (favMods.length) {
      const favBlock = document.createElement("div");
      favBlock.className = "sim-cat-block";
      favBlock.innerHTML = `
        <div class="sim-cat-hdr fav">
          <h4>★ Favorite</h4>
          <div class="sim-cat-line"></div>
        </div>
      `;
      const favGrid = document.createElement("div");
      favGrid.className = "sim-grid" + (isCompact ? " compact" : "");
      favMods.forEach((m) => favGrid.appendChild(createSimCard(m)));
      favBlock.appendChild(favGrid);
      cardsContainer.appendChild(favBlock);
    }

    const categories = ["Secretariat", "Achiziții publice", "Resurse Umane"];
    categories.forEach((cat) => {
      const catMods = MODULES_DATA.filter((m) => m.category === cat);
      const block = document.createElement("div");
      block.className = "sim-cat-block";
      block.innerHTML = `
        <div class="sim-cat-hdr">
          <h4>${cat}</h4>
          <div class="sim-cat-line"></div>
        </div>
      `;
      const grid = document.createElement("div");
      grid.className = "sim-grid" + (isCompact ? " compact" : "");
      catMods.forEach((m) => grid.appendChild(createSimCard(m)));
      block.appendChild(grid);
      cardsContainer.appendChild(block);
    });
  }

  searchInput?.addEventListener("input", renderLauncherCards);
  searchClear?.addEventListener("click", () => {
    searchInput.value = "";
    renderLauncherCards();
    searchInput.focus();
  });

  simWindow.querySelectorAll("[data-open-mod]").forEach((btn) => {
    btn.addEventListener("click", () => openModuleView(btn.getAttribute("data-open-mod")));
  });

  simWindow.querySelectorAll("[data-toast]").forEach((btn) => {
    btn.addEventListener("click", () => showSimToast(btn.getAttribute("data-toast")));
  });

  function openModuleView(modId) {
    const mod = MODULES_DATA.find((m) => m.id === modId);
    if (!mod) return;

    launcherView.classList.add("hidden");
    moduleView.classList.add("active");
    if (simBackHomeBtn) simBackHomeBtn.style.display = "inline-flex";
    moduleViewTitle.textContent = `${mod.icon} ${mod.name}`;
    moduleViewSub.textContent = `Categorie: ${mod.category} • Previzualizare interactivă`;

    renderInteractiveModuleBody(modId, moduleViewContent, showSimToast);
    requestAnimationFrame(scrollSimulatorIntoView);
  }

  window.openSimulatorModule = openModuleView;
  renderLauncherCards();
}

function renderInteractiveModuleBody(modId, container, toast) {
  if (modId === "patrimoniu") {
    container.innerHTML = `
      <div class="sim-tabs">
        <button class="sim-tab-btn active" data-pat-tab="public" type="button">Domeniu Public</button>
        <button class="sim-tab-btn" data-pat-tab="privat" type="button">Domeniu Privat</button>
        <button class="sim-tab-btn" data-pat-tab="inventar" type="button">Obiecte de Inventar</button>
        <button class="sim-tab-btn" data-pat-act="pv_transfer" type="button">🔄 PV Transfer</button>
        <button class="sim-tab-btn" data-pat-act="pv_casare" type="button">⛔ PV Casare</button>
        <button class="sim-tab-btn" data-pat-act="qr" type="button">🏷️ Etichete QR (14/A4)</button>
        <button class="sim-tab-btn" data-pat-act="semnaturi" type="button">✍️ Semnături PV</button>
      </div>
      <div class="sim-table-wrap" id="patSimTable"></div>
    `;

    const rowsByTab = {
      public: [
        ["INV-2021-0004", "Clădire Sediu Primărie P+1", "Administrație", "385.400,00 RON", '<span class="sim-pill ok">Activ • CF 40212</span>'],
        ["INV-2024-0011", "Autoutilitară Dacia Dokker GJ-08-UAT", "Gospodărie", "48.900,00 RON", '<span class="sim-pill warn">⚠ ITP expiră în 12 zile</span>'],
        ["INV-2023-0019", "Teren Parc Central (2.400 mp)", "Domeniu Public", "124.000,00 RON", '<span class="sim-pill ok">Activ</span>'],
      ],
      privat: [
        ["INV-2022-0052", "Teren extravilan lot agricol 1,5 ha", "Concesiune", "52.000,00 RON", '<span class="sim-pill ok">Contract activ până 2028</span>'],
        ["INV-2020-0061", "Spațiu comercial parter bloc", "Închiriere", "96.500,00 RON", '<span class="sim-pill info">Chiriaș: Farmacie</span>'],
      ],
      inventar: [
        ["INV-2026-0037", "Telefon SAMSUNG Galaxy A36 5G", "Urbanism", "1.650,00 RON", '<span class="sim-pill ok">Activ • Resp: Adela</span>'],
        ["INV-2026-0038", "Laptop Lenovo ThinkBook 15", "Contabilitate", "3.200,00 RON", '<span class="sim-pill ok">Activ • Etichetă QR</span>'],
        ["INV-2019-0091", "Imprimantă multifuncțională veche", "Secretariat", "890,00 RON", '<span class="sim-pill danger">Propusă spre casare</span>'],
      ],
    };

    const renderPatTable = (tabKey) => {
      const data = rowsByTab[tabKey] || rowsByTab.public;
      document.getElementById("patSimTable").innerHTML = `
        <table class="sim-table">
          <thead>
            <tr>
              <th>Nr. Inventar</th>
              <th>Denumire bun</th>
              <th>Departament</th>
              <th>Valoare</th>
              <th>Status / Scadențe</th>
            </tr>
          </thead>
          <tbody>
            ${data
              .map(
                (r) =>
                  `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      `;
    };

    renderPatTable("public");

    container.querySelectorAll("[data-pat-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        container.querySelectorAll("[data-pat-tab]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderPatTable(btn.getAttribute("data-pat-tab"));
      });
    });

    container.querySelectorAll("[data-pat-act]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.getAttribute("data-pat-act");
        const msgs = {
          pv_transfer: "📄 Proces-Verbal de Transfer între gestiuni generat instantaneu în PDF cu semnăturile salvate!",
          pv_casare: "⛔ Proces-Verbal de Scoatere din Funcțiune / Casare generat în PDF cu membrii comisiei!",
          qr: "🏷️ Generat PDF A4 cu 14 etichete QR gata de tipărit și lipit pe bunurile primăriei!",
          semnaturi: "✍️ Semnăturile și membrii comisiei (Președinte, Membri, Predător, Primitor) se salvează automat pentru toate PV-urile!",
        };
        toast(msgs[act] || "Acțiune simulată");
      });
    });
    return;
  }

  if (modId === "contracte") {
    container.innerHTML = `
      <div class="sim-tabs">
        <button class="sim-tab-btn active" type="button">Toate contractele (34)</button>
        <button class="sim-tab-btn" type="button" id="simConAlertBtn">⚠ Cu termene ≤30 zile (1)</button>
        <button class="sim-tab-btn" type="button" id="simConExpBtn">📊 Export Centralizator PDF</button>
      </div>
      <div class="sim-table-wrap">
        <table class="sim-table">
          <thead>
            <tr>
              <th>Nr. Contract</th>
              <th>Furnizor / Prestator</th>
              <th>Obiect</th>
              <th>Valoare</th>
              <th>Stare / Termen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>48 / 2026</strong></td>
              <td>SC ECO SALUBRITATE SRL</td>
              <td>Colectare deșeuri menajere</td>
              <td>42.500 lei</td>
              <td><span class="sim-pill warn">Expiră în 18 zile</span></td>
            </tr>
            <tr>
              <td><strong>12 / 2026</strong></td>
              <td>SC DRUMURI LOCALE SA</td>
              <td>Pietruire drum comunal DC14</td>
              <td>118.000 lei</td>
              <td><span class="sim-pill ok">Activ • PDF atașat</span></td>
            </tr>
            <tr>
              <td><strong>07 / 2026</strong></td>
              <td>SC ENERGIE VERDE SRL</td>
              <td>Mentenanță iluminat public</td>
              <td>19.400 lei</td>
              <td><span class="sim-pill info">Executat integral</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    document.getElementById("simConAlertBtn")?.addEventListener("click", () => {
      toast("🔔 Centralizatorul alertează automat în Dashboard contractele scadente în 15 / 30 / 60 zile.");
    });
    document.getElementById("simConExpBtn")?.addEventListener("click", () => {
      toast("📊 Export PDF & Excel generat cu antetul primăriei și tabelul complet al contractelor!");
    });
    return;
  }

  if (modId === "hotarari") {
    container.innerHTML = `
      <div class="sim-table-wrap">
        <table class="sim-table">
          <thead>
            <tr>
              <th>HCL Nr.</th>
              <th>Data</th>
              <th>Titlu Hotărâre Consiliul Local</th>
              <th>Inițiator</th>
              <th>Stadiu &amp; PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HCL 24 / 2026</strong></td>
              <td>29.10.2026</td>
              <td>Aprobarea rectificării bugetului local pe anul 2026</td>
              <td>Primar</td>
              <td><span class="sim-pill ok">În vigoare • 📄 PDF</span></td>
            </tr>
            <tr>
              <td><strong>HCL 23 / 2026</strong></td>
              <td>29.10.2026</td>
              <td>Stabilirea impozitelor și taxelor locale pentru anul 2027</td>
              <td>Primar</td>
              <td><span class="sim-pill ok">În vigoare • 📄 PDF</span></td>
            </tr>
            <tr>
              <td><strong>HCL 15 / 2025</strong></td>
              <td>14.06.2025</td>
              <td>Regulament privind gestionarea patrimoniului UAT</td>
              <td>Secretar General</td>
              <td><span class="sim-pill warn">Modificată</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  if (modId === "registratura") {
    container.innerHTML = `
      <div class="sim-table-wrap">
        <table class="sim-table">
          <thead>
            <tr>
              <th>Nr. Înreg.</th>
              <th>Tip</th>
              <th>Expeditor / Destinatar</th>
              <th>Obiect</th>
              <th>Termen răspuns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1428</strong></td>
              <td>Intrare</td>
              <td>Ionescu Gheorghe</td>
              <td>Solicitare adeverință APIA registru agricol</td>
              <td><span class="sim-pill warn">⏰ În așteptare (4 zile)</span></td>
            </tr>
            <tr>
              <td><strong>1427</strong></td>
              <td>Ieșire</td>
              <td>Instituția Prefectului</td>
              <td>Înaintare HCL nr. 23 și 24 / 2026</td>
              <td><span class="sim-pill ok">✓ Rezolvat • PDF</span></td>
            </tr>
            <tr>
              <td><strong>1425</strong></td>
              <td>Intrare</td>
              <td>Inspectoratul Școlar</td>
              <td>Adresă rețea școlară 2026–2027</td>
              <td><span class="sim-pill ok">✓ Rezolvat • PDF</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  if (modId === "cartus_hcl") {
    container.innerHTML = `
      <div class="sim-split">
        <div class="sim-panel">
          <h5>🗂️ Date Cartuș HCL (Editare Live)</h5>
          <div class="sim-form-row">
            <label>Număr &amp; Dată HCL</label>
            <input type="text" id="simCartusNr" value="Nr. 24 din 29.10.2026" />
          </div>
          <div class="sim-form-row">
            <label>Consilieri prezenți / total &amp; Voturi</label>
            <input type="text" id="simCartusVot" value="11 prezenți din 11 • 11 voturi PENTRU" />
          </div>
          <div class="sim-form-row">
            <label>Președinte de ședință &amp; Secretar General</label>
            <input type="text" id="simCartusSemn" value="Președinte: Dumitrescu Ion | Secretar: Popescu Elena" />
          </div>
          <button type="button" class="sim-open-btn" id="simCartusGenBtn">📄 Generează Cartuș .DOCX</button>
        </div>
        <div class="sim-doc-sheet" id="simCartusPreview"></div>
      </div>
    `;
    const updateCartus = () => {
      const nr = document.getElementById("simCartusNr").value;
      const vot = document.getElementById("simCartusVot").value;
      const semn = document.getElementById("simCartusSemn").value;
      document.getElementById("simCartusPreview").innerHTML = `
        <div class="doc-hdr">
          <strong>ROMÂNIA • JUDEȚUL CARAȘ-SEVERIN<br/>CONSILIUL LOCAL AL COMUNEI MODEL</strong>
          <strong>CARTUȘ OFICIAL HCL</strong>
        </div>
        <div class="doc-title">HOTĂRÂREA ${escapeHtml(nr)}</div>
        <p style="margin-bottom:10px;">Adoptată în ședința ordinară cu: <strong>${escapeHtml(vot)}</strong>.</p>
        <p style="border-top:1px dashed #cbd5e1;padding-top:10px;"><strong>Semnături legale:</strong><br/>${escapeHtml(semn)}</p>
      `;
    };
    updateCartus();
    ["simCartusNr", "simCartusVot", "simCartusSemn"].forEach((id) =>
      document.getElementById(id).addEventListener("input", updateCartus)
    );
    document.getElementById("simCartusGenBtn").addEventListener("click", () =>
      toast("✓ Cartuș HCL generat instantaneu în format Word (.docx)!")
    );
    return;
  }

  if (modId === "generator_avize") {
    container.innerHTML = `
      <div class="sim-split">
        <div class="sim-panel">
          <h5>⚖️ Configurare Aviz Comisie CL</h5>
          <div class="sim-form-row">
            <label>Comisia de specialitate</label>
            <select id="simAvizTip">
              <option value="Aviz Juridic">Comisia Juridică și de Disciplină (Aviz Juridic)</option>
              <option value="Aviz Urbanism">Comisia de Urbanism și Amenajarea Teritoriului</option>
              <option value="Aviz Învățământ">Comisia pentru Învățământ, Cultură și Sănătate</option>
            </select>
          </div>
          <div class="sim-form-row">
            <label>Proiect de hotărâre avizat</label>
            <input type="text" id="simAvizProiect" value="Proiect HCL privind aprobarea tarifelor de salubrizare 2026" />
          </div>
          <div class="sim-form-row">
            <label>Soluția Comisiei</label>
            <select id="simAvizSol">
              <option value="AVIZ FAVORABIL">AVIZ FAVORABIL</option>
              <option value="AVIZ FAVORABIL CU AMENDAMENTE">AVIZ FAVORABIL CU AMENDAMENTE</option>
            </select>
          </div>
          <button type="button" class="sim-open-btn" id="simAvizGenBtn">📄 Generează Aviz .DOCX</button>
        </div>
        <div class="sim-doc-sheet" id="simAvizPreview"></div>
      </div>
    `;
    const updateAviz = () => {
      const tip = document.getElementById("simAvizTip").value;
      const pr = document.getElementById("simAvizProiect").value;
      const sol = document.getElementById("simAvizSol").value;
      document.getElementById("simAvizPreview").innerHTML = `
        <div class="doc-hdr">
          <strong>PRIMĂRIA COMUNEI MODEL</strong>
          <strong>${escapeHtml(tip.toUpperCase())}</strong>
        </div>
        <div class="doc-title">${escapeHtml(sol)}</div>
        <p style="margin-bottom:10px;">Analizând proiectul: <strong>${escapeHtml(pr)}</strong>, comisia de specialitate a hotărât acordarea prezentului aviz.</p>
        <p style="margin-top:16px;"><strong>Președinte Comisie</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Secretar Comisie</strong></p>
      `;
    };
    updateAviz();
    ["simAvizTip", "simAvizProiect", "simAvizSol"].forEach((id) =>
      document.getElementById(id).addEventListener("input", updateAviz)
    );
    document.getElementById("simAvizGenBtn").addEventListener("click", () =>
      toast("✓ Avizul Comisiei CL a fost generat în AvizeGenerate (.docx)!")
    );
    return;
  }

  if (modId === "pv_receptie") {
    container.innerHTML = `
      <div class="sim-split">
        <div class="sim-panel">
          <h5>🛠️ Proces-Verbal Lucrări &amp; Servicii</h5>
          <div class="sim-form-row">
            <label>Tip Proces-Verbal</label>
            <select id="simPvRecTip">
              <option value="PROCES-VERBAL DE RECEPȚIE SERVICII">Proces-Verbal Servicii</option>
              <option value="PROCES-VERBAL DE RECEPȚIE LUCRĂRI">Proces-Verbal Lucrări</option>
            </select>
          </div>
          <div class="sim-form-row">
            <label>Prestator / Executant</label>
            <input type="text" id="simPvRecFirm" value="SC CONSTRUCT EDILITAR SRL" />
          </div>
          <div class="sim-form-row">
            <label>Obiect &amp; Valoare (RON)</label>
            <input type="text" id="simPvRecVal" value="Reparație acoperiș Școală Gimnazială — 24.800 lei" />
          </div>
          <button type="button" class="sim-open-btn" id="simPvRecBtn">📄 Generează PV .DOCX</button>
        </div>
        <div class="sim-doc-sheet" id="simPvRecPreview"></div>
      </div>
    `;
    const updatePvRec = () => {
      const tip = document.getElementById("simPvRecTip").value;
      const firm = document.getElementById("simPvRecFirm").value;
      const val = document.getElementById("simPvRecVal").value;
      document.getElementById("simPvRecPreview").innerHTML = `
        <div class="doc-hdr"><strong>PRIMĂRIA COMUNEI MODEL</strong><strong>ACHIZIȚII PUBLICE</strong></div>
        <div class="doc-title">${escapeHtml(tip)}</div>
        <p style="margin-bottom:8px;"><strong>Executant / Prestator:</strong> ${escapeHtml(firm)}</p>
        <p style="margin-bottom:8px;"><strong>Obiect &amp; Valoare:</strong> ${escapeHtml(val)}</p>
        <p>Comisia de recepție constată îndeplinirea obligațiilor contractuale conform devizului/contractului.</p>
      `;
    };
    updatePvRec();
    ["simPvRecTip", "simPvRecFirm", "simPvRecVal"].forEach((id) =>
      document.getElementById(id).addEventListener("input", updatePvRec)
    );
    document.getElementById("simPvRecBtn").addEventListener("click", () =>
      toast("✓ Procesul-Verbal a fost generat din șablon și salvat în DocumenteGenerate!")
    );
    return;
  }

  if (modId === "pv_produse") {
    container.innerHTML = `
      <div class="sim-table-wrap" style="margin-bottom:14px;">
        <table class="sim-table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Denumire produs achiziționat</th>
              <th>Cantitate</th>
              <th>Preț unitar</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Laptop Lenovo ThinkBook 15</td><td>2 buc</td><td>3.200,00 lei</td><td><strong>6.400,00 lei</strong></td></tr>
            <tr><td>2</td><td>Hârtie copiator A4 80g</td><td>40 topuri</td><td>22,50 lei</td><td><strong>900,00 lei</strong></td></tr>
            <tr><td>3</td><td>Cartuș toner imprimantă</td><td>4 buc</td><td>215,00 lei</td><td><strong>860,00 lei</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <strong>Total Proces-Verbal Produse: <span style="color:var(--sim-accent);">8.160,00 lei</span></strong>
        <button type="button" class="sim-open-btn" id="simPvProdGen">📄 Generează PV Recepție Produse (.docx)</button>
      </div>
    `;
    document.getElementById("simPvProdGen").addEventListener("click", () =>
      toast("✓ Proces-Verbal Produse generat automat cu toate produsele și totalurile calculate!")
    );
    return;
  }

  if (modId === "pontaje") {
    container.innerHTML = `
      <div class="sim-tabs">
        <span class="sim-pill info">Foaie Colectivă de Prezență — Noiembrie 2026 (Aparat de specialitate)</span>
        <button class="sim-open-btn" id="simPonPdfBtn" type="button">📊 Generează Excel &amp; PDF A4</button>
      </div>
      <div class="sim-table-wrap">
        <table class="sim-table">
          <thead>
            <tr>
              <th>Angajat</th>
              <th>Funcția</th>
              <th>Z1</th><th>Z2</th><th>Z3</th><th>Z4</th><th>Z5</th><th>S/D</th>
              <th>Total ore</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Popescu Elena</strong></td>
              <td>Secretar General</td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td style="opacity:.45">—</td>
              <td><strong>168 ore</strong></td>
            </tr>
            <tr>
              <td><strong>Ionescu Maria</strong></td>
              <td>Contabil șef</td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill info">Co</span></td>
              <td><span class="sim-pill info">Co</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td style="opacity:.45">—</td>
              <td><strong>152 ore + 2 Co</strong></td>
            </tr>
            <tr>
              <td><strong>Vasile Gheorghe</strong></td>
              <td>Șofer UAT</td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td><span class="sim-pill danger">Bo</span></td>
              <td><span class="sim-pill danger">Bo</span></td>
              <td><span class="sim-pill warn">8</span></td>
              <td style="opacity:.45">—</td>
              <td><strong>152 ore + 2 Bo</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    document.getElementById("simPonPdfBtn").addEventListener("click", () =>
      toast("✓ Pontajul lunar a fost exportat simultan în Excel (.xlsx) și PDF landscape A4 cu semnături!")
    );
  }
}

/* =========================================================
   CALCULATOR ECONOMIE DE TIMP ÎN PRIMĂRIE
   ========================================================= */
function initTimeCalculator() {
  const sAch = document.getElementById("calcAchizitii");
  const sReg = document.getElementById("calcReg");
  const sBun = document.getElementById("calcBunuri");
  const sAng = document.getElementById("calcAngajati");
  if (!sAch || !sReg || !sBun || !sAng) return;

  function recalc() {
    const ach = Number(sAch.value);
    const reg = Number(sReg.value);
    const bun = Number(sBun.value);
    const ang = Number(sAng.value);

    document.getElementById("valAchizitii").textContent = `${ach} dosare`;
    document.getElementById("valReg").textContent = `${reg} documente`;
    document.getElementById("valBunuri").textContent = `${bun} bunuri`;
    document.getElementById("valAngajati").textContent = `${ang} persoane`;

    const minuteLuna = ach * 38 + reg * 4.5 + bun * 7 + ang * 11;
    const oreLuna = minuteLuna / 60;
    const zileAn = Math.round((oreLuna * 12) / 8);
    const costPerOra = Math.max(1, Math.round(600 / oreLuna));

    document.getElementById("resOreLuna").textContent = `${oreLuna.toFixed(1)} ore / lună`;
    document.getElementById("resZileAn").textContent = `${zileAn} zile / an`;
    document.getElementById("resCostOra").textContent = `~${costPerOra} lei / oră câștigată`;
  }

  [sAch, sReg, sBun, sAng].forEach((el) => el.addEventListener("input", recalc));
  recalc();
}

/* =========================================================
   FAQ ACORDEON
   ========================================================= */
function initFaqAccordion() {
  const items = document.querySelectorAll("#faqList .faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-q");
    btn?.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      items.forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* =========================================================
   SELECTARE PACHET DIN SECȚIUNEA PREȚURI -> FORMULAR
   ========================================================= */
function initPricingSelection() {
  const planSelect = document.getElementById("fPlan");
  const offerPlanSelect = document.getElementById("offerPlanSelect");
  document.querySelectorAll(".select-plan-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-plan");
      if (planSelect && val) {
        planSelect.value = val;
      }
      if (offerPlanSelect && val) {
        if (val.includes("500")) offerPlanSelect.value = "500";
        else if (val.includes("700")) offerPlanSelect.value = "700";
        else offerPlanSelect.value = "600";
      }
    });
  });
}

/* =========================================================
   FORMULAR SOLICITARE DEMO / OFERTĂ UAT
   ========================================================= */
function initContactForm() {
  const form = document.getElementById("demoRequestForm");
  const feedback = document.getElementById("formFeedback");
  const btnEmail = document.getElementById("btnSendEmail");
  const btnCopy = document.getElementById("btnCopyReq");
  if (!form || !feedback) return;

  function buildRequestMessage() {
    const plan = document.getElementById("fPlan").value.trim();
    const primarie = document.getElementById("fPrimarie").value.trim();
    const judet = document.getElementById("fJudet").value.trim();
    const persoana = document.getElementById("fPersoana").value.trim();
    const telefon = document.getElementById("fTelefon").value.trim();
    const obs = document.getElementById("fMesaj").value.trim();

    if (!primarie || !judet || !persoana || !telefon) {
      return { error: "Te rugăm să completezi câmpurile obligatorii (*)." };
    }

    const text = [
      `Bună ziua! Solicităm prezentare / ofertă pentru ${SITE_CONFIG.brandName}:`,
      `• Pachet selectat: ${plan}`,
      `• Instituție / UAT: ${primarie} (Județul ${judet})`,
      `• Persoană de contact: ${persoana}`,
      `• Telefon contact: ${telefon}`,
      obs ? `• Observații: ${obs}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return { text, primarie, judet };
  }

  function showFeedback(htmlMsg) {
    feedback.innerHTML = htmlMsg;
    feedback.classList.add("show");
  }

  async function copyTextSafe(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = buildRequestMessage();
    if (res.error) {
      showFeedback(res.error);
      return;
    }
    const waDigits = (SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    if (waDigits) {
      window.open(`https://wa.me/${waDigits}?text=${encodeURIComponent(res.text)}`, "_blank", "noopener");
      showFeedback("✓ S-a deschis WhatsApp cu mesajul pregătit pentru trimitere.");
    } else {
      const copied = await copyTextSafe(res.text);
      showFeedback(
        `${copied ? "✓ Mesajul de solicitare a fost copiat în clipboard!" : "✓ Mesaj generat:"}<br><pre style="white-space:pre-wrap;margin-top:6px;font-family:inherit;">${escapeHtml(res.text)}</pre><span style="display:block;margin-top:6px;opacity:.85;">(Sfat administrator site: completează numărul WhatsApp în <code>SITE_CONFIG.whatsappNumber</code> din <code>script.js</code> pentru trimitere directă.)</span>`
      );
    }
  });

  btnEmail?.addEventListener("click", async () => {
    const res = buildRequestMessage();
    if (res.error) {
      showFeedback(res.error);
      return;
    }
    if (SITE_CONFIG.contactEmail) {
      const subject = `Solicitare Demo CDS Suite — ${res.primarie} (${res.judet})`;
      window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(res.text)}`;
      showFeedback("✓ S-a deschis aplicația de email cu mesajul completat.");
    } else {
      const copied = await copyTextSafe(res.text);
      showFeedback(
        `${copied ? "✓ Mesajul a fost copiat!" : "✓ Mesaj generat:"} Completează adresa în <code>SITE_CONFIG.contactEmail</code> din <code>script.js</code> pentru deschidere directă în Email.`
      );
    }
  });

  btnCopy?.addEventListener("click", async () => {
    const res = buildRequestMessage();
    if (res.error) {
      showFeedback(res.error);
      return;
    }
    const copied = await copyTextSafe(res.text);
    showFeedback(
      copied
        ? "✓ Mesajul a fost copiat! Îl poți lipi direct în WhatsApp sau Email."
        : `<pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(res.text)}</pre>`
    );
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/* =========================================================
   PREZENTARE MOSTRE DOCUMENTE OFICIALE A4 (#mostre)
   ========================================================= */
function initDocSamplesShowcase() {
  const tabsWrap = document.getElementById("docSampleTabs");
  const viewport = document.getElementById("docSampleViewport");
  if (!tabsWrap || !viewport) return;

  const SAMPLES = {
    "pv-casare": {
      title: "Proces-Verbal de Casare / Scoatere din Funcțiune (PDF)",
      desc: "Generat din modulul Patrimoniu & Inventar cu datele primăriei și membrii comisiei completați automat.",
      modId: "patrimoniu",
      modLabel: "Patrimoniu & Inventar",
      html: `
        <div class="official-a4-preview">
          <div class="a4-header-row">
            <div class="a4-uat-block">
              ROMÂNIA • JUDEȚUL CARAȘ-SEVERIN<br/>
              PRIMĂRIA COMUNEI MODEL<br/>
              COMISIA DE CASARE ȘI INVENTARIERE
            </div>
            <div class="a4-doc-no">
              <strong>Nr. înreg:</strong> 142 / 14.11.2026<br/>
              <strong>Se aprobă, PRIMAR</strong><br/>
              <em>L.S. / Semnătură</em>
            </div>
          </div>
          <div class="a4-title">PROCES-VERBAL DE SCOATERE DIN FUNCȚIUNE / CASARE</div>
          <div class="a4-subtitle">Întocmit astăzi, 14.11.2026, în baza deciziei comisiei de inventariere a patrimoniului UAT</div>
          <p style="margin-bottom:10px;">
            Comisia numită prin Dispoziția Primarului a constatat gradul avansat de uzură fizică și morală pentru bunurile de mai jos, propunând scoaterea lor din evidența gestiunii active:
          </p>
          <table class="a4-table">
            <thead>
              <tr>
                <th>Nr. crt.</th>
                <th>Nr. Inv.</th>
                <th>Denumirea bunului / mijlocului fix</th>
                <th>Gestiune</th>
                <th>Valoare inventar (lei)</th>
                <th>Motiv propunere casare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>OB-041</td>
                <td>Imprimantă laser monocrom birou Registratură</td>
                <td>Obiecte inventar</td>
                <td>1.450,00</td>
                <td>Defect iremediabil, cost reparație nejustificat</td>
              </tr>
              <tr>
                <td>2</td>
                <td>MF-118</td>
                <td>Calculator desktop Secretariat (achiziție 2016)</td>
                <td>Domeniu Privat</td>
                <td>2.890,00</td>
                <td>Uzură morală completă, placă de bază defectă</td>
              </tr>
            </tbody>
          </table>
          <div class="sig-grid">
            <div class="sig-box">
              <strong>Președinte Comisie</strong>
              <span>Popescu Ion — Viceprimar</span>
            </div>
            <div class="sig-box">
              <strong>Secretar Comisie</strong>
              <span>Ionescu Maria — Contabil</span>
            </div>
            <div class="sig-box">
              <strong>Gestionar / Membru</strong>
              <span>Vasile Andrei — Referent</span>
            </div>
          </div>
        </div>
      `,
    },
    "etichete-qr": {
      title: "Etichete QR de Patrimoniu (14 etichete / coală A4)",
      desc: "Se lipesc pe calculatoare, mobilier și utilaje; la scanarea cu telefonul se văd imediat fișa bunului și gestiunea.",
      modId: "patrimoniu",
      modLabel: "Patrimoniu & Inventar",
      html: `
        <div class="official-a4-preview">
          <div class="a4-header-row">
            <div class="a4-uat-block">
              ROMÂNIA • JUDEȚUL CARAȘ-SEVERIN<br/>
              PRIMĂRIA COMUNEI MODEL — ETICHETE INVENTAR QR
            </div>
            <div class="a4-doc-no">
              <strong>Format print:</strong> Coală A4 autocolantă (14 buc./pag.)<br/>
              <strong>Generat automat din CDS Suite</strong>
            </div>
          </div>
          <div class="qr-sheet-grid">
            <div class="qr-label-mock">
              <div class="qr-code-box"></div>
              <div class="qr-meta">
                <strong>INV-2026-001 • Laptop Asus Pro</strong>
                <div>UAT: Primăria Comunei Model (Caraș-Severin)</div>
                <div>Birou: Contabilitate &amp; Achiziții</div>
                <div>Gestionar: Ionescu Maria • Val: 4.200 lei</div>
              </div>
            </div>
            <div class="qr-label-mock">
              <div class="qr-code-box"></div>
              <div class="qr-meta">
                <strong>INV-2026-004 • Autoutilitară Dacia</strong>
                <div>UAT: Primăria Comunei Model (Caraș-Severin)</div>
                <div>Cat: Domeniu Privat • Nr: CS-01-UAT</div>
                <div>Alertă activă: ITP &amp; RCA monitorizate</div>
              </div>
            </div>
            <div class="qr-label-mock">
              <div class="qr-code-box"></div>
              <div class="qr-meta">
                <strong>INV-2026-019 • Multifuncțională A3</strong>
                <div>UAT: Primăria Comunei Model (Caraș-Severin)</div>
                <div>Birou: Secretariat / Registratură</div>
                <div>Gestionar: Popa Elena • Val: 6.800 lei</div>
              </div>
            </div>
            <div class="qr-label-mock">
              <div class="qr-code-box"></div>
              <div class="qr-meta">
                <strong>INV-2026-032 • Centrală Termică</strong>
                <div>UAT: Primăria Comunei Model (Caraș-Severin)</div>
                <div>Locație: Cămin Cultural • Domeniu Public</div>
                <div>Scadență verificare ISCIR activă</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    "borderou-registratura": {
      title: "Borderou Registru Intrare / Ieșire & Urmărire Termene",
      desc: "Extrase zilnice sau lunare pe compartimente cu evidența termenului legal de 30 de zile.",
      modId: "registratura",
      modLabel: "Registru Intrări / Ieșiri",
      html: `
        <div class="official-a4-preview">
          <div class="a4-header-row">
            <div class="a4-uat-block">
              ROMÂNIA • JUDEȚUL CARAȘ-SEVERIN<br/>
              PRIMĂRIA COMUNEI MODEL — REGISTRATURĂ GENERALĂ
            </div>
            <div class="a4-doc-no">
              <strong>Perioadă raport:</strong> 01.11.2026 – 14.11.2026<br/>
              <strong>Total poziții active:</strong> 3 documente selectate
            </div>
          </div>
          <div class="a4-title">BORDEROUL DOCUMENTELOR INTRATE / IEȘITE</div>
          <div class="a4-subtitle">Situația corespondenței repartizate pe compartimente și termene de soluționare</div>
          <table class="a4-table">
            <thead>
              <tr>
                <th>Nr. / Dată</th>
                <th>Tip</th>
                <th>Expeditor / Destinatar</th>
                <th>Obiectul pe scurt</th>
                <th>Repartizat la</th>
                <th>Stare / Termen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1428 / 10.11</td>
                <td>Intrare</td>
                <td>Popescu Vasile (cetățean)</td>
                <td>Solicitare adeverință APIA teren intravilan</td>
                <td>Agricol</td>
                <td><strong>Urgent (4 zile)</strong></td>
              </tr>
              <tr>
                <td>1431 / 12.11</td>
                <td>Intrare</td>
                <td>SC Drumuri Banat SRL (Timiș)</td>
                <td>Situație de lucrări reparații drum comunal</td>
                <td>Achiziții</td>
                <td>În lucru (25 zile)</td>
              </tr>
              <tr>
                <td>1435 / 14.11</td>
                <td>Ieșire</td>
                <td>Instituția Prefectului Caraș-Severin</td>
                <td>Înaintare HCL nr. 47–48 pentru control legalitate</td>
                <td>Secretar Gen.</td>
                <td>Soluționat</td>
              </tr>
            </tbody>
          </table>
          <div class="sig-grid">
            <div class="sig-box">
              <strong>Întocmit Registratură</strong>
              <span>Popa Elena</span>
            </div>
            <div class="sig-box">
              <strong>Avizat Secretar General</strong>
              <span>Radu Mihai</span>
            </div>
            <div class="sig-box">
              <strong>Primar</strong>
              <span>L.S. / Semnătură</span>
            </div>
          </div>
        </div>
      `,
    },
    "hcl-contracte": {
      title: "Cartuș Oficial HCL & Centralizator Contracte Active",
      desc: "Cartușele HCL se generează în Word, iar centralizatorul de contracte avertizează automat expirările.",
      modId: "hotarari",
      modLabel: "Registru HCL",
      html: `
        <div class="official-a4-preview">
          <div class="a4-header-row">
            <div class="a4-uat-block">
              ROMÂNIA • JUDEȚUL CARAȘ-SEVERIN<br/>
              CONSILIUL LOCAL AL COMUNEI MODEL
            </div>
            <div class="a4-doc-no">
              <strong>CARTUȘ OFICIAL HCL (Word / PDF)</strong><br/>
              Generat instant din Registrul HCL
            </div>
          </div>
          <div style="border:1.5px solid #0f172a;padding:12px 14px;border-radius:6px;margin-bottom:16px;background:#f8fafc;">
            <strong style="display:block;margin-bottom:6px;text-align:center;">HOTĂRÂREA NR. 48 / 28.10.2026</strong>
            <p style="margin-bottom:8px;">
              Adoptată în ședința ordinară cu <strong>11 voturi „pentru”, 0 „împotrivă”, 0 abțineri</strong> din totalul de 11 consilieri în funcție.
            </p>
            <p style="font-size:0.8rem;color:#334155;">
              <strong>Președinte de ședință:</strong> Consilier Local Munteanu Adrian &nbsp;|&nbsp;
              <strong>Contrasemnează pentru legalitate (Secretar General):</strong> Radu Mihai
            </p>
          </div>
          <div style="font-weight:800;margin-bottom:6px;font-size:0.84rem;">Extras Centralizator Contracte &amp; Alerte Scadențe:</div>
          <table class="a4-table" style="margin-top:6px;">
            <thead>
              <tr>
                <th>Nr. Contract</th>
                <th>Furnizor / Prestator</th>
                <th>Obiect contract</th>
                <th>Expiră la</th>
                <th>Status CDS Suite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>45 / 2025</td>
                <td>SC Salubrizare Vest SRL (Timiș)</td>
                <td>Colectare deșeuri menajere comună</td>
                <td>30.11.2026</td>
                <td><strong>⚠ Alertă ≤30 zile</strong></td>
              </tr>
              <tr>
                <td>112 / 2026</td>
                <td>SC Tehno-Construct Reșița SRL</td>
                <td>Modernizare iluminat public LED</td>
                <td>31.12.2027</td>
                <td>Activ (PDF atașat)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
  };

  function renderSample(key) {
    const item = SAMPLES[key];
    if (!item) return;
    viewport.innerHTML = `
      <div class="doc-sample-bar">
        <div class="doc-sample-meta">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" id="docSampleJumpBtn">
          🖥️ Testează „${item.modLabel}” în Simulator →
        </button>
      </div>
      ${item.html}
    `;
    document.getElementById("docSampleJumpBtn")?.addEventListener("click", () => {
      document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => window.openSimulatorModule?.(item.modId), 320);
    });
  }

  tabsWrap.querySelectorAll(".doc-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      tabsWrap.querySelectorAll(".doc-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSample(btn.getAttribute("data-sample"));
    });
  });

  renderSample("pv-casare");
}

/* =========================================================
   GENERATOR OFERTA OFICIALA A4 / PDF PENTRU PRIMAR
   ========================================================= */
function initOfferGenerator() {
  const uatInput = document.getElementById("offerUatName");
  const judetInput = document.getElementById("offerJudetName");
  const planSelect = document.getElementById("offerPlanSelect");
  const btnOpen = document.getElementById("btnOpenOfferModal");
  const modal = document.getElementById("offerModal");
  const btnClose = document.getElementById("btnCloseOfferModal");
  const btnPrint = document.getElementById("btnPrintOfferSheet");
  const sheet = document.getElementById("offerSheetPrintable");

  if (!btnOpen || !modal || !sheet) return;

  const PACKAGES = {
    "500": {
      name: "Pachetul Esențial",
      price: "500 lei / lună",
      pcs: "1 calculator (1 PC)",
      extras: "Configurare inițială, instruire la instalare, actualizări 1-click, backup zilnic .zip și asistență tehnică inclusă.",
    },
    "600": {
      name: "Pachetul Complet UAT (Recomandat)",
      price: "600 lei / lună",
      pcs: "2 calculatoare (2 PC-uri — ex: Secretariat + Contabilitate/Achiziții)",
      extras: "Configurare UAT (antet, comisii, semnături PV), instruire practică a personalului și sprijin tehnic prioritar inclus.",
    },
    "700": {
      name: "Pachetul Premium",
      price: "700 lei / lună",
      pcs: "3 calculatoare (3 PC-uri conectate pe compartimente)",
      extras: "Adaptarea și personalizarea șabloanelor Word/PDF după modelul primăriei, configurare completă pe toate 3 stațiile și suport dedicat prioritar.",
    },
  };

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("printing-offer");
  }

  function renderOfferSheet() {
    const uatRaw = (uatInput?.value || "").trim() || "Primăria Comunei / Orașului (Beneficiar UAT)";
    const judetRaw = (judetInput?.value || "").trim() || "Caraș-Severin";
    const pkgKey = planSelect?.value || "600";
    const pkg = PACKAGES[pkgKey] || PACKAGES["600"];
    const todayStr = new Date().toLocaleDateString("ro-RO");
    const offerNo = `CDS-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`;

    const moduleListHtml = MODULES_DATA.map(
      (m) => `<li><strong>${escapeHtml(m.name)}</strong> (${escapeHtml(m.category)})</li>`
    ).join("");

    sheet.innerHTML = `
      <div class="a4-header-row">
        <div class="a4-uat-block">
          ${escapeHtml(SITE_CONFIG.developerName)}<br/>
          Soluție Software: ${escapeHtml(SITE_CONFIG.brandName)} v${escapeHtml(SITE_CONFIG.appVersion)}
        </div>
        <div class="a4-doc-no">
          <strong>Ofertă Nr.:</strong> ${offerNo}<br/>
          <strong>Data emiterii:</strong> ${todayStr}
        </div>
      </div>

      <h2>OFERTĂ TEHNICĂ ȘI COMERCIALĂ PENTRU PRIMĂRIE</h2>
      <div class="offer-sub">
        Suita software desktop integrată <strong>${escapeHtml(SITE_CONFIG.brandName)}</strong> + Mentenanță &amp; Sprijin Tehnic Inclus
      </div>

      <div class="offer-meta-box">
        <div><strong>Beneficiar:</strong> ${escapeHtml(uatRaw)}</div>
        <div><strong>Județul:</strong> ${escapeHtml(judetRaw)}</div>
        <div><strong>În atenția:</strong> Dl./Dnei Primar, Secretar General &amp; Contabilitate</div>
        <div><strong>Valabilitate ofertă:</strong> 30 de zile calendaristice</div>
      </div>

      <p style="margin-bottom:8px;">
        <strong>1. Obiectul ofertei:</strong> Furnizarea, instalarea și menținerea în exploatare a suitei desktop Windows
        <strong>CDS Suite</strong> (toate cele 9 module integrate într-un singur Launcher), proiectată special pentru activitatea curentă a primăriilor și instituțiilor publice:
      </p>

      <ol class="offer-modules-cols">${moduleListHtml}</ol>

      <div class="offer-price-summary">
        <div>
          <div style="font-weight:800;font-size:0.96rem;color:#0f172a;">${escapeHtml(pkg.name)}</div>
          <div style="font-size:0.84rem;color:#334155;">Acoperire licență: <strong>${escapeHtml(pkg.pcs)}</strong></div>
          <div style="font-size:0.8rem;color:#475569;margin-top:3px;">${escapeHtml(pkg.extras)}</div>
        </div>
        <div style="text-align:right;white-space:nowrap;">
          <strong>${escapeHtml(pkg.price)}</strong>
          <div style="font-size:0.76rem;color:#334155;">Fără taxe ascunse de instalare</div>
        </div>
      </div>

      <p style="margin-bottom:8px;">
        <strong>2. Mentenanță, securitate și funcționare:</strong>
      </p>
      <ul style="padding-left:20px;margin-bottom:14px;font-size:0.84rem;">
        <li><strong>Date 100% locale în primărie (GDPR):</strong> funcționare completă offline pe Windows 10/11, fără servere externe.</li>
        <li><strong>Backup zilnic automat (.zip):</strong> protecție completă a bazelor SQLite și a PDF-urilor atașate, cu restaurare rapidă.</li>
        <li><strong>Mentenanță &amp; sprijin tehnic direct inclus:</strong> asistență telefonică și remote pentru funcționari + actualizări cu 1 click.</li>
        <li><strong>Facturare flexibilă UAT:</strong> lunară, trimestrială sau anuală, în funcție de organizarea bugetului primăriei.</li>
      </ul>

      <div style="border-top:1px solid #cbd5e1;padding-top:10px;display:flex;justify-content:space-between;gap:14px;font-size:0.82rem;">
        <div>
          <strong>Întocmit de:</strong> ${escapeHtml(SITE_CONFIG.developerName)}<br/>
          <strong>Contact:</strong> ${escapeHtml(SITE_CONFIG.phoneDisplay)}${SITE_CONFIG.contactEmail ? " | " + escapeHtml(SITE_CONFIG.contactEmail) : ""}
        </div>
        <div style="text-align:right;">
          <strong>Demonstrație live gratuită înainte de decizie</strong><br/>
          <em>Document pregătit pentru prezentare internă / aprobare buget</em>
        </div>
      </div>
    `;
  }

  btnOpen.addEventListener("click", () => {
    renderOfferSheet();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });

  btnClose?.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  btnPrint?.addEventListener("click", () => {
    document.body.classList.add("printing-offer");
    window.print();
    setTimeout(() => document.body.classList.remove("printing-offer"), 1000);
  });

  window.addEventListener("beforeprint", () => {
    if (modal.classList.contains("open")) {
      document.body.classList.add("printing-offer");
    }
  });
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-offer");
  });
}

/* =========================================================
   BUTON PLUTITOR WHATSAPP / OFERTA RAPIDA
   ========================================================= */
function initFloatingWhatsapp() {
  const btn = document.getElementById("floatingWhatsappBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const waDigits = (SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    if (waDigits) {
      const msg = `Bună ziua! Suntem interesați de o prezentare demo CDS Suite pentru primăria noastră.`;
      window.open(`https://wa.me/${waDigits}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => document.getElementById("fPrimarie")?.focus(), 420);
    }
  });
}
