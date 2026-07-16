/* ============================================================
   BIBLIOTECA IMPTEL — App Logic v4.0 (Dark Spotify Theme)
   ============================================================ */
'use strict';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/vendor/pdf.worker.min.js';

// ============ SVG ICONS ============
const I = {
  // Categories
  code:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  gear:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  chart:     `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  clipboard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  globe:     `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  // Nav
  home:      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  library:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  bookmark:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  heart:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartSmall:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFillSmall:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  user:      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  search:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  menu:      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrowLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  chevronL:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronR:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  play:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  playSmall: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  star:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starEmpty: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  // Extras
  flame:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  sparkle:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  mail:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  lock:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  mobile:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  refresh:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  zoomIn:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  zoomOut:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  logout:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  tag:       `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  shield:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  check:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  checkCircle:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  pen:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  send:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  mapPin:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  bookOpen:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  award:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  zap:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  edit:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  info:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  trending:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  users:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  graduation:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  starSmall: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  chevronRight:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  book:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
};

const icon = (name, size) => {
  const svg = I[name] || '';
  if (size && svg) return svg.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`);
  return svg;
};

// ============ DATA ============
const DB = {
  books: [
    { id:1,  title:'Python para Todos',                               author:'Charles R. Severance',  category:'Tecnologia',       cover:'capas/python-para-todos.png',            pdf:'livros/python-para-todos.pdf',            stars:5, badge:'hot',  year:2024, publisher:'Revenera',       desc:'Explorando Dados com Python 3. Livro didático gratuito com exercícios práticos de manipulação de dados, web scraping e bases de dados.' },
    { id:2,  title:'Python para Desenvolvedores',                     author:'Luiz Eduardo Borges',   category:'Tecnologia',       cover:'capas/python-para-desenvolvedores.png',   pdf:'livros/python-para-desenvolvedores.pdf',   stars:5, badge:'hot',  year:2023, publisher:'Edição do Autor', desc:'Guia abrangente de Python para programadores. Orientação a objectos, interfaces gráficas, acesso a BD e integração com código aberto.' },
    { id:3,  title:'Automatize Tarefas Monótonas com Python',         author:'Al Sweigart',           category:'Tecnologia',       cover:'capas/automatize-tarefas.png',           pdf:'livros/automatize-tarefas-python.pdf',     stars:5, badge:'',     year:2023, publisher:'No Starch Press', desc:'Aprenda a usar Python para automatizar tarefas repetitivas: manipulação de ficheiros, web scraping, controlo de teclado e rato.' },
    { id:4,  title:'Introdução ao Python',                            author:'Nilo Ney Coutinho Menezes', category:'Tecnologia',   cover:'capas/intro-python-nilo.png',             pdf:'livros/intro-python-nilo.pdf',             stars:5, badge:'',     year:2022, publisher:'Novatec',        desc:'Curso completo de Python para iniciantes. Sintaxe, tipos, estruturas de controlo, funções, ficheiros e programação orientada a objectos.' },
    { id:5,  title:'Curso Intensivo de Python',                       author:'Eric Matthes',          category:'Tecnologia',       cover:'capas/curso-intensivo-python.png',        pdf:'livros/curso-intensivo-python.pdf',        stars:5, badge:'new',   year:2024, publisher:'Novatec',        desc:'Guia prático de Python com projectos reais. Instalação, variáveis, listas, classes, testes e desdobramento de aplicações.' },
    { id:6,  title:'Python Zero à OOP',                               author:'Fernando Feltrin',      category:'Tecnologia',       cover:'capas/python-zero-poo.png',               pdf:'livros/python-zero-poo.pdf',               stars:4, badge:'',     year:2023, publisher:'Novatec',        desc:'Do zero absoluto à programação orientada a objectos em Python. Conceitos fundamentais com linguagem acessível e exemplos práticos.' },
    { id:7,  title:'JavaScript Eloquente',                             author:'Marijn Haverbeke',      category:'Tecnologia',       cover:'capas/javascript-eloquente.png',         pdf:'livros/javascript-eloquente.pdf',          stars:5, badge:'hot',   year:2023, publisher:'Novatec',        desc:'Guia abrangente de JavaScript moderno: programação funcional, assíncrona, manipulação do DOM e programação no navegador e servidor.' },
    { id:8,  title:'HTML, CSS e JavaScript — Caelum',                 author:'Caelum',                category:'Tecnologia',       cover:'capas/html-css-javascript-caelum.png',    pdf:'livros/html-css-javascript-caelum.pdf',    stars:4, badge:'new',   year:2024, publisher:'Novatec',        desc:'Apostila completa de desenvolvimento web. HTML5, CSS3, JavaScript, jQuery e responsive design com exercícios práticos.' },
    { id:9,  title:'Fundamentos de Programação',                      author:'Luis Joyanes Aguilar',  category:'Engenharia',       cover:'capas/fundamentos-programacao.png',       pdf:'livros/fundamentos-programacao.pdf',       stars:5, badge:'',     year:2022, publisher:'FCA',            desc:'Introdução completa à programação de computadores. Algoritmos, pseudocódigo, estruturas de dados e boas práticas de desenvolvimento.' },
    { id:10, title:'Algoritmos e Estruturas de Dados',                author:'Marcos / UFPR',         category:'Engenharia',       cover:'capas/algoritmos-estruturas-dados.png',   pdf:'livros/algoritmos-estruturas-dados.pdf',   stars:5, badge:'',     year:2023, publisher:'UFPR',           desc:'Livro didático sobre algoritmos e estruturas de dados com exercícios organizados em níveis de dificuldade crescente.' },
    { id:11, title:'Algoritmos e Programação de Computadores',        author:'Dilermando Junior / Gilberto Nakamiti', category:'Engenharia', cover:'capas/algoritmos-nakamiti.png',   pdf:'livros/algoritmos-nakamiti.pdf',           stars:5, badge:'hot',   year:2022, publisher:'Pearson',        desc:'Aplicações computacionais apresentadas em linguagem algorítmica e em quatro linguagens: Pascal, C, Java e PHP.' },
    { id:12, title:'Guia Prático do Servidor Linux',                 author:'Casa do Código',        category:'Engenharia',       cover:'capas/guia-servidor-linux.png',           pdf:'livros/guia-servidor-linux.pdf',           stars:4, badge:'',     year:2023, publisher:'Casa do Código', desc:'Administração Linux para iniciantes. Instalação, configuração, segurança e manutenção de servidores Linux em produção.' },
    { id:13, title:'Manual de Redes e Telecomunicações',              author:'Nelson / UFPR',         category:'Engenharia',       cover:'capas/manual-redes-telecomunicacoes.png', pdf:'livros/manual-redes-telecomunicacoes.pdf', stars:4, badge:'',     year:2022, publisher:'UFPR',           desc:'Conceitos fundamentais de redes de computadores e telecomunicações. Modelos OSI, TCP/IP, roteamento e infraestrutura de rede.' },
    { id:14, title:'Introdução a Estruturas de Dados com Python',    author:'Editora Synapse',       category:'Engenharia',       cover:'capas/intro-estruturas-python.png',       pdf:'livros/intro-estruturas-python.pdf',       stars:5, badge:'new',   year:2024, publisher:'Synapse',        desc:'Estruturas de dados implementadas em Python: listas, filas, pilhas, árvores, grafos e tabelas de dispersão com exemplos de código.' },
    { id:15, title:'PostgreSQL: BD para Web Modernas',                author:'Vinícius Carvalho',     category:'Ciência de Dados', cover:'capas/postgresql-web-modernas.png',       pdf:'livros/postgresql-web-modernas.pdf',       stars:5, badge:'hot',   year:2023, publisher:'Novatec',        desc:'Guia completo do PostgreSQL para aplicações web. Instalação, consultas SQL, funções, triggers, otimização e integração com Node.js.' },
    { id:16, title:'NoSQL: Armazenando Dados Modernos',              author:'Casa do Código',        category:'Ciência de Dados', cover:'capas/nosql-dados-modernos.png',          pdf:'livros/nosql-dados-modernos.pdf',          stars:4, badge:'',     year:2023, publisher:'Casa do Código', desc:'Conceitos e implementação de bases de dados NoSQL. MongoDB, Redis, CouchDB e comparação com bancos relacionais.' },
    { id:17, title:'Lógica de Algoritmos com JavaScript',             author:'Edécio Fernando Iepsen',category:'Ciência de Dados', cover:'capas/logica-algoritmos-javascript.png',  pdf:'livros/logica-algoritmos-javascript.pdf',  stars:5, badge:'',     year:2022, publisher:'Novatec',        desc:'Uma introdução à programação de computadores com exemplos e exercícios em JavaScript. Lógica, variáveis, ciclos e funções.' },
    { id:18, title:'Processando a Informação',                        author:'R. P. O. Neves / Zampirolli', category:'Ciência de Dados', cover:'capas/processando-informacao.png',  pdf:'livros/processando-informacao.pdf',        stars:4, badge:'new',   year:2024, publisher:'Independente',   desc:'Livro prático de programação independente de linguagem. Algoritmos, fluxogramas, pseudocódigo e resolução de problemas.' },
    { id:19, title:'O Guia Mochileiro de Python',                     author:'Kenneth Reitz',         category:'Gestão',           cover:'capas/guia-mochileiro.png',              pdf:'livros/guia-mochileiro-python.pdf',        stars:5, badge:'hot',   year:2023, publisher:'Novatec',        desc:'Guia conciso e elegante de Python para programadores experientes. API do linguagem, boas práticas e filosofia do Python.' },
    { id:20, title:'Lógica de Programação para Iniciantes',           author:'Revista Contemporânea', category:'Gestão',           cover:'capas/logica-iniciantes.png',             pdf:'livros/logica-iniciantes.pdf',             stars:3, badge:'',     year:2023, publisher:'Contemporânea',  desc:'Introdução acessível à lógica de programação. Pseudocódigo, variáveis, estruturas de decisão e repetição para quem nunca programou.' },
    { id:21, title:'Lógica de Programação',                           author:'Isadora / Educapes',    category:'Línguas',          cover:'capas/logica-programacao-educapes.png',   pdf:'livros/logica-programacao-educapes.pdf',   stars:4, badge:'',     year:2022, publisher:'Educapes',       desc:'Apostila sobre lógica de programação com atividades avaliativas. Conceitos fundamentais de algoritmos e resolução de problemas.' }
  ],
  categories: [
    { name:'Tecnologia',       icon:'code',     count:8 },
    { name:'Engenharia',       icon:'gear',     count:6 },
    { name:'Ciência de Dados', icon:'chart',    count:4 },
    { name:'Gestão',           icon:'clipboard',count:2 },
    { name:'Línguas',          icon:'globe',    count:1 }
  ],
  professores: [
    { id:1,  name:'Charles R. Severance',   slug:'charles-severance',       role:'Professor',  dept:'Tecnologia',       bio:'Professor de Ciência da Computação na Universidade de Michigan. Autor de Python para Todos e especialista em tecnologia educacional.', color:'#1DB954', initials:'CS' },
    { id:2,  name:'Luiz Eduardo Borges',    slug:'luiz-eduardo-borges',     role:'Autor',      dept:'Tecnologia',       bio:'Programador e escritor técnico brasileiro. Autor de Python para Desenvolvedores, referência em Python no Brasil desde 2004.', color:'#3b82f6', initials:'LB' },
    { id:3,  name:'Al Sweigart',            slug:'al-sweigart',             role:'Autor',      dept:'Tecnologia',       bio:'Autor de livros de programação acessíveis. Trabalha no Bureau of Labor Statistics e é defensor da alfabetização em programação.', color:'#f59e0b', initials:'AS' },
    { id:4,  name:'Nilo Ney Coutinho Menezes', slug:'nilo-menezes',         role:'Professor',  dept:'Tecnologia',       bio:'Professor titular aposentado da UFRJ. Autor de Introdução ao Python e referência em ensino de programação no Brasil.', color:'#ef4444', initials:'NM' },
    { id:5,  name:'Eric Matthes',           slug:'eric-matthes',            role:'Autor',      dept:'Tecnologia',       bio:'Programador e educador. Autor de Curso Intensivo de Python, livro adotado em escolas e universidades do mundo inteiro.', color:'#8b5cf6', initials:'EM' },
    { id:6,  name:'Fernando Feltrin',       slug:'fernando-feltrin',        role:'Autor',      dept:'Tecnologia',       bio:'Formador e autor técnico brasileiro. Especialista em Python e programação orientada a objectos para iniciantes.', color:'#14b8a6', initials:'FF' },
    { id:7,  name:'Marijn Haverbeke',       slug:'marijn-haverbeke',        role:'Autor',      dept:'Tecnologia',       bio:'Programador e escritor técnico holandês. Criador do JavaScript Eloquente e fundador da empresa de treino em código MicroBlox.', color:'#ec4899', initials:'MH' },
    { id:8,  name:'Caelum',                 slug:'caelum',                  role:'Instituição', dept:'Tecnologia',       bio:'Escola de programação brasileira fundada em 2003. Especializada em formação de desenvolvedores Java, web e mobile.', color:'#22c55e', initials:'CA' },
    { id:9,  name:'Luis Joyanes Aguilar',   slug:'luis-joyanes',            role:'Autor',      dept:'Engenharia',       bio:'Professor e investigador espanhol. Autor de Fundamentos de Programação, livro adoptado em universidades de todo o mundo hispânico.', color:'#f97316', initials:'LJ' },
    { id:10, name:'Marcos / UFPR',          slug:'marcos-ufpr',             role:'Professor',  dept:'Engenharia',       bio:'Professor do Departamento de Informática da Universidade Federal do Paraná. Especialista em algoritmos e estruturas de dados.', color:'#06b6d4', initials:'MU' },
    { id:11, name:'Dilermando Junior',      slug:'dilermando-junior',       role:'Professor',  dept:'Engenharia',       bio:'Professor e co-autor de Algoritmos e Programação de Computadores. Especialista em ensino de programação e linguagens algorítmicas.', color:'#f43f5e', initials:'DJ' },
    { id:12, name:'Casa do Código',         slug:'casa-do-codigo',          role:'Editora',    dept:'Engenharia',       bio:'Editora brasileira especializada em livros de tecnologia. Publicações práticas sobre Linux, NoSQL e desenvolvimento de software.', color:'#eab308', initials:'CC' },
    { id:13, name:'Vinícius Carvalho',      slug:'vinicius-carvalho',       role:'Autor',      dept:'Ciência de Dados', bio:'Especialista em PostgreSQL e bases de dados. Autor de guias práticos de SQL para desenvolvedores web.', color:'#a855f7', initials:'VC' },
    { id:14, name:'Edécio Fernando Iepsen', slug:'edecio-iepsen',           role:'Autor',      dept:'Ciência de Dados', bio:'Autor e educador. Especialista em lógica de programação e algoritmos com foco em JavaScript para iniciantes.', color:'#10b981', initials:'EI' },
    { id:15, name:'Rogério P. O. Neves',   slug:'rogerio-neves',           role:'Autor',      dept:'Ciência de Dados', bio:'Programador e educador brasileiro. Autor de Processando a Informação, livro sobre fundamentos de programação independente de linguagem.', color:'#6366f1', initials:'RN' },
    { id:16, name:'Kenneth Reitz',          slug:'kenneth-reitz',           role:'Autor',      dept:'Gestão',           bio:'Programador e autor norte-americano. Criador do Requests para Python e autor do Guia Mochileiro de Python, referencia em boas praticas.', color:'#d946ef', initials:'KR' },
    { id:17, name:'Isadora / Educapes',     slug:'isadora-educapes',        role:'Autora',     dept:'Línguas',          bio:'Autora da apostila de Lógica de Programação publicada pela CAPES/Educapes. Material didático para introdução à computação.', color:'#2dd4bf', initials:'IE' }
  ]
};

