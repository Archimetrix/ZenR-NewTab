/* ===================================================
   ZenR-NewTab Manager | newtab.js  (fully fixed)
   =================================================== */

// ─── DEFAULT DATA ────────────────────────────────────
const DEFAULT_DATA = {
  pages: [
    {
      id: 'page-home', name: 'Home',
      boards: [
        { id: 'b1', name: 'AI Tools', links: [
          { id: 'l1', title: 'ChatGPT',    url: 'https://chat.openai.com', desc: '' },
          { id: 'l2', title: 'Claude',     url: 'https://claude.ai',       desc: '' },
          { id: 'l3', title: 'Perplexity', url: 'https://perplexity.ai',   desc: '' },
          { id: 'l4', title: 'Midjourney', url: 'https://midjourney.com',  desc: '' },
          { id: 'l5', title: 'Gemini',     url: 'https://gemini.google.com', desc: '' },
        ]},
        { id: 'b2', name: 'Notes & Docs', links: [
          { id: 'l6',  title: 'Google Docs', url: 'https://docs.google.com', desc: '' },
          { id: 'l7',  title: 'Notion',      url: 'https://notion.so',       desc: '' },
          { id: 'l8',  title: 'Evernote',    url: 'https://evernote.com',    desc: '' },
          { id: 'l9',  title: 'Google Keep', url: 'https://keep.google.com', desc: '' },
        ]},
        { id: 'b3', name: 'Cloud Storage', links: [
          { id: 'l10', title: 'Google Drive', url: 'https://drive.google.com',   desc: '' },
          { id: 'l11', title: 'Dropbox',      url: 'https://dropbox.com',        desc: '' },
          { id: 'l12', title: 'OneDrive',     url: 'https://onedrive.live.com',  desc: '' },
        ]},
        { id: 'b4', name: 'Search Engines', links: [
          { id: 'l13', title: 'Google',      url: 'https://google.com',        desc: '' },
          { id: 'l14', title: 'Bing',        url: 'https://bing.com',          desc: '' },
          { id: 'l15', title: 'DuckDuckGo',  url: 'https://duckduckgo.com',    desc: '' },
          { id: 'l16', title: 'Brave Search',url: 'https://search.brave.com',  desc: '' },
        ]},
        { id: 'b5', name: 'Social Media', links: [
          { id: 'l17', title: 'Instagram',  url: 'https://instagram.com', desc: '' },
          { id: 'l18', title: 'Twitter / X',url: 'https://x.com',         desc: '' },
          { id: 'l19', title: 'Reddit',     url: 'https://reddit.com',    desc: '' },
          { id: 'l20', title: 'LinkedIn',   url: 'https://linkedin.com',  desc: '' },
        ]},
        { id: 'b6', name: 'Communication', links: [
          { id: 'l21', title: 'Slack',        url: 'https://slack.com',           desc: '' },
          { id: 'l22', title: 'Discord',      url: 'https://discord.com',         desc: '' },
          { id: 'l23', title: 'WhatsApp Web', url: 'https://web.whatsapp.com',    desc: '' },
          { id: 'l24', title: 'Zoom',         url: 'https://zoom.us',             desc: '' },
        ]},
      ]
    },
    {
      id: 'page-work', name: 'Work',
      boards: [
        { id: 'bw1', name: 'Productivity', links: [
          { id: 'lw1', title: 'Todoist', url: 'https://todoist.com', desc: '' },
          { id: 'lw2', title: 'Trello',  url: 'https://trello.com',  desc: '' },
          { id: 'lw3', title: 'Asana',   url: 'https://asana.com',   desc: '' },
          { id: 'lw4', title: 'Linear',  url: 'https://linear.app',  desc: '' },
        ]},
        { id: 'bw2', name: 'Dev Tools', links: [
          { id: 'lw5', title: 'GitHub',         url: 'https://github.com',        desc: '' },
          { id: 'lw6', title: 'Stack Overflow', url: 'https://stackoverflow.com', desc: '' },
          { id: 'lw7', title: 'CodePen',        url: 'https://codepen.io',        desc: '' },
          { id: 'lw8', title: 'Vercel',         url: 'https://vercel.com',        desc: '' },
        ]},
      ]
    },
  ],
  minimalGroups: [],
  settings: {
    bgType: 'gradient',
    bgGradient: 'default',
    overlayOpacity: 50,
    overlayBlur: 0,
    accentColor: '#4fffb0',
    cardBlur: 20,
    tabTitle: 'ZenR-NewTab',
    showDesc: false,
    currentPageId: 'page-home',
    clockEnabled: false,
    clockFormat: '24h',
    clockSeconds: true,
    clockPosition: { x: 20, y: 80 },
    bgVideoCount: 0,
    bgVideoIndex: 0,
    bgVideoAutoChange: false,
    bgImageCount: 0,
    bgImageIndex: 0,
    bgImageAutoChange: false,
    pixabayApiKey: '',
    pixabayQuery: '',
    pixabayVideos: [],
    pixabayVideoIndex: 0,
    pixabayVideoAutoChange: false,
    pixabayImageQuery: '',
    pixabayImages: [],
    pixabayImageIndex: 0,
    pixabayImageAutoChange: false,
    autoSyncBookmarks: false,
    clockStyle: 'glass',
    mgClockStyle: 'glass',   // clock style for minimal-groups mode (isolated from classic)
    uiFont: 'DM Sans',
    clockSize: 100,
    liquidGlass: true,
    lgBlur: 4,
    lgDensity: 6,
    lgSaturation: 180,
    lgBrightness: 85,
    lgRim: 40,
    lgShadow: 80,
    lgTint: '#ffffff',
    lgTintOpacity: 5,
    mgLgTint: '#ffffff',        // glass tint for minimal-groups mode (isolated from classic)
    mgLgTintOpacity: 5,         // glass tint opacity for minimal-groups mode
    searchEngine: 'google',
    searchSuggestions: true,
    searchNewTab: false,
    searchPlaceholder: "What's on your mind?",
    searchBarWidth: 0,       // 0 = responsive default, else px value
    searchBarCompact: false, // compact reduces height/padding
    calcSaveHistory: false,
    boardsLayout: 'classic',
    mgActiveGroupId: null,
    mgPos: { x: null, y: null },
    mgLinksPerRow: 8,
    mgIconStyle: 'default',   // 'default' | 'glass' | 'minimal'
  }
};

// ─── SEARCH ENGINE CONFIG ────────────────────────────
const SEARCH_ENGINES = {
  google: {
    name: 'Google', color: '#4285f4',
    logo: `<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`,
    url: 'https://www.google.com/search?q=',
    suggest: 'https://suggestqueries.google.com/complete/search?client=chrome&q=',
    parse: d => Array.isArray(d) ? (d[1] || []) : [],
  },
  bing: {
    name: 'Bing', color: '#00b4f0',
    logo: `<svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.97 7.569a.92.92 0 00-.805.863c-.013.195-.01.209.43 1.347 1 2.59 1.242 3.214 1.283 3.302.099.213.237.413.41.592.134.138.222.212.37.311.26.176.39.224 1.405.527.989.295 1.529.49 1.994.723.603.302 1.024.644 1.29 1.051.191.292.36.815.434 1.342.029.206.029.661 0 .847a2.491 2.491 0 01-.376 1.026c-.1.151-.065.126.081-.058.415-.52.838-1.408 1.054-2.213a6.728 6.728 0 00.102-3.012 6.626 6.626 0 00-3.291-4.53 104.157 104.157 0 00-1.322-.698l-.254-.133a737.941 737.941 0 01-1.575-.827c-.548-.29-.78-.406-.846-.426a1.376 1.376 0 00-.29-.045l-.093.01z" fill="url(#lobe-icons-bing-0-_R_0_)"></path><path d="M13.164 17.24a4.385 4.385 0 00-.202.125 511.45 511.45 0 00-1.795 1.115 163.087 163.087 0 01-.989.614l-.463.288a99.198 99.198 0 01-1.502.941c-.326.2-.704.334-1.09.387-.18.024-.52.024-.7 0a2.807 2.807 0 01-1.318-.538 3.665 3.665 0 01-.543-.545 2.837 2.837 0 01-.506-1.141 2.161 2.161 0 00-.041-.182c-.008-.008.006.138.032.33.027.199.085.487.147.733.482 1.907 1.85 3.457 3.705 4.195a6.31 6.31 0 001.658.412c.22.025.844.035 1.074.017 1.054-.08 1.972-.393 2.913-.992a325.28 325.28 0 01.937-.596l.384-.244.684-.435.234-.149.009-.005.025-.017.013-.007.172-.11.597-.38c.76-.481.987-.65 1.34-.998.148-.146.37-.394.381-.425.002-.007.042-.068.088-.136a2.49 2.49 0 00.373-1.023 4.181 4.181 0 000-.847 4.336 4.336 0 00-.318-1.137c-.224-.472-.7-.9-1.383-1.245a2.972 2.972 0 00-.406-.181c-.01 0-.646.392-1.413.87a7089.171 7089.171 0 00-1.658 1.031l-.439.274z" fill="url(#lobe-icons-bing-1-_R_0_)" fill-rule="nonzero"></path><path d="M4.003 14.946l.004 3.33.042.193c.134.604.366 1.04.77 1.445a2.701 2.701 0 001.955.814c.536 0 1-.135 1.479-.43l.703-.435.556-.346V8.003c0-2.306-.004-3.675-.012-3.782a2.734 2.734 0 00-.797-1.765c-.145-.144-.268-.24-.637-.496A1780.102 1780.102 0 015.762.362C5.406.115 5.38.098 5.271.059a.943.943 0 00-1.254.696C4.003.818 4 1.659 4 6.223v5.394H4l.003 3.329z" fill="url(#lobe-icons-bing-2-_R_0_)" fill-rule="nonzero"></path><defs><radialGradient cx="93.717%" cy="77.818%" fx="93.717%" fy="77.818%" gradientTransform="scale(-1 -.7146) rotate(49.288 2.035 -2.198)" id="lobe-icons-bing-0-_R_0_" r="143.691%"><stop offset="0%" stop-color="#00CACC"></stop><stop offset="100%" stop-color="#048FCE"></stop></radialGradient><radialGradient cx="13.893%" cy="71.448%" fx="13.893%" fy="71.448%" gradientTransform="scale(.6042 1) rotate(-23.34 .184 .494)" id="lobe-icons-bing-1-_R_0_" r="149.21%"><stop offset="0%" stop-color="#00BBEC"></stop><stop offset="100%" stop-color="#2756A9"></stop></radialGradient><linearGradient id="lobe-icons-bing-2-_R_0_" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#00BBEC"></stop><stop offset="100%" stop-color="#2756A9"></stop></linearGradient></defs></svg>`,
    url: 'https://www.bing.com/search?q=',
    suggest: 'https://api.bing.com/osjson.aspx?query=',
    parse: d => Array.isArray(d) ? (d[1] || []) : [],
  },
  duckduckgo: {
    name: 'DuckDuckGo', color: '#de5833',
    logo: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 32 32"><g transform="matrix(.266667 0 0 .266667 -17.954934 -5.057333)"><circle cx="127.332" cy="78.966" r="51.15" fill="#de5833"/><defs><path id="A" d="M178.684 78.824c0 28.316-23.035 51.354-51.354 51.354-28.313 0-51.348-23.04-51.348-51.354s23.036-51.35 51.348-51.35c28.318 0 51.354 23.036 51.354 51.35z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><g clip-path="url(#B)"><path d="M148.293 155.158c-1.8-8.285-12.262-27.04-16.23-34.97s-7.938-19.1-6.13-26.322c.328-1.312-3.436-11.308-2.354-12.015 8.416-5.5 10.632.6 14.002-1.862 1.734-1.273 4.1 1.047 4.7-1.06 2.158-7.567-3.006-20.76-8.77-26.526-1.885-1.88-4.77-3.06-8.03-3.687-1.254-1.713-3.275-3.36-6.138-4.88-3.188-1.697-10.12-3.938-13.717-4.535-2.492-.4-3.055.287-4.12.46.992.088 5.7 2.414 6.615 2.55-.916.62-3.607-.028-5.324.742-.865.392-1.512 1.877-1.506 2.58 4.9-.496 12.574-.016 17.1 2-3.602.4-9.08.867-11.436 2.105-6.848 3.608-9.873 12.035-8.07 22.133 1.804 10.075 9.738 46.85 12.262 59.13 2.525 12.264-5.408 20.2-10.455 22.354l5.408.363-1.8 3.967c6.484.72 13.695-1.44 13.695-1.44-1.438 3.965-11.176 5.412-11.176 5.412s4.7 1.438 12.258-1.447l12.263-4.688 3.604 9.373 6.854-6.847 2.885 7.2c.014-.001 5.424-1.808 3.62-10.103z" fill="#d5d7d8"/><path d="M150.47 153.477c-1.795-8.3-12.256-27.043-16.228-34.98s-7.935-19.112-6.13-26.32c.335-1.3.34-6.668 1.43-7.38 8.4-5.494 7.812-.184 11.187-2.645 1.74-1.27 3.133-2.806 3.738-4.912 2.164-7.572-3.006-20.76-8.773-26.53-1.88-1.88-4.768-3.062-8.023-3.686-1.252-1.718-3.27-3.36-6.13-4.882-5.4-2.862-12.074-4.006-18.266-2.883 1 .1 3.256 2.138 4.168 2.273-1.38.936-5.053.815-5.03 2.896 4.916-.492 10.303.285 14.834 2.297-3.602.4-6.955 1.3-9.3 2.543-6.854 3.603-8.656 10.812-6.854 20.914 1.807 10.097 9.742 46.873 12.256 59.126 2.527 12.26-5.402 20.188-10.45 22.354l5.408.36-1.8 3.973c6.484.72 13.695-1.44 13.695-1.44-1.438 3.974-11.176 5.406-11.176 5.406s4.686 1.44 12.258-1.445l12.27-4.688 3.604 9.373 6.852-6.85 2.9 7.215c-.016.007 5.388-1.797 3.58-10.088z" fill="#fff"/><path d="M109.02 70.69c0-2.093 1.693-3.787 3.79-3.787 2.1 0 3.785 1.694 3.785 3.787s-1.695 3.786-3.785 3.786c-2.096.001-3.79-1.692-3.79-3.786z" fill="#2d4f8e"/><path d="M113.507 69.43a.98.98 0 0 1 .98-.983c.543 0 .984.438.984.983s-.44.984-.984.984c-.538.001-.98-.44-.98-.984z" fill="#fff"/><path d="M134.867 68.445c0-1.793 1.46-3.25 3.252-3.25 1.8 0 3.256 1.457 3.256 3.25 0 1.8-1.455 3.258-3.256 3.258a3.26 3.26 0 0 1-3.252-3.258z" fill="#2d4f8e"/><path d="M138.725 67.363c0-.463.38-.843.838-.843a.84.84 0 0 1 .846.843c0 .47-.367.842-.846.842a.84.84 0 0 1-.838-.842z" fill="#fff"/><linearGradient id="C" gradientUnits="userSpaceOnUse" x1="105.318" y1="60.979" x2="113.887" y2="60.979"><stop offset=".006" stop-color="#6176b9"/><stop offset=".691" stop-color="#394a9f"/></linearGradient><path d="M113.886 59.718s-2.854-1.3-5.63.453-2.668 3.523-2.668 3.523-1.473-3.283 2.453-4.892 5.844.916 5.844.916z" fill="url(#C)"/><linearGradient id="D" gradientUnits="userSpaceOnUse" x1="132.273" y1="58.371" x2="140.078" y2="58.371"><stop offset=".006" stop-color="#6176b9"/><stop offset=".691" stop-color="#394a9f"/></linearGradient><path d="M140.078 59.458s-2.05-1.172-3.643-1.152c-3.27.043-4.162 1.488-4.162 1.488s.55-3.445 4.732-2.754c2.268.377 3.073 2.418 3.073 2.418z" fill="url(#D)"/></g><path d="M124.4 85.295c.38-2.3 6.3-6.625 10.5-6.887 4.2-.265 5.5-.205 9-1.043s12.535-3.088 15.033-4.242c2.504-1.156 13.104.572 5.63 4.738-3.232 1.8-11.943 5.13-18.172 6.987-6.22 1.86-10-1.776-12.06 1.28-1.646 2.432-.334 5.762 7.1 6.453 10.037.93 19.66-4.52 20.72-1.625s-8.625 6.508-14.525 6.623c-5.893.1-17.77-3.896-19.555-5.137s-4.165-4.13-3.67-7.148z" fill="#fdd20a"/><path d="M128.943 115.592s-14.102-7.52-14.332-4.47c-.238 3.056 0 15.5 1.643 16.45s13.396-6.108 13.396-6.108zm5.403-.474s9.635-7.285 11.754-6.815c2.1.48 2.582 15.5.7 16.23-1.88.7-12.908-3.813-12.908-3.813z" fill="#65bc46"/><path d="M125.53 116.4c0 4.932-.7 7.05 1.4 7.52s6.104 0 7.518-.938.232-7.28-.232-8.465c-.477-1.174-8.696-.232-8.696 1.884z" fill="#43a244"/><path d="M126.426 115.292c0 4.933-.707 7.05 1.4 7.52 2.106.48 6.104 0 7.52-.938 1.4-.94.23-7.28-.236-8.466-.473-1.173-8.692-.227-8.692 1.885z" fill="#65bc46"/><circle cx="127.331" cy="78.965" r="57.5" fill="none" stroke="#de5833" stroke-width="5"/></g></svg>`,
    url: 'https://duckduckgo.com/?q=',
    // DuckDuckGo AC endpoint blocks CORS in extensions — use Google suggestions, search still goes to DDG
    suggest: 'https://suggestqueries.google.com/complete/search?client=chrome&q=',
    parse: d => Array.isArray(d) ? (d[1] || []) : [],
  },
  brave: {
    name: 'Brave', color: '#fb542b',
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20"><path fill="#ff651f" d="M41,13l1,4l-4.09,16.35c-0.59,2.35-2.01,4.41-4.01,5.79l-8.19,5.68c-0.51,0.36-1.11,0.53-1.71,0.53 c-0.6,0-1.2-0.17-1.71-0.53l-8.19-5.68c-2-1.38-3.42-3.44-4.01-5.79L6,17l1-4l-1-2l3.25-3.25c1.05-1.05,2.6-1.44,4.02-0.99 c0.04,0.01,0.07,0.02,0.1,0.03L14,7l4-4h12l4,4l0.65-0.22c0.83-0.28,1.7-0.27,2.5,0c0.58,0.19,1.13,0.51,1.58,0.95 c0.01,0.01,0.01,0.01,0.02,0.02L42,11L41,13z"/><path fill="#f4592b" d="M38.73,7.73L33,11l-9,2l-9-3l-2.07-2.07c-0.56-0.56-1.41-0.74-2.15-0.44L8.67,8.33l0.58-0.58 c1.05-1.05,2.6-1.44,4.02-0.99c0.04,0.01,0.07,0.02,0.1,0.03L14,7l4-4h12l4,4l0.65-0.22c0.83-0.28,1.7-0.27,2.5,0 C37.73,6.97,38.28,7.29,38.73,7.73z"/><path fill="#fff" d="M32.51,23.49c-0.3,0.3-0.38,0.77-0.19,1.15l0.34,0.68c0.22,0.45,0.34,0.94,0.34,1.44 c0,0.8-0.29,1.57-0.83,2.16l-0.66,0.74c-0.32,0.21-0.72,0.23-1.04,0.05l-5.23-2.88c-0.59-0.4-0.6-1.27-0.01-1.66l3.91-2.66 c0.48-0.28,0.63-0.89,0.35-1.37l-1.9-3.16C27.28,17.46,27.45,17.24,28,17l6-3h-5l-3,0.75c-0.55,0.14-0.87,0.7-0.72,1.24l1.46,5.09 c0.14,0.51-0.14,1.05-0.65,1.22l-1.47,0.49c-0.21,0.07-0.41,0.11-0.62,0.11c-0.21,0-0.42-0.04-0.63-0.11l-1.46-0.49 c-0.51-0.17-0.79-0.71-0.65-1.22l1.46-5.09c0.15-0.54-0.17-1.1-0.72-1.24L19,14h-5l6,3c0.55,0.24,0.72,0.46,0.41,0.98l-1.9,3.16 c-0.28,0.48-0.13,1.09,0.35,1.37l3.91,2.66c0.59,0.39,0.58,1.26-0.01,1.66l-5.23,2.88c-0.32,0.18-0.72,0.16-1.04-0.05l-0.66-0.74 C15.29,28.33,15,27.56,15,26.76c0-0.5,0.12-0.99,0.34-1.44l0.34-0.68c0.19-0.38,0.11-0.85-0.19-1.15l-4.09-4.83 c-0.83-0.99-0.94-2.41-0.26-3.51l3.4-5.54c0.27-0.36,0.75-0.49,1.17-0.33l2.62,1.05c0.48,0.19,0.99,0.29,1.49,0.29 c0.61,0,1.23-0.14,1.79-0.42c0.75-0.38,1.57-0.57,2.39-0.57s1.64,0.19,2.39,0.57c1.03,0.51,2.22,0.56,3.28,0.13l2.62-1.05 c0.42-0.16,0.9-0.03,1.17,0.33l3.4,5.54c0.68,1.1,0.57,2.52-0.26,3.51L32.51,23.49z"/><path fill="#fff" d="M29.51,32.49l-4.8,3.8c-0.19,0.19-0.45,0.29-0.71,0.29s-0.52-0.1-0.71-0.29l-4.8-3.8 c-0.24-0.24-0.17-0.65,0.13-0.8l4.93-2.47c0.14-0.07,0.29-0.1,0.45-0.1s0.31,0.03,0.45,0.1l4.93,2.47 C29.68,31.84,29.75,32.25,29.51,32.49z"/><path fill="#ed4d01" d="M41,13l1,4l-4.09,16.35c-0.59,2.35-2.01,4.41-4.01,5.79l-8.19,5.68c-0.51,0.36-1.11,0.53-1.71,0.53 V10.36L25,12h7v-2l5.15-3.22c0.59,0.19,1.15,0.52,1.6,0.97L42,11L41,13z"/><path fill="#f5f5f5" d="M32.51,23.49c-0.3,0.3-0.38,0.77-0.19,1.15l0.34,0.68c0.22,0.45,0.34,0.94,0.34,1.44 c0,0.8-0.29,1.57-0.83,2.16l-0.66,0.74c-0.32,0.21-0.72,0.23-1.04,0.05l-5.23-2.88c-0.59-0.4-0.6-1.27-0.01-1.66l3.91-2.66 c0.48-0.28,0.63-0.89,0.35-1.37l-1.9-3.16C27.28,17.46,27.45,17.24,28,17l6-3h-5l-3,0.75c-0.55,0.14-0.87,0.7-0.72,1.24l1.46,5.09 c0.14,0.51-0.14,1.05-0.65,1.22l-1.47,0.49c-0.21,0.07-0.41,0.11-0.62,0.11V9.63c0.82,0,1.64,0.19,2.39,0.57 c1.03,0.51,2.22,0.56,3.28,0.13l2.62-1.05c0.42-0.16,0.9-0.03,1.17,0.33l3.4,5.54c0.68,1.1,0.57,2.52-0.26,3.51L32.51,23.49z"/><path fill="#f5f5f5" d="M29.51,32.49l-4.8,3.8c-0.19,0.19-0.45,0.29-0.71,0.29v-7.46c0.16,0,0.31,0.03,0.45,0.1l4.93,2.47 C29.68,31.84,29.75,32.25,29.51,32.49z"/></svg>`,
    url: 'https://search.brave.com/search?q=',
    // Use Google suggestions — search still lands on Brave
    suggest: 'https://suggestqueries.google.com/complete/search?client=chrome&q=',
    parse: d => Array.isArray(d) ? (d[1] || []) : [],
  },
  ecosia: {
    name: 'Ecosia', color: '#2b9348',
    logo: `<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="#2b9348"/><ellipse cx="16" cy="16" rx="6" ry="14" fill="none" stroke="#5cba4a" stroke-width="1.2"/><line x1="2" y1="16" x2="30" y2="16" stroke="#5cba4a" stroke-width="1.2"/><line x1="16" y1="2" x2="16" y2="30" stroke="#5cba4a" stroke-width="1"/><path d="M5 10 Q10 8 16 10 Q22 12 27 10" fill="none" stroke="#5cba4a" stroke-width="1"/><path d="M4 22 Q10 20 16 22 Q22 24 28 22" fill="none" stroke="#5cba4a" stroke-width="1"/><circle cx="16" cy="16" r="14" fill="none" stroke="#fff" stroke-width="0.5" opacity="0.3"/></svg>`,
    url: 'https://www.ecosia.org/search?q=',
    // Use Google suggestions — search still lands on Ecosia
    suggest: 'https://suggestqueries.google.com/complete/search?client=chrome&q=',
    parse: d => Array.isArray(d) ? (d[1] || []) : [],
  },
  startpage: {
    name: 'Startpage', color: '#5c6bc0',
    logo: `<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="#5c6bc0" stroke-width="2.5"/><path d="M15.5 15.5L20 20" stroke="#5c6bc0" stroke-width="2.5" stroke-linecap="round"/><circle cx="10.5" cy="10.5" r="3" fill="#5c6bc0" opacity="0.18"/></svg>`,
    url: 'https://www.startpage.com/search?q=',
    // Use Google suggestions — search still lands on Startpage
    suggest: 'https://suggestqueries.google.com/complete/search?client=chrome&q=',
    parse: d => Array.isArray(d) ? (d[1] || []) : [],
  },
};
const SEARCH_ENGINE_KEYS = Object.keys(SEARCH_ENGINES);
function _defaultNote(overrides) {
  return Object.assign({
    id: uid(),
    title: '',
    content: '',
    pos: { x: 80, y: 120 },
    size: { w: 420, h: 320 },
  }, overrides || {});
}

