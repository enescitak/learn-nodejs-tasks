const fs = require('fs');

console.log('1. Dosya oluşturuluyor...');
const employee = {
  name: "Employee 1 Name",
  salary: 2000
};

fs.writeFileSync('employees.json', JSON.stringify(employee));
console.log('employees.json dosyası oluşturuldu');

console.log('2. Dosya okunuyor...');
const data = fs.readFileSync('employees.json', 'utf8');
console.log('Okunan veri:', data);

console.log('3. Veri güncelleniyor...');
const newEmployee = {
  name: "Updated Employee Name",
  salary: 2500
};

fs.writeFileSync('employees.json', JSON.stringify(newEmployee));
console.log('Veri güncellendi');

console.log('4. Dosya siliniyor...');
fs.unlinkSync('employees.json');
console.log('Dosya silindi'); 