// ============ STATE ============
let CURRENT_USER = { name:'Visitante', email:'', role:'Aluno', initials:'VI' };
let progress   = {};
let favorites  = new Set();
let pendingSignup = null;
let pendingCode   = null;
let currentPage   = 'home';
let catalogFilter = '';
let searchQuery   = '';

function loadLocal() {
  try {
    const p = localStorage.getItem('imptel_progress');
    const f = localStorage.getItem('imptel_favorites');
    if (p) progress  = JSON.parse(p);
    if (f) favorites = new Set(JSON.parse(f));
  } catch(e) {}
}
function saveLocal() {
  try {
    localStorage.setItem('imptel_progress',  JSON.stringify(progress));
    localStorage.setItem('imptel_favorites', JSON.stringify([...favorites]));
  } catch(e) {}
}

// ============ UTILS ============
const $  = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => [...ctx.querySelectorAll(s)];
const stars = n => `<span class="stars-row">${icon('star').repeat(n)}${icon('starEmpty').repeat(5-n)}</span>`;
const coverEmoji = cat => ({ 'Tecnologia':icon('code',20),'Engenharia':icon('gear',20),'Ciência de Dados':icon('chart',20),'Gestão':icon('clipboard',20),'Línguas':icon('globe',20) }[cat] || icon('library',20));
const catColor   = cat => ({ 'Tecnologia':'#0d1a33','Engenharia':'#0d2200','Ciência de Dados':'#1a0d33','Gestão':'#1a1100','Línguas':'#001a1a' }[cat] || '#111');