// ─── STATE ───────────────────────────────────────────
let state = { pages: [], settings: {} };
let pendingConfirmFn = null;

// Active note for image insertion
let activeNoteId = null;
let activeNoteBody = null;

// Board free-drag state
let boardFreeDrag = null;

// Currently dragged notes-image wrapper (for drag-to-reposition)
let _nimDraggedWrapper = null;


// Build the backdrop-filter string for a card during drag.
function _buildDragBackdropFilter() {
  const s = state.settings;
  const blur   = s.lgBlur        ?? 4;
  const sat    = (s.lgSaturation ?? 140) + '%';
  const bright = ((s.lgBrightness ?? 90) / 100).toFixed(2);
  return `blur(${blur}px) saturate(${sat}) brightness(${bright})`;
}

// Link DnD state
let dragSrcLink    = null;
let dragSrcBoard   = null;

// Clock
let clockInterval = null;
// When true, loadBackground() skips auto-advance (user picked a specific item)
let _pxbManualSelect = false;

// ─── INDEXEDDB (Background Media) ────────────────────
const DB_NAME = 'zenr-bg', DB_STORE = 'media', DB_VER = 1;
// Pixabay API key is user-supplied and stored in state.settings.pixabayApiKey
let _db = null;

async function getDB() {
  if (_db) return _db;
  return new Promise((res, rej) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = e => e.target.result.createObjectStore(DB_STORE);
    req.onsuccess  = e => { _db = e.target.result; res(_db); };
    req.onerror    = () => rej(req.error);
  });
}
async function dbSet(key, val) {
  const db = await getDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).put(val, key);
    tx.oncomplete = () => res();
    tx.onerror    = () => rej(tx.error);
  });
}
async function dbGet(key) {
  const db = await getDB();
  return new Promise((res, rej) => {
    const tx  = db.transaction(DB_STORE, 'readonly');
    const req = tx.objectStore(DB_STORE).get(key);
    req.onsuccess = () => res(req.result);
    req.onerror   = () => rej(req.error);
  });
}
async function dbDel(key) {
  const db = await getDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).delete(key);
    tx.oncomplete = () => res();
    tx.onerror    = () => rej(tx.error);
  });
}

// ─── STORAGE ─────────────────────────────────────────
async function loadState() {
  return new Promise(res => {
    chrome.storage.local.get(['zenrState'], result => {
      if (result.zenrState) {
        state = result.zenrState;
        state.settings = Object.assign({}, DEFAULT_DATA.settings, state.settings);
        // Migrate: ensure minimalGroups exists
        if (!state.minimalGroups) state.minimalGroups = [];
        // Migrate: seed mgClockStyle from clockStyle if not yet set
        if (!state.settings.mgClockStyle) state.settings.mgClockStyle = state.settings.clockStyle || 'glass';
        // Migrate: seed mgLgTint/mgLgTintOpacity from classic values if not yet set
        if (!state.settings.mgLgTint)        state.settings.mgLgTint        = state.settings.lgTint        || '#ffffff';
        if (state.settings.mgLgTintOpacity == null) state.settings.mgLgTintOpacity = state.settings.lgTintOpacity ?? 5;
        // Migrate very-old single-note format to notesList at state level
        if (!state.notesList) {
          if (state.notes && (state.notes.content || state.notes.title)) {
            const migrated = Object.assign({ id: uid() }, state.notes);
            if (!migrated.pos)  migrated.pos  = { x: 80, y: 120 };
            if (!migrated.size) migrated.size = { w: 420, h: 320 };
            state.notesList = [migrated];
          } else {
            state.notesList = [];
          }
          delete state.notes;
        }
        // Migrate global state.notesList → current page's notesList (per-page notes)
        if (state.notesList && state.notesList.length > 0) {
          const pg = state.pages.find(p => p.id === state.settings.currentPageId) || state.pages[0];
          if (pg) {
            if (!pg.notesList) pg.notesList = [];
            // Prepend so we don't lose any notes already on the page
            pg.notesList = [...state.notesList, ...pg.notesList];
          }
        }
        // Remove the now-redundant global notesList
        delete state.notesList;

        // Migrate global search/calc enabled+position → current page's per-page state
        {
          const pg = state.pages.find(p => p.id === state.settings.currentPageId) || state.pages[0];
          if (pg) {
            if (pg.search === undefined) {
              pg.search = {
                enabled:  !!(state.settings.searchEnabled),
                position: state.settings.searchPosition || null,
              };
            }
            if (pg.calc === undefined) {
              pg.calc = {
                enabled: !!(state.settings.calculatorEnabled),
                pos:  state.settings.calcPos  || { x: 100, y: 160 },
                size: state.settings.calcSize || { w: 240,  h: 340  },
              };
            }
          }
          // These live on the page now — clear from global settings
          // These live on the page now — clear from global settings so they don't bleed
          delete state.settings.searchEnabled;
          delete state.settings.searchPosition;
          delete state.settings.calculatorEnabled;
          delete state.settings.calcPos;
          delete state.settings.calcSize;
        }
      } else {
        state = JSON.parse(JSON.stringify(DEFAULT_DATA));
        // Ensure no stale global notesList
        delete state.notesList;
      }
      res();
    });
  });
}
function saveState() {
  chrome.storage.local.set({ zenrState: state });
}

// ─── UTILITIES ───────────────────────────────────────
function uid() { return '_' + Math.random().toString(36).slice(2, 9); }

// ─── PAGE-SCOPED NOTES ───────────────────────────────
// Notes are stored per-page (page.notesList). This helper returns (and
// lazily initialises) the notesList for a given page (default: current page).
function getPageNotes(pg) {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') {
    const w = getMgWidgets();
    if (!w.notesList) w.notesList = [];
    return w.notesList;
  }
  if (!pg) pg = currentPage();
  if (!pg) return [];
  if (!pg.notesList) pg.notesList = [];
  return pg.notesList;
}

// ─── PAGE-SCOPED WIDGETS (search bar, calculator) ────
// Each page stores its own enabled/position/size for the search bar and
// calculator, so toggling them on one page does NOT affect other pages.
// In minimal mode, a dedicated virtual "mg widgets" object is used so
// widgets are completely independent from any classic-mode page.
function getMgWidgets() {
  if (!state.settings.mgWidgets) {
    state.settings.mgWidgets = {
      search: { enabled: false, position: null },
      calc:   { enabled: false, pos: { x: 100, y: 160 }, size: { w: 240, h: 340 } },
      notesList: [],
      clockEnabled: false,
      clockPosition: { x: 20, y: 80 },
      notesEnabled: false,
    };
  }
  // Ensure clock keys exist in older saves
  if (state.settings.mgWidgets.clockEnabled === undefined) state.settings.mgWidgets.clockEnabled = false;
  if (!state.settings.mgWidgets.clockPosition) state.settings.mgWidgets.clockPosition = { x: 20, y: 80 };
  // Ensure notesEnabled key exists in older saves
  if (state.settings.mgWidgets.notesEnabled === undefined) state.settings.mgWidgets.notesEnabled = false;
  return state.settings.mgWidgets;
}

// Return true if clock should be visible in the current mode
function isClockEnabled() {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') return !!getMgWidgets().clockEnabled;
  return !!state.settings.clockEnabled;
}

// Set clock enabled for the current mode
function setClockEnabled(val) {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') getMgWidgets().clockEnabled = val;
  else state.settings.clockEnabled = val;
}

// Return true if notes widget should be visible in the current mode
function isNotesEnabled() {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') return !!getMgWidgets().notesEnabled;
  return !!state.settings.notesEnabled;
}

// Set notes enabled for the current mode
function setNotesEnabled(val) {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') getMgWidgets().notesEnabled = !!val;
  else state.settings.notesEnabled = !!val;
}

// Return the clock style for the current mode (minimal vs classic are isolated)
function getClockStyle() {
  const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
  return isMinimal ? (state.settings.mgClockStyle || 'glass') : (state.settings.clockStyle || 'glass');
}

// Save the clock style for the current mode
function setClockStyle(val) {
  const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
  if (isMinimal) state.settings.mgClockStyle = val;
  else            state.settings.clockStyle   = val;
}

// Return the tint setting keys for the current mode
function getLgTintKeys() {
  const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
  return isMinimal
    ? { tintKey: 'mgLgTint', opacKey: 'mgLgTintOpacity' }
    : { tintKey: 'lgTint',   opacKey: 'lgTintOpacity'   };
}

function getPageSearch(pg) {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') {
    const w = getMgWidgets();
    if (!w.search) w.search = { enabled: false, position: null };
    return w.search;
  }
  if (!pg) pg = currentPage();
  if (!pg) return { enabled: false, position: null };
  if (!pg.search) pg.search = { enabled: false, position: null };
  return pg.search;
}

function getPageCalc(pg) {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') {
    const w = getMgWidgets();
    if (!w.calc) w.calc = { enabled: false, pos: { x: 100, y: 160 }, size: { w: 240, h: 340 } };
    return w.calc;
  }
  if (!pg) pg = currentPage();
  if (!pg) return { enabled: false, pos: { x: 100, y: 160 }, size: { w: 240, h: 340 } };
  if (!pg.calc) pg.calc = { enabled: false, pos: { x: 100, y: 160 }, size: { w: 240, h: 340 } };
  return pg.calc;
}
function getFaviconURL(url) {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch { return ''; }
}
function getIconSrc(link) {
  if (link && (link.iconType === 'url' || link.iconType === 'local') && link.iconData) {
    return link.iconData;
  }
  return getFaviconURL(link ? link.url : '');
}
function getDomain(url) {
  try { return new URL(url).hostname.replace('www.', ''); } catch { return url; }
}
function currentPage() {
  return state.pages.find(p => p.id === state.settings.currentPageId) || state.pages[0];
}
function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── TOAST ───────────────────────────────────────────
function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 2850);
}

// ─── RENDER ──────────────────────────────────────────
function render() { renderPages(); renderBoards(); applySettings(); updateClock(); applyBoardTints(); }

function renderPages() {
  const tabs = document.getElementById('pages-tabs');
  tabs.innerHTML = '';
  state.pages.forEach(page => {
    const el = document.createElement('div');
    el.className = 'page-tab' + (page.id === state.settings.currentPageId ? ' active' : '');
    el.dataset.pageId = page.id;

    const label = document.createElement('span');
    label.className = 'tab-label';
    label.textContent = page.name;

    const delBtn = document.createElement('button');
    delBtn.className = 'tab-del';
    delBtn.title = 'Delete page';
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', e => {
      e.stopPropagation();
      deletePagePrompt(page.id);
    });

    el.appendChild(label);
    el.appendChild(delBtn);

    el.addEventListener('click',    ()  => switchPage(page.id));
    el.addEventListener('dblclick', e  => { e.stopPropagation(); openPageModal(page.id); });
    tabs.appendChild(el);
  });
}

function renderBoards() {
  if ((state.settings.boardsLayout || 'classic') === 'minimal') {
    renderMinimalGroups();
  } else {
    renderClassicBoards();
  }
}

function renderClassicBoards() {
  const grid    = document.getElementById('boards-grid');
  const emptyEl = document.getElementById('empty-page');
  const page    = currentPage();

  if (!page || !page.boards || page.boards.length === 0) {
    grid.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  grid.innerHTML = '';
  page.boards.forEach(board => {
    grid.appendChild(buildBoardEl(board, page.id));
  });
  applyDescToggle();
}

function renderMinimalGroups() {
  const grid    = document.getElementById('boards-grid');
  const emptyEl = document.getElementById('empty-page');
  emptyEl.classList.add('hidden');
  grid.innerHTML = '';

  const groups = state.minimalGroups || [];

  if (groups.length === 0) {
    const emptyMg = document.createElement('div');
    emptyMg.className = 'mg-empty';
    emptyMg.innerHTML = `<p style="color:var(--text-muted);font-size:13px;margin-bottom:14px;text-align:center">No groups yet.<br>Create your first group below.</p>`;
    const emptyAdd = document.createElement('button');
    emptyAdd.className = 'mg-tab mg-tab-add';
    emptyAdd.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> New Group`;
    emptyAdd.addEventListener('click', () => openBoardModal('mg', null));
    emptyMg.appendChild(emptyAdd);
    grid.appendChild(emptyMg);
    return;
  }

  let activeGroup = groups.find(g => g.id === state.settings.mgActiveGroupId) || groups[0];
  state.settings.mgActiveGroupId = activeGroup.id;

  // Draggable container
  const container = document.createElement('div');
  container.className = 'mg-container';
  container.id = 'mg-container';

  const savedPos = state.settings.mgPos;
  if (savedPos && savedPos.x !== null) {
    container.style.position  = 'absolute';
    container.style.left      = savedPos.x + 'px';
    container.style.top       = savedPos.y + 'px';
    container.style.transform = 'none';
  }

  // Drag handle
  const dragHandle = document.createElement('div');
  dragHandle.className = 'mg-drag-handle';
  dragHandle.title = 'Drag to reposition';
  dragHandle.innerHTML = `<span class="mg-drag-dots"></span>`;
  container.appendChild(dragHandle);

  // Icon grid
  const cols = state.settings.mgLinksPerRow || 8;
  const iconGrid = document.createElement('div');
  iconGrid.className = 'mg-icon-grid';
  iconGrid.style.setProperty('--mg-cols', cols);

  (activeGroup.links || []).forEach(link => {
    iconGrid.appendChild(buildMgIcon(link, activeGroup.id));
  });

  const addLinkWrap = document.createElement('div');
  addLinkWrap.className = 'mg-icon-wrap mg-add-link-wrap';
  addLinkWrap.title = 'Add link';
  const addLinkBubble = document.createElement('div');
  addLinkBubble.className = 'mg-icon-bubble mg-add-bubble';
  addLinkBubble.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  const addLinkLbl = document.createElement('span');
  addLinkLbl.className = 'mg-icon-label';
  addLinkLbl.textContent = 'Add';
  addLinkWrap.appendChild(addLinkBubble);
  addLinkWrap.appendChild(addLinkLbl);
  addLinkWrap.addEventListener('click', () => openLinkModal('mg', activeGroup.id));
  iconGrid.appendChild(addLinkWrap);
  container.appendChild(iconGrid);

  // Init drag-and-drop reordering for this group
  initMgLinkDragDrop(iconGrid, activeGroup);

  // Tab bar
  const tabBar = document.createElement('div');
  tabBar.className = 'mg-tab-bar';

  groups.forEach(group => {
    const tab = document.createElement('button');
    tab.className = 'mg-tab' + (group.id === activeGroup.id ? ' active' : '');
    tab.textContent = group.name;
    tab.dataset.groupId = group.id;

    // Click to switch group
    tab.addEventListener('click', () => {
      state.settings.mgActiveGroupId = group.id;
      saveState();
      renderBoards();
    });

    // Drag-over: highlight as drop target when a link is dragged over it
    tab.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      tab.classList.add('mg-tab-drop-target');
    });
    tab.addEventListener('dragleave', () => {
      tab.classList.remove('mg-tab-drop-target');
    });
    tab.addEventListener('drop', e => {
      e.preventDefault();
      tab.classList.remove('mg-tab-drop-target');
      const linkId  = e.dataTransfer.getData('text/mg-link-id');
      const fromGid = e.dataTransfer.getData('text/mg-group-id');
      const toGid   = group.id;
      if (!linkId || !fromGid || fromGid === toGid) return;

      const fromGroup = state.minimalGroups.find(g => g.id === fromGid);
      const toGroup   = state.minimalGroups.find(g => g.id === toGid);
      if (!fromGroup || !toGroup) return;

      const idx = fromGroup.links.findIndex(l => l.id === linkId);
      if (idx === -1) return;
      const [moved] = fromGroup.links.splice(idx, 1);
      toGroup.links.push(moved);
      saveState();
      toast(`Moved to "${toGroup.name}" ✦`, 'success');
      renderBoards();
    });

    tab.addEventListener('contextmenu', e => {
      e.preventDefault();
      e.stopPropagation();
      showCtxMenu(e.clientX, e.clientY, [
        { label: '✏️ Rename group', action: () => openBoardModal('mg', group.id) },
        { sep: true },
        { label: '🗑 Delete group', action: () => deleteBoardPrompt('mg', group.id), danger: true },
      ]);
    });
    tabBar.appendChild(tab);
  });

  const addGroupTab = document.createElement('button');
  addGroupTab.className = 'mg-tab mg-tab-add';
  addGroupTab.title = 'Add new group';
  addGroupTab.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  addGroupTab.addEventListener('click', () => openBoardModal('mg', null));
  tabBar.appendChild(addGroupTab);

  container.appendChild(tabBar);
  grid.appendChild(container);
  initMgDrag(dragHandle, container);
}

function initMgDrag(handle, container) {
  let dragging = false, startX, startY, origLeft, origTop;
  handle.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect       = container.getBoundingClientRect();
    const parentRect = (container.offsetParent || document.body).getBoundingClientRect();
    // Convert from viewport coords to offset-parent-relative coords before going absolute,
    // otherwise the container jumps by the parent's own offset on the first drag.
    origLeft = rect.left - parentRect.left;
    origTop  = rect.top  - parentRect.top;
    container.style.position  = 'absolute';
    container.style.transform = 'none';
    container.style.left      = origLeft + 'px';
    container.style.top       = origTop  + 'px';
    document.body.style.userSelect = 'none';
    handle.style.cursor = 'grabbing';
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    container.style.left = (origLeft + e.clientX - startX) + 'px';
    container.style.top  = (origTop  + e.clientY - startY) + 'px';
  });
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.userSelect = '';
    handle.style.cursor = 'grab';
    state.settings.mgPos = { x: parseInt(container.style.left), y: parseInt(container.style.top) };
    saveState();
  });
}

function initMgLinkDragDrop(grid, activeGroup) {
  let dragSrcId   = null;
  let dropIndicator = null;   // the thin line shown between icons
  let insertBefore  = null;   // linkId to insert before (null = append)

  function removeIndicator() {
    if (dropIndicator) { dropIndicator.remove(); dropIndicator = null; }
    grid.querySelectorAll('.mg-drag-over-left, .mg-drag-over-right').forEach(el => {
      el.classList.remove('mg-drag-over-left', 'mg-drag-over-right');
    });
    insertBefore = null;
  }

  grid.addEventListener('dragstart', e => {
    const wrap = e.target.closest('.mg-icon-wrap[data-link-id]');
    if (!wrap) return;
    dragSrcId = wrap.dataset.linkId;
    wrap.classList.add('mg-dragging');
    e.dataTransfer.effectAllowed = 'move';
    // Store IDs so tab drop targets can move the link to another group
    e.dataTransfer.setData('text/mg-link-id',  dragSrcId);
    e.dataTransfer.setData('text/mg-group-id', activeGroup.id);
    const ghost = document.createElement('canvas');
    ghost.width = ghost.height = 1;
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 0, 0);
    setTimeout(() => ghost.remove(), 0);
  });

  grid.addEventListener('dragend', () => {
    dragSrcId = null;
    removeIndicator();
    grid.querySelectorAll('.mg-icon-wrap').forEach(w => w.classList.remove('mg-dragging'));
  });

  grid.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const wrap = e.target.closest('.mg-icon-wrap[data-link-id]');
    if (!wrap || wrap.dataset.linkId === dragSrcId) { removeIndicator(); return; }

    const rect   = wrap.getBoundingClientRect();
    const isLeft = (e.clientX - rect.left) < rect.width / 2;

    // Only update if changed
    const newInsert = isLeft ? wrap.dataset.linkId : (wrap.nextElementSibling?.dataset?.linkId || null);
    if (insertBefore === newInsert &&
        wrap.classList.contains(isLeft ? 'mg-drag-over-left' : 'mg-drag-over-right')) return;

    removeIndicator();
    insertBefore = newInsert;

    // Highlight the target icon side
    wrap.classList.add(isLeft ? 'mg-drag-over-left' : 'mg-drag-over-right');

    // Draw the drop indicator line
    dropIndicator = document.createElement('div');
    dropIndicator.className = 'mg-drop-line';
    const gridRect = grid.getBoundingClientRect();
    dropIndicator.style.left = (isLeft ? rect.left : rect.right) - gridRect.left + 'px';
    dropIndicator.style.top  = rect.top  - gridRect.top  + 'px';
    dropIndicator.style.height = rect.height + 'px';
    grid.style.position = 'relative';
    grid.appendChild(dropIndicator);
  });

  grid.addEventListener('dragleave', e => {
    if (!grid.contains(e.relatedTarget)) removeIndicator();
  });

  grid.addEventListener('drop', e => {
    e.preventDefault();
    if (!dragSrcId) return;
    const targetInsertBefore = insertBefore; // capture before removeIndicator() resets it to null
    removeIndicator();

    const group = state.minimalGroups.find(g => g.id === activeGroup.id);
    if (!group) return;

    const links   = group.links;
    const fromIdx = links.findIndex(l => l.id === dragSrcId);
    if (fromIdx === -1) return;

    const [moved] = links.splice(fromIdx, 1);

    if (targetInsertBefore === null) {
      links.push(moved);
    } else {
      const toIdx = links.findIndex(l => l.id === targetInsertBefore);
      if (toIdx === -1) links.push(moved);
      else links.splice(toIdx, 0, moved);
    }

    saveState();
    renderBoards();
  });
}

function buildMgIcon(link, groupId) {
  const wrap = document.createElement('div');
  wrap.className = 'mg-icon-wrap';
  wrap.draggable = true;
  wrap.dataset.linkId = link.id;
  const anchor = document.createElement('a');
  anchor.href      = link.url;
  anchor.title     = link.title;
  anchor.target    = '_blank';
  anchor.rel       = 'noopener noreferrer';
  anchor.className = 'mg-icon-bubble';
  anchor.addEventListener('contextmenu', e => {
    e.preventDefault();
    e.stopPropagation();
    showCtxMenu(e.clientX, e.clientY, [
      { label: '✏️ Edit link',  action: () => openLinkModal('mg', groupId, link.id) },
      { label: '🔗 Copy URL',   action: () => { navigator.clipboard.writeText(link.url); toast('URL copied'); }},
      { sep: true },
      { label: '🗑 Delete',     action: () => deleteLinkPrompt('mg', groupId, link.id), danger: true },
    ]);
  });
  const img = document.createElement('img');
  img.className = 'mg-favicon';
  img.src       = getIconSrc(link);
  img.loading   = 'lazy';
  img.alt       = '';
  const fallback = document.createElement('div');
  fallback.className   = 'mg-favicon-fallback';
  fallback.textContent = (link.title || link.url).charAt(0).toUpperCase();
  fallback.style.display = 'none';
  img.addEventListener('error', () => { img.style.display = 'none'; fallback.style.display = 'flex'; });
  anchor.appendChild(img);
  anchor.appendChild(fallback);
  const label = document.createElement('span');
  label.className   = 'mg-icon-label';
  label.textContent = link.title || getDomain(link.url);
  wrap.appendChild(anchor);
  wrap.appendChild(label);
  return wrap;
}

// ─── BUILD BOARD ELEMENT ─────────────────────────────
function getDefaultBoardPos(boardId, pageId) {
  const pg = state.pages.find(p => p.id === pageId) || currentPage();
  if (!pg) return { x: 20, y: 20 };
  const idx = pg.boards.findIndex(b => b.id === boardId);
  const col = idx % 5;
  const row = Math.floor(idx / 5);
  return { x: col * 250 + 20, y: row * 320 + 20 };
}

function buildBoardEl(board, pageId) {
  const card = document.createElement('div');
  card.className    = 'board-card';
  card.dataset.boardId = board.id;

  // Set free position
  if (!board.pos) board.pos = getDefaultBoardPos(board.id, pageId);
  card.style.left = board.pos.x + 'px';
  card.style.top  = board.pos.y + 'px';

  // ── Header (drag handle) ──
  const hdr = document.createElement('div');
  hdr.className   = 'board-header';

  const title = document.createElement('div');
  title.className = 'board-title';
  title.textContent = board.name;

  // Board action buttons
  const actions = document.createElement('div');
  actions.className = 'board-actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'board-action-btn';
  editBtn.title     = 'Edit board';
  editBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
  editBtn.addEventListener('click', () => openBoardModal(pageId, board.id));

  const delBtn = document.createElement('button');
  delBtn.className = 'board-action-btn del';
  delBtn.title     = 'Delete board';
  delBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
  delBtn.addEventListener('click', () => deleteBoardPrompt(pageId, board.id));

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);
  hdr.appendChild(title);
  hdr.appendChild(actions);

  // ── Link list ──
  const linkList = document.createElement('div');
  linkList.className = 'link-list';
  linkList.id        = 'links-' + board.id;

  (board.links || []).forEach(link => {
    linkList.appendChild(buildLinkEl(link, board.id, pageId));
  });

  // ── Add-link row ──
  const addRow = document.createElement('div');
  addRow.className = 'add-link-row';
  addRow.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add link`;
  addRow.addEventListener('click', () => openLinkModal(pageId, board.id));

  card.appendChild(hdr);
  card.appendChild(linkList);
  card.appendChild(addRow);

  // ── Free Drag on header ──
  hdr.addEventListener('pointerdown', e => {
    if (e.target.closest('.board-actions')) return;
    e.preventDefault();
    const gridEl = document.getElementById('boards-grid');
    const gridRect = gridEl.getBoundingClientRect();
    const scrollLeft = document.getElementById('main-content').scrollLeft;
    const scrollTop  = document.getElementById('main-content').scrollTop;
    boardFreeDrag = {
      board, card,
      startClientX: e.clientX,
      startClientY: e.clientY,
      origX: board.pos.x,
      origY: board.pos.y,
      gridOffsetX: gridRect.left,
      gridOffsetY: gridRect.top,
    };
    card.classList.add('free-dragging');
    hdr.setPointerCapture(e.pointerId);
  });

  hdr.addEventListener('pointermove', e => {
    if (!boardFreeDrag || boardFreeDrag.card !== card) return;
    const dx = e.clientX - boardFreeDrag.startClientX;
    const dy = e.clientY - boardFreeDrag.startClientY;
    const newX = Math.max(0, boardFreeDrag.origX + dx);
    const newY = Math.max(0, boardFreeDrag.origY + dy);
    card.style.left = newX + 'px';
    card.style.top  = newY + 'px';
  });

  hdr.addEventListener('pointerup', e => {
    if (!boardFreeDrag || boardFreeDrag.card !== card) return;
    const dx = e.clientX - boardFreeDrag.startClientX;
    const dy = e.clientY - boardFreeDrag.startClientY;
    board.pos = {
      x: Math.max(0, boardFreeDrag.origX + dx),
      y: Math.max(0, boardFreeDrag.origY + dy),
    };
    card.classList.remove('free-dragging');
    boardFreeDrag = null;
    saveState();
  });

  // ── Link drop zone ──
  setupLinkDropZone(linkList, board.id, pageId);

  return card;
}

// ─── BUILD LINK ELEMENT ──────────────────────────────
function buildLinkEl(link, boardId, pageId) {
  const item = document.createElement('div');
  item.className    = 'link-item';
  item.dataset.linkId = link.id;
  item.draggable    = true;

  const faviconSrc  = getIconSrc(link);
  const fallbackChar = getDomain(link.url).charAt(0).toUpperCase();

  const favicon = document.createElement('img');
  favicon.className = 'link-favicon';
  favicon.src       = faviconSrc;
  favicon.alt       = '';
  favicon.loading   = 'lazy';

  const fallback = document.createElement('div');
  fallback.className   = 'link-favicon-fallback';
  fallback.textContent = fallbackChar;
  fallback.style.display = 'none';

  // Handle favicon load error without inline handler
  favicon.addEventListener('error', () => {
    favicon.style.display  = 'none';
    fallback.style.display = 'flex';
  });

  const textWrap = document.createElement('div');
  textWrap.className = 'link-text';

  const linkTitle = document.createElement('div');
  linkTitle.className   = 'link-title';
  linkTitle.textContent = link.title || getDomain(link.url);

  textWrap.appendChild(linkTitle);

  if (link.desc) {
    const desc = document.createElement('div');
    desc.className   = 'link-desc';
    desc.textContent = link.desc;
    textWrap.appendChild(desc);
  }

  // Action buttons
  const itemActions = document.createElement('div');
  itemActions.className = 'link-item-actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'link-act-btn';
  editBtn.title     = 'Edit';
  editBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
  editBtn.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    openLinkModal(pageId, boardId, link.id);
  });

  const delBtn = document.createElement('button');
  delBtn.className = 'link-act-btn del';
  delBtn.title     = 'Delete';
  delBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  delBtn.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    deleteLinkPrompt(pageId, boardId, link.id);
  });

  itemActions.appendChild(editBtn);
  itemActions.appendChild(delBtn);

  item.appendChild(favicon);
  item.appendChild(fallback);
  item.appendChild(textWrap);
  item.appendChild(itemActions);

  // Click to open link
  item.addEventListener('click', () => window.open(link.url, '_blank'));

  // Link DnD
  item.addEventListener('dragstart', e => {
    dragSrcLink  = item;
    dragSrcBoard = item.closest('.board-card');
    e.dataTransfer.setData('linkId',      link.id);
    e.dataTransfer.setData('fromBoardId', boardId);
    e.dataTransfer.effectAllowed = 'move';
    item.classList.add('dragging');
  });
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
    dragSrcLink = null;
  });

  return item;
}

