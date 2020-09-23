// 字典结构的封装
export default class Map {

  constructor() {
    this.items = {}
  }

  // has(key) 判断字典中是否存在某个key
  has(key) {
    return this.items.hasOwnProperty(key)
  }

  // set(key, value) 在字典中添加键值对
  set(key, value) {
    // if (this.has(key)) return false // 不需要判断，因为后面添加的会顶替掉原来的
    this.items[key] = value
    return true
  }

  // remove(key) 在字典中删除指定的 key
  remove(key) {
    if (!this.has(key)) return false
    delete this.items[key]
    return true
  }

  // get(key) 获取指定 key 的 value，如果没有，返回 undefined
  get(key) {
    return this.has(key) ? this.items[key] : undefined
  }

  // keys() 获取所有的 key
  keys() {
    return Object.keys(this.items)
  }

  // values() 获取所有的 value
  values() {
    return Object.values(this.items)
  }

  // size() 获取字典中的键值对个数
  size() {
    return this.keys().length
  }

  // clear() 清空字典中所有的键值对
  clear() {
    this.items = {}
  }
}