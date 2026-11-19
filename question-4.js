// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestinstock = inventory[0];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < lowestinstock.quantity) {
    lowestinstock = inventory[i];
  }
}

console.log(`สินค้าที่มีจำนวนต่ำสุดในคลังสินค้าคือ ${lowestinstock.name} ซึ่งมี ${lowestinstock.quantity} ชิ้น`);