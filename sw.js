// Define um nome e versão para o cache
const CACHE_NAME = 'agencia-mist-v1';

// Lista de arquivos para guardar em cache
const urlsToCache = [
  '/',
  'index.html',
  'sytle.css',
  // Adicione aqui todos os outros arquivos importantes:
  // outras páginas html, css, js, e as imagens principais.
  'logo.png',
  'icon-192x192.png',
  'icon-512x512.png',
  'anotacoes.html',
  'auth-check.js',
  'calendario.html',
  'carta-visita.jpg',
  'financas.html',
  'login.html',
  'missoes.html',
  'relatorios.html',
  'social-link.html',
  'ver-relatorio.html',
  'manifest.json'
];

// Evento de Instalação: Salva os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de Fetch: Intercepta as requisições
// Se o recurso estiver no cache, entrega a partir dele.
// Se não, busca na rede.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Encontrou no cache
        }
        return fetch(event.request); // Não encontrou, busca na rede
      })
  );
});