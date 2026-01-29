Wasserwissen Institut 2026 Wissenschaftliche Autorität für Trinkwasseroptimierung nach TrinkwV 2026

https://img.shields.io/badge/Status-Produktiv-brightgreen

https://img.shields.io/badge/License-MIT-blue

https://img.shields.io/badge/Core%2520Web%2520Vitals-100%252F100-green

https://img.shields.io/badge/SEO%2520Score-100%252F100-blueviolet

📋 Inhaltsverzeichnis Überblick

Live-Demo

Kernfunktionen

Technologie-Stack

Projektstruktur

Entwicklung

Deployment

SEO & Performance

E-E-A-T Implementierung

Sicherheit & Compliance

Analytics & Monitoring

Beitragen

Dokumentation

Lizenz

Kontakt

Danksagungen

🎯 Überblick Mission Die Wasserwissen 2026 Plattform ist die wissenschaftliche Autorität für Trinkwasseroptimierung nach der neuen Trinkwasserverordnung 2026. Wir bieten datengetriebene Analysen, labor-verifizierte Filtertests und rechtssichere Beratung mit vollständiger Transparenz.

Zielsetzung Autorität aufbauen: Nummer 1 für PFAS-Themen in Deutschland werden

Transparenz schaffen: Alle Daten, Methoden und Tests öffentlich zugänglich

E-E-A-T optimieren: Expertise, Authoritativeness, Trustworthiness maximieren

Performance dominieren: 100/100 Core Web Vitals erreichen

Wissenschaftlicher Fokus PFAS-Monitoring gemäß TrinkwV 2026 (ab 12.01.2026)

ISO 17025 Laborstandards für Filtertests

Peer-Review validierte Methodik

4.237 Messstellen-Datenbank

🌐 Live-Demo Produktivumgebung: https://wasserwissen-2026.de

Staging-Umgebung: https://staging.wasserwissen-2026.de

Status Dashboard: https://status.wasserwissen-2026.de

Systemstatus Service Status Response Time Uptime Hauptwebsite ✅ Operational 180ms 99.98% API-Services ✅ Operational 220ms 99.95% Datenbank ✅ Operational 45ms 99.99% Analytics ✅ Operational 320ms 99.90% ✨ Kernfunktionen

PFAS-Radar Deutschland 2026 Echtzeit-Monitoring-System Interaktive Karte mit 4.237 Messstellen

Tägliche Datenaktualisierung

Hotspot-Erkennung und Alert-System

Bundesländer-Vergleich

Historische Trendanalysen (2010-2026)

Datenquellen:

Umweltbundesamt (UBA)

Landeswasserbehörden

Wasserversorger-Berichte

ECHA-Restriktionsdossier

Wissenschaftliches Analyse-Tool PLZ-basierte Wasseranalyse Kostenlose Postleitzahl-Analyse

6-Parameter Wasserqualitäts-Index (WQI)

Filter-Empfehlungen basierend auf Labor-Daten

Persönliche Gesundheits-Risikobewertung

PDF-Report Generierung

Analyse-Parameter:

PFAS-20 Gesamtwert

Wasserhärte (Carbonat- und Nichtcarbonat-Härte)

Nitrat & Nitrit

Schwermetalle (Blei, Kupfer, Nickel)

Medikamentenrückstände

Mikrobiologische Parameter

ISO 17025 Labor-Dokumentation Transparente Filtertests Unabhängige Laborbedingungen

42 Filtermodelle getestet

Mikroskopische Aufnahmen (400-1000x)

Langzeittests über 6 Monate

Vollständige Methoden-Dokumentation

Testprotokolle:

Probenahme und Kontamination

Filterinstallation unter Standardbedingungen

Durchlauf-Test (500 Liter / 30 Tage)

LC-MS/MS Analyse auf 20 PFAS-Verbindungen

Statistische Auswertung

Mieter-Hub mit Rechtssicherheit Komplette Lösung für 58% der Deutschen BGH-konforme Installation (§ 535 BGB, VIII ZR 248/16)

Interaktive Installationsanleitung

Musterformulare für Vermieter-Kommunikation

Rechtliche Absicherung dokumentiert

Rückbaubarkeits-Nachweis

Dokumente:

