const express = require('express');
const app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get('/', (req, res) => {
  res.json(blog);
});

app.listen(2100, () => {
  console.log('Sunucu 2100 portunda başlatıldı');
}); 