// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 200 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 20, quantity: 300 },
];
// เริ่มเขียนโค้ดตรงนี้
let totalValue = 0;

for (let i = 0; i < inventory.length; i++) {
  totalValue += inventory[i].price * inventory[i].quantity;
}

console.log("มูลค่ารวมของจำนวนสินค้าในสต็อก" + " " + totalValue + " " + "บาท" );