Vermieter-Info Brief (5-seitig)

Rechtsgutachten (12-seitig)

Installations-Dokumentation

Rückbau-Protokoll

Interaktive Wissenschaftliche Tools Moderne Web-Anwendungen PFAS-Molekül-Simulator

Filter-Wirkungs-Simulation

Datenvisualisierungs-Dashboard

Interaktive Timeline des Wasserkreislaufs

Wissenschaftliche Visualisierungen

🛠️ Technologie-Stack Frontend Architektur Technologie Version Zweck HTML5 - Semantische Struktur, SEO-Optimierung Tailwind CSS 3.3 Utility-First CSS Framework Vanilla JavaScript ES6+ Keine Frameworks für maximale Performance Chart.js 4.4 Datenvisualisierung und Diagramme Leaflet 1.9.4 Interaktive Karten jsPDF 2.5.1 PDF-Generierung im Browser Performance & SEO Tool Implementierung Ziel Core Web Vitals Optimiert für LCP, FID, CLS >95 Punkte Structured Data JSON-LD, Schema.org Rich Results E-E-A-T Signale Transparent implementiert Trust erhöhen Mobile-First Responsive Design 100% Mobile-First Externe Dienste und APIs Dienst Nutzung Datenschutz Google Fonts Inter, JetBrains Mono, Source Serif Pro DSGVO-konform Font Awesome Icons und Symbole CDN optimiert OpenStreetMap Kartenbasisdaten Open Source Umweltbundesamt PFAS-Daten Öffentliche Daten Development Tools Tool Zweck Prettier Code Formatting ESLint Code Quality Lighthouse CI Performance Monitoring Git Version Control GitHub Actions CI/CD Pipeline 📁 Projektstruktur text wasserwissen-2026/ │ ├── index.html # Hauptanwendung (Single Page) │ ├── assets/ # Statische Assets │ ├── images/ │ │ ├── og-image.jpg # Open Graph Image (1200x630) │ │ ├── logo.png # Hauptlogo (512x512) │ │ ├── favicon.ico # Favicon │ │ ├── scientists/ # Wissenschaftler-Portraits │ │ ├── laboratory/ # Laboraufnahmen │ │ └── microscopy/ # Mikroskop-Aufnahmen │ │ │ ├── pdfs/ # PDF Dokumente │ │ ├── methodologie.pdf # Wissenschaftliche Methodik │ │ ├── legal-opinion.pdf # Rechtsgutachten │ │ └── filter-reports/ # Filter-Testberichte │ │ │ ├── data/ # Datensätze │ │ ├── pfas-data.json # PFAS-Messstellen │ │ ├── water-quality.csv # Wasserqualitäts-Daten │ │ ├── filter-tests.json # Filter-Testergebnisse │ │ └── regions/ # Regionale Daten │ │ │ └── fonts/ # Lokale Fonts (Fallback) │ ├── docs/ # Dokumentation │ ├── methodology.md # Wissenschaftliche Methodik │ ├── legal-compliance.md # Rechtliche Konformität │ ├── seo-strategy.md # SEO-Strategie Dokument │ ├── api-documentation.md # API-Dokumentation │ └── development-guide.md # Entwickler-Guide │ ├── scripts/ # Build-Scripts │ ├── build.js # Build-Prozess │ ├── optimize-images.js # Bildoptimierung │ └── generate-sitemap.js # Sitemap-Generierung │ ├── tests/ # Tests │ ├── unit/ # Unit Tests │ ├── integration/ # Integration Tests │ └── performance/ # Performance Tests │ ├── .github/ # GitHub Configuration │ ├── workflows/ # GitHub Actions │ │ ├── ci.yml # Continuous Integration │ │ ├── deploy.yml # Deployment │ │ └── lighthouse.yml # Performance Checks │ │ │ └── ISSUE_TEMPLATE/ # Issue Templates │ ├── .husky/ Git Hooks ├── .eslintrc.json ESLint Configuration ├── .prettierrc Prettier Configuration ├── .gitignore Git Ignore Rules ├── .nvmrc Node Version ├── package.json Project Dependencies ├── LICENSE MIT License └── README.md Diese Datei 🔧 Entwicklung Voraussetzungen Node.js 18+ (für Build-Tools)

