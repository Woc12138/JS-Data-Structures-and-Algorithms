import DoublyLinkedList from './doublyLinkedList'

// ---------------- 封装的双向链表结构测试 ---------------- //
console.log('// ----- 双向链表结构测试 START -----//')
const doublyLinkedList = new DoublyLinkedList()

// append()测试
doublyLinkedList.append('ZZ')
doublyLinkedList.append('XX')
doublyLinkedList.append('CC')
console.log(doublyLinkedList) // ZZ -> XX -> CC

// insert() 测试
doublyLinkedList.insert(0, '00') // 00 -> ZZ -> XX -> CC
doublyLinkedList.insert(2, '22') // 00 -> ZZ -> 22 -> XX -> CC
console.log(doublyLinkedList)

// getElement() 测试
console.log(doublyLinkedList.getElement(1)) //--> ZZ

// indexOf() 测试
console.log(doublyLinkedList.indexOf('XX')) //--> 3

// removeAt() 测试
console.log(doublyLinkedList.removeAt(0)) // 00 //删除后链表： ZZ -> 22 -> XX -> CC
console.log(doublyLinkedList.removeAt(1)) // 22 //删除后链表： ZZ -> XX -> CC
console.log(doublyLinkedList) // ZZ -> XX -> CC

// update() 测试
console.log(doublyLinkedList.update(0, '111111')) // ZZ
console.log(doublyLinkedList) // 111111 -> XX -> CC

// remove() 测试
console.log(doublyLinkedList.remove('111111')) // 0
console.log(doublyLinkedList.remove('22222')) // undefined
console.log(doublyLinkedList) // XX -> CC

// 测试 isEmpty() 和 size()
console.log(doublyLinkedList.isEmpty()) // false
console.log(doublyLinkedList.size()) // 2

// forwardToString() 测试
console.log(doublyLinkedList.forwardToString()) // XX--CC--

// backwardString() 测试
console.log(doublyLinkedList.backwardString()) // CC--XX--