function toast(msg, type='info') {
  const tc = $('#toastContainer');
  if (!tc) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const iconSvg = type === 'success' ? icon('checkCircle') : icon('info');
  el.innerHTML = `<span style="display:flex;flex-shrink:0;">${iconSvg}</span><span>${msg}</span>`;
  tc.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(),300); }, 3200);
}

// ============================================================
// CINEMATIC LOGIN SCENE
// ============================================================
function buildShelves() {
  const w = $('#libraryShelves'); if (!w) return;
  const p = ['#1d3fae','#2b1e7a','#0a2a6e','#3d1e8c','#16266e','#5b2a9e'];
  w.innerHTML = ['r1','r2','r3','r4'].map(r => {
    const books = Array.from({length:26},()=>{
      const c=p[Math.floor(Math.random()*p.length)], h=44+Math.random()*16;
      return `<div class="shelf-book" style="height:${h}px;background:${c};"></div>`;
    }).join('');
    return `<div class="shelf-row ${r}">${books}</div>`;
  }).join('');
}
function buildFloating() {
  const w = $('#floatingBooks'); if (!w) return;
  w.innerHTML = Array.from({length:20},(_,i)=>{
    const gold = i%7===0;
    const left = Math.random()*96, dur = 14+Math.random()*14;
    const delay= Math.random()*-28, drift=(Math.random()*120-60).toFixed(0);
    return `<div class="fbook ${gold?'gold':''}" style="left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;--drift:${drift}px;"></div>`;
  }).join('');
}
function buildParticles() {
  const w = $('#particles'); if (!w) return;
  w.innerHTML = Array.from({length:50},()=>{
    const blue = Math.random()>.45, sz=2+Math.random()*5;
    const left=Math.random()*100, dur=8+Math.random()*14;
    const delay=Math.random()*-20, px=(Math.random()*80-40).toFixed(0);
    return `<div class="particle ${blue?'blue':'purple'}" style="width:${sz}px;height:${sz}px;left:${left}%;bottom:-20px;animation-duration:${dur}s;animation-delay:${delay}s;--px:${px}px;"></div>`;
  }).join('');
}