// ─── LINK DROP ZONE ──────────────────────────────────
function setupLinkDropZone(list, boardId, pageId) {
  list.addEventListener('dragover', e => {
    if (!dragSrcLink) return;
    e.preventDefault();
    const afterEl = getDragAfterEl(list, e.clientY);
    if (afterEl) list.insertBefore(dragSrcLink, afterEl);
    else          list.appendChild(dragSrcLink);
  });
  list.addEventListener('drop', e => {
    e.stopPropagation();
    e.preventDefault();
    if (!dragSrcLink) return;
    const fromBoardId = e.dataTransfer.getData('fromBoardId');
    const linkId      = e.dataTransfer.getData('linkId');
    if (!linkId) return;
    const pg        = state.pages.find(p => p.id === pageId) || currentPage();
    if (!pg) return;
    const fromBoard = pg.boards.find(b => b.id === fromBoardId);
    const toBoard   = pg.boards.find(b => b.id === boardId);
    if (!fromBoard || !toBoard) return;
    const linkIdx = fromBoard.links.findIndex(l => l.id === linkId);
    if (linkIdx === -1) return;
    const [moved] = fromBoard.links.splice(linkIdx, 1);
    const items   = [...list.querySelectorAll('.link-item')];
    const movedEl = items.find(el => el.dataset.linkId === linkId);
    const movedIdx = movedEl ? items.indexOf(movedEl) : items.length;
    toBoard.links.splice(Math.min(movedIdx, toBoard.links.length), 0, moved);
    saveState();
    renderBoards();
  });
}

