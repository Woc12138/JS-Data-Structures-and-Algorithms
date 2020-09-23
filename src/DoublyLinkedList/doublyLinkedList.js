import LinkedList, { Node } from '../LinkedList/linkedList'

// 封装节点类
class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

// 单向链表结构的封装
export default class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    // 初始 tail 为 tail 指向链表的最后一个节点
    this.tail = null
  }

  // 重写 append(element)
  append(element) {
    // 1.根据element创建Node对象
    const newNode = new DoublyNode(element)
    
    // 2.追加到最后
    if (!this.head) {
      // head为null，即链表长度为0时
      this.head = newNode
      this.tail = newNode
    } else {
      // 链表长度大于 0 时，在最后面添加新节点
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    // 3.追加完新节点后，链表长度+1
    this.length++
  }

  // 重写 insert(position, element)
  insert(position, element) {
    // 1.判断越界问题
    if (position < 0 || position > this.length) return false

    // 2.创建新节点
    const newNode = new DoublyNode(element)

    // 3.多种插入情况
    if (position === 0) { // 插入到头时
      if (!this.head) { // 原来没有元素时
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else if (position === this.length) { // 插入到尾时
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else { // 在 0 ~ this.length 位置中间插入

      // 第一种写法
      // let current = this.head
      // for (let i=1; i<position; i++) {
      //   current = current.next
      // }
      // current.next.prev = newNode
      // newNode.next = current.next
      // current.next = newNode
      // newNode.prev = current

      // 第二种写法：用while循环和previous变量保存
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.prev = previous
      newNode.next = current
      current.prev = newNode

    }
    // 更新链表长度
    this.length++
    return newNode
  }

  // 不需要重写 getElement(position) 继承单向链表
  
  // 不需要重写 indexOf(element) 继承单向链表

  // 重写 removeAt(position)
  removeAt(position) {
    // 1.判断越界问题
    if (position < 0 || position >= this.length) return null

    let current = this.head
    // 2.根据不同情况删除元素
    if (position === 0 ) { // 要删除的是头一个（返回的current不需要变化）
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
    } else if (position === this.length -1) { // 要删除的是最后一个（返回的current需要变化）
      current = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
    } else { // 删除中间的（current自动变化）
      for (let i=0; i<position; i++) {
        // current取到想插入位置的上一个节点
        current = current.next
      }
      // 双向链表有prev就不需要再设置previous了
      current.prev.next = current.next
      current.next.prev = current.prev
    }
    // 3、更新链表长度 -1
    this.length--
    // 最后返回删除的那个元素，要取到这个变量就需要把let current放在外面
    return current.element
  }

  // 不需要重写 update(position, element) 继承单向链表

  // 不需要重写 remove(element) 继承单向链表


  // 不需要重写 isEmpty() 继承单向链表

  // 不需要重写 size() 继承单向链表

  // forwardToString() 链表数据从前往后以字符串形式返回
  forwardToString() {
    let current = this.head
    let result = ''

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (current) {
      result += current.element + '--'
      current = current.next
    }

    return result
  }

  // backwardString() 链表数据从后往前以字符串形式返回
  backwardString() {
    let current = this.tail
    let result = ''

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (current) {
      result += current.element + '--'
      current = current.prev
    }

    return result
  }
}