// ============================================================
// AUTH FLOW
// ============================================================
function showAuth(screen) {
  const pages = { login: 'authLogin', signup: 'authSignup', verify: 'authVerify' };
  const current = screen === 'login' ? 1 : screen === 'signup' ? 2 : 3;

  $$('.auth-page').forEach(p => p.classList.remove('active','slide-out-left','slide-in-right'));
  const target = $(`#${pages[screen]}`);
  if (target) target.classList.add('active','slide-in-right');
}

function handleLogin() {
  const email = $('#loginEmail').value.trim();
  const pwd   = $('#loginPwd').value.trim();
  const msg   = $('#loginMsg');
  if (!email) { msg.textContent='Por favor insira o seu email.'; return; }
  if (!email.includes('@')) { msg.textContent='Email inválido.'; return; }
  if (!pwd)   { msg.textContent='Por favor insira a sua senha.'; return; }
  msg.textContent='';
  enterApp({ name: email.split('@')[0].replace(/\./g,' ').replace(/\b\w/g,l=>l.toUpperCase()), email, role:'Aluno' });
}

function handleSignup() {
  const name  = $('#signupName').value.trim();
  const role  = $('#roleToggle .role-option.active')?.dataset.role || 'Aluno';
  const email = $('#signupEmail').value.trim();
  const phone = $('#signupPhone').value.trim();
  const pwd   = $('#signupPwd').value.trim();
  const msg   = $('#signupMsg');
  if (!name)                                           { msg.textContent='Insira o seu nome completo.';   return; }
  if (!email || !email.includes('@'))                  { msg.textContent='Insira um email válido.';        return; }
  if (!phone || phone.replace(/\D/g,'').length < 9)   { msg.textContent='Insira um telefone válido.';     return; }
  if (!pwd || pwd.length < 4)                          { msg.textContent='Senha com mínimo 4 caracteres.'; return; }
  msg.textContent='';
  pendingSignup = { name, role, email, phone, pwd };
  pendingCode   = String(Math.floor(1000+Math.random()*9000));
  $('#verifyEmail').textContent = email;
  $('#verifyPhone').textContent = phone;
  $('#verifyHint').textContent  = `(Demonstração) O código enviado é: ${pendingCode}`;
  $('#verifyCode').value=''; $('#verifyMsg').textContent='';
  showAuth('verify');
  toast('Código de verificação enviado!','info');
}

function handleVerify() {
  const code = $('#verifyCode').value.trim();
  const msg  = $('#verifyMsg');
  if (!code)              { msg.textContent='Insira o código recebido.';                   return; }
  if (code !== pendingCode){ msg.textContent='Código incorrecto. Verifique e tente novamente.'; return; }
  msg.textContent='';
  const user = { name:pendingSignup.name, role:pendingSignup.role, email:pendingSignup.email };
  pendingSignup=null; pendingCode=null;
  enterApp(user);
}

function handleResend() {
  if (!pendingSignup) return;
  pendingCode = String(Math.floor(1000+Math.random()*9000));
  $('#verifyHint').textContent = `(Demonstração) O novo código é: ${pendingCode}`;
  $('#verifyMsg').textContent='';
  toast('Novo código enviado!','info');
}

function enterApp(user) {
  CURRENT_USER = { ...user, initials: user.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase() };
  $('#loginScreen').style.display='none';
  const shell=$('#appShell'); shell.classList.add('visible');
  updateUserUI();
  navigate('home');
  toast(`Bem-vindo(a), ${user.name.split(' ')[0]}!`,'success');
}

function handleLogout() {
  $('#appShell').classList.remove('visible');
  $('#loginScreen').style.display='flex';
  $('#loginEmail').value=''; $('#loginPwd').value='';
  showAuth('login');
  closeMobileDrawer();
}

function updateUserUI() {
  const u = CURRENT_USER;
  $$('#headerAvatar, #drawerAvatar, #profileAvatar').forEach(el=>el.textContent=u.initials);
  $$('#headerUname').forEach(el=>el.textContent=u.name.split(' ')[0]);
  $$('#drawerName').forEach(el=>el.textContent=u.name);
  $$('#drawerRole').forEach(el=>el.textContent=u.role+' · IMPTEL');
  const pname=$('#profileName'); if(pname) pname.textContent=u.name;
  const pmeta=$('#profileMeta'); if(pmeta) pmeta.textContent=`${u.role} · IMPTEL`;
  const prole=$('#profileRole'); if(prole) prole.textContent=u.role;
}

// ============================================================
// NAVIGATION
// ============================================================
function navigate(page) {
  currentPage = page;
  $$('.page-section').forEach(p=>p.classList.remove('active'));
  const pg = $(`#page-${page}`); if(pg) pg.classList.add('active');
  $$('.nav-link, .drawer-nav-link, .bottom-nav-item').forEach(el=>{
    el.classList.toggle('active', el.dataset.page===page);
  });
  const titles = { home:'Início', catalog:'Catálogo', continue:'Continuar a Ler', favorites:'Favoritos', profile:'Meu Perfil', professores:'Professores' };
  document.title = `${titles[page]||page} · Biblioteca IMPTEL`;
  renderPage(page);
  window.scrollTo({top:0, behavior:'smooth'});
}

function renderPage(page) {
  switch(page) {
    case 'home':        renderHome(); break;
    case 'catalog':     renderCatalog(); break;
    case 'continue':    renderContinue(); break;
    case 'favorites':   renderFavorites(); break;
    case 'profile':     renderProfile(); break;
    case 'professores': renderProfessores(); break;
  }
}

// ============================================================
// HOME
// ============================================================
let homeTabCat = '';

function renderHome() {
  const hero = DB.books.find(b=>b.badge==='hot') || DB.books[0];
  $('#heroTitle').textContent = hero.title;
  $('#heroDesc').textContent  = hero.desc;
  $('#heroReadBtn').onclick    = ()=>openReader(hero.id);
  const bg = $('#heroCoverBg');
  bg.innerHTML = hero.cover ? `<img src="${hero.cover}" alt="">` : '';

  const tabIcons = { '':'flame', 'Tecnologia':'code', 'Engenharia':'gear', 'Ciência de Dados':'chart', 'Gestão':'clipboard', 'Línguas':'globe' };
  const tabsEl = $('#homeTabs');
  if (tabsEl && !tabsEl.dataset.built) {
    tabsEl.innerHTML = `<button class="home-tab active" data-cat="" onclick="switchHomeTab(this)">${icon('flame')} Todos</button>` +
      DB.categories.map(c => `<button class="home-tab" data-cat="${c.name}" onclick="switchHomeTab(this)">${icon(tabIcons[c.name])} ${c.name}</button>`).join('');
    tabsEl.dataset.built = '1';
  }

  renderRecentStrip();
  renderPopularStrip();
  renderHomeBooks();
  updateBadges();
}

