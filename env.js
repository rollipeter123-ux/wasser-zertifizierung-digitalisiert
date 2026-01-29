// env.js - Für Vercel/Netlify Umgebungsvariablen
// Diese Datei wird während des Build-Prozesses mit den echten Werten ersetzt

window.ENV_CONFIG = {
    // Google APIs
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || '',
    GOOGLE_CSE_ID: process.env.GOOGLE_CSE_ID || '',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    
    // Analytics
    GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_ID || '',
    GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || '',
    
    // Backend
    API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.wasserwissen-2026.de',
    
    // Formular
    FORMSPREE_ID: process.env.FORMSPREE_ID || '',
    
    // Affiliate Tracking
    AFFILIATE_SALT: process.env.AFFILIATE_SALT || ''
};