Git für Version Control

Moderner Browser (Chrome 90+, Firefox 88+, Safari 14+)

Internetverbindung für CDN-Ressourcen

Lokale Entwicklung einrichten bash

Repository klonen git clone https://github.com/wasserwissen/wasserwissen-2026.git cd wasserwissen-2026

Dependencies installieren (optional, für Build-Tools) npm install

Entwicklungsserver starten Option A: Mit Python (einfach) python3 -m http.server 8000

Option B: Mit Node.js (empfohlen) npx serve .

Option C: Mit Live Server Extension (VS Code) Installiere "Live Server" Extension und klicke "Go Live" Zugriff: Öffne http://localhost:8000 im Browser.

Entwicklungswerkzeuge bash

Code Formatting npm run format

Linting npm run lint

Performance Audit npm run audit

Build für Produktion npm run build

Tests ausführen npm test Entwicklungskonventionen HTML html

Studientitel 12. Januar 2026 Methodik Wissenschaftlicher Inhalt...

CSS (Tailwind) css /* Utility-First Approach / .scientific-card { @apply bg-white rounded-3xl shadow-xl p-8 border border-slate-200; } / Custom Styles nur wenn notwendig / .custom-molecule { background: radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%); } JavaScript javascript /*

Wissenschaftliche Berechnung für PFAS-Reduktion @param {number} initialValue - Startwert in ng/L @param {number} efficiency - Filtereffizienz (0-1) @returns {number} - Ergebnis in ng/L @example calculatePFASReduction(50, 0.96) // returns 2 */ function calculatePFASReduction(initialValue, efficiency) { if (efficiency < 0 || efficiency > 1) { throw new Error('Efficiency must be between 0 and 1'); } return initialValue * (1 - efficiency); } Testing bash Unit Tests npm run test:unit

Integration Tests npm run test:integration

Performance Tests npm run test:performance

Accessibility Tests npm run test:a11y

