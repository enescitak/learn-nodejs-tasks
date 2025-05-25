const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  if (req.url === '/') {
    res.write('<h2>Index sayfasına hoşgeldiniz</h2>');
  } else if (req.url === '/hakkimda') {
    res.write('<h2>Hakkımda sayfasına hoşgeldiniz</h2>');
  } else if (req.url === '/iletisim') {
    res.write('<h2>İletişim sayfasına hoşgeldiniz</h2>');
  } else {
    res.write('<h2>404 - Sayfa bulunamadı</h2>');
  }
  
  res.end();
});

server.listen(2100, () => {
  console.log('Sunucu 2100 portunda çalışıyor');
  console.log('http://localhost:2100 adresine gidin');
}); 