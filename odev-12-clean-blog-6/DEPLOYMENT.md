# Deployment Rehberi - Clean Blog Heroku & MongoDB Atlas

Bu rehber, Clean Blog uygulamasını Heroku ve MongoDB Atlas'a deploy etmek için adım adım talimatlar içerir.

## 📋 Ön Gereksinimler

- Node.js (v18+)
- Git
- Heroku hesabı
- MongoDB Atlas hesabı

## 🗄️ MongoDB Atlas Kurulumu

### 1. MongoDB Atlas Hesabı Oluşturma

1. [MongoDB Atlas](https://www.mongodb.com/atlas) sitesine gidin
2. "Try Free" butonuna tıklayın
3. Hesap oluşturun (Google/GitHub ile de giriş yapabilirsiniz)

### 2. Cluster Oluşturma

1. Dashboard'da "Create a New Cluster" seçin
2. **FREE** tier'ı seçin (M0 Sandbox)
3. Cloud Provider: **AWS** (önerilen)
4. Region: Size en yakın bölgeyi seçin
5. Cluster Name: \`cleanblog-cluster\` (veya istediğiniz isim)
6. "Create Cluster" butonuna tıklayın

### 3. Database User Oluşturma

1. Sol menüden "Database Access" seçin
2. "Add New Database User" butonuna tıklayın
3. Authentication Method: **Password**
4. Username: \`bloguser\` (veya istediğiniz kullanıcı adı)
5. Password: Güçlü bir şifre oluşturun (kaydedin!)
6. Database User Privileges: **Read and write to any database**
7. "Add User" butonuna tıklayın

### 4. Network Access Ayarlama

1. Sol menüden "Network Access" seçin
2. "Add IP Address" butonuna tıklayın
3. "Allow Access from Anywhere" seçin (0.0.0.0/0)
4. "Confirm" butonuna tıklayın

### 5. Connection String Alma

1. Sol menüden "Clusters" seçin
2. Cluster'ınızın yanındaki "Connect" butonuna tıklayın
3. "Connect your application" seçin
4. Driver: **Node.js**, Version: **4.1 or later**
5. Connection string'i kopyalayın:
   \`\`\`
   mongodb+srv://bloguser:<password>@cleanblog-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   \`\`\`
6. \`<password>\` kısmını gerçek şifrenizle değiştirin

## 🚀 Heroku Deployment

### 1. Heroku Hesabı ve CLI

1. [Heroku](https://heroku.com) hesabı oluşturun
2. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) indirip yükleyin
3. Terminal'de giriş yapın:
   \`\`\`bash
   heroku login
   \`\`\`

### 2. Heroku Uygulaması Oluşturma

1. Proje dizininde:
   \`\`\`bash
   heroku create your-unique-app-name
   \`\`\`
   
   **Not**: App ismi benzersiz olmalı. Örnek: \`cleanblog-yourname-2024\`

### 3. Environment Variables Ayarlama

1. MongoDB Atlas connection string'inizi ayarlayın:
   \`\`\`bash
   heroku config:set MONGODB_URI="mongodb+srv://bloguser:yourpassword@cleanblog-cluster.xxxxx.mongodb.net/cleanblog?retryWrites=true&w=majority"
   \`\`\`

2. Node environment ayarlayın:
   \`\`\`bash
   heroku config:set NODE_ENV=production
   \`\`\`

3. Ayarları kontrol edin:
   \`\`\`bash
   heroku config
   \`\`\`

### 4. Git ve Deploy

1. Git repository'si başlatın (eğer yoksa):
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit for Heroku deployment"
   \`\`\`

2. Heroku remote'u ekleyin:
   \`\`\`bash
   heroku git:remote -a your-app-name
   \`\`\`

3. Deploy edin:
   \`\`\`bash
   git push heroku main
   \`\`\`

### 5. Uygulamayı Açma

\`\`\`bash
heroku open
\`\`\`

## 🔧 Sorun Giderme

### Logları İnceleme

\`\`\`bash
heroku logs --tail
\`\`\`

### Yaygın Sorunlar

1. **MongoDB Connection Error**:
   - Connection string'in doğru olduğundan emin olun
   - Şifrede özel karakterler varsa URL encode edin
   - Network access ayarlarını kontrol edin

2. **Application Error**:
   - \`heroku logs\` ile hata mesajlarını inceleyin
   - Environment variables'ların doğru ayarlandığından emin olun

3. **Build Failed**:
   - \`package.json\` dosyasının doğru olduğundan emin olun
   - Node.js versiyonunu kontrol edin

### Faydalı Komutlar

\`\`\`bash
# Uygulamayı yeniden başlat
heroku restart

# Dyno'ları kontrol et
heroku ps

# Config variables'ları listele
heroku config

# Heroku dashboard'u aç
heroku dashboard
\`\`\`

## 📝 Test Etme

1. Uygulamanız açıldıktan sonra:
   - Ana sayfanın yüklendiğini kontrol edin
   - "Add Post" ile yeni post eklemeyi deneyin
   - Post'ları görüntüleme, düzenleme ve silme işlemlerini test edin

2. MongoDB Atlas Dashboard'da:
   - "Collections" sekmesinden verilerinizi görebilirsiniz
   - Database'inizin oluşturulduğunu ve post'ların eklendiğini kontrol edin

## 🎉 Tebrikler!

Uygulamanız artık canlıda! URL'nizi paylaşabilir ve herkesle blog uygulamanızı kullanabilirsiniz.

**Örnek URL**: \`https://your-app-name.herokuapp.com\` 