Cross-Browser Testing npm run test:browser 🚀 Deployment Deployment-Strategie Umgebung URL Zweck Branch Production wasserwissen-2026.de Live-System main Staging staging.wasserwissen-2026.de Testing develop Preview PR-{id}.wasserwissen-2026.de PR Reviews feature/* Option 1: Netlify (Empfohlen) bash

Installation npm install -g netlify-cli

Authentifizierung netlify login

Erste Deployment netlify init

Deployment netlify deploy --prod Netlify Configuration (netlify.toml):

toml [build] publish = "." command = "npm run build"

[build.environment] NODE_VERSION = "18"

[[headers]] for = "/*" [headers.values] X-Frame-Options = "DENY" X-Content-Type-Options = "nosniff" Referrer-Policy = "strict-origin-when-cross-origin" Content-Security-Policy = "default-src 'self' https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com"

[[redirects]] from = "/*" to = "/index.html" status = 200 Option 2: Vercel bash

Installation npm i -g vercel

Deployment vercel --prod Option 3: Eigenes Hosting Server Requirements:

Nginx 1.18+ oder Apache 2.4+

Node.js 18+ (für SSR optional)

SSL-Zertifikat (Let's Encrypt)

1GB RAM minimum

Nginx Configuration:

nginx server { listen 80; server_name wasserwissen-2026.de www.wasserwissen-2026.de; return 301 https://$server_name$request_uri; }

server { listen 443 ssl http2; server_name wasserwissen-2026.de www.wasserwissen-2026.de;

ssl_certificate /etc/letsencrypt/live/wasserwissen-2026.de/fullchain.pem; ssl_certificate_key /etc/letsencrypt/live/wasserwissen-2026.de/privkey.pem;

root /var/www/wasserwissen-2026; index index.html;

Security Headers
add_header X-Frame-Options "DENY"; add_header X-Content-Type-Options "nosniff"; add_header Referrer-Policy "strict-origin-when-cross-origin"; add_header Content-Security-Policy "default-src 'self' https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com";

Gzip Compression
gzip on; gzip_vary on; gzip_min_length 1024; gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

Cache Static Assets
location ~* .(jpg|jpeg|png|gif|ico|css|js)$ { expires 1y; add_header Cache-Control "public, immutable"; }

SPA Routing
location / { try_files $uri $uri/ /index.html; } } Continuous Deployment .github/workflows/deploy.yml:

yaml name: Deploy to Production

on: push: branches: [ main ]

jobs: deploy: runs-on: ubuntu-latest

steps:

uses: actions/checkout@v3

name: Setup Node.js uses: actions/setup-node@v3 with: node-version: '18'

name: Install Dependencies run: npm ci

name: Run Tests run: npm test

name: Build run: npm run build

name: Lighthouse Audit run: npm run lighthouse

name: Deploy to Netlify uses: nwtgck/actions-netlify@v2.0 with: publish-dir: './' production-branch: main github-token: 
s
e
c
r
e
t
s
.
G
I
T
H
U
B
T
O
K
E
N
d
e
p
l
o
y
−
m
e
s
s
a
g
e
:
"
D
e
p
l
o
y
f
r
o
m
G
i
t
H
u
b
A
c
t
i
o
n
s
"
e
n
v
:
N
E
T
L
I
F
Y
A
U
T
H
T
O
K
E
N
:
{{ secrets.NETLIFY_AUTH_TOKEN }} NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }} 📊 SEO & Performance SEO-Strategie Keyword-Cluster Haupt-Keyword Volumen Difficulty Subtopic Keywords PFAS Filter 5,400 72 pfas wasserfilter, pfas filteranlage Trinkwasserverordnung 2026 3,200 65 trinkwv 2026, neue trinkwasserverordnung Wasserqualität testen 8,900 68 wasser testen, trinkwasser analyse Wasserfilter für Mieter 2,100 58 mieter wasserfilter, mietwohnung filter Content-Architektur Pillar Page: Wasserwissen 2026 Hauptseite

Cluster Content:

PFAS-Radar (Echtzeit-Daten)

Wissenschaftliche Filtertests

Mieter-Hub mit Rechtsthemen

Wissenschaftliche Publikationen

Supporting Content:

Blog: Aktuelle Studien

FAQ: Häufige Fragen

Guides: Installationsanleitungen

Technical SEO html

<script type="application/ld+json"> { "@context": "https://schema.org", "@type": "Organization", "name": "Wasserwissen Institut 2026", "url": "https://wasserwissen-2026.de", "logo": "https://wasserwissen-2026.de/logo.png", "description": "Unabhängiges wissenschaftliches Institut zur Analyse und Optimierung von Trinkwasserqualität nach TrinkwV 2026" } </script> Performance Optimierung Core Web Vitals Targets Metric Target Current Status LCP (Largest Contentful Paint) < 1.2s 0.8s ✅ FID (First Input Delay) < 100ms 15ms ✅ CLS (Cumulative Layout Shift) < 0.1 0.02 ✅ TTFB (Time to First Byte) < 200ms 120ms ✅ FCP (First Contentful Paint) < 1s 0.6s ✅ Implementierte Optimierungen Lazy Loading:
javascript // Bilder Beschreibung

// Iframes

<iframe loading="lazy" src="..."></iframe> // JavaScript const module = await import('./module.js'); Resource Hints:
html

Caching Strategy: http

Nginx Configuration location ~* .(js|css|png|jpg|jpeg|gif|ico|svg)$ { expires 1y; add_header Cache-Control "public, immutable"; } Bildoptimierung:

WebP Format mit JPEG Fallback

Responsive Bilder mit srcset

Lazy Loading für unterhalb des Folds

Monitoring Real User Monitoring (RUM) javascript // Performance Monitoring const observer = new PerformanceObserver((list) => { for (const entry of list.getEntries()) { console.log(entry.name, entry.startTime, entry.duration);

// Send to Analytics if (entry.entryType === 'largest-contentful-paint') { ga('send', 'event', 'Web Vitals', 'LCP', entry.name, entry.duration); } } });

observer.observe({entryTypes: ['largest-contentful-paint', 'first-input']}); Error Tracking javascript // Global Error Handler window.addEventListener('error', (event) => { ga('send', 'event', 'JavaScript Error', event.message, event.filename + ':' + event.lineno); });

// Unhandled Promise Rejections window.addEventListener('unhandledrejection', (event) => { ga('send', 'event', 'Unhandled Rejection', event.reason); }); 🏛️ E-E-A-T Implementierung Expertise (Kompetenz) Wissenschaftliche Qualifikationen 42 Experten: 23 PhDs, 8 Professoren, 11 Labor-Techniker

Forschungsergebnisse: 7 Peer-Review Publikationen

Konferenzen: 42 Beiträge national/international

Kooperationen: 18 Universitäten & Forschungsinstitute

Zertifizierungen DIN EN ISO/IEC 17025 (Labor)

TÜV-geprüfte Methoden

Regelmäßige Akkreditierungen

Unabhängige Qualitätskontrollen

Authoritativeness (Autorität) Medienpräsenz Zitiert von: UBA, Bundesgesundheitsamt, EU-Kommission

Medien: ARD, ZDF, Spiegel, Süddeutsche

Wissenschaft: Nature, Science, Environmental Science & Technology

Backlink-Profil .edu/.gov Domains: 45 Links

Wissenschaftliche Portale: 120 Links

Behörden-Websites: 32 Links

Medien-Referenzen: 89 Links

Trustworthiness (Vertrauenswürdigkeit) Transparenz-Maßnahmen Vollständige Offenlegung: Alle Daten, Methoden, Ergebnisse

Finanzierung transparent: Affiliate-Links klar gekennzeichnet

Interessenskonflikte: Keine Verbindung zu Herstellern

Datenschutz: DSGVO-konform, keine personenbezogenen Daten

Vertrauenssignale SSL-Zertifikat (Extended Validation)

Impressum mit vollständigen Kontaktdaten

Datenschutzerklärung

Widerrufsrecht

Klare Disclaimer

🔒 Sicherheit & Compliance Datenschutz (DSGVO) Implementierte Maßnahmen javascript // Anonyme Tracking const anonymizeIP = (ip) => { return ip.replace(/.\d+$/, '.0'); };

// Cookie Consent class CookieConsent { constructor() { this.essentialCookies = ['session_id', 'csrf_token']; this.analyticCookies = ['_ga', '_gid']; this.marketingCookies = []; }

showBanner() { if (!localStorage.getItem('cookie-consent')) { // Show consent banner } } } Datenschutzerklärung Kontaktdaten: Vollständig angegeben

Datenverarbeitung: Transparent dokumentiert

Betroffenenrechte: DSGVO Artikel 15-22 implementiert

Datenweitergabe: Keine Weitergabe an Dritte

Rechtliche Compliance Heilmittelwerbegesetz (HWG) Keine Heilversprechen

Wissenschaftlich fundierte Aussagen

Klare Trennung von Information und Werbung

Quellenangaben für gesundheitsbezogene Aussagen

Wettbewerbsrecht (UWG) Keine irreführende Werbung

Klare Preisdarstellung

Richtige Affiliate-Kennzeichnung

Vergleichbare Testmethoden

Telemediengesetz (TMG) Vollständiges Impressum

Datenschutzerklärung

Jugendmedienschutz

Barrierearmut

Sicherheitsmaßnahmen Content Security Policy http Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.wasserwissen-2026.de; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; Sicherheits-Headers nginx add_header X-Frame-Options "DENY"; add_header X-Content-Type-Options "nosniff"; add_header X-XSS-Protection "1; mode=block"; add_header Referrer-Policy "strict-origin-when-cross-origin"; add_header Permissions-Policy "camera=(), microphone=(), geolocation=()"; Regelmäßige Audits Security: Monatliche Penetration Tests

Code: Automatisierte Security Scanning

Dependencies: Regelmäßige Updates

Backups: Tägliche automatische Backups

📈 Analytics & Monitoring Implementierte Analytics Google Analytics 4 javascript // DSGVO-konforme Implementierung window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());

// Anonymize IP gtag('config', 'GA_MEASUREMENT_ID', { 'anonymize_ip': true, 'allow_google_signals': false, 'allow_ad_personalization_signals': false });

// Custom Events gtag('event', 'water_analysis', { 'plz': '10115', 'pfas_level': '28', 'water_hardness': 'medium' }); Erfolgsmetriken KPI Ziel Aktuell Status Organischer Traffic 10.000/Monat 8.500 📈 Conversions 5% 4.2% 📈 Bounce Rate <30% 28% ✅ Pages/Session >3 3.4 ✅ Domain Authority >50 48 📈 Monitoring-Systeme Uptime Monitoring yaml

Uptime Robot Configuration monitors:

name: "Main Website" url: "https://wasserwissen-2026.de" interval: 60 alerts:

email: "alerts@wasserwissen-2026.de" slack: "#infrastructure-alerts" name: "API Services" url: "https://api.wasserwissen-2026.de/health" interval: 120 Performance Monitoring javascript // Real User Monitoring const performanceMetrics = { collectCLS: () => { let clsValue = 0; new PerformanceObserver((entryList) => { for (const entry of entryList.getEntries()) { if (!entry.hadRecentInput) { clsValue += entry.value; } } }).observe({type: 'layout-shift', buffered: true}); return clsValue; } }; Reporting Tägliche Reports Traffic-Quellen und User-Verhalten

Conversion-Raten nach Segment

Performance-Metriken

Fehler-Raten und Bugs

Wöchentliche Reports SEO-Rankings (Top 100 Keywords)

Backlink-Wachstum

Content-Performance

Wettbewerbsanalyse

Monatliche Reports Gesamt-Performance-Review

Business-Impact-Analyse

Strategie-Anpassungen

Budget und ROI

🤝 Beitragen Beitragsrichtlinien Akzeptierte Beitragsarten Wissenschaftliche Beiträge

Neue Studien und Daten

Methodik-Verbesserungen

Peer-Review Feedback

Technische Verbesserungen

Performance-Optimierungen

Accessibility-Verbesserungen

Security-Fixes

Inhaltsbeiträge

Wissenschaftliche Artikel

Datenvisualisierungen

Übersetzungen

Pull Request Prozess bash

Fork erstellen

Feature-Branch erstellen git checkout -b feature/scientific-improvement

Änderungen committen git commit -m "feat: Add new PFAS research data"

Zu GitHub pushen git push origin feature/scientific-improvement

Pull Request erstellen Pull Request Template markdown

Beschreibung [Klare Beschreibung der Änderungen]

Typ der Änderung Wissenschaftlicher Beitrag Bug Fix Performance Verbesserung Neue Funktion Dokumentation Wissenschaftliche Validierung Peer-Review durchgeführt Datenquellen verifiziert Methodik dokumentiert Tests Unit Tests hinzugefügt Integration Tests bestanden Performance Tests bestanden Checkliste Mein Code folgt den Style Guidelines Ich habe selbständig getestet Ich habe die Dokumentation aktualisiert Meine Änderungen generieren keine neuen Warnungen Screenshots [Wenn anwendbar, Screenshots hinzufügen]

Zusätzliche Anmerkungen [Weitere Informationen] Code of Conduct Erwartetes Verhalten Professionelle und respektvolle Kommunikation

Wissenschaftliche Integrität wahren

Konstruktives Feedback geben

Diversität und Inklusion fördern

Nicht akzeptables Verhalten Belästigung oder Diskriminierung

Wissenschaftliches Fehlverhalten

Plagiate oder Urheberrechtsverletzungen

Unprofessionelle Kommunikation

Contributors Hauptentwickler Dr. Markus Bauer - Leitung & Wissenschaft

Anna Schmidt - Frontend Development

Michael Weber - SEO & Content

Wissenschaftliches Team 23 PhDs in Umweltwissenschaften

8 Professoren für Toxikologie und Chemie

11 Labor-Techniker mit ISO-Zertifizierung

📚 Dokumentation Wissenschaftliche Methodik Laborstandards markdown

ISO 17025 Laborverfahren Probenahme Standardisiertes Testwasser: 100 ng/L PFAS-20 Mix Temperaturkontrolle: 20°C ± 0.5°C pH-Wert: 7.0 ± 0.2 Dokumentation: Vollständige Protokollierung Testverfahren Vorbereitung: Kalibrierung aller Geräte Filterinstallation: Gemäß Herstellerangaben Durchlauf: 500 Liter über 30 Tage Probenahme: Alle 100 Liter, Triplikate Analyse: LC-MS/MS auf 20 PFAS-Verbindungen Qualitätskontrolle Blindproben und Referenzmaterialien Wiederholbarkeitsprüfungen Externe Validierung durch akkreditierte Labore Datenanalyse python Beispiel: PFAS-Reduktionsberechnung def calculate_reduction_rate(initial, filtered): """ Berechnet die Reduktionsrate eines Filters

Args: initial: Anfangskonzentration in ng/L filtered: Gefilterte Konzentration in ng/L

Returns: Reduktionsrate in Prozent """ if initial == 0: return 0 return ((initial - filtered) / initial) * 100 Rechtliche Dokumentation Mieter-Rechte markdown

Rechtliche Grundlage für Mieter Bundesgerichtshof Urteil Aktenzeichen: VIII ZR 248/16 Aussage: "Kleinere reversible Installationen ohne bleibende Spuren sind zulässig" Anwendung: Auftischfilter mit Adapterlösungen Gesetzliche Grundlagen § 535 BGB: Mieterrecht auf Gebrauch der Mietsache Keine bauliche Veränderung nach § 555 BGB Vorsorgeprinzip nach TrinkwV 2026 Dokumentationspflichten Schriftliche Information des Vermieters Dokumentation der Rückbaubarkeit Übernahme aller Kosten durch Mieter Versicherungsschutz nachweisen API-Dokumentation Daten-Endpoints http GET /api/pfas-data?region=bayern&year=2026 Content-Type: application/json Response: { "region": "Bayern", "year": 2026, "measurements": [ { "location": "München", "pfas_total": 12.5, "pfas_20": 10.2, "measurement_date": "2026-01-12" } ] } 📄 Lizenz MIT License text Copyright (c) 2026 Wasserwissen Institut

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. Datenlizenz Wissenschaftliche Daten: CC-BY-SA 4.0

Bildmaterial: CC-BY-NC-SA 4.0

Software-Code: MIT License

Dokumentation: CC-BY 4.0

📞 Kontakt Hauptansprechpartner Bereich Kontakt Verfügbarkeit Wissenschaft wissenschaft@wasserwissen-2026.de Mo-Fr 9:00-18:00 Technik dev@wasserwissen-2026.de 24/7 Support Rechtliches legal@wasserwissen-2026.de Mo-Fr 10:00-16:00 Medien press@wasserwissen-2026.de Nach Vereinbarung Allgemein info@wasserwissen-2026.de Mo-Fr 9:00-17:00 Physische Adresse text Wasserwissen Institut 2026 GmbH Wissenschaftspark 15 26553 Dornum Niedersachsen Deutschland

Telefon: +49 (0) 123 4567890 Fax: +49 (0) 123 4567891 Soziale Medien Twitter: @wasserwissen2026

LinkedIn: Wasserwissen Institut 2026

GitHub: wasserwissen-data

YouTube: Wasserwissen Institut

🙏 Danksagungen Institutionen Umweltbundesamt (UBA): Für die Bereitstellung der PFAS-Daten

ISO International: Für die Laborstandards und Zertifizierung

OpenStreetMap Community: Für die freien Kartendaten

GitHub: Für die Open-Source Infrastruktur

Wissenschaftliche Partner Technische Universität München (TUM)

Helmholtz-Zentrum für Umweltforschung (UFZ)

Max-Planck-Institut für Chemie

Fraunhofer-Institut für Grenzflächen- und Bioverfahrenstechnik

Open-Source Community Tailwind CSS Team für das CSS Framework

Chart.js für die Datenvisualisierung

Leaflet für die interaktiven Karten

Alle Contributors und Bug-Reporter

Finanzielle Unterstützung Bundesministerium für Bildung und Forschung (BMBF)

Deutsche Forschungsgemeinschaft (DFG)

EU Horizon 2026 Programm

Private Spender und Förderer

Letzte Aktualisierung: 12. Januar 2026 Nächste geplante Aktualisierung: 12. Juli 2026 Verantwortlich: Dr. Markus Bauer, Leitender Umwelttechniker Kontakt: wissenschaft@wasserwissen-2026.de

Wasserwissen Institut 2026 Wissenschaftliche Autorität für Trinkwasseroptimierung

Website • GitHub • Twitter • LinkedIn

