import { LinkedList } from "./index.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log("Size:", list.size);
console.log("Head:", list.getHead().value);
console.log("Tail:", list.getTail().value);
console.log("At index 2:", list.at(2).value);
console.log("Contains 'cat'?", list.contains("cat"));
console.log("Index of 'hamster':", list.find("hamster"));

list.pop();
console.log("After pop:", list.toString());

list.insertAt("rabbit", 3);
console.log("After insertAt(3, 'rabbit'):", list.toString());

list.removeAt(1);
console.log("After removeAt(1):", list.toString());