function renderRecentStrip() {
  const el = $('#recentStrip');
  if (!el) return;
  const recent = [...DB.books].sort((a,b)=>b.year-a.year).slice(0,8);
  el.innerHTML = recent.map(renderBookCard).join('');
}

function renderPopularStrip() {
  const el = $('#popularStrip');
  if (!el) return;
  const popular = [...DB.books].sort((a,b)=>b.stars-a.stars).slice(0,8);
  el.innerHTML = popular.map(renderBookCard).join('');
}

function switchHomeTab(el) {
  $$('.home-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  homeTabCat = el.dataset.cat || '';
  renderHomeBooks();
}

function renderHomeBooks() {
  let books = [...DB.books];
  if (homeTabCat) books = books.filter(b=>b.category===homeTabCat);
  const grid = $('#homeBooksGrid');
  if (grid) grid.innerHTML = books.map(renderBookCard).join('');
}

function renderBookCard(book) {
  const isFav  = favorites.has(book.id);
  const prog   = progress[book.id];
  const pct    = prog ? Math.min(100,(prog.page/Math.max(1,prog.total))*100) : 0;
  const cover  = book.cover
    ? `<img src="${book.cover}" alt="${book.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><div class="book-poster-placeholder" style="background:${catColor(book.category)};display:none;"><span class="placeholder-title">${book.title}</span></div>`
    : `<div class="book-poster-placeholder" style="background:${catColor(book.category)};"><span class="placeholder-title">${book.title}</span></div>`;
  const favIcon = isFav ? icon('heartFillSmall') : icon('heartSmall');
  return `<div class="book-card" onclick="openDetail(${book.id})">
    <div class="book-poster">
      ${cover}
      <div class="poster-fav${isFav?' is-fav':''}" onclick="event.stopPropagation();toggleFav(${book.id},this)">${favIcon}</div>
      <div class="poster-overlay"><div class="poster-play-btn" onclick="event.stopPropagation();openReader(${book.id})">${icon('play')}</div></div>
      ${prog?`<div class="poster-progress"><div class="poster-progress-fill" style="width:${pct}%"></div></div>`:''}
    </div>
    <div class="book-info">
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
    </div>
  </div>`;
}

function scrollStrip(id, dir) {
  const el = $(`#${id}`);
  if (el) el.scrollBy({ left: dir*320, behavior:'smooth' });
}

function updateBadges() {
  const fc = $('#favCountBadge'), fb = favorites.size;
  if (fc) { fc.textContent=fb; fc.style.display=fb>0?'flex':'none'; }
  const cc = $('#continueCountBadge'), cb = Object.keys(progress).length;
  if (cc) { cc.textContent=cb; cc.style.display=cb>0?'flex':'none'; }
  const sr = $('#statRead'); if(sr) sr.textContent = Object.keys(progress).filter(id=>progress[id]?.done).length || Object.keys(progress).length;
  const sf = $('#statFavs'); if(sf) sf.textContent = favorites.size;
}

// ============================================================
// CATALOG
// ============================================================
function renderCatalog() {
  let books = [...DB.books];
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    books = books.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.category.toLowerCase().includes(q));
  }
  if (catalogFilter) books = books.filter(b=>b.category===catalogFilter);
  const sort = $('#sortSelect')?.value;
  if (sort==='az')      books.sort((a,b)=>a.title.localeCompare(b.title));
  if (sort==='new')     books.sort((a,b)=>b.year-a.year);
  if (sort==='popular') books.sort((a,b)=>b.stars-a.stars);
  const badge = $('#badgeSelect')?.value;
  if (badge) books = books.filter(b=>b.badge===badge);

  const count = $('#catalogCount'); if(count) count.textContent=`${books.length} livro${books.length!==1?'s':''}`;
  const grid  = $('#catalogGrid');
  grid.innerHTML = books.length
    ? books.map(renderBookCard).join('')
    : `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-icon">${icon('search',48)}</div><h3>Nenhum resultado</h3><p>Tente outros termos ou remova os filtros.</p></div>`;

  $$('#catalogCatStrip .cat-chip').forEach(chip => chip.classList.toggle('active', chip.dataset.cat===catalogFilter));
}

function applyFilters() { renderCatalog(); }

function setCatFilter(badge) {
  catalogFilter='';
  if ($('#badgeSelect')) $('#badgeSelect').value='new';
  renderCatalog();
}

function setCatAndGo(cat) {
  catalogFilter = cat;
  navigate('catalog');
  setTimeout(()=>{
    $$('#catalogCatStrip .cat-chip').forEach(chip=>chip.classList.toggle('active', chip.dataset.cat===cat));
    renderCatalog();
  }, 50);
}

// ============================================================
// CONTINUE / FAVORITES / PROFILE
// ============================================================
function renderContinue() {
  const books = Object.keys(progress).map(id=>DB.books.find(b=>b.id===parseInt(id))).filter(Boolean);
  $('#continueGrid').innerHTML = books.length
    ? books.map(renderBookCard).join('')
    : `<div class="empty-state"><div class="empty-icon">${icon('bookOpen',48)}</div><h3>Ainda não iniciou nenhuma leitura</h3><p>Os livros que começar a ler aparecem aqui automaticamente.</p></div>`;
}

function renderFavorites() {
  const books = DB.books.filter(b=>favorites.has(b.id));
  $('#favoritesGrid').innerHTML = books.length
    ? books.map(renderBookCard).join('')
    : `<div class="empty-state"><div class="empty-icon">${icon('heart',48)}</div><h3>Sem favoritos ainda</h3><p>Toque no coração de qualquer livro para guardá-lo aqui.</p></div>`;
}

