import LinkedList from './linkedList'

// ---------------- 封装的单向链表结构测试 ---------------- //
console.log('// ----- 单向链表结构测试 START -----//')
const linkedList = new LinkedList()

// 测试 append 方法
linkedList.append('AAA')
linkedList.append('BBB')
linkedList.append('CCC')
linkedList.append('DDD')
console.log(linkedList) //--> LinkList {head: Node, length: 4} --> AAA BBB CCC DDD

// 测试 toString 方法
console.log(linkedList.toString()) //--> AAA BBB CCC DDD

// 测试 insert 方法
linkedList.insert(0, '123')
linkedList.insert(3, '456')
console.log(linkedList.toString()) //--> 123 AAA BBB 456 CCC DDD

// 测试 getElement 方法
console.log(linkedList.getElement(0)) //--> 123
console.log(linkedList.getElement(3)) //--> 456

// 测试 indexOf 方法
console.log(linkedList.indexOf('AAA')) //--> 1
console.log(linkedList.indexOf('456')) //--> 3
console.log(linkedList.indexOf('111')) //--> -1

// 测试 update 方法
linkedList.update(0, '12345')
console.log(linkedList.toString()) //--> 12345 AAA BBB 456 CCC DDD
linkedList.update(1, '54321')
console.log(linkedList.toString()) //--> 12345 54321 BBB 456 CCC DDD

// 测试 removeAt 方法
linkedList.removeAt(1)
console.log(linkedList.toString()) //--> 12345 BBB 456 CCC DDD

// 测试 remove 方法
linkedList.remove('BBB')
console.log(linkedList.toString()) //--> 12345 456 CCC DDD

// 测试 isEmpty 方法
console.log(linkedList.isEmpty()) //--> false

// 测试 size 方法
console.log(linkedList.size()) //--> 4

console.log('// ----- 单向链表结构测试 END -----//')