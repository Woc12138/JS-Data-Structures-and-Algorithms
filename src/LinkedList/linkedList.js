// 封装节点类
export class Node {
  constructor(element) {
    // 保存元素
    this.element = element
    // 指向下个节点
    this.next = null
  }
}

// 单向链表结构的封装
export default class LinkedList {
  constructor() {
    // 初始 head 为 null，head 指向链表的第一个节点
    this.head = null
    // 初始链表长度为 0
    this.length = 0
  }

  // append(element)：向列表尾部添加一个新的项
  append(element) {
    // 1.根据element创建Node对象
    const newNode = new Node(element)
    
    // 2.追加到最后
    if (!this.head) {
      // head为null，即链表长度为0时
      this.head = newNode
    } else {
      // 链表长度大于 0 时，在最后面添加新节点
      let current = this.head
      // 当 currentNode.next 不为空时，循序依次找最后一个节点
      while(current.next) {
        current = current.next
      }
      // 节点的 next 为 null 时就是最后一个节点，next 指向新节点
      current.next = newNode
    }

    // 3.追加完新节点后，链表长度+1
    this.length++
  }

  // insert(position, element)：向链表的特定位置插入一个新的项
  insert(position, element) {
    // 1.判断越界问题
    if (position < 0 || position > this.length) return false

    // 2.创建新节点
    const newNode = new Node(element)

    // 3.插入元素
    if (position === 0) {
      // position = 0 时，让新节点的 next 指向 原来的第一个节点，即 head
      newNode.next = this.head
      this.head = newNode
    } else {
      // 0 < position <= length 的情况
      
      let current = this.head // 当前节点初始化为 head
      for(let i=1; i<position; i++) {
        // current取到想插入位置的上一个节点
        current = current.next
      }
      newNode.next = current.next
      current.next = newNode
    }
    // 更新链表长度
    this.length++
    return newNode
  }

  // getElement(position)：获取对应位置的元素
  getElement(position) {
    // 1.判断越界问题
    if (position < 0 || position >= this.length) return null

    // 2.查找该位置的元素
    let current = this.head
    for (let i=1; i<=position; i++) {
      current = current.next
    }
    return current.element
  }

  // indexOf(element)：返回元素在列表中的索引，如果没有该元素则返回 -1
  indexOf(element) {
    // 1.获取第一个元素
    let current = this.head
    let index = 0

    // 2.开始查找
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // update(position, element)：修改某个位置的元素

  // 第一种
  // update(position, element) {
  //   // 1.判断越界问题
  //   if (position < 0 || position >= this.length) return false

  //   // 2.更新该位置的元素
  //   let current = this.head
  //   for (let i=1; i<=position; i++) {
  //     current = current.next
  //   }
  //   current.element = element
  //   return current
  // }

  // 第二种：调用removeAt()和insert()方法实现
  update(position, element) {
    // 1.删除 position 位置的节点
    const res = this.removeAt(position)
    // 2.在 position 位置插入元素
    this.insert(position, element)
    return res
  }

  // removeAt(position)：从列表的特定位置移除一项，并返回删除的那个节点
  removeAt(position) {
    // 1.判断越界问题
    if (position < 0 || position >= this.length) return false

    // 2.删除该位置的元素
    let current = this.head
    let previous = null
    if (position === 0 ) {
      this.head = this.head.next
    } else {
      for (let i=0; i<position; i++) {
        // current取到想插入位置的上一个节点
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    // 3、更新链表长度 -1
    this.length--
    return current
  }

  // remove(element)：从列表移除一项，并返回删除的那个节点的下标
  remove(element) {
    // 1.获取元素位置
    const index = this.indexOf(element)
    if (index === -1) return
    // 2.删除该位置的元素
    this.removeAt(index)
    return index
  }

  // isEmpty()：如果链表中不包含任何元素返回 true，如果链表长度大于 0 返回 false
  isEmpty() {
    return this.length === 0
  }

  // size()：返回链表包含的元素个数，与数组的 length 属性类似
  size() {
    return this.length
  }

  // toString() 链表数据以字符串形式返回
  toString() {
    let current = this.head
    let result = ''
    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (current) {
      result += current.element + ' '
      current = current.next
    }
    return result
  }
}
