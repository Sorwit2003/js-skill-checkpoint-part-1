// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Go to the gym" },
  { id: 5, todo: "Walk the dog"}
];
// เริ่มเขียนโค้ดตรงนี้

myTodo.length = 4;

console.log(myTodo);

const lastTodo = myTodo[myTodo.length - 1];

console.log(`To-do id: ${lastTodo.id}, ${lastTodo.todo}`);