function renderProfile() {
  updateUserUI();
  updateBadges();
  const catCounts = {};
  Object.keys(progress).forEach(id=>{
    const b=DB.books.find(b=>b.id===parseInt(id));
    if(b) catCounts[b.category]=(catCounts[b.category]||0)+1;
  });
  favorites.forEach(id=>{
    const b=DB.books.find(b=>b.id===id);
    if(b) catCounts[b.category]=(catCounts[b.category]||0)+0.5;
  });
  const colors={'Tecnologia':'#0046d4','Engenharia':'#16a34a','Ciência de Dados':'#9333ea','Gestão':'#d97706','Línguas':'#0891b2'};
  const total=Object.values(catCounts).reduce((s,v)=>s+v,0)||1;
  const pb=$('#prefBars');
  if (pb) {
    if (!Object.keys(catCounts).length) {
      pb.innerHTML='<div style="font-size:0.85rem;color:var(--text-muted);">Comece a ler para ver as suas preferências aqui.</div>';
    } else {
      pb.innerHTML=Object.entries(catCounts).sort((a,b)=>b[1]-a[1]).map(([cat,cnt])=>{
        const pct=Math.round((cnt/total)*100);
        return `<div>
          <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-muted);margin-bottom:4px;"><span>${cat}</span><span>${pct}%</span></div>
          <div style="height:8px;background:var(--bg-highlight);border-radius:99px;overflow:hidden;">
            <div style="height:100%;background:${colors[cat]||'#666'};border-radius:99px;width:${pct}%;transition:width .6s ease;"></div>
          </div>
        </div>`;
      }).join('');
    }
  }
}

// ============================================================
// FAVORITES
// ============================================================
function toggleFav(id, el) {
  if (favorites.has(id)) {
    favorites.delete(id);
    if(el){el.classList.remove('is-fav');el.innerHTML=icon('heartSmall');}
    toast('Removido dos favoritos','info');
  } else {
    favorites.add(id);
    if(el){el.classList.add('is-fav');el.innerHTML=icon('heartFillSmall');}
    toast('Adicionado aos favoritos','success');
  }
  saveLocal(); updateBadges();
  if (currentPage==='favorites') renderFavorites();
}

// ============================================================
// BOOK DETAIL
// ============================================================
function openDetail(id) {
  const book = DB.books.find(b=>b.id===id);
  if (!book) return;

  const heroEl = $('#detailHeroImg');
  if (book.cover) {
    heroEl.innerHTML=`<div class="detail-hero-img"><img src="${book.cover}" alt="${book.title}"></div>`;
  } else {
    heroEl.innerHTML=`<div class="detail-hero-placeholder" style="background:${catColor(book.category)};">${coverEmoji(book.category)}</div>`;
  }

  $('#detailCat').innerHTML    = `${coverEmoji(book.category)} ${book.category}`;
  $('#detailTitle').textContent  = book.title;
  $('#detailAuthor').innerHTML = `${icon('pen')} ${book.author}`;
  $('#detailMeta').innerHTML = `
    <span class="detail-meta-tag">${icon('clock')} ${book.year}</span>
    <span class="detail-meta-tag">${icon('library')} ${book.publisher}</span>
    <span class="detail-meta-tag" style="color:var(--gold);">${stars(book.stars)}</span>`;
  $('#detailDesc').textContent = book.desc;

  const isFav = favorites.has(id);
  const favBtn=$('#detailFavBtn');
  favBtn.className=`btn-detail-fav${isFav?' active':''}`;
  favBtn.innerHTML=isFav?icon('heartFill'):icon('heart');
  favBtn.onclick=()=>{
    toggleFav(id, null);
    const nowFav=favorites.has(id);
    favBtn.className=`btn-detail-fav${nowFav?' active':''}`;
    favBtn.innerHTML=nowFav?icon('heartFill'):icon('heart');
  };

  $('#detailReadBtn').onclick   = ()=>{ closeDetail(); openReader(id); };
  $('#detailBorrowBtn').onclick = ()=>borrowBook(id);

  $('#detailRelated').innerHTML = DB.books
    .filter(b=>b.category===book.category && b.id!==id)
    .slice(0,5).map(renderBookCard).join('');

  const ov=$('#detailOverlay'); ov.classList.add('open'); ov.scrollTop=0;
}

function closeDetail() { $('#detailOverlay').classList.remove('open'); }

// ============================================================
// BORROW
// ============================================================
function borrowBook(id) {
  const book=DB.books.find(b=>b.id===id);
  if(!book) return;
  $('#borrowMsg').textContent=`O seu pedido de empréstimo de "${book.title}" foi registado. Dirija-se ao balcão da biblioteca IMPTEL com o seu cartão de estudante.`;
  $('#borrowOverlay').classList.add('open');
}
function closeBorrowModal() { $('#borrowOverlay').classList.remove('open'); }

// ============================================================
// PDF READER
// ============================================================
let readerState = { bookId:null, pdfDoc:null, currentPage:1, totalPages:1, scale:1.3, rendering:false };

async function openReader(id) {
  const book=DB.books.find(b=>b.id===id);
  if (!book?.pdf) { toast('Este livro não tem PDF disponível.','info'); return; }
  closeDetail();
  const rs=$('#readerScreen'); rs.classList.add('open');
  $('#readerTitle').textContent=book.title;
  $('#readerCanvas').innerHTML=`<div class="reader-loading">${icon('bookOpen',28)} A carregar o livro...</div>`;
  readerState.bookId=id;
  readerState.currentPage=(progress[id]?.page)||1;
  try {
    const pdf = await pdfjsLib.getDocument(book.pdf).promise;
    readerState.pdfDoc=pdf; readerState.totalPages=pdf.numPages;
    if(readerState.currentPage>readerState.totalPages) readerState.currentPage=1;
    $('#readerCanvas').innerHTML='';
    await renderReaderPage(readerState.currentPage);
    updateReaderUI();
  } catch(e) {
    $('#readerCanvas').innerHTML=`<div class="reader-loading">${icon('info',28)} Não foi possível carregar este livro.<br><small>${e.message}</small></div>`;
  }
}

async function renderReaderPage(pageNum) {
  if (!readerState.pdfDoc||readerState.rendering) return;
  readerState.rendering=true;
  try {
    const page=await readerState.pdfDoc.getPage(pageNum);
    const vp=page.getViewport({scale:readerState.scale});
    let container=$('#readerPageContainer');
    if (!container) {
      container=document.createElement('div');
      container.id='readerPageContainer'; container.className='reader-page-container';
      $('#readerCanvas').innerHTML=''; $('#readerCanvas').appendChild(container);
    }
    container.style.width=vp.width+'px'; container.style.height=vp.height+'px';
    let canvas=$('#readerCanvas canvas');
    if (!canvas) { canvas=document.createElement('canvas'); container.appendChild(canvas); }
    canvas.width=vp.width; canvas.height=vp.height;
    await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
    readerState.currentPage=pageNum;
    saveReadingProgress();
    updateReaderUI();
  } catch(e) { console.error(e); }
  finally { readerState.rendering=false; }
}

function updateReaderUI() {
  $('#readerPages').textContent=`Página ${readerState.currentPage} de ${readerState.totalPages}`;
  $('#readerPrev').disabled=readerState.currentPage<=1;
  $('#readerNext').disabled=readerState.currentPage>=readerState.totalPages;
  const pct=(readerState.currentPage/readerState.totalPages)*100;
  $('#readerProgress').style.width=pct+'%';
}

