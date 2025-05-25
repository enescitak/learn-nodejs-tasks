const mongoose = require('mongoose');
const Post = require('./models/Post');

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// 3 adet örnek post oluştur
async function createPosts() {
  
  // 1. Post
  const post1 = new Post({
    title: "İlk Blog Yazım",
    detail: "Bu benim ilk blog yazım. Node.js ve Express öğreniyorum."
  });
  await post1.save();

  // 2. Post  
  const post2 = new Post({
    title: "MongoDB Öğreniyorum",
    detail: "MongoDB çok güzel bir veritabanı. Mongoose ile kullanmak kolay."
  });
  await post2.save();

  // 3. Post
  const post3 = new Post({
    title: "Web Geliştirme Yolculuğum",
    detail: "Web geliştirme öğrenmeye başladım. HTML, CSS, JavaScript ve şimdi Node.js."
  });
  await post3.save();

  console.log('3 adet post oluşturuldu!');
  mongoose.connection.close();
}

createPosts(); 