function getDragAfterEl(container, y) {
  const els = [...container.querySelectorAll('.link-item:not(.dragging)')];
  return els.reduce((closest, child) => {
    const box    = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ─── PAGE OPERATIONS ─────────────────────────────────
function switchPage(id) {
  state.settings.currentPageId = id;
  saveState();
  render();
}

let _pageEditId = null;
function openPageModal(editId = null) {
  _pageEditId = editId;
  const titleEl = document.getElementById('modal-page-title');
  const input   = document.getElementById('page-name-input');
  const btn     = document.getElementById('page-confirm-btn');
  if (editId) {
    const pg = state.pages.find(p => p.id === editId);
    titleEl.textContent = 'Rename Page';
    input.value         = pg ? pg.name : '';
    btn.textContent     = 'Save';
  } else {
    titleEl.textContent = 'New Page';
    input.value         = '';
    btn.textContent     = 'Create';
  }
  showModal('modal-page');
  setTimeout(() => input.focus(), 50);
}

function confirmPageModal() {
  const name = document.getElementById('page-name-input').value.trim();
  if (!name) { document.getElementById('page-name-input').focus(); return; }
  if (_pageEditId) {
    const pg = state.pages.find(p => p.id === _pageEditId);
    if (pg) { pg.name = name; saveState(); renderPages(); toast('Page renamed'); }
  } else {
    const pg = { id: uid(), name, boards: [] };
    state.pages.push(pg);
    state.settings.currentPageId = pg.id;
    saveState(); render(); toast('Page created ✦', 'success');
  }
  closeModal();
}

function deletePagePrompt(pageId) {
  const pg = state.pages.find(p => p.id === pageId);
  if (!pg) return;
  if (state.pages.length === 1) { toast('Cannot delete the only page', 'error'); return; }
  openConfirmModal(`Delete "${pg.name}"?`, 'This will delete all boards and links on this page.', () => {
    state.pages = state.pages.filter(p => p.id !== pageId);
    if (state.settings.currentPageId === pageId) state.settings.currentPageId = state.pages[0].id;
    saveState(); render(); toast('Page deleted');
  });
}

// ─── BOARD OPERATIONS ────────────────────────────────
let _boardEditCtx = null;
function openBoardModal(pageId = null, boardId = null) {
  // ── Minimal groups store ──
  if (pageId === 'mg') {
    _boardEditCtx = { pageId: 'mg', boardId };
    const titleEl  = document.getElementById('modal-board-title');
    const input    = document.getElementById('board-name-input');
    const btn      = document.getElementById('board-confirm-btn');
    const tintSection = document.getElementById('board-tint-section');
    if (tintSection) tintSection.style.display = 'none'; // no tint in minimal mode
    if (boardId) {
      const grp = (state.minimalGroups || []).find(g => g.id === boardId);
      titleEl.textContent = 'Rename Group';
      input.value         = grp ? grp.name : '';
      btn.textContent     = 'Save';
    } else {
      titleEl.textContent = 'New Group';
      input.value         = '';
      btn.textContent     = 'Create';
    }
    showModal('modal-board');
    setTimeout(() => input.focus(), 50);
    return;
  }

  // ── Classic boards store ──
  const pg = pageId ? state.pages.find(p => p.id === pageId) : currentPage();
  if (!pg) return;
  _boardEditCtx = { pageId: pg.id, boardId };
  const titleEl     = document.getElementById('modal-board-title');
  const input       = document.getElementById('board-name-input');
  const btn         = document.getElementById('board-confirm-btn');
  const tintSection = document.getElementById('board-tint-section');
  if (tintSection) tintSection.style.display = ''; // restore for classic mode
  const tintColor   = document.getElementById('board-tint-color');
  const tintHex     = document.getElementById('board-tint-hex');
  const tintOpacity = document.getElementById('board-tint-opacity');
  const tintOpacVal = document.getElementById('board-tint-opacity-val');
  const tintResetBtn = document.getElementById('board-tint-reset-btn');

  if (boardId) {
    const board = pg.boards.find(b => b.id === boardId);
    titleEl.textContent = 'Edit Board';
    input.value         = board ? board.name : '';
    btn.textContent     = 'Save';
    tintSection.classList.remove('hidden');

    const color = (board && board.tintColor) ? board.tintColor : '#ffffff';
    const opac  = (board && board.tintOpacity) ? board.tintOpacity : 25;
    tintColor.value         = color;
    tintHex.textContent     = color;
    tintOpacity.value       = opac;
    tintOpacVal.textContent = opac + '%';

    // Live-update hex label as colour changes
    tintColor.oninput = () => {
      tintHex.textContent = tintColor.value;
    };
    // Live-update intensity label
    tintOpacity.oninput = () => {
      tintOpacVal.textContent = tintOpacity.value + '%';
    };
    // Remove tint button
    tintResetBtn.onclick = () => {
      _boardEditCtx._clearTint = true;
      tintColor.value         = '#ffffff';
      tintHex.textContent     = '#ffffff';
      tintOpacity.value       = 25;
      tintOpacVal.textContent = '25%';
      tintResetBtn.style.display = 'none';
    };
    tintResetBtn.style.display = (board && board.tintColor) ? '' : 'none';
  } else {
    titleEl.textContent = 'New Board';
    input.value         = '';
    btn.textContent     = 'Create';
    tintSection.classList.add('hidden');
  }
  showModal('modal-board');
  setTimeout(() => input.focus(), 50);
}

function confirmBoardModal() {
  const name = document.getElementById('board-name-input').value.trim();
  if (!name) { document.getElementById('board-name-input').focus(); return; }

  // ── Minimal groups store ──
  if (_boardEditCtx.pageId === 'mg') {
    if (_boardEditCtx.boardId) {
      const grp = (state.minimalGroups || []).find(g => g.id === _boardEditCtx.boardId);
      if (grp) { grp.name = name; saveState(); renderBoards(); toast('Group renamed'); }
    } else {
      const grp = { id: uid(), name, links: [] };
      if (!state.minimalGroups) state.minimalGroups = [];
      state.minimalGroups.push(grp);
      state.settings.mgActiveGroupId = grp.id;
      saveState(); renderBoards(); toast('Group added ✦', 'success');
    }
    closeModal();
    return;
  }

  // ── Classic boards store ──
  const pg = state.pages.find(p => p.id === _boardEditCtx.pageId);
  if (!pg) return;
  if (_boardEditCtx.boardId) {
    const board = pg.boards.find(b => b.id === _boardEditCtx.boardId);
    if (board) {
      board.name = name;
      if (_boardEditCtx._clearTint) {
        board.tintColor   = null;
        board.tintOpacity = null;
      } else {
        const colorVal = document.getElementById('board-tint-color').value;
        const opacVal  = parseInt(document.getElementById('board-tint-opacity').value);
        board.tintColor   = colorVal;
        board.tintOpacity = opacVal;
      }
      saveState(); renderBoards(); applyBoardTints(); toast('Board updated');
    }
  } else {
    const board = { id: uid(), name, links: [] };
    pg.boards.push(board);
    saveState(); renderBoards(); toast('Board added ✦', 'success');
  }
  closeModal();
}

function deleteBoardPrompt(pageId, boardId) {
  // ── Minimal groups store ──
  if (pageId === 'mg') {
    const grp = (state.minimalGroups || []).find(g => g.id === boardId);
    if (!grp) return;
    openConfirmModal(`Delete "${grp.name}"?`, `All ${grp.links.length} link(s) will be removed.`, () => {
      state.minimalGroups = state.minimalGroups.filter(g => g.id !== boardId);
      if (state.settings.mgActiveGroupId === boardId) {
        state.settings.mgActiveGroupId = state.minimalGroups[0]?.id || null;
      }
      saveState(); renderBoards(); toast('Group deleted');
    });
    return;
  }
  // ── Classic boards store ──
  const pg    = state.pages.find(p => p.id === pageId);
  if (!pg) return;
  const board = pg.boards.find(b => b.id === boardId);
  if (!board) return;
  openConfirmModal(`Delete "${board.name}"?`, `All ${board.links.length} link(s) will be removed.`, () => {
    pg.boards = pg.boards.filter(b => b.id !== boardId);
    if (state.settings.mgActiveGroupId === boardId) {
      state.settings.mgActiveGroupId = pg.boards[0]?.id || null;
    }
    saveState(); renderBoards(); toast('Board deleted');
  });
}

// ─── LINK OPERATIONS ─────────────────────────────────
let _linkEditCtx = null;
let _pendingIconData = null; // holds base64 from local file picker until save

function _getEditingLink(ctx) {
  if (!ctx || !ctx.linkId) return null;
  if (ctx.pageId === 'mg') {
    const grp = (state.minimalGroups || []).find(g => g.id === ctx.boardId);
    return grp && grp.links.find(l => l.id === ctx.linkId);
  }
  const pg    = state.pages.find(p => p.id === ctx.pageId);
  const board = pg && pg.boards.find(b => b.id === ctx.boardId);
  return board && board.links.find(l => l.id === ctx.linkId);
}

function _syncIconUI(iconType, iconData) {
  const urlRow   = document.getElementById('link-icon-url-row');
  const localRow = document.getElementById('link-icon-local-row');
  const preview  = document.getElementById('link-icon-preview');
  const urlInput = document.getElementById('link-icon-url-input');

  urlRow.classList.toggle('hidden',   iconType !== 'url');
  localRow.classList.toggle('hidden', iconType !== 'local');

  let src = '';
  if (iconType === 'url')   src = urlInput ? urlInput.value.trim() : (iconData || '');
  if (iconType === 'local') src = iconData || _pendingIconData || '';

  if (src) {
    preview.src = src;
    preview.classList.remove('hidden');
  } else {
    preview.classList.add('hidden');
    preview.src = '';
  }
}

function openLinkModal(pageId, boardId, linkId = null) {
  _linkEditCtx  = { pageId, boardId, linkId };
  _pendingIconData = null;

  const titleEl   = document.getElementById('modal-link-title');
  const urlInput  = document.getElementById('link-url-input');
  const nameInput = document.getElementById('link-title-input');
  const btn       = document.getElementById('link-confirm-btn');
  const iconSel   = document.getElementById('link-icon-type');
  const iconUrlIn = document.getElementById('link-icon-url-input');
  const fileName  = document.getElementById('link-icon-file-name');
  const fileIn    = document.getElementById('link-icon-file');

  // Reset icon fields
  iconSel.value   = 'favicon';
  iconUrlIn.value = '';
  fileName.textContent = 'No file chosen';
  if (fileIn) fileIn.value = '';

  if (linkId) {
    const link = _getEditingLink({ pageId, boardId, linkId });
    if (link) {
      urlInput.value  = link.url;
      nameInput.value = link.title || '';
      // Restore icon fields
      const savedType = link.iconType || 'favicon';
      iconSel.value = savedType;
      if (savedType === 'url')   iconUrlIn.value = link.iconData || '';
      if (savedType === 'local') { _pendingIconData = link.iconData || null; fileName.textContent = link.iconData ? 'Custom icon' : 'No file chosen'; }
    }
    titleEl.textContent = 'Edit Link';
    btn.textContent     = 'Save';
  } else {
    urlInput.value      = '';
    nameInput.value     = '';
    titleEl.textContent = 'Add Link';
    btn.textContent     = 'Add Link';
  }

  _syncIconUI(iconSel.value, iconSel.value === 'local' ? _pendingIconData : (iconUrlIn.value || ''));
  showModal('modal-link');
  setTimeout(() => urlInput.focus(), 50);
}

function confirmLinkModal() {
  let url   = document.getElementById('link-url-input').value.trim();
  let title = document.getElementById('link-title-input').value.trim();
  if (!url) { document.getElementById('link-url-input').focus(); return; }
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  if (!title) {
    // Auto-derive: strip protocol, www., then remove TLD (.com/.org/etc) and capitalize
    try {
      let host = new URL(url).hostname.replace(/^www\./i, '');
      // Remove last TLD segment (.com, .net, .io, .co.uk, etc.)
      host = host.replace(/\.[^.]+$/, '').replace(/\.[^.]+$/, ''); // handles co.uk style too
      if (!host) host = getDomain(url);
      title = host.charAt(0).toUpperCase() + host.slice(1);
    } catch { title = getDomain(url); }
  }

  // ── Collect icon data ──
  const iconType = document.getElementById('link-icon-type').value;
  let iconData   = '';
  if (iconType === 'url') {
    iconData = document.getElementById('link-icon-url-input').value.trim();
  } else if (iconType === 'local') {
    iconData = _pendingIconData || '';
  }

  if (_linkEditCtx.pageId === 'mg') {
    const grp = (state.minimalGroups || []).find(g => g.id === _linkEditCtx.boardId);
    if (!grp) return;
    if (_linkEditCtx.linkId) {
      const link = grp.links.find(l => l.id === _linkEditCtx.linkId);
      if (link) { link.url = url; link.title = title; link.iconType = iconType; link.iconData = iconData; saveState(); renderBoards(); toast('Link updated'); }
    } else {
      grp.links.push({ id: uid(), title, url, desc: '', iconType, iconData });
      saveState(); renderBoards(); toast('Link added ✦', 'success');
    }
    closeModal();
    return;
  }

  const pg    = state.pages.find(p => p.id === _linkEditCtx.pageId);
  const board = pg && pg.boards.find(b => b.id === _linkEditCtx.boardId);
  if (!board) return;

  if (_linkEditCtx.linkId) {
    const link = board.links.find(l => l.id === _linkEditCtx.linkId);
    if (link) { link.url = url; link.title = title; link.iconType = iconType; link.iconData = iconData; saveState(); renderBoards(); toast('Link updated'); }
  } else {
    board.links.push({ id: uid(), title, url, desc: '', iconType, iconData });
    saveState(); renderBoards(); toast('Link added ✦', 'success');
  }
  closeModal();
}

function deleteLinkPrompt(pageId, boardId, linkId) {
  if (pageId === 'mg') {
    const grp  = (state.minimalGroups || []).find(g => g.id === boardId);
    const link = grp && grp.links.find(l => l.id === linkId);
    if (!link) return;
    openConfirmModal(`Delete "${link.title}"?`, 'This link will be removed from the group.', () => {
      grp.links = grp.links.filter(l => l.id !== linkId);
      saveState(); renderBoards(); toast('Link deleted');
    });
    return;
  }
  const pg    = state.pages.find(p => p.id === pageId);
  const board = pg && pg.boards.find(b => b.id === boardId);
  const link  = board && board.links.find(l => l.id === linkId);
  if (!link) return;
  openConfirmModal(`Delete "${link.title}"?`, 'This link will be removed from the board.', () => {
    board.links = board.links.filter(l => l.id !== linkId);
    saveState(); renderBoards(); toast('Link deleted');
  });
}

// ─── MODAL SYSTEM ────────────────────────────────────
function showModal(id) {
  document.querySelectorAll('.modal-box').forEach(m => m.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.querySelectorAll('.modal-box').forEach(m => m.classList.add('hidden'));
}
function overlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function openConfirmModal(title, msg, fn) {
  document.getElementById('confirm-title').textContent   = title;
  document.getElementById('confirm-message').textContent = msg;
  pendingConfirmFn = fn;
  showModal('modal-confirm');
}
function confirmAction() {
  if (pendingConfirmFn) { pendingConfirmFn(); pendingConfirmFn = null; }
  closeModal();
}

// ─── IMPORT ──────────────────────────────────────────
function importFromBrowser(silent, replacePageId) {
  if (!silent) closeModal();
  if (!chrome || !chrome.bookmarks) {
    if (!silent) toast('Bookmarks permission not granted', 'error');
    return;
  }
  chrome.bookmarks.getTree(tree => {
    if (chrome.runtime.lastError) {
      if (!silent) toast('Could not read bookmarks: ' + chrome.runtime.lastError.message, 'error');
      return;
    }
    const page = { id: replacePageId || uid(), name: 'Browser Bookmarks', isBrowserImport: true, boards: [] };

    // Collect a named folder and all its sub-folders as boards
    function collectFolder(node) {
      if (node.url) return;
      const title = node.title || 'Bookmarks';
      const directLinks = (node.children || []).filter(c => c.url);
      const subFolders  = (node.children || []).filter(c => !c.url && c.children && c.children.length);
      if (directLinks.length > 0) {
        page.boards.push({
          id: uid(), name: title,
          links: directLinks.map(c => ({ id: uid(), title: c.title || getDomain(c.url), url: c.url, desc: '' }))
        });
      }
      subFolders.forEach(sub => collectFolder(sub));
    }

    // processRoot walks the structural root nodes. Named nodes (Bookmarks Bar etc.)
    // are treated as folders; unnamed nodes are just stepped into.
    function processRoot(nodes) {
      nodes.forEach(node => {
        if (!node.children) return;
        if (node.title) {
          collectFolder(node);
        } else {
          processRoot(node.children);
        }
      });
    }

    processRoot(tree);

    if (page.boards.length === 0) {
      if (!silent) toast('No bookmarks found in browser', 'error');
      return;
    }
    if (replacePageId) {
      const idx = state.pages.findIndex(p => p.id === replacePageId);
      if (idx >= 0) state.pages[idx] = page; else state.pages.push(page);
    } else {
      state.pages.push(page);
    }

    // ── Mirror to minimalGroups (if user has ever used minimal mode) ──
    if (state.minimalGroups && state.minimalGroups.length > 0) {
      const allLinks = page.boards.flatMap(b =>
        (b.links || []).map(l => ({ id: uid(), title: l.title, url: l.url, desc: l.desc || '' }))
      );
      const existingMg = state.minimalGroups.find(g => g.isBrowserImport);
      if (existingMg) {
        existingMg.links = allLinks;
      } else {
        state.minimalGroups.push({ id: uid(), name: 'Browser Bookmarks', isBrowserImport: true, links: allLinks });
      }
    }

    // Only switch to the imported page on manual import, not auto-sync.
    if (!silent) {
      state.settings.currentPageId = page.id;
    }
    saveState(); render();
    if (!silent) toast(`Imported ${page.boards.reduce((s, b) => s + b.links.length, 0)} bookmarks ✦`, 'success');
  });
}

function autoSyncBrowserBookmarks() {
  if (!state.settings.autoSyncBookmarks) return;
  if (!chrome || !chrome.bookmarks) return;
  const existing = state.pages.find(p => p.isBrowserImport);
  importFromBrowser(true, existing ? existing.id : null);
}

function triggerHTMLImport() { document.getElementById('file-html-input').click(); }
function triggerTextImport() { document.getElementById('file-text-input').click(); }

function handleHTMLFile(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => { parseHTMLBookmarks(ev.target.result); closeModal(); };
  reader.readAsText(file);
  e.target.value = '';
}

function parseHTMLBookmarks(html) {
  const parser = new DOMParser();
  const doc    = parser.parseFromString(html, 'text/html');

  // Recursive DL parser — handles Netscape bookmark format
  function parseDL(dl) {
    if (!dl) return { folders: [], links: [] };
    const result = { folders: [], links: [] };
    const children = Array.from(dl.children);
    let i = 0;
    while (i < children.length) {
      const el = children[i];
      if (el.tagName === 'DT') {
        const h3 = el.querySelector(':scope > H3');
        const a  = el.querySelector(':scope > A');
        if (h3) {
          // Next sibling may be the DL for this folder
          const nextSib = children[i + 1];
          const subDL   = (nextSib && nextSib.tagName === 'DL') ? nextSib : el.querySelector('DL');
          const sub     = parseDL(subDL);
          result.folders.push({ name: h3.textContent.trim(), folders: sub.folders, links: sub.links });
          if (nextSib && nextSib.tagName === 'DL') i++; // skip consumed DL
        } else if (a) {
          let href = a.getAttribute('href') || '';
          try { new URL(href); } catch { href = ''; }
          if (href) result.links.push({ title: a.textContent.trim() || getDomain(href), url: href });
        }
      }
      i++;
    }
    return result;
  }

  const rootDL = doc.querySelector('DL');
  if (!rootDL) { toast('No bookmarks found in file', 'error'); return; }

  const tree = parseDL(rootDL);
  const importPage = { id: uid(), name: 'Imported HTML', boards: [] };

  function flattenToBoards(node, depth) {
    if (depth >= 2 || node.folders.length === 0) {
      // Treat as a board
      if (node.links.length > 0) {
        importPage.boards.push({
          id: uid(), name: node.name || 'Links',
          links: node.links.map(l => ({ id: uid(), title: l.title, url: l.url, desc: '' }))
        });
      }
      // Still recurse sub-folders
      node.folders.forEach(f => flattenToBoards(f, depth + 1));
    } else {
      node.folders.forEach(f => flattenToBoards(f, depth + 1));
      // Direct links at this level go into a misc board
      if (node.links.length > 0) {
        importPage.boards.push({
          id: uid(), name: node.name || 'Links',
          links: node.links.map(l => ({ id: uid(), title: l.title, url: l.url, desc: '' }))
        });
      }
    }
  }

  if (tree.folders.length > 0) {
    tree.folders.forEach(f => flattenToBoards(f, 1));
  }
  // Any root-level links
  if (tree.links.length > 0) {
    importPage.boards.push({
      id: uid(), name: 'General',
      links: tree.links.map(l => ({ id: uid(), title: l.title, url: l.url, desc: '' }))
    });
  }

  if (importPage.boards.length === 0) { toast('No bookmarks found in file', 'error'); return; }
  state.pages.push(importPage);
  state.settings.currentPageId = importPage.id;
  saveState(); render();
  toast(`Imported ${importPage.boards.reduce((s, b) => s + b.links.length, 0)} bookmarks ✦`, 'success');
}

function handleTextFile(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => { importFromText(ev.target.result); closeModal(); };
  reader.readAsText(file);
  e.target.value = '';
}

function importFromText(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  const links = [];
  lines.forEach(line => {
    const parts = line.split(',');
    let url = parts[0].trim(), title = parts[1] ? parts[1].trim() : '';
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    try { new URL(url); } catch { return; }
    if (!title) title = getDomain(url);
    links.push({ id: uid(), title, url, desc: '' });
  });
  if (!links.length) { toast('No valid URLs found', 'error'); return; }
  const board = { id: uid(), name: 'Imported Links', links };
  const page  = { id: uid(), name: 'Imported Text',  boards: [board] };
  state.pages.push(page);
  state.settings.currentPageId = page.id;
  saveState(); render();
  toast(`Imported ${links.length} links ✦`, 'success');
}

function importPastedURLs() {
  const text = document.getElementById('paste-urls').value;
  if (!text.trim()) return;
  importFromText(text);
  closeModal();
}

function triggerJSONImport() { document.getElementById('file-json-input').click(); }

function handleJSONFile(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!imported.pages || !Array.isArray(imported.pages)) {
        toast('Invalid ZenR JSON file', 'error'); return;
      }
      // Full restore: replace all pages, keep settings merged
      state.pages = imported.pages;
      // Restore minimal groups if present in backup
      state.minimalGroups = Array.isArray(imported.minimalGroups) ? imported.minimalGroups : [];
      if (imported.settings) {
        state.settings = Object.assign({}, DEFAULT_DATA.settings, imported.settings);
      }
      // Restore notes: new format has notes inside page.notesList; old format had state.notesList
      if (imported.notesList && imported.notesList.length > 0) {
        // Old format: global notesList. Migrate to first page.
        const firstPg = state.pages[0];
        if (firstPg) {
          if (!firstPg.notesList) firstPg.notesList = [];
          firstPg.notesList = [...imported.notesList, ...firstPg.notesList];
        }
      } else if (imported.notes) {
        // Very old single-note format
        const firstPg = state.pages[0];
        if (firstPg) {
          if (!firstPg.notesList) firstPg.notesList = [];
          firstPg.notesList.push(Object.assign({ id: uid() }, imported.notes));
        }
      }
      // Migrate old-format search/calc global settings → first page (if pages lack per-page state)
      if (imported.settings) {
        const firstPg = state.pages[0];
        if (firstPg) {
          if (firstPg.search === undefined && (imported.settings.searchEnabled || imported.settings.searchPosition)) {
            firstPg.search = {
              enabled:  !!imported.settings.searchEnabled,
              position: imported.settings.searchPosition || null,
            };
          }
          if (firstPg.calc === undefined && (imported.settings.calculatorEnabled || imported.settings.calcPos)) {
            firstPg.calc = {
              enabled: !!imported.settings.calculatorEnabled,
              pos:  imported.settings.calcPos  || { x: 100, y: 160 },
              size: imported.settings.calcSize || { w: 240,  h: 340  },
            };
          }
        }
        // Strip these from imported settings so they don't persist at global level
        delete state.settings.searchEnabled;
        delete state.settings.searchPosition;
        delete state.settings.calculatorEnabled;
        delete state.settings.calcPos;
        delete state.settings.calcSize;
      }
      // Respect imported currentPageId if that page exists; else fall back to first page
      const importedPgId = imported.settings && imported.settings.currentPageId;
      const importedPgExists = state.pages.some(p => p.id === importedPgId);
      state.settings.currentPageId = (importedPgExists ? importedPgId : null) || state.pages[0]?.id || state.settings.currentPageId;
      saveState(); render();
      updateNotesWidget();
      toast(`Restored ${state.pages.length} page(s) from JSON ✦`, 'success');
    } catch { toast('Failed to parse JSON file', 'error'); }
    closeModal();
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ─── EXPORT ──────────────────────────────────────────
function exportJSON() {
  const data = JSON.stringify(state, null, 2);
  downloadFile('zenr-newtab.json', data, 'application/json');
  toast('Exported JSON ✦', 'success'); closeModal();
}

function exportHTML() {
  let html = '<!DOCTYPE NETSCAPE-Bookmark-file-1>\n<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">\n<TITLE>Bookmarks</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n';
  state.pages.forEach(page => {
    html += `  <DT><H3>${esc(page.name)}</H3>\n  <DL><p>\n`;
    (page.boards || []).forEach(board => {
      html += `    <DT><H3>${esc(board.name)}</H3>\n    <DL><p>\n`;
      (board.links || []).forEach(link => {
        html += `      <DT><A HREF="${esc(link.url)}">${esc(link.title)}</A>\n`;
      });
      html += `    </DL><p>\n`;
    });
    html += `  </DL><p>\n`;
  });
  html += '</DL><p>';
  downloadFile('zenr-newtab.html', html, 'text/html');
  toast('Exported HTML ✦', 'success'); closeModal();
}

function downloadFile(name, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ─── BACKGROUND SYSTEM ───────────────────────────────
const GRADIENTS = {
  'default':  { label: 'Tron · Default', css: 'linear-gradient(135deg,#080c14 0%,#0d1220 50%,#060a10 100%)' },
  'midnight': { label: 'Midnight', css: 'linear-gradient(135deg,#0f0c29,#302b63,#1a1a2e)' },
  'aurora':   { label: 'Aurora',   css: 'linear-gradient(135deg,#011318 0%,#0a2a1a 40%,#071a10 100%)' },
  'ember':    { label: 'Ember',    css: 'linear-gradient(135deg,#1a0808,#2d1205,#3d1500)' },
  'ocean':    { label: 'Ocean',    css: 'linear-gradient(135deg,#050d1a 0%,#0a1a30 60%,#020810 100%)' },
  'graphite': { label: 'Graphite', css: 'linear-gradient(135deg,#141414,#1e1e1e,#0f0f0f)' },
  'rose':     { label: 'Rose',     css: 'linear-gradient(135deg,#1a0a10,#2d0f1a,#1a0a10)' },
  'jade':     { label: 'Jade',     css: 'linear-gradient(135deg,#020d0a,#061a12,#020d0a)' },
};

function buildGradientGrid() {
  const grid = document.getElementById('gradient-grid');
  const DEFAULT_BG = (typeof chrome !== 'undefined' && chrome.runtime)
    ? chrome.runtime.getURL('default-bg.jpg') : 'default-bg.jpg';
  grid.innerHTML = '';
  Object.entries(GRADIENTS).forEach(([key, g]) => {
    const isSelected = state.settings.bgType === 'gradient' && state.settings.bgGradient === key;
    const swatch = document.createElement('div');
    swatch.className  = 'gradient-swatch' + (isSelected ? ' selected' : '');
    swatch.dataset.key = key;
    if (key === 'default') {
      swatch.style.backgroundImage    = `url(${DEFAULT_BG})`;
      swatch.style.backgroundSize     = 'cover';
      swatch.style.backgroundPosition = 'center';
    } else {
      swatch.style.background = g.css;
    }
    const label = document.createElement('span');
    label.textContent = g.label;
    swatch.appendChild(label);
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.gradient-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      setGradientBg(key);
    });
    grid.appendChild(swatch);
  });
}
function setGradientBg(key) {
  state.settings.bgType     = 'gradient';
  state.settings.bgGradient = key;
  const layer = document.getElementById('bg-layer');
  const DEFAULT_BG = (typeof chrome !== 'undefined' && chrome.runtime)
    ? chrome.runtime.getURL('default-bg.jpg') : 'default-bg.jpg';
  if (key === 'default') {
    layer.style.background         = '';
    layer.style.backgroundImage    = `url(${DEFAULT_BG})`;
    layer.style.backgroundSize     = 'cover';
    layer.style.backgroundPosition = 'center';
  } else {
    layer.style.background      = GRADIENTS[key].css;
    layer.style.backgroundImage = '';
  }
  document.getElementById('bg-video').style.display = 'none';
  saveState();
  buildGradientGrid();
}

async function handleBgImage(e) {
  const files = Array.from(e.target.files); if (!files.length) return;
  await clearAllVideos(true);
  const base = state.settings.bgImageCount || 0;
  for (let i = 0; i < files.length; i++) {
    await dbSet('bg-image-' + (base + i), files[i]);
  }
  state.settings.bgImageCount = base + files.length;
  state.settings.bgType = 'image';
  // Auto-enable auto-change when total > 1
  if (state.settings.bgImageCount > 1) {
    state.settings.bgImageAutoChange = true;
    const tog = document.getElementById('toggle-auto-change-img');
    if (tog) tog.checked = true;
  }
  if (!state.settings.bgImageAutoChange) state.settings.bgImageIndex = base;
  saveState();
  await loadBackground();
  await renderMediaList('image');
  updateBgSourceBar();
  e.target.value = '';
  toast(`Added ${files.length} image${files.length > 1 ? 's' : ''} — auto-change ${state.settings.bgImageCount > 1 ? 'enabled ✦' : ''}`, 'success');
}

async function handleBgVideo(e) {
  const files = Array.from(e.target.files); if (!files.length) return;
  await clearAllImages(true);
  const base = state.settings.bgVideoCount || 0;
  for (let i = 0; i < files.length; i++) {
    await dbSet('bg-video-' + (base + i), files[i]);
  }
  state.settings.bgVideoCount = base + files.length;
  state.settings.bgType = 'video';
  // Auto-enable auto-change when total > 1
  if (state.settings.bgVideoCount > 1) {
    state.settings.bgVideoAutoChange = true;
    const tog = document.getElementById('toggle-auto-change-vid');
    if (tog) tog.checked = true;
  }
  if (!state.settings.bgVideoAutoChange) state.settings.bgVideoIndex = base;
  saveState();
  await loadBackground();
  await renderMediaList('video');
  updateBgSourceBar();
  e.target.value = '';
  toast(`Added ${files.length} video${files.length > 1 ? 's' : ''} — auto-change ${state.settings.bgVideoCount > 1 ? 'enabled ✦' : ''}`, 'success');
}

async function clearAllImages(silent) {
  const count = state.settings.bgImageCount || 0;
  for (let i = 0; i < count; i++) await dbDel('bg-image-' + i);
  state.settings.bgImageCount = 0;
  state.settings.bgImageIndex = 0;
  if (!silent) {
    state.settings.bgType = 'gradient';
    saveState(); await loadBackground();
    await renderMediaList('image');
    updateBgSourceBar();
    toast('Local images cleared');
  }
}

async function clearAllVideos(silent) {
  const count = state.settings.bgVideoCount || 0;
  for (let i = 0; i < count; i++) await dbDel('bg-video-' + i);
  state.settings.bgVideoCount = 0;
  state.settings.bgVideoIndex = 0;
  if (!silent) {
    state.settings.bgType = 'gradient';
    saveState(); await loadBackground();
    await renderMediaList('video');
    updateBgSourceBar();
    toast('Local videos cleared');
  }
}

// Legacy clear (for reset)
async function clearBgMedia(type) {
  if (type === 'image') await clearAllImages(false);
  else await clearAllVideos(false);
}

// ─── CLEAR HELPERS ────────────────────────────────────
async function clearPixabayImages() {
  state.settings.pixabayImages      = [];
  state.settings.pixabayImageIndex  = 0;
  state.settings.pixabayImageQuery  = '';
  const qEl = document.getElementById('pxb-img-query');
  if (qEl) qEl.value = '';
  const resEl = document.getElementById('pxb-img-results');
  if (resEl) resEl.innerHTML = '';
  const statusEl = document.getElementById('pxb-img-status');
  if (statusEl) { statusEl.textContent = ''; statusEl.classList.add('hidden'); }
  const toggleRow = document.getElementById('pxb-auto-change-image-row');
  if (toggleRow) toggleRow.classList.remove('visible');
  if (state.settings.bgType === 'pixabay-image') {
    state.settings.bgType = 'gradient';
    await loadBackground();
  }
  saveState();
  updateBgSourceBar();
  toast('Pixabay images cleared');
}

async function clearPixabayVideos() {
  state.settings.pixabayVideos      = [];
  state.settings.pixabayVideoIndex  = 0;
  state.settings.pixabayQuery       = '';
  const qEl = document.getElementById('pxb-query');
  if (qEl) qEl.value = '';
  const resEl = document.getElementById('pxb-results');
  if (resEl) resEl.innerHTML = '';
  const statusEl = document.getElementById('pxb-status');
  if (statusEl) { statusEl.textContent = ''; statusEl.classList.add('hidden'); }
  const toggleRow = document.getElementById('pxb-auto-change-video-row');
  if (toggleRow) toggleRow.classList.remove('visible');
  if (state.settings.bgType === 'pixabay') {
    state.settings.bgType = 'gradient';
    await loadBackground();
  }
  saveState();
  updateBgSourceBar();
  toast('Pixabay videos cleared');
}

async function clearAllImageSources() {
  await clearPixabayImages();
  await clearAllImages(true);   // silent — we'll handle UI ourselves
  state.settings.bgType = 'gradient';
  saveState();
  await loadBackground();
  await renderMediaList('image');
  buildGradientGrid();
  updateBgSourceBar();
  // switch wallpaper modal to gradient tab
  document.querySelectorAll('.wp-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'gradient'));
  document.querySelectorAll('.wp-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('wp-gradient')?.classList.remove('hidden');
  toast('All image backgrounds cleared — reset to gradient', 'success');
}

async function clearAllVideoSources() {
  await clearPixabayVideos();
  await clearAllVideos(true);   // silent
  state.settings.bgType = 'gradient';
  saveState();
  await loadBackground();
  await renderMediaList('video');
  buildGradientGrid();
  updateBgSourceBar();
  document.querySelectorAll('.wp-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'gradient'));
  document.querySelectorAll('.wp-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('wp-gradient')?.classList.remove('hidden');
  toast('All video backgrounds cleared — reset to gradient', 'success');
}

// Update the source bar labels and button states for both image/video tabs
function updateBgSourceBar() {
  const type = state.settings.bgType || 'gradient';

  // ── Image bar ──
  const imgText = document.getElementById('bg-source-text-image');
  const pxbImgBtn   = document.getElementById('bg-clear-pxb-img');
  const localImgBtn = document.getElementById('bg-clear-local-img');
  const allImgBtn   = document.getElementById('bg-clear-all-img');

  const hasPxbImg   = (state.settings.pixabayImages  || []).length > 0;
  const hasLocalImg = (state.settings.bgImageCount   || 0) > 0;

  if (imgText) {
    if (type === 'pixabay-image') {
      imgText.textContent = `Active: Pixabay images (${(state.settings.pixabayImages||[]).length} loaded)`;
      imgText.classList.add('bs-active');
    } else if (type === 'image') {
      imgText.textContent = `Active: local images (${state.settings.bgImageCount || 0} file${(state.settings.bgImageCount||0)!==1?'s':''})`;
      imgText.classList.add('bs-active');
    } else {
      imgText.textContent = hasPxbImg || hasLocalImg ? 'Not active — select one below' : 'No images loaded yet';
      imgText.classList.remove('bs-active');
    }
  }
  if (pxbImgBtn)   pxbImgBtn.disabled   = !hasPxbImg;
  if (localImgBtn) localImgBtn.disabled  = !hasLocalImg;
  if (allImgBtn)   allImgBtn.disabled    = (!hasPxbImg && !hasLocalImg);

  // ── Video bar ──
  const vidText = document.getElementById('bg-source-text-video');
  const pxbVidBtn   = document.getElementById('bg-clear-pxb-vid');
  const localVidBtn = document.getElementById('bg-clear-local-vid');
  const allVidBtn   = document.getElementById('bg-clear-all-vid');

  const hasPxbVid   = (state.settings.pixabayVideos  || []).length > 0;
  const hasLocalVid = (state.settings.bgVideoCount   || 0) > 0;

  if (vidText) {
    if (type === 'pixabay') {
      vidText.textContent = `Active: Pixabay videos (${(state.settings.pixabayVideos||[]).length} loaded)`;
      vidText.classList.add('bs-active');
    } else if (type === 'video') {
      vidText.textContent = `Active: local videos (${state.settings.bgVideoCount || 0} file${(state.settings.bgVideoCount||0)!==1?'s':''})`;
      vidText.classList.add('bs-active');
    } else {
      vidText.textContent = hasPxbVid || hasLocalVid ? 'Not active — select one below' : 'No videos loaded yet';
      vidText.classList.remove('bs-active');
    }
  }
  if (pxbVidBtn)   pxbVidBtn.disabled   = !hasPxbVid;
  if (localVidBtn) localVidBtn.disabled  = !hasLocalVid;
  if (allVidBtn)   allVidBtn.disabled    = (!hasPxbVid && !hasLocalVid);
}

async function removeMediaItem(type, index) {
  const countKey = type === 'image' ? 'bgImageCount' : 'bgVideoCount';
  const idxKey   = type === 'image' ? 'bgImageIndex' : 'bgVideoIndex';
  const prefix   = type === 'image' ? 'bg-image-' : 'bg-video-';
  const total    = state.settings[countKey] || 0;

  // Shift remaining items down
  await dbDel(prefix + index);
  for (let i = index + 1; i < total; i++) {
    const f = await dbGet(prefix + i);
    if (f) await dbSet(prefix + (i - 1), f);
    await dbDel(prefix + i);
  }
  state.settings[countKey] = Math.max(0, total - 1);
  if (state.settings[idxKey] >= state.settings[countKey]) {
    state.settings[idxKey] = Math.max(0, state.settings[countKey] - 1);
  }
  if (state.settings[countKey] === 0) state.settings.bgType = 'gradient';
  saveState();
  await loadBackground();
  await renderMediaList(type);
}

async function renderMediaList(type) {
  const listEl = document.getElementById(type === 'image' ? 'media-list-images' : 'media-list-videos');
  if (!listEl) return;
  const prefix   = type === 'image' ? 'bg-image-' : 'bg-video-';
  const countKey = type === 'image' ? 'bgImageCount' : 'bgVideoCount';
  const idxKey   = type === 'image' ? 'bgImageIndex' : 'bgVideoIndex';
  const total    = state.settings[countKey] || 0;
  const curIdx   = state.settings[idxKey] || 0;
  listEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    try {
      const file = await dbGet(prefix + i);
      if (!file) continue;
      const item = document.createElement('div');
      item.className = 'media-item' + (state.settings.bgType === type && i === curIdx ? ' active-media' : '');
      item.innerHTML = `
        <span class="media-item-name">${file.name}</span>
        ${i === curIdx && state.settings.bgType === type ? '<span class="media-item-badge">active</span>' : ''}
        <button class="media-item-del" title="Remove" data-i="${i}">&#215;</button>`;
      item.querySelector('.media-item-del').addEventListener('click', () => removeMediaItem(type, i));
      listEl.appendChild(item);
    } catch {}
  }
  // Show/hide upload zone
  const zone = document.getElementById(type === 'image' ? 'img-upload-zone' : 'vid-upload-zone');
  if (zone) zone.style.display = total > 0 ? 'none' : '';
  // Show add-more link if already have items
  let addMore = listEl.parentElement.querySelector('.add-more-btn');
  if (total > 0 && !addMore) {
    addMore = document.createElement('button');
    addMore.className = 'btn-accent-sm add-more-btn';
    addMore.textContent = '+ Add more ' + (type === 'image' ? 'images' : 'videos');
    addMore.style.marginTop = '6px';
    addMore.addEventListener('click', () =>
      document.getElementById(type === 'image' ? 'bg-img-input' : 'bg-vid-input').click());
    listEl.parentElement.insertBefore(addMore, listEl.nextSibling);
  } else if (total === 0 && addMore) {
    addMore.remove();
  }
}

// ─── PIXABAY VIDEO SEARCH ────────────────────────────
async function pixabaySearch() {
  const query = document.getElementById('pxb-query').value.trim();
  const btn   = document.getElementById('pxb-search-btn');
  const key   = (state.settings.pixabayApiKey || '').trim();

  if (!key) {
    showPxbStatus('Please save your Pixabay API key first.', true);
    return;
  }
  if (!query) {
    showPxbStatus('Please enter a search term.', true);
    return;
  }

  state.settings.pixabayQuery = query;
  saveState();

  btn.disabled = true;
  showPxbStatus('Searching…', false);

  try {
    const url = `https://pixabay.com/api/videos/?key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}&per_page=18&safesearch=true&order=popular`;
    const res  = await fetch(url);
    if (res.status === 400 || res.status === 403) {
      showPxbStatus('Invalid API key — please check and save it again.', true);
      return;
    }
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json();

    if (!data.hits || data.hits.length === 0) {
      showPxbStatus('No videos found. Try a different term.', true);
      state.settings.pixabayVideos = [];
      saveState();
      renderPixabayResults();
      return;
    }

    state.settings.pixabayVideos = data.hits.map(hit => {
      const vs = hit.videos;
      const v  = vs.medium || vs.small || vs.large || vs.tiny;
      return { id: hit.id, url: v.url, thumb: hit.videos.tiny?.thumbnail || '' };
    }).filter(v => v.url);

    state.settings.pixabayVideoIndex = 0;
    state.settings.bgType = 'pixabay';
    saveState();

    showPxbStatus(`${state.settings.pixabayVideos.length} videos found`, false);
    renderPixabayResults();
    loadBackground();
    applyBgControls();
    updateBgSourceBar();
  } catch (err) {
    showPxbStatus('Could not fetch videos — check your connection.', true);
  } finally {
    btn.disabled = false;
  }
}

// Sync API key UI across both Image and Video Pixabay sections
function syncPxbKeyUI() {
  const key      = (state.settings.pixabayApiKey || '').trim();
  const hasSaved = key.length > 0;
  const masked   = hasSaved ? key.slice(0, 6) + '••••••••••••••••••••' : '';

  ['img', 'vid'].forEach(type => {
    const rowEl   = document.getElementById(`pxb-key-row-${type}`);
    const search  = document.getElementById(`pxb-search-area-${type}`);
    const savedEl = document.getElementById(`pxb-key-saved-${type}`);
    const maskedEl= document.getElementById(`pxb-key-masked-${type}`);
    const inputEl = document.getElementById(`pxb-key-input-${type}`);
    if (!rowEl) return;

    if (hasSaved) {
      if (maskedEl) maskedEl.textContent = masked;
      if (savedEl)  savedEl.classList.remove('hidden');
      if (rowEl)    rowEl.classList.add('hidden');
      if (search)   search.classList.remove('pxb-locked');
    } else {
      if (savedEl)  savedEl.classList.add('hidden');
      if (rowEl)    rowEl.classList.remove('hidden');
      if (inputEl)  inputEl.value = '';
      if (search)   search.classList.add('pxb-locked');
    }
  });
}

function savePxbKey(type) {
  const inputEl = document.getElementById(`pxb-key-input-${type}`);
  const raw     = (inputEl ? inputEl.value : '').trim();
  if (!raw) { toast('Please paste your Pixabay API key.', 'error'); return; }
  state.settings.pixabayApiKey = raw;
  saveState();
  syncPxbKeyUI();
  toast('Pixabay API key saved ✓', 'success');
}

function removePxbKey() {
  state.settings.pixabayApiKey = '';
  state.settings.pixabayVideos = [];
  state.settings.pixabayImages = [];
  saveState();
  syncPxbKeyUI();
  renderPixabayResults();
  renderPixabayImageResults();
  toast('Pixabay API key removed.', 'info');
}

function showPxbStatus(msg, isError) {
  const el = document.getElementById('pxb-status');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden', 'pxb-error');
  if (isError) el.classList.add('pxb-error');
}

function renderPixabayResults() {
  const container = document.getElementById('pxb-results');
  if (!container) return;
  container.innerHTML = '';
  const videos  = state.settings.pixabayVideos || [];
  const curIdx  = state.settings.pixabayVideoIndex || 0;
  const isActive = state.settings.bgType === 'pixabay';
  const autoOn   = !!state.settings.pixabayVideoAutoChange;

  // Show/hide the auto-change toggle row
  const toggleRow = document.getElementById('pxb-auto-change-video-row');
  if (toggleRow) toggleRow.classList.toggle('visible', videos.length > 1);

  videos.forEach((v, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'pxb-thumb' + (isActive && i === curIdx ? ' active' : '');
    thumb.title = 'Click to set as background';

    const img = document.createElement('img');
    img.src    = v.thumb;
    img.alt    = '';
    img.loading = 'lazy';

    const play = document.createElement('div');
    play.className = 'pxb-play';
    play.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="white" opacity="0.9"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

    thumb.appendChild(img);
    thumb.appendChild(play);

    if (isActive && i === curIdx) {
      const badge = document.createElement('span');
      badge.className = 'pxb-active-badge';
      badge.textContent = autoOn ? '↻ AUTO' : 'LIVE';
      thumb.appendChild(badge);
    }

    thumb.addEventListener('click', () => {
      state.settings.pixabayVideoIndex = i;
      state.settings.bgType = 'pixabay';
      _pxbManualSelect = true;
      saveState();
      renderPixabayResults();
      loadBackground();
      applyBgControls();
    });

    container.appendChild(thumb);
  });
}

// ─── PIXABAY IMAGE SEARCH ────────────────────────────
async function pixabayImageSearch() {
  const query = document.getElementById('pxb-img-query').value.trim();
  const btn   = document.getElementById('pxb-img-search-btn');
  const key   = (state.settings.pixabayApiKey || '').trim();

  if (!key) {
    showPxbImgStatus('Please save your Pixabay API key first.', true);
    return;
  }
  if (!query) {
    showPxbImgStatus('Please enter a search term.', true);
    return;
  }

  state.settings.pixabayImageQuery = query;
  saveState();

  btn.disabled = true;
  showPxbImgStatus('Searching…', false);

  try {
    const url = `https://pixabay.com/api/?key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}&per_page=18&safesearch=true&order=popular&image_type=photo&orientation=horizontal`;
    const res  = await fetch(url);
    if (res.status === 400 || res.status === 403) {
      showPxbImgStatus('Invalid API key — please check and save it again.', true);
      return;
    }
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json();

    if (!data.hits || data.hits.length === 0) {
      showPxbImgStatus('No images found. Try a different term.', true);
      state.settings.pixabayImages = [];
      saveState();
      renderPixabayImageResults();
      return;
    }

    state.settings.pixabayImages = data.hits.map(hit => ({
      id:    hit.id,
      url:   hit.largeImageURL,
      thumb: hit.previewURL,
      tags:  hit.tags || '',
    }));

    state.settings.pixabayImageIndex = 0;
    state.settings.bgType = 'pixabay-image';
    saveState();

    showPxbImgStatus(`${state.settings.pixabayImages.length} images found`, false);
    renderPixabayImageResults();
    loadBackground();
    applyBgControls();
    updateBgSourceBar();
  } catch (err) {
    showPxbImgStatus('Could not fetch images — check your connection.', true);
  } finally {
    btn.disabled = false;
  }
}

function showPxbImgStatus(msg, isError) {
  const el = document.getElementById('pxb-img-status');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden', 'pxb-error');
  if (isError) el.classList.add('pxb-error');
}

function renderPixabayImageResults() {
  const container = document.getElementById('pxb-img-results');
  if (!container) return;
  container.innerHTML = '';
  const images  = state.settings.pixabayImages || [];
  const curIdx  = state.settings.pixabayImageIndex || 0;
  const isActive = state.settings.bgType === 'pixabay-image';
  const autoOn   = !!state.settings.pixabayImageAutoChange;

  // Show/hide the auto-change toggle row
  const toggleRow = document.getElementById('pxb-auto-change-image-row');
  if (toggleRow) toggleRow.classList.toggle('visible', images.length > 1);

  images.forEach((img, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'pxb-thumb' + (isActive && i === curIdx ? ' active' : '');
    thumb.title = 'Click to set as background';

    const imgEl = document.createElement('img');
    imgEl.src     = img.thumb;
    imgEl.alt     = img.tags;
    imgEl.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'pxb-play';
    overlay.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" opacity="0.9"><polyline points="9 18 15 12 9 6"/></svg>`;

    thumb.appendChild(imgEl);
    thumb.appendChild(overlay);

    if (isActive && i === curIdx) {
      const badge = document.createElement('span');
      badge.className = 'pxb-active-badge';
      badge.textContent = autoOn ? '↻ AUTO' : 'LIVE';
      thumb.appendChild(badge);
    }

    thumb.addEventListener('click', () => {
      state.settings.pixabayImageIndex = i;
      state.settings.bgType = 'pixabay-image';
      _pxbManualSelect = true;
      saveState();
      renderPixabayImageResults();
      loadBackground();
      applyBgControls();
    });

    container.appendChild(thumb);
  });
}

async function loadBackground() {
  const type  = state.settings.bgType || 'gradient';   // fallback for saved states missing bgType
  const layer = document.getElementById('bg-layer');
  const vid   = document.getElementById('bg-video');
  const DEFAULT_BG = (typeof chrome !== 'undefined' && chrome.runtime)
    ? chrome.runtime.getURL('default-bg.jpg') : 'default-bg.jpg';

  function showDefaultBg() {
    layer.style.background         = '';
    layer.style.backgroundImage    = `url(${DEFAULT_BG})`;
    layer.style.backgroundSize     = 'cover';
    layer.style.backgroundPosition = 'center';
    vid.style.display = 'none';
  }

  if (type === 'gradient') {
    const key = state.settings.bgGradient || 'default';
    if (key === 'default') {
      showDefaultBg();
    } else {
      layer.style.background      = GRADIENTS[key] ? GRADIENTS[key].css : GRADIENTS.default.css;
      layer.style.backgroundImage = '';
      vid.style.display = 'none';
    }
  } else if (type === 'image') {
    try {
      const total = state.settings.bgImageCount || 0;
      if (total === 0) { showDefaultBg(); }
      else {
        if (state.settings.bgImageAutoChange && total > 1) {
          state.settings.bgImageIndex = ((state.settings.bgImageIndex || 0) + 1) % total;
          saveState();
        }
        const idx  = (state.settings.bgImageIndex || 0) % total;
        const file = await dbGet('bg-image-' + idx);
        if (file) {
          const url = URL.createObjectURL(file);
          layer.style.background         = '';
          layer.style.backgroundImage    = `url(${url})`;
          layer.style.backgroundSize     = 'cover';
          layer.style.backgroundPosition = 'center';
          vid.style.display = 'none';
        } else { showDefaultBg(); }
      }
    } catch { showDefaultBg(); }
  } else if (type === 'video') {
    try {
      const total = state.settings.bgVideoCount || 0;
      if (total === 0) { showDefaultBg(); }
      else {
        if (state.settings.bgVideoAutoChange && total > 1) {
          state.settings.bgVideoIndex = ((state.settings.bgVideoIndex || 0) + 1) % total;
          saveState();
        }
        const idx  = (state.settings.bgVideoIndex || 0) % total;
        const file = await dbGet('bg-video-' + idx);
        if (file) {
          vid.src           = URL.createObjectURL(file);
          vid.style.display = 'block';
          layer.style.backgroundImage = '';
          layer.style.background      = '#000';
        } else { showDefaultBg(); }
      }
    } catch { showDefaultBg(); }
  } else if (type === 'pixabay') {
    const videos = state.settings.pixabayVideos || [];
    if (videos.length === 0) { showDefaultBg(); }
    else {
      if (!_pxbManualSelect && state.settings.pixabayVideoAutoChange && videos.length > 1) {
        state.settings.pixabayVideoIndex = ((state.settings.pixabayVideoIndex || 0) + 1) % videos.length;
        saveState();
      }
      _pxbManualSelect = false;
      const idx    = (state.settings.pixabayVideoIndex || 0) % videos.length;
      const videoUrl = videos[idx]?.url;
      if (videoUrl) {
        if (vid.dataset.pxbUrl !== videoUrl) {
          vid.src = videoUrl;
          vid.dataset.pxbUrl = videoUrl;
        }
        vid.style.display = 'block';
        layer.style.backgroundImage = '';
        layer.style.background      = '#000';
        vid.play().catch(() => {});
      } else { showDefaultBg(); }
    }
  } else if (type === 'pixabay-image') {
    const images = state.settings.pixabayImages || [];
    if (images.length === 0) { showDefaultBg(); }
    else {
      if (!_pxbManualSelect && state.settings.pixabayImageAutoChange && images.length > 1) {
        state.settings.pixabayImageIndex = ((state.settings.pixabayImageIndex || 0) + 1) % images.length;
        saveState();
      }
      _pxbManualSelect = false;
      const idx    = (state.settings.pixabayImageIndex || 0) % images.length;
      const imgUrl = images[idx]?.url;
      if (imgUrl) {
        layer.style.background         = '';
        layer.style.backgroundImage    = `url(${imgUrl})`;
        layer.style.backgroundSize     = 'cover';
        layer.style.backgroundPosition = 'center';
        vid.style.display = 'none';
      } else { showDefaultBg(); }
    }
  }
  applyBgControls();}

function updateBgControls() {
  const opacity = document.getElementById('ctrl-overlay').value;
  const blur    = document.getElementById('ctrl-blur').value;
  document.getElementById('ctrl-overlay-val').textContent = opacity + '%';
  document.getElementById('ctrl-blur-val').textContent    = blur + 'px';
  state.settings.overlayOpacity = parseInt(opacity);
  state.settings.overlayBlur    = parseInt(blur);
  saveState();
  applyBgControls();
}

function applyBgControls() {
  const opacity = (state.settings.overlayOpacity ?? 50) / 100;
  const blur    = state.settings.overlayBlur ?? 0;
  const overlay = document.getElementById('bg-overlay');
  overlay.style.background          = `rgba(0,0,0,${opacity})`;
  overlay.style.backdropFilter      = blur > 0 ? `blur(${blur}px)` : '';
  overlay.style.webkitBackdropFilter = blur > 0 ? `blur(${blur}px)` : '';
}

async function syncWallpaperControls() {
  document.getElementById('ctrl-overlay').value                = state.settings.overlayOpacity ?? 50;
  document.getElementById('ctrl-blur').value                   = state.settings.overlayBlur ?? 0;
  document.getElementById('ctrl-overlay-val').textContent      = (state.settings.overlayOpacity ?? 50) + '%';
  document.getElementById('ctrl-blur-val').textContent         = (state.settings.overlayBlur ?? 0) + 'px';

  // Sync auto-change checkboxes
  document.getElementById('toggle-auto-change-img').checked = !!state.settings.bgImageAutoChange;
  document.getElementById('toggle-auto-change-vid').checked = !!state.settings.bgVideoAutoChange;
  document.getElementById('toggle-pxb-auto-change-img').checked = !!state.settings.pixabayImageAutoChange;
  document.getElementById('toggle-pxb-auto-change-vid').checked = !!state.settings.pixabayVideoAutoChange;

  // Populate media lists
  await renderMediaList('image');
  await renderMediaList('video');

  // Restore Pixabay UI state
  const pxbQueryEl    = document.getElementById('pxb-query');
  const pxbImgQueryEl = document.getElementById('pxb-img-query');
  if (pxbQueryEl    && state.settings.pixabayQuery)      pxbQueryEl.value    = state.settings.pixabayQuery;
  if (pxbImgQueryEl && state.settings.pixabayImageQuery) pxbImgQueryEl.value = state.settings.pixabayImageQuery;
  syncPxbKeyUI();
  renderPixabayResults();
  renderPixabayImageResults();

  // Activate the correct tab based on current bgType
  const tabMap = { gradient: 'gradient', image: 'image', video: 'video', pixabay: 'video', 'pixabay-image': 'image' };
  const tab = tabMap[state.settings.bgType] || 'gradient';
  document.querySelectorAll('.wp-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.querySelectorAll('.wp-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('wp-' + tab)?.classList.remove('hidden');

  updateBgSourceBar();
}

function wpTab(btn, tab) {
  document.querySelectorAll('.wp-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.wp-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('wp-' + tab).classList.remove('hidden');
}

// ─── SETTINGS PANEL (right side) ─────────────────────
function openSettingsPanel() {
  document.getElementById('modal-settings').classList.add('panel-open');
}
function closeSettingsPanel() {
  document.getElementById('modal-settings').classList.remove('panel-open');
}

// ─── SETTINGS ────────────────────────────────────────
function applySettings() {
  applyAccent(state.settings.accentColor || '#4fffb0');
  applyCardBlur(state.settings.cardBlur ?? 20);
  applyFont(state.settings.uiFont || 'DM Sans');
  document.getElementById('accent-color-input').value    = state.settings.accentColor || '#4fffb0';
  document.getElementById('card-blur-input').value       = state.settings.cardBlur ?? 20;
  document.getElementById('card-blur-val').textContent   = (state.settings.cardBlur ?? 20) + 'px';
  document.getElementById('font-select').value           = state.settings.uiFont || 'DM Sans';
  document.getElementById('toggle-clock').checked        = isClockEnabled();
  document.getElementById('toggle-seconds').checked      = state.settings.clockSeconds !== false;
  document.getElementById('clock-format-select').value   = state.settings.clockFormat || '24h';
  document.getElementById('clock-style-select').value    = getClockStyle();
  document.getElementById('toggle-auto-sync').checked    = !!state.settings.autoSyncBookmarks;
  const tabTitle = state.settings.tabTitle || 'ZenR-NewTab';
  document.getElementById('tab-title-input').value = tabTitle;
  document.title = tabTitle;
  const clockSize = state.settings.clockSize ?? 100;
  document.getElementById('clock-size-val').textContent  = clockSize + '%';
  const clockOn = isClockEnabled();
  document.getElementById('clock-sub-settings').style.display = clockOn ? 'block' : 'none';
  document.getElementById('toggle-liquid-glass').checked  = !!state.settings.liquidGlass;
  document.getElementById('lg-sub-settings').classList.toggle('lg-open', !!state.settings.liquidGlass);
  syncLGSliders();
  applyLiquidGlass(!!state.settings.liquidGlass);
  updateClock();
  // Notes widget toggle
  const notesToggle = document.getElementById('toggle-notes');
  if (notesToggle) notesToggle.checked = isNotesEnabled();
  try { updateNotesWidget(); } catch(e) { console.warn('Notes widget error:', e); }
  // Search widget
  const searchToggle = document.getElementById('toggle-search');
  if (searchToggle) searchToggle.checked = !!getPageSearch().enabled;
  const searchSugToggle = document.getElementById('toggle-search-suggestions');
  if (searchSugToggle) searchSugToggle.checked = state.settings.searchSuggestions !== false;
  const searchNTToggle = document.getElementById('toggle-search-newtab');
  if (searchNTToggle) searchNTToggle.checked = !!state.settings.searchNewTab;
  const searchEngSel = document.getElementById('search-engine-select');
  if (searchEngSel) searchEngSel.value = state.settings.searchEngine || 'google';
  const searchOn = !!getPageSearch().enabled;
  document.getElementById('search-sub-settings').style.display = searchOn ? 'block' : 'none';
  const phInput = document.getElementById('search-placeholder-input');
  if (phInput) phInput.value = state.settings.searchPlaceholder || "What's on your mind?";
  const bwSlider = document.getElementById('search-bar-width-input');
  if (bwSlider) {
    const bw = state.settings.searchBarWidth || 0;
    bwSlider.value = bw > 0 ? bw : 240;
    document.getElementById('search-bar-width-val').textContent = bw > 0 ? bw + 'px' : 'Auto';
  }
  const compactToggle = document.getElementById('toggle-search-compact');
  if (compactToggle) compactToggle.checked = !!state.settings.searchBarCompact;
  updateSearchWidget();
  // Calculator widget
  const calcToggle = document.getElementById('toggle-calculator');
  if (calcToggle) calcToggle.checked = !!getPageCalc().enabled;
  const calcHistToggle = document.getElementById('toggle-calc-history');
  if (calcHistToggle) calcHistToggle.checked = !!state.settings.calcSaveHistory;
  document.getElementById('calc-sub-settings').style.display = getPageCalc().enabled ? 'block' : 'none';
  updateCalculatorWidget();

  // Layout mode
  applyBoardsLayout(state.settings.boardsLayout || 'classic');

  // Links per row (minimal groups)
  const lprSlider = document.getElementById('mg-links-per-row');
  const lprVal    = document.getElementById('mg-links-per-row-val');
  const lprCur    = state.settings.mgLinksPerRow || 8;
  if (lprSlider) { lprSlider.value = lprCur; }
  if (lprVal)    { lprVal.textContent = lprCur; }

  // Icon style (minimal groups)
  const iconStyle = state.settings.mgIconStyle || 'default';
  document.querySelectorAll('.mg-icon-style-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.style === iconStyle);
  });
  applyMgIconStyle(iconStyle);
}

function applyBoardsLayout(layout) {
  const prev = state.settings.boardsLayout || 'classic';
  state.settings.boardsLayout = layout;
  const body = document.body;

  if (layout === 'minimal') {
    body.classList.add('minimal-groups-mode');

    // First-time migration: build minimalGroups from pages
    if (!state.minimalGroups || state.minimalGroups.length === 0) {
      state.minimalGroups = state.pages.map((pg, i) => ({
        id: uid(),
        name: i === 0 ? 'Default' : pg.name,
        links: (pg.boards || []).flatMap(b => (b.links || []).map(l => ({
          id: uid(), title: l.title, url: l.url, desc: l.desc || ''
        }))),
      }));
      state.settings.mgActiveGroupId = state.minimalGroups[0]?.id || null;
    }

  } else {
    body.classList.remove('minimal-groups-mode');
  }

  // Update layout picker UI
  document.querySelectorAll('.layout-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.layout === layout);
  });

  saveState();
  renderBoards();

  // ── Force ALL widgets to re-read the correct store ──
  // Switching layouts must fully teardown the previous mode's widgets
  // and boot up the new mode's widgets so nothing bleeds across.
  try { updateClock(); }            catch(e) {}   // clock is per-layout; was missing — caused the bleed
  try { updateNotesWidget(); }      catch(e) {}
  try { updateSearchWidget(); }     catch(e) {}
  try { updateCalculatorWidget(); } catch(e) {}
  // Re-render the page tabs so classic topbar refreshes after switching back
  try { renderPages(); }            catch(e) {}
  // Refresh tint sliders & clock-style selector to show the now-active mode's values
  try { syncLGSliders(); applyLGVars(); } catch(e) {}
  try {
    const csSel = document.getElementById('clock-style-select');
    if (csSel) csSel.value = getClockStyle();
  } catch(e) {}

  // Apply icon style body class
  applyMgIconStyle(state.settings.mgIconStyle || 'default');
}

function applyMgIconStyle(style) {
  state.settings.mgIconStyle = style || 'default';
  document.body.classList.remove('mg-style-default', 'mg-style-glass', 'mg-style-minimal');
  document.body.classList.add('mg-style-' + state.settings.mgIconStyle);
  document.querySelectorAll('.mg-icon-style-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.style === state.settings.mgIconStyle);
  });
  saveState();
}

function applyAccent(color) {
  state.settings.accentColor = color;
  document.documentElement.style.setProperty('--accent',      color);
  document.documentElement.style.setProperty('--accent-dim',  color + '26');
  document.documentElement.style.setProperty('--accent-glow', color + '59');
  saveState();
}

function applyFont(font) {
  state.settings.uiFont = font;
  const fontStack = `'${font}', sans-serif`;
  document.documentElement.style.setProperty('--ui-font', fontStack);
  document.body.style.fontFamily = fontStack;
  saveState();
}

function applyCardBlur(val) {
  state.settings.cardBlur = parseInt(val);
  document.documentElement.style.setProperty('--card-blur', val + 'px');
  document.getElementById('card-blur-val').textContent = val + 'px';
  saveState();
}

function applyLiquidGlass(enabled) {
  state.settings.liquidGlass = enabled;
  if (enabled) {
    document.body.classList.add('liquid-glass-mode');
  } else {
    document.body.classList.remove('liquid-glass-mode');
  }
  document.getElementById('lg-sub-settings').classList.toggle('lg-open', enabled);
  // Grey out Card Blur — it only applies in normal (non-LG) mode
  const cardBlurRow = document.getElementById('card-blur-row');
  if (cardBlurRow) cardBlurRow.classList.toggle('sett-row-disabled', enabled);
  applyLGVars();
  saveState();
}

function applyLGVars() {
  const s   = state.settings;
  // Must target document.body (not :root) so inline style overrides
  // the same vars declared inside body.liquid-glass-mode {} in the stylesheet.
  // Inherited values from :root are trumped by that class rule; inline style wins.
  const root = document.body;
  const blur        = s.lgBlur          ?? 4;
  const dens        = (s.lgDensity      ?? 0)   / 100;
  const sat         = (s.lgSaturation   ?? 140) + '%';
  const bright      = (s.lgBrightness   ?? 90)  / 100;
  const rim         = (s.lgRim          ?? 15)  / 100;
  const shadow      = (s.lgShadow       ?? 80)  / 100;
  const tintOpacity = Math.max(5, (s[getLgTintKeys().opacKey] ?? 5)) / 100;
  const cornerBoost = (s.lgCornerBoost  ?? 15)  / 100;
  const edgeGlow    = (s.lgEdgeGlow     ?? 100) / 100;
  const refraction  = (s.lgRefraction   ?? 10)  / 100;
  const tint        = s[getLgTintKeys().tintKey] || '#ffffff';

  // Parse hex tint into r/g/b components
  const hex = tint.replace('#','');
  const tr  = parseInt(hex.slice(0,2),16);
  const tg  = parseInt(hex.slice(2,4),16);
  const tb  = parseInt(hex.slice(4,6),16);

  root.style.setProperty('--lg-blur',         blur + 'px');
  root.style.setProperty('--lg-density',      dens.toString());
  root.style.setProperty('--lg-saturation',   sat);
  root.style.setProperty('--lg-brightness',   bright.toString());
  root.style.setProperty('--lg-rim',          rim.toString());
  root.style.setProperty('--lg-shadow-str',   shadow.toString());
  root.style.setProperty('--lg-tint-r',       tr);
  root.style.setProperty('--lg-tint-g',       tg);
  root.style.setProperty('--lg-tint-b',       tb);
  root.style.setProperty('--lg-tint-alpha',   tintOpacity.toString());
  root.style.setProperty('--lg-corner-boost', cornerBoost.toString());
  root.style.setProperty('--lg-edge-glow',    edgeGlow.toString());
  root.style.setProperty('--lg-refraction',   refraction.toString());

  root.style.setProperty('--lg-base-filter',
    `blur(${blur}px) saturate(${sat}) brightness(${bright})`
  );

  // Always clear any stray filters from cards and bg-layer
  document.getElementById('bg-layer').style.filter = '';
  document.querySelectorAll('.board-card').forEach(c => { c.style.filter = ''; });

  // Build SINGLE rgba strings (not multi-layer) - multi-layer var() silently breaks in Chromium.
  // Blend tint color with white density into one composited rgba value.
  const blendCh = (tintCh, tA, whiteCh, dA) => {
    // Alpha-composite tint over white-density over transparent
    const aOut = Math.min(tA + dA * (1 - tA), 1);
    if (aOut === 0) return { ch: 255, a: 0 };
    const ch = Math.round((tintCh * tA + whiteCh * dA * (1 - tA)) / aOut);
    return { ch: Math.min(255, ch), a: aOut };
  };
  const base  = blendCh(0, 0, 255, dens); // white density component
  const fR    = Math.round(tr * tintOpacity + 255 * dens * (1 - tintOpacity));
  const fG    = Math.round(tg * tintOpacity + 255 * dens * (1 - tintOpacity));
  const fB    = Math.round(tb * tintOpacity + 255 * dens * (1 - tintOpacity));
  const fA    = Math.min(tintOpacity + dens * (1 - tintOpacity), 1);
  const fAH   = Math.min(fA + 0.05, 1);
  const fRH   = Math.round(tr * Math.min(tintOpacity + 0.05, 1) + 255 * dens * (1 - Math.min(tintOpacity + 0.05, 1)));
  const fGH   = Math.round(tg * Math.min(tintOpacity + 0.05, 1) + 255 * dens * (1 - Math.min(tintOpacity + 0.05, 1)));
  const fBH   = Math.round(tb * Math.min(tintOpacity + 0.05, 1) + 255 * dens * (1 - Math.min(tintOpacity + 0.05, 1)));

  const boardBg  = `rgba(${fR},${fG},${fB},${fA.toFixed(3)})`;
  const boardBgH = `rgba(${fRH},${fGH},${fBH},${fAH.toFixed(3)})`;
  root.style.setProperty('--lg-board-bg',   boardBg);
  root.style.setProperty('--lg-board-bg-h', boardBgH);
  root.style.setProperty('--lg-rim-col',    `rgba(255,255,255,${rim.toFixed(3)})`);
  applyBoardTints();
}

/* Apply per-board custom tint colours — each board uses its OWN stored opacity */
function applyBoardTints() {
  const s    = state.settings;
  const dens = (s.lgDensity ?? 0) / 100;
  const lgOn = !!s.liquidGlass;

  document.querySelectorAll('.board-card[data-board-id]').forEach(card => {
    if (!lgOn) {
      card.style.removeProperty('--board-tint-bg');
      card.style.removeProperty('--board-tint-bg-h');
      return;
    }
    const boardId = card.dataset.boardId;
    let board = null;
    for (const pg of state.pages) {
      board = (pg.boards || []).find(b => b.id === boardId);
      if (board) break;
    }
    if (!board || !board.tintColor) {
      card.style.removeProperty('--board-tint-bg');
      card.style.removeProperty('--board-tint-bg-h');
      return;
    }
    // Use this board's OWN opacity — never the global tintOpacity
    const tintOpacity = Math.max(5, board.tintOpacity ?? 25) / 100;
    const hex = board.tintColor.replace('#', '');
    const tr  = parseInt(hex.slice(0, 2), 16);
    const tg  = parseInt(hex.slice(2, 4), 16);
    const tb  = parseInt(hex.slice(4, 6), 16);
    const fR  = Math.round(tr * tintOpacity + 255 * dens * (1 - tintOpacity));
    const fG  = Math.round(tg * tintOpacity + 255 * dens * (1 - tintOpacity));
    const fB  = Math.round(tb * tintOpacity + 255 * dens * (1 - tintOpacity));
    const fA  = Math.min(tintOpacity + dens * (1 - tintOpacity), 1);
    const fAH = Math.min(fA + 0.05, 1);
    card.style.setProperty('--board-tint-bg',   `rgba(${fR},${fG},${fB},${fA.toFixed(3)})`);
    card.style.setProperty('--board-tint-bg-h', `rgba(${fR},${fG},${fB},${fAH.toFixed(3)})`);
  });
}

function syncLGSliders() {
  const s = state.settings;
  const blur        = s.lgBlur         ?? 4;
  const dens        = s.lgDensity      ?? 0;
  const sat         = s.lgSaturation   ?? 140;
  const bri         = s.lgBrightness   ?? 90;
  const rim         = s.lgRim          ?? 15;
  const sha         = s.lgShadow       ?? 80;
  const tint        = s[getLgTintKeys().tintKey] || '#ffffff';
  const tintOpacity = s[getLgTintKeys().opacKey] ?? 5;
  const cornerBoost = s.lgCornerBoost  ?? 15;
  const edgeGlow    = s.lgEdgeGlow     ?? 100;
  const refraction  = s.lgRefraction   ?? 10;

  document.getElementById('lg-blur').value        = blur;
  document.getElementById('lg-blur-val').textContent = blur + 'px';
  document.getElementById('lg-density').value     = dens;
  document.getElementById('lg-density-val').textContent = dens + '%';
  document.getElementById('lg-saturation').value  = sat;
  document.getElementById('lg-saturation-val').textContent = sat + '%';
  document.getElementById('lg-brightness').value  = bri;
  document.getElementById('lg-brightness-val').textContent = (bri/100).toFixed(2);
  document.getElementById('lg-rim').value         = rim;
  document.getElementById('lg-rim-val').textContent = rim + '%';
  document.getElementById('lg-shadow').value      = sha;
  document.getElementById('lg-shadow-val').textContent = sha + '%';
  document.getElementById('lg-tint').value        = tint;
  document.getElementById('lg-tint-opacity').value = tintOpacity;
  document.getElementById('lg-tint-opacity-val').textContent = tintOpacity + '%';
  document.getElementById('lg-corner-boost').value = cornerBoost;
  document.getElementById('lg-corner-boost-val').textContent = cornerBoost + '%';
  document.getElementById('lg-edge-glow').value   = edgeGlow;
  document.getElementById('lg-edge-glow-val').textContent = edgeGlow + '%';
  document.getElementById('lg-refraction').value  = refraction;
  document.getElementById('lg-refraction-val').textContent = refraction + '%';}

// ─── NOTES WIDGET (multi-note, per-page) ─────────────
function updateNotesWidget() {
  // Remove all existing note widgets from DOM
  document.querySelectorAll('.notes-widget').forEach(w => w.remove());
  if (!isNotesEnabled()) return;
  const notes = getPageNotes();
  if (!notes.length) return;
  notes.forEach(note => {
    const widget = _createNoteWidget(note);
    document.body.appendChild(widget);
    _initNoteWidget(widget, note);
  });
}

function _createNoteWidget(note) {
  // Ensure note has all required fields (guard against corrupted/migrated state)
  if (!note.id)   note.id   = uid();
  if (!note.pos)  note.pos  = { x: 80, y: 120 };
  if (!note.size) note.size = { w: 420, h: 320 };

  const widget = document.createElement('div');
  widget.className = 'notes-widget';
  widget.dataset.noteId = note.id;
  widget.style.left   = (note.pos.x  || 80)  + 'px';
  widget.style.top    = (note.pos.y || 120) - getScrollY() + 'px';
  widget.style.width  = (note.size.w || 420) + 'px';
  widget.style.height = (note.size.h || 320) + 'px';

  // ── Header ──
  const header = document.createElement('div');
  header.className = 'notes-header';

  const titleInput = document.createElement('input');
  titleInput.type        = 'text';
  titleInput.className   = 'notes-title-input';
  titleInput.placeholder = 'Add title…';
  titleInput.maxLength   = 80;
  titleInput.value       = note.title || '';

  const actions = document.createElement('div');
  actions.className = 'notes-header-actions';

  const imgBtn = document.createElement('button');
  imgBtn.className = 'notes-hdr-btn notes-img-btn';
  imgBtn.title     = 'Insert image';
  imgBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><polyline points="21 15 16 10 5 21"/></svg>`;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'notes-hdr-btn notes-hdr-close';
  closeBtn.title     = 'Delete note';
  closeBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;

  actions.appendChild(imgBtn);
  actions.appendChild(closeBtn);
  header.appendChild(titleInput);
  header.appendChild(actions);

  // ── Title divider ──
  const divider = document.createElement('div');
  divider.className = 'notes-title-divider';
  divider.classList.toggle('notes-title-divider-visible', (note.title || '').trim().length > 0);

  // ── Body ──
  const body = document.createElement('div');
  body.className       = 'notes-body';
  body.contentEditable = 'true';
  body.spellcheck      = true;
  body.dataset.placeholder = 'Write anything…';
  body.innerHTML       = note.content || '';

  // Re-attach image toolbar events for images already in saved content
  _rebindImageWrappers(body, note.id);

  // ── Resize handle ──
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'notes-resize-handle';

  widget.appendChild(header);
  widget.appendChild(divider);
  widget.appendChild(body);
  widget.appendChild(resizeHandle);
  return widget;
}

function _initNoteWidget(widget, note) {
  const noteId      = note.id;
  const header      = widget.querySelector('.notes-header');
  const titleInput  = widget.querySelector('.notes-title-input');
  const divider     = widget.querySelector('.notes-title-divider');
  const body        = widget.querySelector('.notes-body');
  const resizeHandle= widget.querySelector('.notes-resize-handle');
  const imgBtn      = widget.querySelector('.notes-img-btn');
  const closeBtn    = widget.querySelector('.notes-hdr-close');

  // ── Bring to front on click (within notes z-index layer) ──
  widget.addEventListener('pointerdown', () => {
    document.querySelectorAll('.notes-widget').forEach(w => w.style.zIndex = '90');
    widget.style.zIndex = '91';
  });

  // ── Drag ──
  let drag = null;
  header.addEventListener('pointerdown', e => {
    if (e.target.closest('.notes-header-actions')) return;
    if (e.target.closest('.notes-title-input')) return;
    e.preventDefault();
    const n = getPageNotes().find(x => x.id === noteId);
    if (!n) return;
    drag = { startX: e.clientX, startY: e.clientY, origX: n.pos.x || 80, origY: (n.pos.y || 120) - getScrollY() };
    widget.classList.add('notes-dragging');
    header.setPointerCapture(e.pointerId);
  });
  header.addEventListener('pointermove', e => {
    if (!drag) return;
    widget.style.left = Math.max(0, drag.origX + e.clientX - drag.startX) + 'px';
    widget.style.top  = Math.max(0, drag.origY + e.clientY - drag.startY) + 'px';
  });
  header.addEventListener('pointerup', e => {
    if (!drag) return;
    const n = getPageNotes().find(x => x.id === noteId);
    if (n) {
      n.pos = {
        x: Math.max(0, drag.origX + e.clientX - drag.startX),
        y: Math.max(0, drag.origY + e.clientY - drag.startY) + getScrollY()
      };
      saveState();
    }
    widget.classList.remove('notes-dragging');
    drag = null;
  });

  // ── Resize ──
  let resize = null;
  resizeHandle.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();
    const n = getPageNotes().find(x => x.id === noteId);
    if (!n) return;
    resize = { startX: e.clientX, startY: e.clientY, origW: n.size.w || 420, origH: n.size.h || 320 };
    resizeHandle.setPointerCapture(e.pointerId);
  });
  resizeHandle.addEventListener('pointermove', e => {
    if (!resize) return;
    widget.style.width  = Math.max(240, resize.origW + e.clientX - resize.startX) + 'px';
    widget.style.height = Math.max(160, resize.origH + e.clientY - resize.startY) + 'px';
  });
  resizeHandle.addEventListener('pointerup', e => {
    if (!resize) return;
    const n = getPageNotes().find(x => x.id === noteId);
    if (n) {
      n.size = { w: Math.max(240, resize.origW + e.clientX - resize.startX), h: Math.max(160, resize.origH + e.clientY - resize.startY) };
      saveState();
    }
    resize = null;
  });

  // ── Title input ──
  titleInput.addEventListener('input', () => {
    divider.classList.toggle('notes-title-divider-visible', titleInput.value.trim().length > 0);
    const n = getPageNotes().find(x => x.id === noteId);
    if (n) { n.title = titleInput.value.trim(); saveState(); }
  });

  // ── Body — debounced save ──
  let _saveTimer = null;
  body.addEventListener('input', () => {
    clearTimeout(_saveTimer);
    _saveTimer = setTimeout(() => {
      const n = getPageNotes().find(x => x.id === noteId);
      if (n) { n.content = body.innerHTML; saveState(); }
    }, 600);
  });

  // ── Paste: images inline, plain text otherwise ──
  body.addEventListener('paste', e => {
    for (const item of e.clipboardData.items) {
      if (item.type.startsWith('image/')) {
        e.preventDefault();
        _insertNoteImage(item.getAsFile(), body, noteId);
        return;
      }
    }
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    // document.execCommand is deprecated; use insertText where available (Chrome/Edge),
    // and fall back to Range API for Firefox.
    if (document.execCommand) {
      document.execCommand('insertText', false, text);
    } else {
      const sel = window.getSelection();
      if (sel && sel.rangeCount) {
        const range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  });

  // ── Deselect images when clicking outside a wrapper ──
  body.addEventListener('click', e => {
    if (!e.target.closest('.notes-img-wrapper')) {
      body.querySelectorAll('.notes-img-wrapper.nim-selected').forEach(w => w.classList.remove('nim-selected'));
    }
  });

  // ── Image button ──
  imgBtn.addEventListener('click', () => {
    activeNoteId   = noteId;
    activeNoteBody = body;
    document.getElementById('notes-img-input').click();
  });

  // ── Delete button — delete this note ──
  closeBtn.addEventListener('click', () => deleteNote(noteId));
}

function deleteNote(noteId) {
  const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
  const notes = getPageNotes();
  if (isMinimal) {
    getMgWidgets().notesList = notes.filter(n => n.id !== noteId);
  } else {
    const pg = currentPage();
    pg.notesList = notes.filter(n => n.id !== noteId);
    if (!pg.notesList.length) {
      setNotesEnabled(false);
      const t = document.getElementById('toggle-notes');
      if (t) t.checked = false;
    }
  }
  saveState();
  const widget = document.querySelector(`.notes-widget[data-note-id="${noteId}"]`);
  if (widget) widget.remove();
  if (!getPageNotes().length) {
    setNotesEnabled(false);
    const t = document.getElementById('toggle-notes');
    if (t) t.checked = false;
    saveState();
  }
}

function addNewNote() {
  const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
  const notes = getPageNotes();
  const last  = notes[notes.length - 1];
  const pos   = last ? { x: Math.min((last.pos.x || 80) + 30, window.innerWidth - 460), y: Math.min((last.pos.y || 120) + 30, window.innerHeight - 360) }
                     : { x: 80, y: 120 };
  const note = _defaultNote({ pos });
  if (isMinimal) {
    getMgWidgets().notesList.push(note);
  } else {
    const pg = currentPage();
    pg.notesList.push(note);
  }
  setNotesEnabled(true);
  saveState();
  const t = document.getElementById('toggle-notes');
  if (t) t.checked = true;
  const widget = _createNoteWidget(note);
  document.body.appendChild(widget);
  _initNoteWidget(widget, note);
  setTimeout(() => widget.querySelector('.notes-title-input').focus(), 50);
  toast('Note added ✦', 'success');
}

// Re-attach toolbar events to existing .notes-img-wrapper elements (loaded from saved content)
function _rebindImageWrappers(body, noteId) {
  body.querySelectorAll('.notes-img-wrapper').forEach(wrapper => {
    _bindImageWrapperEvents(wrapper, body, noteId);
  });
}

function _bindImageWrapperEvents(wrapper, body, noteId) {
  // Prevent double-binding
  if (wrapper._zenrBound) return;
  wrapper._zenrBound = true;

  // ── Click to select ──
  wrapper.addEventListener('click', e => {
    e.stopPropagation();
    body.querySelectorAll('.notes-img-wrapper.nim-selected').forEach(w => {
      if (w !== wrapper) w.classList.remove('nim-selected');
    });
    wrapper.classList.toggle('nim-selected');
  });

  // ── Toolbar (align / delete) ──
  const toolbar = wrapper.querySelector('.notes-img-toolbar');
  if (!toolbar) return;
  toolbar.addEventListener('click', e => {
    e.stopPropagation();
    const btn = e.target.closest('[data-align]');
    if (!btn) return;
    const align = btn.dataset.align;
    wrapper.classList.remove('float-left', 'float-right', 'float-center');
    if (align === 'left')        wrapper.classList.add('float-left');
    else if (align === 'right')  wrapper.classList.add('float-right');
    else if (align === 'center') wrapper.classList.add('float-center');
    else if (align === 'delete') { wrapper.remove(); }
    wrapper.classList.remove('nim-selected');
    const n = getPageNotes().find(x => x.id === noteId);
    if (n) { n.content = body.innerHTML; saveState(); }
  });

  // ── Drag to reposition inside the notes body ──
  wrapper.draggable = true;
  wrapper.addEventListener('dragstart', e => {
    // Don't start drag from a resize handle
    if (e.target.closest('.nim-handle')) { e.preventDefault(); return; }
    _nimDraggedWrapper = wrapper;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', ''); // required for Firefox
    setTimeout(() => wrapper.classList.add('nim-dragging'), 0);
  });
  wrapper.addEventListener('dragend', () => {
    wrapper.classList.remove('nim-dragging');
    _nimDraggedWrapper = null;
  });

  // Attach body drop zone only once per body element
  if (!body._zenrImgDropBound) {
    body._zenrImgDropBound = true;
    body.addEventListener('dragover', e => {
      if (!_nimDraggedWrapper) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
    body.addEventListener('drop', e => {
      if (!_nimDraggedWrapper) return;
      e.preventDefault();
      // Drop a marker at the caret position, then relocate the wrapper there
      const marker = document.createElement('span');
      marker.id = '__nim_drop_marker__';
      const dropped = _nimDraggedWrapper;
      // caretRangeFromPoint (Chrome) vs caretPositionFromPoint (Firefox)
      if (document.caretRangeFromPoint) {
        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (range && body.contains(range.commonAncestorContainer)) {
          range.insertNode(marker);
        }
      } else if (document.caretPositionFromPoint) {
        const caretPos = document.caretPositionFromPoint(e.clientX, e.clientY);
        if (caretPos && body.contains(caretPos.offsetNode)) {
          const range = document.createRange();
          range.setStart(caretPos.offsetNode, caretPos.offset);
          range.collapse(true);
          range.insertNode(marker);
        }
      }
      dropped.remove();
      const m = document.getElementById('__nim_drop_marker__');
      if (m) { m.replaceWith(dropped); }
      else   { body.appendChild(dropped); }
      dropped.classList.remove('nim-dragging');
      _nimDraggedWrapper = null;
      const n = getPageNotes().find(x => x.id === noteId);
      if (n) { n.content = body.innerHTML; saveState(); }
    });
  }

  // ── All-corner resize handles ──
  const DIRS = ['nw', 'ne', 'sw', 'se'];
  DIRS.forEach(dir => {
    const handle = document.createElement('div');
    handle.className = `nim-handle nim-handle-${dir}`;
    handle.setAttribute('draggable', 'false');
    wrapper.appendChild(handle);

    let rs = null; // resize state

    handle.addEventListener('pointerdown', e => {
      e.stopPropagation();
      e.preventDefault();
      rs = {
        dir,
        startX : e.clientX,
        startY : e.clientY,
        origW  : wrapper.offsetWidth,
        origH  : wrapper.offsetHeight,
        origTop: parseFloat(wrapper.style.top)  || 0,
        origLeft:parseFloat(wrapper.style.left) || 0,
      };
      handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener('pointermove', e => {
      if (!rs) return;
      const dx = e.clientX - rs.startX;
      const dy = e.clientY - rs.startY;

      // East side: grows right; West side: grows left (flip dx)
      let newW = dir.includes('e')
        ? Math.max(60, rs.origW + dx)
        : Math.max(60, rs.origW - dx);

      // South side: grows down; North side: grows up (flip dy)
      let newH = dir.includes('s')
        ? Math.max(40, rs.origH + dy)
        : Math.max(40, rs.origH - dy);

      // For west handles: shift left so right edge stays fixed
      let newLeft = rs.origLeft;
      if (dir.includes('w')) newLeft = rs.origLeft + (rs.origW - newW);

      // For north handles: shift top so bottom edge stays fixed
      let newTop = rs.origTop;
      if (dir.includes('n')) newTop = rs.origTop + (rs.origH - newH);

      wrapper.style.width  = newW   + 'px';
      wrapper.style.height = newH   + 'px';
      wrapper.style.left   = newLeft + 'px';
      wrapper.style.top    = newTop  + 'px';
    });

    handle.addEventListener('pointerup', () => {
      if (!rs) return;
      rs = null;
      const n = getPageNotes().find(x => x.id === noteId);
      if (n) { n.content = body.innerHTML; saveState(); }
    });
  });
}

function _insertNoteImage(file, body, noteId) {
  const reader = new FileReader();
  reader.onload = ev => {
    if (!body) return;
    body.focus();

    // ── Wrapper (resizable via CSS resize: both) ──
    const wrapper = document.createElement('div');
    wrapper.className       = 'notes-img-wrapper';
    wrapper.contentEditable = 'false';

    const img = document.createElement('img');
    img.src = ev.target.result;
    img.alt = '';

    // ── Mini toolbar ──
    const toolbar = document.createElement('div');
    toolbar.className = 'notes-img-toolbar';
    toolbar.innerHTML = `
      <button class="nim-btn" title="Float left"  data-align="left">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="9" width="9" height="8" rx="1"/><line x1="14" y1="9" x2="22" y2="9"/><line x1="14" y1="13" x2="22" y2="13"/><line x1="2" y1="4" x2="22" y2="4"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
      </button>
      <button class="nim-btn" title="No float / inline" data-align="center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="7" y="7" width="10" height="10" rx="1"/><line x1="2" y1="3" x2="22" y2="3"/><line x1="2" y1="21" x2="22" y2="21"/></svg>
      </button>
      <button class="nim-btn" title="Float right" data-align="right">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="13" y="9" width="9" height="8" rx="1"/><line x1="2" y1="9" x2="10" y2="9"/><line x1="2" y1="13" x2="10" y2="13"/><line x1="2" y1="4" x2="22" y2="4"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
      </button>
      <div class="nim-divider"></div>
      <button class="nim-btn nim-del" title="Delete image" data-align="delete">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>`;

    wrapper.appendChild(img);
    wrapper.appendChild(toolbar);

    _bindImageWrapperEvents(wrapper, body, noteId);

    // ── Insert at cursor ──
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      if (body.contains(range.commonAncestorContainer)) {
        range.deleteContents();
        range.insertNode(wrapper);

        // Ensure there's always a writable paragraph after the image so the
        // user can continue typing below it without getting stuck.
        let afterNode = wrapper.nextSibling;
        if (!afterNode || (afterNode.nodeType === Node.ELEMENT_NODE && afterNode.classList && afterNode.classList.contains('notes-img-wrapper'))) {
          const para = document.createElement('p');
          para.innerHTML = '<br>';
          wrapper.insertAdjacentElement('afterend', para);
          afterNode = para;
        }
        // Place cursor at the start of the node that follows the image
        try {
          range.setStart(afterNode, 0);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        } catch (_) {
          range.setStartAfter(wrapper);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      } else { body.appendChild(wrapper); }
    } else { body.appendChild(wrapper); }

    const n = getPageNotes().find(x => x.id === noteId);
    if (n) { n.content = body.innerHTML; saveState(); }
  };
  reader.readAsDataURL(file);
}

// ─── CLOCK ───────────────────────────────────────────
function updateClock() {
  const widget = document.getElementById('clock-widget');
  const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
  if (!isClockEnabled()) {
    widget.classList.add('hidden');
    if (clockInterval) { clearInterval(clockInterval); clockInterval = null; }
    return;
  }
  widget.classList.remove('hidden');
  const pos = (isMinimal ? getMgWidgets().clockPosition : state.settings.clockPosition) || { x: 20, y: 80 };
  widget.style.left = pos.x + 'px';
  widget.style.top  = pos.y - getScrollY() + 'px';
  const scale = (state.settings.clockSize ?? 100) / 100;
  widget.style.transformOrigin = 'top left';
  widget.style.transform = `scale(${scale})`;
  tickClock();
  if (!clockInterval) clockInterval = setInterval(tickClock, 1000);
}

function tickClock() {
  const now     = new Date();
  const fmt     = state.settings.clockFormat || '24h';
  const showSec = state.settings.clockSeconds !== false;
  const style   = getClockStyle();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  let suffix = '';
  if (fmt === '12h') { suffix = h >= 12 ? ' PM' : ' AM'; h = h % 12 || 12; }
  const secPart = showSec ? `:${String(s).padStart(2,'0')}` : '';
  const timeStr = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}${secPart}${suffix}`;

  const daysS  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const monthsS= ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let dateStr = '';
  if (style === 'bold') {
    dateStr = `${days[now.getDay()].toUpperCase()}, ${months[now.getMonth()].toUpperCase()} ${now.getDate()}`;
  } else if (style === 'retro') {
    dateStr = `${String(now.getDate()).padStart(2,'0')}.${String(now.getMonth()+1).padStart(2,'0')}.${now.getFullYear()}`;
  } else if (style === 'neon') {
    dateStr = `${daysS[now.getDay()]} · ${monthsS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  } else {
    dateStr = `${daysS[now.getDay()]}, ${monthsS[now.getMonth()]} ${now.getDate()}`;
  }

  const widget = document.getElementById('clock-widget');
  if (widget) {
    ['glass','minimal','neon','retro','bold'].forEach(st => widget.classList.remove('clock-style-' + st));
    widget.classList.add('clock-style-' + style);
  }
  document.getElementById('clock-time').textContent = timeStr;
  document.getElementById('clock-date').textContent = dateStr;
}
function initClockDrag() {
  const widget = document.getElementById('clock-widget');
  let dragState = null;
  widget.addEventListener('pointerdown', e => {
    e.preventDefault();
    const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
    const curPos = (isMinimal ? getMgWidgets().clockPosition : state.settings.clockPosition) || { x: 20, y: 80 };
    dragState = {
      startX: e.clientX, startY: e.clientY,
      origX: curPos.x || 20,
      origY: (curPos.y || 80) - getScrollY(),
    };
    widget.classList.add('grabbing');
    widget.setPointerCapture(e.pointerId);
  });
  widget.addEventListener('pointermove', e => {
    if (!dragState) return;
    const x = Math.max(0, dragState.origX + e.clientX - dragState.startX);
    const y = Math.max(0, dragState.origY + e.clientY - dragState.startY);
    widget.style.left = x + 'px';
    widget.style.top  = y + 'px';
  });
  widget.addEventListener('pointerup', e => {
    if (!dragState) return;
    const newPos = {
      x: Math.max(0, dragState.origX + e.clientX - dragState.startX),
      y: Math.max(0, dragState.origY + e.clientY - dragState.startY) + getScrollY(),
    };
    const isMinimal = (state.settings.boardsLayout || 'classic') === 'minimal';
    if (isMinimal) getMgWidgets().clockPosition = newPos;
    else state.settings.clockPosition = newPos;
    widget.classList.remove('grabbing');
    dragState = null;
    saveState();
    // Re-apply scale after position update
    const scale = (state.settings.clockSize ?? 100) / 100;
    widget.style.transform = `scale(${scale})`;
  });
}

function applyDescToggle(val) {
  const show = val !== undefined ? val : state.settings.showDesc;
  document.querySelectorAll('.link-desc').forEach(el => el.style.display = show ? 'block' : 'none');
}

function toggleDescriptions(val) {
  state.settings.showDesc = val;
  applyDescToggle(val);
  saveState();
}

function resetAll() {
  openConfirmModal('Reset All Data?', 'This will delete all pages, boards, links, notes, and restore defaults.', async () => {
    await clearAllImages(true);
    await clearAllVideos(true);
    state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    delete state.notesList; // Notes are now per-page; DEFAULT_DATA pages have none
    saveState(); await loadBackground(); render();
    updateNotesWidget();
    toast('Reset to defaults');
  });
}

// ─── KEYBOARD ────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeSettingsPanel();
  }
  if (e.key === 'Enter' && !document.getElementById('modal-overlay').classList.contains('hidden')) {
    const active = document.querySelector('.modal-box:not(.hidden)');
    if (active && active.id === 'modal-page')  confirmPageModal();
    if (active && active.id === 'modal-board') confirmBoardModal();
    if (active && active.id === 'modal-link')  confirmLinkModal();
  }
});

// ─── CONTEXT MENU ────────────────────────────────────
let ctxMenu = null;
function closeCtxMenu() { if (ctxMenu) { ctxMenu.remove(); ctxMenu = null; } }
document.addEventListener('click',       closeCtxMenu);
document.addEventListener('contextmenu', e => {
  closeCtxMenu();
  const boardCard = e.target.closest('.board-card');
  const linkItem  = e.target.closest('.link-item');
  if (linkItem && boardCard) {
    e.preventDefault();
    const linkId  = linkItem.dataset.linkId;
    const boardId = boardCard.dataset.boardId;
    const pg      = currentPage();
    const board   = pg && pg.boards.find(b => b.id === boardId);
    if (!board) return;
    showCtxMenu(e.clientX, e.clientY, [
      { label: '🖊 Edit link',  action: () => openLinkModal(pg.id, boardId, linkId) },
      { label: '🔗 Copy URL',   action: () => {
        const link = board.links.find(l => l.id === linkId);
        if (link) { navigator.clipboard.writeText(link.url); toast('URL copied'); }
      }},
      { sep: true },
      { label: '🗑 Delete',     action: () => deleteLinkPrompt(pg.id, boardId, linkId), danger: true },
    ]);
  }
});

function showCtxMenu(x, y, items) {
  ctxMenu = document.createElement('div');
  ctxMenu.className = 'ctx-menu';
  items.forEach(item => {
    if (item.sep) {
      const s = document.createElement('div');
      s.className = 'ctx-sep';
      ctxMenu.appendChild(s);
      return;
    }
    const el = document.createElement('div');
    el.className  = 'ctx-item' + (item.danger ? ' danger' : '');
    el.textContent = item.label;
    el.addEventListener('click', () => { closeCtxMenu(); item.action(); });
    ctxMenu.appendChild(el);
  });
  document.body.appendChild(ctxMenu);
  // Position after appending so offsetHeight is available
  ctxMenu.style.left = Math.min(x, window.innerWidth  - ctxMenu.offsetWidth  - 10) + 'px';
  ctxMenu.style.top  = Math.min(y, window.innerHeight - ctxMenu.offsetHeight - 10) + 'px';
}

// ─── REPORT PANEL ────────────────────────────────────
function initReportPanel() {
  const FORMBOLD_ENDPOINT = 'https://formbold.com/s/3A7PM'; // ← replace with your ZenR endpoint
  const panel       = document.getElementById('report-panel');
  const closeBtn    = document.getElementById('report-close-btn');
  const fileInput   = document.getElementById('report-file-input');
  const previewGrid = document.getElementById('report-preview-grid');
  const submitBtn   = document.getElementById('report-submit-btn');
  const statusEl    = document.getElementById('report-status');
  const uploadArea  = document.getElementById('report-upload-area');

  let imageFiles = [];

  function openPanel() {
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('rp-visible');
    statusEl.textContent = '';
    statusEl.className   = '';
  }
  function closePanel() {
    panel.classList.remove('rp-visible');
    panel.setAttribute('aria-hidden', 'true');
  }

  document.getElementById('open-report-panel').addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  panel.addEventListener('click', e => { if (e.target === panel) closePanel(); });

  function renderPreviews() {
    previewGrid.innerHTML = '';
    imageFiles.forEach((file, idx) => {
      const item   = document.createElement('div');
      item.className = 'rp-preview-item';
      const img    = document.createElement('img');
      img.src      = URL.createObjectURL(file);
      img.alt      = `Screenshot ${idx + 1}`;
      const rmBtn  = document.createElement('button');
      rmBtn.className   = 'rp-preview-remove';
      rmBtn.textContent = '×';
      rmBtn.title       = 'Remove';
      rmBtn.addEventListener('click', () => {
        imageFiles.splice(idx, 1);
        renderPreviews();
      });
      item.appendChild(img);
      item.appendChild(rmBtn);
      previewGrid.appendChild(item);
    });
    uploadArea.style.display = imageFiles.length >= 3 ? 'none' : '';
  }

  fileInput.addEventListener('change', () => {
    Array.from(fileInput.files).forEach(file => {
      if (imageFiles.length >= 3 || !file.type.startsWith('image/')) return;
      imageFiles.push(file);
    });
    fileInput.value = '';
    renderPreviews();
  });

  submitBtn.addEventListener('click', async () => {
    const name    = (document.getElementById('report-name').value    || '').trim();
    const message = (document.getElementById('report-message').value || '').trim();

    if (!message) {
      statusEl.className   = 'rp-error';
      statusEl.textContent = '⚠️ Please describe the issue before sending.';
      return;
    }

    submitBtn.disabled   = true;
    statusEl.className   = '';
    statusEl.textContent = '📤 Sending…';

    try {
      // Upload screenshots to catbox.moe (free, anonymous, permanent)
      const uploadToCatbox = async (file) => {
        const fd = new FormData();
        fd.append('reqtype',      'fileupload');
        fd.append('fileToUpload', file, file.name || 'screenshot.png');
        const r = await fetch('https://catbox.moe/user/api.php', { method: 'POST', body: fd });
        if (!r.ok) throw new Error('catbox ' + r.status);
        const url = (await r.text()).trim();
        if (!url.startsWith('https://')) throw new Error('Bad catbox URL: ' + url);
        return url;
      };

      let screenshotHtml = '';
      if (imageFiles.length > 0) {
        const urls    = await Promise.all(imageFiles.map(uploadToCatbox));
        const imgTags = urls.map((url, i) =>
          `<div style="margin:8px 0"><strong>Screenshot ${i + 1}</strong><br>` +
          `<a href="${url}"><img src="${url}" alt="Screenshot ${i + 1}" ` +
          `style="max-width:600px;display:block;border:1px solid #ccc;border-radius:4px;margin-top:4px"></a></div>`
        ).join('');
        screenshotHtml = `<br><br><hr style="border:none;border-top:1px solid #ccc;margin:12px 0">` +
          `<strong>Screenshots (${urls.length})</strong><br><br>${imgTags}`;
      }

      const formData = new FormData();
      formData.append('Name',    name || 'Anonymous');
      formData.append('Message', message + screenshotHtml);
      formData.append('Browser', navigator.userAgent);
      formData.append('Extension', 'ZenR NewTab');

      const res = await fetch(FORMBOLD_ENDPOINT, { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Server ' + res.status);

      statusEl.className   = 'rp-success';
      statusEl.textContent = '✅ Report sent! We\'ll look into it soon. Thank you!';
      document.getElementById('report-name').value    = '';
      document.getElementById('report-message').value = '';
      imageFiles = [];
      renderPreviews();
    } catch (err) {
      statusEl.className   = 'rp-error';
      statusEl.textContent = '❌ Failed to send. Check your internet and try again.';
      console.error('[ZenR Report]', err);
    }

    submitBtn.disabled = false;
  });
}

// ─── DRAG & DROP: Image/video over page ──────────────
// Track internal element drags so the wallpaper handler never fires on them.
// dragstart bubbles up from every draggable inside the page (link cards, boards,
// note images). External OS file drops never fire dragstart, so this flag is
// safe to use as a gate.
let _internalDragging = false;
document.addEventListener('dragstart', () => { _internalDragging = true; });
document.addEventListener('dragend',   () => { _internalDragging = false; });

document.addEventListener('dragover', e => {
  if (_internalDragging) return;
  if (e.dataTransfer.types.includes('Files')) e.preventDefault();
});
document.addEventListener('drop', e => {
  if (_internalDragging) return;
  if (!e.dataTransfer.files.length) return;
  const file = e.dataTransfer.files[0];
  if (file.type.startsWith('image/')) {
    e.preventDefault();
    // Use synthetic event
    handleBgImage({ target: { files: [file], value: '' } });
  }
  if (file.type.startsWith('video/')) {
    e.preventDefault();
    handleBgVideo({ target: { files: [file], value: '' } });
  }
});

// ─── BIND ALL STATIC EVENTS ──────────────────────────
function bindStaticEvents() {
  // ── Modal overlay (click-outside to close) ──
  document.getElementById('modal-overlay').addEventListener('click', overlayClick);

  // ── All .modal-close buttons ──
  document.querySelectorAll('.modal-close').forEach(btn =>
    btn.addEventListener('click', closeModal));

  // ── All .modal-cancel buttons ──
  document.querySelectorAll('.modal-cancel').forEach(btn =>
    btn.addEventListener('click', closeModal));

  // ── Page modal ──
  document.getElementById('page-confirm-btn').addEventListener('click', confirmPageModal);

  // ── Board modal ──
  document.getElementById('board-confirm-btn').addEventListener('click', confirmBoardModal);

  // ── Link modal ──
  document.getElementById('link-confirm-btn').addEventListener('click', confirmLinkModal);

  // ── Link icon picker ──
  document.getElementById('link-icon-type').addEventListener('change', function() {
    const iconUrlIn = document.getElementById('link-icon-url-input');
    const src = this.value === 'url' ? iconUrlIn.value.trim() : (this.value === 'local' ? (_pendingIconData || '') : '');
    _syncIconUI(this.value, src);
  });
  document.getElementById('link-icon-url-input').addEventListener('input', function() {
    _syncIconUI('url', this.value.trim());
  });
  document.getElementById('link-icon-file-btn').addEventListener('click', () => {
    document.getElementById('link-icon-file').click();
  });
  document.getElementById('link-icon-file').addEventListener('change', function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      _pendingIconData = ev.target.result;
      document.getElementById('link-icon-file-name').textContent = file.name;
      _syncIconUI('local', _pendingIconData);
    };
    reader.readAsDataURL(file);
  });

  // ── Confirm modal ──
  document.getElementById('confirm-action-btn').addEventListener('click', confirmAction);

  // ── Top bar ──
  document.getElementById('add-page-btn').addEventListener('click', () => openPageModal());
  document.getElementById('btn-settings').addEventListener('click', () => {
    applySettings(); openSettingsPanel();
  });
  document.getElementById('sett-close-btn').addEventListener('click', closeSettingsPanel);

  // ── Report Panel ──
  initReportPanel();

  // ── Import/Export/Wallpaper (now inside settings modal) ──
  document.getElementById('btn-import').addEventListener('click',   () => showModal('modal-import'));
  document.getElementById('btn-export').addEventListener('click',   () => showModal('modal-export'));
  document.getElementById('btn-wallpaper').addEventListener('click', async () => {
    buildGradientGrid(); await syncWallpaperControls(); showModal('modal-wallpaper');
  });

  // ── Add board (FAB + empty-page button) ──
  document.getElementById('add-board-fab').addEventListener('click',      () => openBoardModal());
  document.getElementById('empty-add-board-btn').addEventListener('click', () => openBoardModal());

  // ── Scroll page tabs ──
  document.getElementById('scroll-left').addEventListener('click',  () =>
    document.getElementById('pages-tabs').scrollBy({ left: -150, behavior: 'smooth' }));
  document.getElementById('scroll-right').addEventListener('click', () =>
    document.getElementById('pages-tabs').scrollBy({ left: 150,  behavior: 'smooth' }));

  // ── Import ──
  document.getElementById('btn-import-browser').addEventListener('click', () => {
    const existing = state.pages.find(p => p.isBrowserImport);
    importFromBrowser(false, existing ? existing.id : null);
  });
  document.getElementById('btn-import-json').addEventListener('click',    triggerJSONImport);
  document.getElementById('file-json-input').addEventListener('change',   handleJSONFile);

  // ── Export ──
  document.getElementById('btn-export-json').addEventListener('click', exportJSON);

  // ── Wallpaper tabs ──
  document.querySelectorAll('.wp-tab').forEach(btn => {
    btn.addEventListener('click', () => wpTab(btn, btn.dataset.tab));
  });

  // ── Wallpaper upload zones ──
  document.getElementById('img-upload-zone').addEventListener('click', () =>
    document.getElementById('bg-img-input').click());
  document.getElementById('vid-upload-zone').addEventListener('click', () =>
    document.getElementById('bg-vid-input').click());
  document.getElementById('bg-img-input').addEventListener('change', handleBgImage);
  document.getElementById('bg-vid-input').addEventListener('change', handleBgVideo);

  // ── Pixabay API key (shared, wired on both image + video tabs) ──
  ['img', 'vid'].forEach(type => {
    const saveBtn   = document.getElementById(`pxb-key-save-${type}`);
    const removeBtn = document.getElementById(`pxb-key-remove-${type}`);
    const keyInput  = document.getElementById(`pxb-key-input-${type}`);
    if (saveBtn)   saveBtn.addEventListener('click',   () => savePxbKey(type));
    if (removeBtn) removeBtn.addEventListener('click',  () => removePxbKey());
    if (keyInput)  keyInput.addEventListener('keydown', e => { if (e.key === 'Enter') savePxbKey(type); });
  });

  // ── Pixabay video search ──
  const pxbQueryInput = document.getElementById('pxb-query');
  const pxbSearchBtn  = document.getElementById('pxb-search-btn');
  if (state.settings.pixabayQuery)  pxbQueryInput.value = state.settings.pixabayQuery;
  if ((state.settings.pixabayVideos || []).length) renderPixabayResults();
  pxbSearchBtn.addEventListener('click', () => pixabaySearch());
  pxbQueryInput.addEventListener('keydown', e => { if (e.key === 'Enter') pixabaySearch(); });

  // ── Pixabay image search ──
  const pxbImgQueryInput = document.getElementById('pxb-img-query');
  const pxbImgSearchBtn  = document.getElementById('pxb-img-search-btn');
  if (state.settings.pixabayImageQuery) pxbImgQueryInput.value = state.settings.pixabayImageQuery;
  if ((state.settings.pixabayImages || []).length) renderPixabayImageResults();
  pxbImgSearchBtn.addEventListener('click', () => pixabayImageSearch());
  pxbImgQueryInput.addEventListener('keydown', e => { if (e.key === 'Enter') pixabayImageSearch(); });

  // ── Auto-change toggles ──
  document.getElementById('toggle-auto-change-img').addEventListener('change', e => {
    state.settings.bgImageAutoChange = e.target.checked;
    saveState();
  });
  document.getElementById('toggle-auto-change-vid').addEventListener('change', e => {
    state.settings.bgVideoAutoChange = e.target.checked;
    saveState();
  });
  document.getElementById('toggle-pxb-auto-change-img').addEventListener('change', e => {
    state.settings.pixabayImageAutoChange = e.target.checked;
    saveState();
    renderPixabayImageResults();
  });
  document.getElementById('toggle-pxb-auto-change-vid').addEventListener('change', e => {
    state.settings.pixabayVideoAutoChange = e.target.checked;
    saveState();
    renderPixabayResults();
  });

  // ── Wallpaper controls ──
  document.getElementById('ctrl-overlay').addEventListener('input', updateBgControls);
  document.getElementById('ctrl-blur').addEventListener('input',    updateBgControls);

  // ── Settings ──
  document.getElementById('accent-color-input').addEventListener('input', e => applyAccent(e.target.value));
  document.getElementById('card-blur-input').addEventListener('input',    e => applyCardBlur(e.target.value));
  document.getElementById('toggle-liquid-glass').addEventListener('change', e => {
    applyLiquidGlass(e.target.checked);
  });

  // ── Liquid Glass slider listeners ──
  function lgSlider(id, valId, prop, suffix, transform) {
    document.getElementById(id).addEventListener('input', e => {
      const raw = parseFloat(e.target.value);
      state.settings[prop] = raw;
      document.getElementById(valId).textContent = suffix ? raw + suffix : transform(raw);
      applyLGVars();
      saveState();
    });
  }
  lgSlider('lg-blur',       'lg-blur-val',       'lgBlur',        'px',  null);
  lgSlider('lg-density',    'lg-density-val',    'lgDensity',     '%',   null);
  lgSlider('lg-saturation', 'lg-saturation-val', 'lgSaturation',  '%',   null);
  lgSlider('lg-brightness', 'lg-brightness-val', 'lgBrightness',  null,  v => (v/100).toFixed(2));
  lgSlider('lg-rim',        'lg-rim-val',        'lgRim',         '%',   null);
  lgSlider('lg-shadow',     'lg-shadow-val',     'lgShadow',      '%',   null);
  // lg-tint-opacity needs mode-aware key (minimal vs classic isolated)
  document.getElementById('lg-tint-opacity').addEventListener('input', e => {
    const raw = parseFloat(e.target.value);
    state.settings[getLgTintKeys().opacKey] = raw;
    document.getElementById('lg-tint-opacity-val').textContent = raw + '%';
    applyLGVars();
    saveState();
  });
  lgSlider('lg-corner-boost',   'lg-corner-boost-val',   'lgCornerBoost',  '%', null);
  lgSlider('lg-edge-glow',      'lg-edge-glow-val',      'lgEdgeGlow',     '%', null);
  lgSlider('lg-refraction',     'lg-refraction-val',     'lgRefraction',   '%', null);
  document.getElementById('lg-tint').addEventListener('input', e => {
    const { tintKey, opacKey } = getLgTintKeys();
    state.settings[tintKey] = e.target.value;
    // Auto-boost intensity if it's too low to see the tint color
    const hex = e.target.value.replace('#','');
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
    const isNearWhite = r > 230 && g > 230 && b > 230;
    if (!isNearWhite && (state.settings[opacKey] ?? 15) < 10) {
      state.settings[opacKey] = 15;
      const slider = document.getElementById('lg-tint-opacity');
      slider.value = 15;
      document.getElementById('lg-tint-opacity-val').textContent = '15%';
    }
    applyLGVars();
    saveState();
  });

  document.getElementById('lg-reset-btn').addEventListener('click', () => {
    state.settings.lgBlur        = 4;
    state.settings.lgDensity     = 0;
    state.settings.lgSaturation  = 140;
    state.settings.lgBrightness  = 90;
    state.settings.lgRim         = 15;
    state.settings.lgShadow      = 80;
    state.settings.lgCornerBoost = 15;
    state.settings.lgEdgeGlow    = 100;
    state.settings.lgRefraction  = 10;
    // Reset tint for current mode only
    const { tintKey, opacKey } = getLgTintKeys();
    state.settings[tintKey] = '#ffffff';
    state.settings[opacKey] = 5;
    syncLGSliders();
    applyLGVars();
    saveState();
    toast('Liquid Glass reset to defaults', 'success');
  });
  document.getElementById('toggle-clock').addEventListener('change', e => {
    setClockEnabled(e.target.checked);
    const on = e.target.checked;
    document.getElementById('clock-sub-settings').style.display = on ? 'block' : 'none';
    saveState(); updateClock();
  });
  document.getElementById('toggle-seconds').addEventListener('change', e => {
    state.settings.clockSeconds = e.target.checked;
    saveState(); tickClock();
  });
  document.getElementById('clock-format-select').addEventListener('change', e => {
    state.settings.clockFormat = e.target.value;
    saveState(); tickClock();
  });
  document.getElementById('clock-style-select').addEventListener('change', e => {
    setClockStyle(e.target.value);
    saveState(); tickClock();
  });
  document.getElementById('font-select').addEventListener('change', e => {
    applyFont(e.target.value);
  });

  // ── Layout picker ──
  document.querySelectorAll('.layout-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      applyBoardsLayout(opt.dataset.layout);
    });
  });

  // ── Links per row (minimal groups) ──
  const lprSlider = document.getElementById('mg-links-per-row');
  if (lprSlider) {
    lprSlider.addEventListener('input', e => {
      const v = parseInt(e.target.value);
      state.settings.mgLinksPerRow = v;
      const valEl = document.getElementById('mg-links-per-row-val');
      if (valEl) valEl.textContent = v;
      saveState();
      if ((state.settings.boardsLayout || 'classic') === 'minimal') renderBoards();
    });
  }

  // ── Icon style picker ──
  document.querySelectorAll('.mg-icon-style-opt').forEach(opt => {
    opt.addEventListener('click', () => applyMgIconStyle(opt.dataset.style));
  });
  document.getElementById('btn-reset-all').addEventListener('click', resetAll);
  document.getElementById('tab-title-input').addEventListener('input', e => {
    const val = e.target.value.trim() || 'ZenR-NewTab';
    state.settings.tabTitle = val;
    document.title = val;
    saveState();
  });
  document.getElementById('toggle-auto-sync').addEventListener('change', e => {
    state.settings.autoSyncBookmarks = e.target.checked;
    saveState();
    if (e.target.checked) autoSyncBrowserBookmarks();
  });

  // Notes widget toggle
  document.getElementById('toggle-notes').addEventListener('change', e => {
    setNotesEnabled(e.target.checked);
    saveState();
    updateNotesWidget();
  });

  // ── Search Widget settings ──
  document.getElementById('toggle-search').addEventListener('change', e => {
    getPageSearch().enabled = e.target.checked;
    document.getElementById('search-sub-settings').style.display = e.target.checked ? 'block' : 'none';
    saveState();
    updateSearchWidget();
  });
  document.getElementById('search-engine-select').addEventListener('change', e => {
    state.settings.searchEngine = e.target.value;
    saveState();
    _swApplyEngine();
    _swClearSuggestions();
  });
  document.getElementById('toggle-search-suggestions').addEventListener('change', e => {
    state.settings.searchSuggestions = e.target.checked;
    saveState();
    if (!e.target.checked) _swClearSuggestions();
  });
  document.getElementById('toggle-search-newtab').addEventListener('change', e => {
    state.settings.searchNewTab = e.target.checked;
    saveState();
  });

  const phInput = document.getElementById('search-placeholder-input');
  if (phInput) {
    phInput.addEventListener('input', e => {
      state.settings.searchPlaceholder = e.target.value || "What's on your mind?";
      _swApplyEngine();
      saveState();
    });
  }

  const bwSlider = document.getElementById('search-bar-width-input');
  if (bwSlider) {
    bwSlider.addEventListener('input', e => {
      const v = parseInt(e.target.value);
      // 240 = "Auto" sentinel — means use CSS responsive default
      const isAuto = v <= 240;
      state.settings.searchBarWidth = isAuto ? 0 : v;
      document.getElementById('search-bar-width-val').textContent = isAuto ? 'Auto' : v + 'px';
      updateSearchWidget();
      saveState();
    });
  }

  const compactToggle = document.getElementById('toggle-search-compact');
  if (compactToggle) {
    compactToggle.addEventListener('change', e => {
      state.settings.searchBarCompact = e.target.checked;
      updateSearchWidget();
      saveState();
    });
  }

  // ── Calculator Widget settings ──
  document.getElementById('toggle-calculator').addEventListener('change', e => {
    getPageCalc().enabled = e.target.checked;
    document.getElementById('calc-sub-settings').style.display = e.target.checked ? 'block' : 'none';
    saveState();
    updateCalculatorWidget();
  });
  document.getElementById('toggle-calc-history').addEventListener('change', e => {
    state.settings.calcSaveHistory = e.target.checked;
    saveState();
    const histBtn = document.getElementById('calc-history-btn');
    if (histBtn) histBtn.classList.toggle('hidden', !e.target.checked);
    if (!e.target.checked) {
      document.getElementById('calc-history-panel').classList.add('hidden');
    }
  });

  // ── Background source clear buttons ──
  document.getElementById('bg-clear-pxb-img')?.addEventListener('click', () =>
    openConfirmModal('Clear Pixabay images?', 'This will remove all Pixabay search results. Local files are kept.', clearPixabayImages));
  document.getElementById('bg-clear-local-img')?.addEventListener('click', () =>
    openConfirmModal('Clear local images?', 'All uploaded image files will be deleted. Pixabay results are kept.', () => clearAllImages(false)));
  document.getElementById('bg-clear-all-img')?.addEventListener('click', () =>
    openConfirmModal('Reset all image backgrounds?', 'Both Pixabay results and local files will be cleared. Background resets to gradient.', clearAllImageSources));

  document.getElementById('bg-clear-pxb-vid')?.addEventListener('click', () =>
    openConfirmModal('Clear Pixabay videos?', 'This will remove all Pixabay search results. Local files are kept.', clearPixabayVideos));
  document.getElementById('bg-clear-local-vid')?.addEventListener('click', () =>
    openConfirmModal('Clear local videos?', 'All uploaded video files will be deleted. Pixabay results are kept.', () => clearAllVideos(false)));
  document.getElementById('bg-clear-all-vid')?.addEventListener('click', () =>
    openConfirmModal('Reset all video backgrounds?', 'Both Pixabay results and local files will be cleared. Background resets to gradient.', clearAllVideoSources));

  // Wallpaper source dropdowns
  const vidSrcBtn = document.getElementById('vid-source-btn');
  const vidSrcDd  = document.getElementById('vid-source-dropdown');
  if (vidSrcBtn && vidSrcDd) {
    vidSrcBtn.addEventListener('click', e => { e.stopPropagation(); vidSrcDd.classList.toggle('hidden'); });
  }
  const imgSrcBtn = document.getElementById('img-source-btn');
  const imgSrcDd  = document.getElementById('img-source-dropdown');
  if (imgSrcBtn && imgSrcDd) {
    imgSrcBtn.addEventListener('click', e => { e.stopPropagation(); imgSrcDd.classList.toggle('hidden'); });
  }
  document.addEventListener('click', () => {
    if (vidSrcDd) vidSrcDd.classList.add('hidden');
    if (imgSrcDd) imgSrcDd.classList.add('hidden');
  });

  // New Note button (topbar)
  document.getElementById('btn-new-note').addEventListener('click', addNewNote);

  // Global notes image input
  document.getElementById('notes-img-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file && activeNoteBody && activeNoteId) {
      _insertNoteImage(file, activeNoteBody, activeNoteId);
    }
    e.target.value = '';
    activeNoteId = null;
    activeNoteBody = null;
  });

  // ── Clock Size ──
  function changeClockSize(delta) {
    const cur = state.settings.clockSize ?? 100;
    const next = Math.min(250, Math.max(40, cur + delta));
    state.settings.clockSize = next;
    document.getElementById('clock-size-val').textContent = next + '%';
    saveState(); updateClock();
  }
  document.getElementById('clock-size-dec').addEventListener('click', () => changeClockSize(-10));
  document.getElementById('clock-size-inc').addEventListener('click', () => changeClockSize(10));
}

// ─── SEARCH BAR WIDGET ──────────────────────────────

// In-memory suggestion cache  { "engine:query" → string[] }
const _swCache = Object.create(null);
let _swDebounce = null;
let _swAbort    = null;
let _swActiveIdx = -1;   // keyboard-nav index in suggestion list

function updateSearchWidget() {
  const widget = document.getElementById('search-widget');
  if (!widget) return;

  if (!getPageSearch().enabled) {
    widget.classList.add('hidden');
    return;
  }
  widget.classList.remove('hidden');

  // Apply bar width
  const bw = state.settings.searchBarWidth || 0;
  if (bw > 0) {
    widget.style.width = bw + 'px';
    widget.style.maxWidth = bw + 'px';
  } else {
    widget.style.width = '';
    widget.style.maxWidth = '';
  }
  // Apply compact mode
  if (state.settings.searchBarCompact) {
    widget.classList.add('sw-compact');
  } else {
    widget.classList.remove('sw-compact');
  }

  // Restore saved position
  const pos = getPageSearch().position;
  if (pos) {
    widget.style.left      = pos.x + 'px';
    widget.style.top       = pos.y - getScrollY() + 'px';
    widget.style.transform = 'none';
    widget.classList.add('sw-positioned');
  } else {
    widget.style.left = '50%';
    widget.style.top  = '18%';
    widget.style.transform = 'translateX(-50%)';
    widget.classList.remove('sw-positioned');
  }

  _swApplyEngine();
}

function _swApplyEngine() {
  const key = state.settings.searchEngine || 'google';
  const eng = SEARCH_ENGINES[key] || SEARCH_ENGINES.google;
  const pill = document.getElementById('sw-engine-pill');
  if (!pill) return;
  // Render engine logo SVG inside pill
  pill.innerHTML = eng.logo;
  pill.title = `Search with ${eng.name} (click to cycle)`;
  pill.style.borderColor = eng.color + '55';
  pill.style.background  = eng.color + '22';
  // Update input placeholder with custom or default text
  const input = document.getElementById('sw-input');
  if (input) input.placeholder = state.settings.searchPlaceholder || "What's on your mind?";
}

function _swCycleEngine() {
  const keys = SEARCH_ENGINE_KEYS;
  const cur  = state.settings.searchEngine || 'google';
  const idx  = keys.indexOf(cur);
  state.settings.searchEngine = keys[(idx + 1) % keys.length];
  // Sync settings panel select
  const sel = document.getElementById('search-engine-select');
  if (sel) sel.value = state.settings.searchEngine;
  _swApplyEngine();
  _swClearSuggestions();
  saveState();
}

function _swDoSearch(query) {
  if (!query.trim()) return;
  const key = state.settings.searchEngine || 'google';
  const eng = SEARCH_ENGINES[key] || SEARCH_ENGINES.google;
  const url = eng.url + encodeURIComponent(query.trim());
  if (state.settings.searchNewTab) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

async function _swFetchSuggestions(query) {
  const key = state.settings.searchEngine || 'google';
  const eng = SEARCH_ENGINES[key] || SEARCH_ENGINES.google;
  if (!eng.suggest) { _swClearSuggestions(); return; }

  const cacheKey = key + ':' + query;
  if (_swCache[cacheKey]) { _swRenderSuggestions(_swCache[cacheKey]); return; }

  // Cancel any in-flight request
  if (_swAbort) { _swAbort.abort(); }
  _swAbort = new AbortController();

  try {
    const url = eng.suggest + encodeURIComponent(query);
    const res  = await fetch(url, { signal: _swAbort.signal });
    if (!res.ok) return;
    const data = await res.json();
    const suggestions = (eng.parse ? eng.parse(data) : []).slice(0, 8);
    // Store max 60 keys in cache, evict oldest
    const cacheKeys = Object.keys(_swCache);
    if (cacheKeys.length >= 60) delete _swCache[cacheKeys[0]];
    _swCache[cacheKey] = suggestions;
    _swRenderSuggestions(suggestions);
  } catch(e) {
    if (e.name !== 'AbortError') console.warn('[ZenR Search]', e);
  }
}

function _swRenderSuggestions(suggestions) {
  const list   = document.getElementById('sw-suggestions');
  const widget = document.getElementById('search-widget');
  const input  = document.getElementById('sw-input');
  if (!list || !widget) return;

  list.innerHTML = '';
  _swActiveIdx = -1;

  if (!suggestions || suggestions.length === 0) {
    widget.classList.remove('sw-open');
    return;
  }

  suggestions.forEach((text, i) => {
    const li = document.createElement('li');
    li.className = 'sw-suggestion';
    li.dataset.idx = i;
    li.innerHTML = `
      <svg class="sw-sug-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <span>${_escHtml(text)}</span>
      <button class="sw-sug-fill-btn" title="Fill into search bar" tabindex="-1">
        <svg width="13" height="13" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="15" y1="15" x2="4" y2="4"/>
          <polyline points="4,10 4,4 10,4"/>
        </svg>
      </button>`;

    // Fill-arrow: put text into input, keep focus, clear dropdown
    li.querySelector('.sw-sug-fill-btn').addEventListener('mousedown', e => {
      e.preventDefault();
      e.stopPropagation();
      if (input) {
        input.value = text;
        input.focus();
        const len = input.value.length;
        input.setSelectionRange(len, len);
        _swClearSuggestions();
      }
    });

    // Row click (anywhere except the arrow) → run the search
    li.addEventListener('mousedown', e => {
      if (e.target.closest('.sw-sug-fill-btn')) return;
      e.preventDefault();
      _swDoSearch(text);
    });

    list.appendChild(li);
  });
  widget.classList.add('sw-open');
}

function _swClearSuggestions() {
  const list   = document.getElementById('sw-suggestions');
  const widget = document.getElementById('search-widget');
  if (list)   list.innerHTML = '';
  if (widget) widget.classList.remove('sw-open');
  _swActiveIdx = -1;
}

function _swMoveCursor(dir) {
  const list  = document.getElementById('sw-suggestions');
  const input = document.getElementById('sw-input');
  if (!list) return;
  const items = list.querySelectorAll('.sw-suggestion');
  if (!items.length) return;

  items.forEach(i => i.classList.remove('sw-active'));
  _swActiveIdx = Math.max(-1, Math.min(items.length - 1, _swActiveIdx + dir));

  if (_swActiveIdx >= 0) {
    items[_swActiveIdx].classList.add('sw-active');
    if (input) input.value = items[_swActiveIdx].querySelector('span').textContent;
  }
}

function _escHtml(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function initSearchWidget() {
  const widget  = document.getElementById('search-widget');
  const input   = document.getElementById('sw-input');
  const pill    = document.getElementById('sw-engine-pill');
  const submit  = document.getElementById('sw-submit');
  if (!widget || !input) return;

  // ── Input events ──
  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearTimeout(_swDebounce);
    if (q.length < 2 || !state.settings.searchSuggestions) {
      _swClearSuggestions(); return;
    }
    _swDebounce = setTimeout(() => _swFetchSuggestions(q), 210);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown')  { e.preventDefault(); _swMoveCursor(1); }
    else if (e.key === 'ArrowUp')   { e.preventDefault(); _swMoveCursor(-1); }
    else if (e.key === 'Escape')    { _swClearSuggestions(); input.blur(); }
    else if (e.key === 'Enter')     { e.preventDefault(); _swDoSearch(input.value); }
    else if (e.key === 'Tab')       { _swClearSuggestions(); }
  });

  input.addEventListener('blur', () => {
    // Small delay so suggestion mousedown fires first
    setTimeout(_swClearSuggestions, 180);
  });

  // ── Engine pill cycles through engines ──
  pill.addEventListener('click', _swCycleEngine);

  // ── Submit button ──
  submit.addEventListener('click', () => _swDoSearch(input.value));

  // ── Drag to reposition (grab anywhere on widget except input) ──
  let swDrag = null;
  widget.addEventListener('pointerdown', e => {
    if (e.target === input || e.target.closest('.sw-suggestions') ||
        e.target.closest('#sw-submit') || e.target === pill || e.target.closest('.sw-engine-pill')) return;
    e.preventDefault();
    const rect = widget.getBoundingClientRect();
    swDrag = {
      startX: e.clientX, startY: e.clientY,
      origX: rect.left, origY: rect.top,
    };
    widget.classList.add('sw-dragging');
    widget.setPointerCapture(e.pointerId);
  });

  widget.addEventListener('pointermove', e => {
    if (!swDrag) return;
    const x = Math.max(0, swDrag.origX + e.clientX - swDrag.startX);
    const y = Math.max(0, swDrag.origY + e.clientY - swDrag.startY);
    widget.style.left      = x + 'px';
    widget.style.top       = y + 'px';
    widget.style.transform = 'none';
    widget.classList.add('sw-positioned');
  });

  widget.addEventListener('pointerup', e => {
    if (!swDrag) return;
    const x = Math.max(0, swDrag.origX + e.clientX - swDrag.startX);
    const y = Math.max(0, swDrag.origY + e.clientY - swDrag.startY) + getScrollY();
    getPageSearch().position = { x, y };
    saveState();
    widget.classList.remove('sw-dragging');
    swDrag = null;
  });

  // Double-click pill to reset position to default
  pill.addEventListener('dblclick', () => {
    getPageSearch().position = null;
    widget.style.left      = '50%';
    widget.style.top       = '18%';
    widget.style.transform = 'translateX(-50%)';
    widget.classList.remove('sw-positioned');
    saveState();
  });
}

// ─── CALCULATOR WIDGET ───────────────────────────────
let _calcState = {
  current: '0',
  prev: null,
  op: null,
  justEvaled: false,
  waitingForOperand: false,
  expr: '',
};
let _calcHistory = [];

function updateCalculatorWidget() {
  const widget = document.getElementById('calc-widget');
  if (!widget) return;
  if (!getPageCalc().enabled) {
    widget.classList.add('hidden');
    return;
  }
  const pos  = getPageCalc().pos  || { x: 100, y: 160 };
  const size = getPageCalc().size || { w: 280, h: 420 };
  // Allow negative top so widget scrolls off-screen naturally
  const scrollY = getScrollY();
  const maxX = Math.max(0, window.innerWidth  - size.w);
  const clampedX = Math.min(Math.max(0, pos.x), maxX);
  const clampedY = pos.y - scrollY;
  widget.style.position = 'fixed';
  widget.style.left   = clampedX + 'px';
  widget.style.top    = clampedY + 'px';
  widget.style.width  = size.w + 'px';
  widget.style.height = size.h + 'px';
  widget.classList.remove('hidden');

  // Sync history button visibility
  const histBtn = document.getElementById('calc-history-btn');
  if (histBtn) histBtn.classList.toggle('hidden', !state.settings.calcSaveHistory);

  // Load stored history — use chrome.storage.local (works in all extension contexts)
  try {
    chrome.storage.local.get(['zenrCalcHistory'], r => {
      _calcHistory = (r && Array.isArray(r.zenrCalcHistory)) ? r.zenrCalcHistory : [];
      _calcRenderHistory();
    });
  } catch(e) { _calcHistory = []; _calcRenderHistory(); }
}

function _calcDisplay() {
  document.getElementById('calc-result').textContent = _calcState.current;
  document.getElementById('calc-expr').textContent   = _calcState.expr;
}

function _calcPushHistory(expr, result) {
  if (!state.settings.calcSaveHistory) return;
  _calcHistory.unshift({ expr, result });
  if (_calcHistory.length > 50) _calcHistory.length = 50;
  try { chrome.storage.local.set({ zenrCalcHistory: _calcHistory }); } catch(e) {}
  _calcRenderHistory();
}

function _calcRenderHistory() {
  const list = document.getElementById('calc-history-list');
  if (!list) return;
  if (!_calcHistory.length) {
    list.innerHTML = '<div class="calc-hist-empty">No history yet</div>';
    return;
  }
  list.innerHTML = _calcHistory.map((h, i) =>
    `<div class="calc-hist-item" data-idx="${i}">
      <span class="calc-hist-expr">${h.expr}</span>
      <span class="calc-hist-res">${h.result}</span>
    </div>`
  ).join('');
  list.querySelectorAll('.calc-hist-item').forEach(el => {
    el.addEventListener('click', () => {
      _calcState.current    = _calcHistory[+el.dataset.idx].result;
      _calcState.justEvaled = true;
      _calcState.expr       = '';
      _calcDisplay();
    });
  });
}

function _calcEval() {
  if (_calcState.op === null || _calcState.prev === null) return;
  const a = parseFloat(_calcState.prev);
  const b = parseFloat(_calcState.current);
  let res;
  switch (_calcState.op) {
    case '+': res = a + b; break;
    case '−': res = a - b; break;
    case '×': res = a * b; break;
    case '÷': res = b === 0 ? 'Error' : a / b; break;
    default: res = b;
  }
  const exprStr = `${_calcState.prev} ${_calcState.op} ${_calcState.current}`;
  const resStr  = res === 'Error' ? 'Error' : String(parseFloat(res.toFixed(10)));
  _calcPushHistory(exprStr, resStr);
  _calcState.expr       = exprStr + ' =';
  _calcState.current    = resStr;
  _calcState.prev       = null;
  _calcState.op         = null;
  _calcState.justEvaled = true;
  _calcState.waitingForOperand = false;
}

function _calcHandleBtn(btn) {
  const action = btn.dataset.action;
  const val    = btn.dataset.val;

  if (action === 'num') {
    if (_calcState.justEvaled || _calcState.waitingForOperand) {
      _calcState.current = val;
      _calcState.justEvaled = false;
      _calcState.waitingForOperand = false;
    } else {
      _calcState.current = (_calcState.current === '0') ? val : _calcState.current + val;
    }
  }
  else if (action === 'dot') {
    if (_calcState.justEvaled || _calcState.waitingForOperand) {
      _calcState.current = '0.';
      _calcState.justEvaled = false;
      _calcState.waitingForOperand = false;
    } else if (!_calcState.current.includes('.')) {
      _calcState.current += '.';
    }
  }
  else if (action === 'clear') {
    _calcState = { current: '0', prev: null, op: null, justEvaled: false, waitingForOperand: false, expr: '' };
  }
  else if (action === 'sign') {
    _calcState.current = String(-parseFloat(_calcState.current));
  }
  else if (action === 'pct') {
    _calcState.current = String(parseFloat(_calcState.current) / 100);
  }
  else if (action === 'op') {
    if (_calcState.prev !== null && _calcState.op && !_calcState.waitingForOperand) _calcEval();
    _calcState.prev              = _calcState.current;
    _calcState.op                = val;
    _calcState.justEvaled        = false;
    _calcState.waitingForOperand = true;
    _calcState.expr              = _calcState.prev + ' ' + val;
  }
  else if (action === 'equals') {
    _calcEval();
  }
  _calcDisplay();
}


function initCalculatorWidget() {
  const widget    = document.getElementById('calc-widget');
  const header    = widget.querySelector('.calc-header');
  const resizeHdl = document.getElementById('calc-resize-handle');
  const closeBtn  = document.getElementById('calc-close-btn');
  const histBtn   = document.getElementById('calc-history-btn');
  const histPanel = document.getElementById('calc-history-panel');
  const clearHist = document.getElementById('calc-clear-hist');

  // Bring to front
  widget.addEventListener('pointerdown', () => { widget.style.zIndex = '95'; });

  // Drag
  let drag = null;
  header.addEventListener('pointerdown', e => {
    if (e.target.closest('.calc-header-actions')) return;
    e.preventDefault();
    const pos = getPageCalc().pos || { x: 100, y: 160 };
    drag = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y - getScrollY() };
    widget.classList.add('calc-dragging');
    header.setPointerCapture(e.pointerId);
  });
  header.addEventListener('pointermove', e => {
    if (!drag) return;
    const nx = Math.min(Math.max(0, drag.origX + e.clientX - drag.startX), window.innerWidth  - widget.offsetWidth);
    const ny = Math.min(Math.max(0, drag.origY + e.clientY - drag.startY), window.innerHeight - widget.offsetHeight);
    widget.style.position = 'fixed';
    widget.style.left = nx + 'px';
    widget.style.top  = ny + 'px';
  });
  header.addEventListener('pointerup', e => {
    if (!drag) return;
    getPageCalc().pos = {
      x: Math.min(Math.max(0, drag.origX + e.clientX - drag.startX), window.innerWidth  - widget.offsetWidth),
      y: Math.min(Math.max(0, drag.origY + e.clientY - drag.startY), window.innerHeight - widget.offsetHeight) + getScrollY()
    };
    saveState();
    widget.classList.remove('calc-dragging');
    drag = null;
  });

  // Resize
  let resize = null;
  resizeHdl.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();
    const size = getPageCalc().size || { w: 280, h: 420 };
    resize = { startX: e.clientX, startY: e.clientY, origW: size.w, origH: size.h };
    resizeHdl.setPointerCapture(e.pointerId);
  });
  resizeHdl.addEventListener('pointermove', e => {
    if (!resize) return;
    widget.style.width  = Math.max(240, resize.origW + e.clientX - resize.startX) + 'px';
    widget.style.height = Math.max(320, resize.origH + e.clientY - resize.startY) + 'px';
  });
  resizeHdl.addEventListener('pointerup', e => {
    if (!resize) return;
    getPageCalc().size = {
      w: Math.max(240, resize.origW + e.clientX - resize.startX),
      h: Math.max(320, resize.origH + e.clientY - resize.startY)
    };
    saveState(); resize = null;
  });

  // Close
  closeBtn.addEventListener('click', () => {
    getPageCalc().enabled = false;
    const t = document.getElementById('toggle-calculator');
    if (t) t.checked = false;
    document.getElementById('calc-sub-settings').style.display = 'none';
    saveState();
    widget.classList.add('hidden');
  });

  // History toggle
  if (histBtn) {
    histBtn.addEventListener('click', () => { histPanel.classList.toggle('hidden'); });
  }
  if (clearHist) {
    clearHist.addEventListener('click', () => {
      _calcHistory = [];
      try { chrome.storage.local.remove('zenrCalcHistory'); } catch(e) {}
      _calcRenderHistory();
    });
  }

  // Calc buttons
  widget.querySelectorAll('.calc-btn').forEach(btn => {
    btn.addEventListener('click', () => _calcHandleBtn(btn));
  });

  // Keyboard support (when widget visible)
  document.addEventListener('keydown', e => {
    if (widget.classList.contains('hidden')) return;
    const k = e.key;
    if (k >= '0' && k <= '9') { _calcHandleBtn({ dataset: { action: 'num', val: k } }); }
    else if (k === '.') { _calcHandleBtn({ dataset: { action: 'dot' } }); }
    else if (k === '+') { _calcHandleBtn({ dataset: { action: 'op', val: '+' } }); }
    else if (k === '-') { _calcHandleBtn({ dataset: { action: 'op', val: '−' } }); }
    else if (k === '*') { _calcHandleBtn({ dataset: { action: 'op', val: '×' } }); }
    else if (k === '/') { e.preventDefault(); _calcHandleBtn({ dataset: { action: 'op', val: '÷' } }); }
    else if (k === 'Enter' || k === '=') { _calcHandleBtn({ dataset: { action: 'equals' } }); }
    else if (k === 'Backspace') {
      if (_calcState.current.length > 1) _calcState.current = _calcState.current.slice(0, -1);
      else _calcState.current = '0';
      _calcDisplay();
    }
    else if (k === 'Escape') { _calcHandleBtn({ dataset: { action: 'clear' } }); }
  });

  _calcDisplay();
}

// ─── INIT ────────────────────────────────────────────
// Helper: returns current vertical scroll of the main content area
function getScrollY() {
  return document.getElementById('main-content')?.scrollTop || 0;
}

// Re-render all widget positions whenever main content scrolls
function _onMainScroll() {
  updateClock();
  updateSearchWidget();
  updateCalculatorWidget();
  document.querySelectorAll('.notes-widget').forEach(w => {
    const noteId = w.dataset.noteId;
    const n = getPageNotes().find(x => x.id === noteId);
    if (n && n.pos) w.style.top = ((n.pos.y || 120) - getScrollY()) + 'px';
  });
}



// ─── LAYOUT INFO TOOLTIP PORTAL ─────────────────────
// Renders the bubble at <body> level so #modal-settings
// overflow:hidden never clips it.
function initLayoutInfoPortal() {
  const tip = document.querySelector('.layout-info-tip');
  if (!tip) return;

  // Build the portal element once
  const portal = document.createElement('div');
  portal.id = 'layout-info-portal';
  // "NOT SYNC" should be bold
  portal.innerHTML = tip.dataset.tooltip.replace('NOT SYNC', '<strong>NOT SYNC</strong>');
  document.body.appendChild(portal);

  let hideTimer = null;

  function show() {
    clearTimeout(hideTimer);
    const rect = tip.getBoundingClientRect();
    const MARGIN = 8; // gap between icon and bubble

    // Position below the icon, left-aligned to icon but clamped to viewport
    let left = rect.left;
    const portalW = 280;
    // Clamp so it never goes off the right edge
    if (left + portalW > window.innerWidth - 8) {
      left = window.innerWidth - 8 - portalW;
    }
    // Never off the left edge
    if (left < 8) left = 8;

    portal.style.left = left + 'px';
    portal.style.top  = (rect.bottom + MARGIN) + 'px';

    // Reposition the arrow to always point at the icon
    const arrowLeft = Math.min(Math.max(rect.left + rect.width / 2 - left - 4, 10), portalW - 20);
    portal.style.setProperty('--arrow-left', arrowLeft + 'px');
    portal.style.display = 'block';
    // Force reflow for transition
    portal.offsetHeight;
    portal.classList.add('portal-visible');
    tip.classList.add('tip-active');
  }

  function hide() {
    hideTimer = setTimeout(() => {
      portal.classList.remove('portal-visible');
      setTimeout(() => { portal.style.display = 'none'; }, 190);
      tip.classList.remove('tip-active');
    }, 80);
  }

  tip.addEventListener('mouseenter', show);
  tip.addEventListener('mouseleave', hide);
  tip.addEventListener('focus',      show);
  tip.addEventListener('blur',       hide);
}

// ─── INTRO VIDEO (plays once on first install) ───────
function _runIntro() {
  const overlay = document.getElementById('intro-overlay');
  const video   = document.getElementById('intro-video');
  if (!overlay || !video) return;

  function dismiss() {
    // Phase 1: quick flash to white
    overlay.classList.add('intro-flash');
    setTimeout(function() {
      overlay.classList.remove('intro-flash');
      // Phase 2: slide the whole overlay upward off-screen
      overlay.classList.add('intro-exit');
      setTimeout(function() {
        overlay.classList.add('intro-hidden');
      }, 780);
    }, 260);
  }

  video.addEventListener('ended', dismiss);

  // New-tab opening = user gesture → unmuted autoplay allowed.
  // If browser still refuses, retry muted so animation never hangs.
  video.play().catch(function() {
    video.muted = true;
    video.play().catch(function() { dismiss(); });
  });
}

function _maybeShowIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  try {
    chrome.storage.local.get(['zenrIntroSeen'], function(result) {
      if (result.zenrIntroSeen) {
        // Already watched — hide immediately, zero flicker
        overlay.classList.add('intro-hidden');
      } else {
        chrome.storage.local.set({ zenrIntroSeen: true });
        _runIntro();
      }
    });
  } catch(e) {
    overlay.classList.add('intro-hidden');
  }
}

async function init() {
  bindStaticEvents();
  initClockDrag();
  initSearchWidget();
  initCalculatorWidget();
  await loadState();
  autoSyncBrowserBookmarks();
  await loadBackground();
  render();
  initLayoutInfoPortal();
  _maybeShowIntro();
  const mc = document.getElementById('main-content');
  if (mc) mc.addEventListener('scroll', _onMainScroll, { passive: true });
}
init();