function saveReadingProgress() {
  if (!readerState.bookId) return;
  progress[readerState.bookId]={ page:readerState.currentPage, total:readerState.totalPages, lastRead:Date.now() };
  saveLocal(); updateBadges();
}

function closeReader() {
  $('#readerScreen').classList.remove('open');
  readerState.pdfDoc=null;
  renderPage(currentPage);
}

document.addEventListener('keydown', e=>{
  if (!$('#readerScreen').classList.contains('open')) return;
  if (e.key==='ArrowRight'||e.key===' ') { e.preventDefault(); renderReaderPage(readerState.currentPage+1); }
  if (e.key==='ArrowLeft') { e.preventDefault(); renderReaderPage(readerState.currentPage-1); }
  if (e.key==='Escape') closeReader();
});

// ============================================================
// SEARCH
// ============================================================
function doSearch() {
  searchQuery = $('#globalSearch')?.value.trim() || '';
  if (searchQuery) { navigate('catalog'); }
}

// ============================================================
// MOBILE DRAWER
// ============================================================
function openMobileDrawer()  { $('#mobileDrawer')?.classList.remove('hidden'); }
function closeMobileDrawer() { $('#mobileDrawer')?.classList.add('hidden'); }

// ============================================================
// PREMIUM EFFECTS — Cursor Glow, Tilt, Parallax, Particles
// ============================================================

// --- Cursor Glow ---
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let mx = 0, my = 0, gx = 0, gy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animGlow() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';
    requestAnimationFrame(animGlow);
  }
  animGlow();
}

// --- Hero Parallax on Mouse Move ---
function initHeroParallax() {
  const hero = $('.hero-banner');
  if (!hero) return;
  const bg = hero.querySelector('.hero-cover-bg');
  const content = hero.querySelector('.hero-content');
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (bg) bg.style.transform = `translate(${x*20}px, ${y*15}px) scale(1.05)`;
    if (content) content.style.transform = `translate(${x*-8}px, ${y*-6}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    if (bg) { bg.style.transform = 'translate(0,0) scale(1)'; bg.style.transition = 'transform 0.5s ease'; }
    if (content) { content.style.transform = 'translate(0,0)'; content.style.transition = 'transform 0.5s ease'; }
  });
  hero.addEventListener('mouseenter', () => {
    if (bg) bg.style.transition = 'none';
    if (content) content.style.transition = 'none';
  });
}

// --- 3D Tilt on Book Cards ---
function initCardTilt() {
  document.addEventListener('mousemove', e => {
    const cards = $$('.book-card, .benefit-card, .review-card, .cat-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      }
    });
  });
  document.addEventListener('mouseleave', e => {
    if (e.target.classList && (e.target.classList.contains('book-card') || e.target.classList.contains('benefit-card'))) {
      e.target.style.transform = '';
    }
  }, true);
  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.book-card, .benefit-card, .review-card, .cat-card');
    if (card && !card.matches(':hover')) {
      card.style.transform = '';
    }
  });
}

// --- Animated Background (Geometric Shapes + Luminous Lines) ---
function initAnimatedBg() {
  const container = $('.animated-bg');
  if (!container) return;
  const shapes = ['circle','square','triangle'];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('div');
    el.className = 'geo-shape';
    const size = 20 + Math.random() * 60;
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${15 + Math.random() * 25}s;
      animation-delay:${Math.random() * -20}s;
      border-radius:${shape === 'circle' ? '50%' : shape === 'triangle' ? '0' : '4px'};
      ${shape === 'triangle' ? `clip-path:polygon(50% 0%,0% 100%,100% 100%);border:none;background:rgba(29,185,84,0.04);` : ''}
    `;
    container.appendChild(el);
  }
  for (let i = 0; i < 5; i++) {
    const line = document.createElement('div');
    line.className = 'luminous-line';
    line.style.cssText = `
      width:${100 + Math.random() * 200}px;
      top:${10 + Math.random() * 80}%;
      animation-duration:${8 + Math.random() * 12}s;
      animation-delay:${Math.random() * -10}s;
    `;
    container.appendChild(line);
  }
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const elements = $$('.section, .benefit-card, .review-card, .hero-banner, .promo-banner, .stats-banner, .footer-main');
  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// --- Animated Counters ---
function initCounters() {
  const counters = $$('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        const target = parseInt(entry.target.dataset.target);
        const suffix = entry.target.dataset.suffix || '';
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = current + suffix;
        }, 25);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// --- Button Click Ripple Effect ---
function initButtonRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-hero-primary, .btn-detail-read, .btn-promo, .btn-modal-ok, .btn-book-read, .btn-primary-dark');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      position:absolute; width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY - rect.top - size/2}px;
      background:radial-gradient(circle,rgba(255,255,255,0.3),transparent 70%);
      border-radius:50%; transform:scale(0); animation:rippleAnim 0.6s ease-out;
      pointer-events:none; z-index:10;
    `;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

// Add ripple keyframe
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes rippleAnim { to{transform:scale(1);opacity:0;} }`;
document.head.appendChild(rippleStyle);

// ============================================================
// PROFESSORES
// ============================================================
let profView = 'grid'; // grid or detail
let profDetailId = null;

function renderProfessores() {
  profView = 'grid';
  profDetailId = null;
  var ct = document.getElementById('professoresContent');
  if (!ct) { console.error('Professores: #professoresContent not found'); return; }

  try {
    var html = '<div style="padding:24px 32px 8px;"><h1 style="font-size:1.8rem;font-weight:800;color:#fff;margin:0 0 4px;">Professores</h1><p style="font-size:0.9rem;color:#b3b3b3;margin:0;">' + DB.professores.length + ' professores</p></div><div class="prof-grid" id="profGrid">';

    DB.professores.forEach(function(prof) {
      html += '<div class="prof-card" onclick="openProfessorDetail(' + prof.id + ')" style="--prof-color:' + prof.color + '">' +
        '<div class="prof-card-avatar" style="background:' + prof.color + '">' +
          '<span class="prof-card-initials">' + prof.initials + '</span>' +
        '</div>' +
        '<div class="prof-card-info">' +
          '<h3 class="prof-card-name">' + prof.name + '</h3>' +
        '</div>' +
      '</div>';
    });

    html += '</div>';
    ct.innerHTML = html;
    console.log('Professores: rendered ' + DB.professores.length + ' cards');
  } catch(e) {
    console.error('Professores error:', e);
    ct.innerHTML = '<div style="padding:40px;text-align:center;color:#fff;"><h2>Professores</h2><p style="color:#b3b3b3;">Carregando...</p></div>';
  }
}

