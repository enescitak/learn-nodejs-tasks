# Clean Blog Project - Part 6 (Ödev 12)

Bu proje, Node.js, Express, MongoDB ve EJS kullanılarak geliştirilmiş tam fonksiyonel bir blog uygulamasıdır. Heroku ve MongoDB Atlas üzerinde deploy edilmek üzere hazırlanmıştır.

## Özellikler

- ✅ **CRUD Operasyonları**: Post oluşturma, okuma, güncelleme ve silme
- ✅ **MVC Mimarisi**: Controllers, Routes ve Models ayrımı
- ✅ **MongoDB Integration**: Mongoose ODM kullanımı
- ✅ **Modern UI**: Responsive tasarım ve modern CSS
- ✅ **Environment Variables**: Güvenli konfigürasyon yönetimi
- ✅ **Heroku Ready**: Production deployment hazır

## Teknolojiler

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Template Engine**: EJS
- **Styling**: CSS3, Inter Font
- **Deployment**: Heroku
- **Environment**: dotenv

## Kurulum

### Yerel Geliştirme

1. Projeyi klonlayın:
\`\`\`bash
git clone <repository-url>
cd odev-12-clean-blog-6
\`\`\`

2. Bağımlılıkları yükleyin:
\`\`\`bash
npm install
\`\`\`

3. Environment variables ayarlayın:
\`\`\`bash
cp .env.example .env
# .env dosyasını düzenleyip MongoDB URI'nizi ekleyin
\`\`\`

4. Uygulamayı başlatın:
\`\`\`bash
npm start
# veya development için:
npm run dev
\`\`\`

## Deployment

### MongoDB Atlas Kurulumu

1. [MongoDB Atlas](https://www.mongodb.com/atlas) hesabı oluşturun
2. Yeni bir cluster oluşturun (ücretsiz tier)
3. Database user oluşturun
4. Network access ayarlarını yapın (0.0.0.0/0 - tüm IP'ler)
5. Connection string'i kopyalayın

### Heroku Deployment

1. [Heroku](https://heroku.com) hesabı oluşturun
2. Heroku CLI'yi yükleyin
3. Heroku uygulaması oluşturun:

\`\`\`bash
heroku create your-app-name
\`\`\`

4. Environment variables ayarlayın:

\`\`\`bash
heroku config:set MONGODB_URI="your-mongodb-atlas-connection-string"
heroku config:set NODE_ENV=production
\`\`\`

5. Deploy edin:

\`\`\`bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
\`\`\`

6. Uygulamayı açın:

\`\`\`bash
heroku open
\`\`\`

## Environment Variables

\`\`\`
MONGODB_URI=your-mongodb-connection-string
PORT=2100
NODE_ENV=development
\`\`\`

## Proje Yapısı

\`\`\`
odev-12-clean-blog-6/
├── controllers/
│   ├── postController.js
│   └── pageController.js
├── models/
│   └── Post.js
├── routes/
│   ├── postRoutes.js
│   └── pageRoutes.js
├── views/
│   ├── partials/
│   ├── index.ejs
│   ├── post.ejs
│   ├── add_post.ejs
│   ├── edit_post.ejs
│   └── about.ejs
├── public/
│   └── css/
│       └── style.css
├── app.js
├── package.json
├── Procfile
└── README.md
\`\`\`

## API Endpoints

- \`GET /\` - Ana sayfa (tüm postlar)
- \`GET /about\` - Hakkımda sayfası
- \`GET /add_post\` - Yeni post formu
- \`POST /posts\` - Yeni post oluştur
- \`GET /posts/:id\` - Tekil post görüntüle
- \`GET /posts/:id/edit\` - Post düzenleme formu
- \`PUT /posts/:id\` - Post güncelle
- \`DELETE /posts/:id\` - Post sil

## Lisans

MIT License

## Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (\`git checkout -b feature/amazing-feature\`)
3. Commit edin (\`git commit -m 'Add amazing feature'\`)
4. Push edin (\`git push origin feature/amazing-feature\`)
5. Pull Request oluşturun 