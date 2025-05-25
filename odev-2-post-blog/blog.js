// Blog Post Sistemi

// Mevcut postlar
let posts = [
  { id: 1, title: "İlk Blog Yazım", content: "Merhaba dünya! Bu benim ilk blog yazım." },
  { id: 2, title: "JavaScript Öğreniyorum", content: "JavaScript çok eğlenceli bir dil." },
  { id: 3, title: "Node.js ile Neler Yapılır", content: "Node.js ile backend geliştirme yapabiliriz." }
];

// Postları listele
function listPosts() {
  console.log("\n=== BLOG POSTLARI ===");
  posts.forEach(post => {
    console.log(`${post.id}. ${post.title}`);
    console.log(`   ${post.content}`);
    console.log("---");
  });
}

// Yeni post ekle
function addPost(title, content) {
  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content
  };
  posts.push(newPost);
  console.log(`\n✅ Yeni post eklendi: "${title}"`);
}

// Program başlat
console.log("Blog Sistemi Başlatıldı!");

// Mevcut postları göster
listPosts();

// Yeni post ekle
addPost("Async Programming", "Callback, Promise ve Async/Await konularını öğreniyorum.");

// Güncellenmiş post listesini göster
console.log("\n🔄 Yeni post eklendikten sonra:");
listPosts(); 