function filterProfessores() {
  const q = ($('#profSearchInput')?.value || '').toLowerCase();
  const cards = $$('#profGrid .prof-card');
  const visible = DB.professores.filter(p => p.name.toLowerCase().includes(q) || p.dept.toLowerCase().includes(q));
  const visibleIds = new Set(visible.map(p => p.id));
  cards.forEach(c => {
    const id = parseInt(c.getAttribute('onclick').match(/(\d+)/)[1]);
    c.style.display = visibleIds.has(id) ? '' : 'none';
  });
}

function openProfessorDetail(id) {
  const prof = DB.professores.find(p => p.id === id);
  if (!prof) return;
  profView = 'detail';
  profDetailId = id;

  const ct = $('#professoresContent');
  if (!ct) return;

  const profBooks = DB.books.filter(b => b.author === prof.name);

  let html = `
    <div class="prof-back-bar">
      <button class="prof-back-btn" onclick="renderProfessores()">
        ${icon('arrowLeft',18)} Professores
      </button>
    </div>
    <div class="prof-hero" style="--prof-color:${prof.color}">
      <div class="prof-hero-bg" style="background:${prof.color}"></div>
      <div class="prof-hero-content">
        <div class="prof-hero-avatar" style="background:${prof.color}">
          <span class="prof-hero-initials">${prof.initials}</span>
        </div>
        <div class="prof-hero-info">
          <span class="prof-hero-role">${prof.role}</span>
          <h1 class="prof-hero-name">${prof.name}</h1>
          <div class="prof-hero-meta">
            <span>${prof.dept}</span>
            <span class="prof-dot">·</span>
            <span>${profBooks.length} ${profBooks.length === 1 ? 'livro' : 'livros'}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="prof-detail-body">
      <div class="prof-bio-section">
        <h2>Sobre</h2>
        <p class="prof-bio-text">${prof.bio}</p>
      </div>
      <div class="prof-books-section">
        <h2>Livros de ${prof.name.split(' ').pop()}</h2>
        <div class="prof-books-grid">
  `;

  if (profBooks.length === 0) {
    html += `<p class="prof-no-books">Nenhum livro publicado ainda.</p>`;
  } else {
    profBooks.forEach(book => {
      html += `
        <div class="prof-book-card" onclick="openDetail(${book.id})">
          <div class="prof-book-cover">
            ${book.cover
              ? `<img src="${book.cover}" alt="${book.title}">`
              : `<div class="prof-book-cover-placeholder" style="background:${catColor(book.category)}">${icon('book',32)}</div>`}
          </div>
          <div class="prof-book-info">
            <h3 class="prof-book-title">${book.title}</h3>
          </div>
        </div>
      `;
    });
  }

  html += '</div></div></div>';
  ct.innerHTML = html;
}

function goBackProfessores() {
  if (profView === 'detail') {
    renderProfessores();
  }
}

// ============================================================
// INIT
// ============================================================
function init() {
  loadLocal();
  buildShelves(); buildFloating(); buildParticles();

  // Premium effects
  initCursorGlow();
  initHeroParallax();
  initCardTilt();
  initAnimatedBg();
  initScrollReveal();
  initCounters();
  initButtonRipple();

  $('#loginBtn').addEventListener('click', handleLogin);
  $$('#loginEmail,#loginPwd').forEach(el=>el.addEventListener('keydown',e=>{ if(e.key==='Enter') handleLogin(); }));
  $('#goSignupBtn').addEventListener('click', ()=>showAuth('signup'));
  $('#goLoginBtn').addEventListener('click',  ()=>showAuth('login'));
  $$('#roleToggle .role-option').forEach(btn=>btn.addEventListener('click', e=>{
    $$('#roleToggle .role-option').forEach(b=>b.classList.remove('active'));
    e.currentTarget.classList.add('active');
  }));
  $('#signupBtn').addEventListener('click', handleSignup);
  $$('#signupName,#signupEmail,#signupPhone,#signupPwd').forEach(el=>el.addEventListener('keydown',e=>{ if(e.key==='Enter') handleSignup(); }));
  $('#verifyBtn').addEventListener('click',  handleVerify);
  $('#resendBtn').addEventListener('click',  handleResend);
  $('#verifyCode').addEventListener('keydown',e=>{ if(e.key==='Enter') handleVerify(); });

  $$('.nav-link[data-page], .drawer-nav-link[data-page], .bottom-nav-item[data-page]').forEach(el=>{
    el.addEventListener('click',()=>navigate(el.dataset.page));
  });

  ['logoutNavBtn','logoutDrawerBtn','logoutProfileBtn'].forEach(id=>{
    const el=$(`#${id}`); if(el) el.addEventListener('click', handleLogout);
  });

  $('#menuBtn').addEventListener('click', openMobileDrawer);
  $('#drawerClose').addEventListener('click', closeMobileDrawer);
  $('#drawerOverlay').addEventListener('click', closeMobileDrawer);

  $('#globalSearch').addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(); });

  $$('#catalogCatStrip .cat-chip').forEach(chip=>{
    chip.addEventListener('click',()=>{
      catalogFilter=chip.dataset.cat;
      $$('#catalogCatStrip .cat-chip').forEach(c=>c.classList.toggle('active',c===chip));
      renderCatalog();
    });
  });

  $('#detailClose').addEventListener('click', closeDetail);
  $('#detailOverlay').addEventListener('click',e=>{ if(e.target.id==='detailOverlay') closeDetail(); });

  $('#borrowOkBtn').addEventListener('click', closeBorrowModal);
  $('#borrowOverlay').addEventListener('click',e=>{ if(e.target.id==='borrowOverlay') closeBorrowModal(); });

  $('#readerBack').addEventListener('click', closeReader);
  $('#readerPrev').addEventListener('click', ()=>renderReaderPage(readerState.currentPage-1));
  $('#readerNext').addEventListener('click', ()=>renderReaderPage(readerState.currentPage+1));
  $('#zoomIn').addEventListener('click',  ()=>{ readerState.scale=Math.min(2.5,readerState.scale+0.2); renderReaderPage(readerState.currentPage); });
  $('#zoomOut').addEventListener('click', ()=>{ readerState.scale=Math.max(0.6,readerState.scale-0.2); renderReaderPage(readerState.currentPage); });

  console.log('Biblioteca IMPTEL v5.0 — Premium Cinematic!');
}

document.addEventListener('DOMContentLoaded', init);
