const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Ana sayfa
router.get('/', (ctx) => {
  ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
});

// Hakkımda sayfası
router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
});

// İletişim sayfası
router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
});

app.use(router.routes());

app.listen(2100, () => {
  console.log('Koa sunucusu 2100 portunda çalışıyor');
  console.log('http://localhost:2100 adresine gidin');
}); 