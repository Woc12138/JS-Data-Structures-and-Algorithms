// 节点内部类
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

// 封装二叉搜索树（特点：左子树节点值 < 根节点，右子树节点值 > 根节点）
export default class BinarySearchTree {
  constructor() {
    // 定义root
    this.root = null
  }

  // insert(key) 向树中插入新的键
  insert(key) {
    // 1.根据key创建Node节点
    const newNode = new Node(key)

    // 2.判断有没有根节点
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  // 根据要插入的树的根节点和新节点，递归插入
  insertNode(node, newNode) {
    if (newNode.key > node.key) { // 往右边查找插入

      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }

    } else { // 往左边查找插入

      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }

    }
  }

  // ----------- 二叉树遍历 ----------- //
  // preOrderTraversal() 先序遍历（根左右）
  preOrderTraversal() {
    const result = []
    this.preOrderTraversalNode(this.root, result)
    return result
  }

  preOrderTraversalNode(node, result) {
    if (node === null) return result
    result.push(node.key)
    this.preOrderTraversalNode(node.left, result) // 递归遍历所有left
    this.preOrderTraversalNode(node.right, result) // left遍历完了就执行这一行代码，传入right
  }

  // inOrderTraversal() 中序遍历（左根右）
  inOrderTraversal() {
    const result = []
    this.inOrderTraversalNode(this.root, result)
    return result
  }

  inOrderTraversalNode(node, result) {
    if (node === null) return result
    this.inOrderTraversalNode(node.left, result)
    result.push(node.key)
    this.inOrderTraversalNode(node.right, result)
  }// 递归遍历所有left，等找到最左面的叶子节点，node.left为null就return执行下一行，打印出值，执行下一行，此时node.right为null又会return，回到上一个父节点的递归中，执行下一行打印出其值，执行下一行传入right，一直循环运行下去，直到跳出开头的递归

  // postOrderTraversal() 后序遍历（左右根）
  postOrderTraversal() {
    const result = []
    this.postOrderTraversalNode(this.root, result)
    return result
  }

  postOrderTraversalNode(node, result) {
    if (node === null) return result
    this.postOrderTraversalNode(node.left, result)
    this.postOrderTraversalNode(node.right, result)
    result.push(node.key)
  }

  // min() 获取二叉搜索树最小值
  min() {
    let node = this.root
    while(node.left !== null) {
      node = node.left
    }
    return node.key
  }

  // max() 获取二叉搜索树最大值
  max() {
    let node = this.root
    while(node.right !== null) {
      node = node.right
    }
    return node.key
  }

  // search(key) 查找二叉搜索树中是否有相同的key，存在返回 true，否则返回 false
  search(key) {
    return this.searchNode(this.root, key)
  }

  // 方法一：通过递归实现
  searchNode(node, key) {
    // 1.判断node有没有值
    if (node === null) return false

    // 2.判断搜索的key和节点值的关系
    if (key < node.key) return this.searchNode(node.left, key)
    else if (key > node.key) return this.searchNode(node.right, key)
    else return true
  }

  // 方法二：通过 while 循环实现
  search2(key) {
    let node = this.root
    while(node) {
      if (key < node.key) node = node.left
      else if (key > node.key) node = node.right
      else return true
    }
    return false
  }

  // remove(key) 从树中移出某个键
  remove(key) {
    // 1.定义一些变量来记录当前状态
    let current = this.root
    let parent = null
    let isLeftChild = true

    // 2.开始查找要删除的节点
    while (current.key !== key) {
      parent = current

      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }

      if (current === null) return false // 没找到，删除失败
    }

    // 3.找到节点 current
    // 情况一：删除的节点是叶子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) this.root = null // 是根节点
      else if (isLeftChild) parent.left = null // 是左子节点
      else parent.right = null // 是右子节点
    }

    // 情况二：要删除的节点只有一个子节点
    else if (current.right === null) { // 要删除的节点只有左子节点

      if (current === this.root) this.root = current.left // 要删除的节点是根
      else if (isLeftChild) parent.left = current.left // 是左子节点
      else parent.right = current.left // 是右子节点

    } else if (current.left === null) { // 只有右子节点

      if (current === this.root) this.root = current.right // 要删除的节点是根
      else if (isLeftChild) parent.left = current.right // 是左子节点
      else parent.right = current.right // 是右子节点
    
    }

    // 情况三：要删除的节点有两个子节点 
    else {
      // 1.获取后继节点
      let successor = this.getSuccessor(current)

      // 2.判断
      if (current === this.root) this.root = successor // 要删除的节点是根
      else if (isLeftChild) parent.left = successor // 是左子节点
      else parent.right = successor // 是右子节点

      // 3、将后继的左子节点延续上原来被删除节点的左子节点
      successor.left = current.left
    }

    return true
  }

  // 获取前驱或者后继，这里找后继，即从要删除的节点的右边开始查找最小的值
  getSuccessor(delNode) {
    // 1.定义变量，存储临时节点
    let successorParent = delNode // 父节点
    let successor = delNode // 后继
    let current = delNode.right // 当前

    // 2.寻找节点
    while (current != null) {
      successorParent = successor
      successor = current
      current = current.left // 需要往左找到最小值
    }

    // 3.如果后继节点不是删除节点的右节点，不仅要将后继节点替换要删除节点，因为后继节点不可能有左子节点但有可能有右子节点，所以还要将后继节点的父节点的左子节点指向后继节点的右子节点
    // （如果后继节点是删除节点的右节点的话就非常简单，因为这个右节点不可能有左子节点，只需要将其替换要删除的节点就好）
    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }

}