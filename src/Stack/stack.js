// 封装栈类
class Stack {

  // 写在构造函数中的属性/方法是给实例对象添加的（这样new出来的每个实例都会创建新的属性或方法）
  // 写在构造函数外的是挂载在原型对象上的实例属性/方法（这样new出来的每个实例都不需要再创建新的，而是通过原型链访问）
  constructor() {
    // 在构造函数中定义一个变量用于保存当前栈对象中的所有元素（数组类型）
    // 栈中的属性
    this.items = []
  }

  // 栈的相关操作
  // 1.将元素压入栈
  push(item) {
    this.items.push(item)
  }

  // 2.从栈中取出元素
  pop() {
    return this.items.pop()
  }

  // 3.查看一下栈顶元素
  peek() {
    if(this.isEmpty()) return null
    return this.items[this.items.length - 1]
  }

  // 4.判断栈是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 5.获取栈中元素的个数
  size() {
    return this.items.length
  }

  // 6.toString()方法
  toString() {
    let res = ''
    for(let item of this.items) {
      res += item + ' '
    }
    return res
  }
}

export default Stack