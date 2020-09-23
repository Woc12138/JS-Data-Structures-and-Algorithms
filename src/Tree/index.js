import BinarySearchTree from './tree'
// ---------------- 封装的树结构测试 ---------------- //
console.log('// ----- 树结构测试 START -----//')

// 二叉搜索树测试
const bst = new BinarySearchTree()
// insert() 插入
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
console.log(bst)

console.log('前序遍历', bst.preOrderTraversal()) // [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]
console.log('前序遍历', bst.inOrderTraversal()) // [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
console.log('前序遍历', bst.postOrderTraversal()) // [3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]

console.log('min', bst.min()) // 3
console.log('max', bst.max()) // 25

console.log('search(98)-递归实现', bst.search(98)) // false
console.log('search(10)-递归实现', bst.search(10)) // true

console.log('search(98)-while循环实现', bst.search2(98)) // false
console.log('search(10)-while循环实现', bst.search2(10)) // true

console.log('remove(15)')
console.log(bst.remove(15)) // true
console.log(bst.inOrderTraversal()) // [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 20, 25]
console.log(bst.remove(24)) // false
console.log(bst.inOrderTraversal()) // [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 20, 25]

