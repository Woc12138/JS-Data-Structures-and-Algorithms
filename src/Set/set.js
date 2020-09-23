// 集合的封装
export default class Set {

  constructor() {
    // 属性
    // 这里不用数组而用object对象，将集合保存在object的key里
    this.items = {}
  }

  // has(value) 判断集合中是否存在 value 值，存在返回 true，否则返回 false
  has(value) {
    return this.items.hasOwnProperty(value)
  }

  // add(value) 往集合中添加 value
  add(value) {
    // 1.判断当前集合中是否已经包含了该元素
    if (this.has(value)) return false

    // 2.将元素添加到集合中
    this.items[value] = value
    return true
  }

  // remove(value) 删除集合中指定的 value
  remove(value) {
    // 1.判断当前集合中是否已经包含了该元素
    if (!this.has(value)) return false

    // 2.将元素从属性中删除
    delete this.items[value]
    return true
  }

  // clear() 清空集合中所有 value
  clear() {
    this.items = {}
  }

  // size() 获取集合中的 value 个数
  size() {
    return Object.keys(this.items).length
  }

  // values() 获取集合中所有的 value
  values() {
    return Object.keys(this.items)
  }

  // ------- 集合间的操作 ------- //
  // union() 求两个集合的并集
  union(otherSet) {
    // this：集合对象A
    // otherSet：集合对象B
    // 1.创建新的集合
    let unionSet = new Set()

    // 2.将当前集合（this）中的所有 value 添加到新集合（unionSet）中
    for (let value of this.values()) {
      unionSet.add(value)
    }

    // 3、将 otherSet 集合的所有 value，添加到新集合（unionSet）中
    for (let value of otherSet.values()) {
      unionSet.add(value) // add() 有重复判断
    }

    return unionSet
  }

  // intersection() 求两个集合的交集
  intersection(otherSet) {
    // 1、创建一个新集合
    let intersectionSet = new Set()

    // 2、遍历集合A中所有元素，判断是否在集合B中存在，存在即为交集
    for (let value of this.values()) {
      if (otherSet.has(value)) {
        // 3.同时在集合B中，将该元素加入到新集合中
        intersectionSet.add(value)
      }
    }

    return intersectionSet
  }

  // difference() 差集
  difference(otherSet) {
    // 1、创建一个新集合
    let differenceSet = new Set()

    // 2、遍历集合A中所有元素，判断是否在集合B中存在，不存在即为差集（与交集相反）
    for (let value of this.values()) {
      if (!otherSet.has(value)) {
        // 3.不存在集合B中，将该元素加入到新集合中
        differenceSet.add(value)
      }
    }

    return differenceSet
  }

  // subset() 子集
  subset(otherSet) {
    // 遍历集合A中所有元素，判断是否在集合B中存在，有不存在的返回 false
    for (let value of this.values()) {
      if (!otherSet.has(value)) {
        return false
      }
    }

    // 遍历完所有的，返回 true
    return true
  }
}