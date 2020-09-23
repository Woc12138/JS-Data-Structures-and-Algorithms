// 装填因子(已有个数/总个数)
const MAX_LOAD_FACTOR = 0.75
const MIN_LOAD_FACTOR = 0.25

/**
 * 设计哈希函数，将传入的字符串哈希化，转换成 hashCode
 * @param str 要哈希化的字符串
 * @param limit 哈希表的最大个数（数组长度）
 * @returns {number} hashCode
 */
export function hashFunc(str, limit = 7) {

  // 自己采用的一个质数（无强制要求，质数即可）
  const PRIME = 31

  // 1.定义存储hashCode的变量
  let hashCode = 0

  // 2.使用霍纳法则（秦九韶算法），计算hashCode的值
  for(let item of str) {
    hashCode = hashCode * PRIME + item.charCodeAt()
  }

  // 3.对hashCode取余并返回
  return hashCode % limit
}

/**
 * 判断一个数是否为质数
 * 针对质数的特点：只能被 1 和 number 整除，不能被 2 ~ (number-1)整除。遍历 2 ~ (num-1) 。
 * @param num
 * @returns {boolean}
 */
// 方法一，性能比较低
// export function isPrime(num) {
//   if (num <= 1) return false
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }

// 方法二，只需要遍历 2 ~ num 的平方根即可，性能较好
export function isPrime(num) {
  if (num <= 1) return false
  // 获取平方根
  let temp = Math.ceil(Math.sqrt(num))
  for (let i = 2; i <= temp; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}


// 哈希表的封装
export default class HashTable {

  constructor() {
    this.storage = [] // 哈希表存储数据的变量
    this.count = 0 // 当前存放元素个数
    this.limit = 7 // 哈希表长度（初始设为质数 7）
  }

  // getPrime(num) 根据传入的 num 获取最临近的质数
  getPrime(num) {
    while (!isPrime(num)) {
      num++
    }
    return num
  }

  // 哈希函数（获取下标值）
  hashFunc(str, limit = 7) {

    // 自己采用的一个质数（无强制要求，质数即可）
    const PRIME = 31
  
    // 1.定义存储hashCode的变量
    let hashCode = 0
  
    // 2.使用霍纳法则（秦九韶算法），计算hashCode的值
    for(let item of str) {
      hashCode = hashCode * PRIME + item.charCodeAt()
    }
  
    // 3.对hashCode取余并返回
    return hashCode % limit
  }

  // put(key, value) 往哈希表里添加数据（放入/修改）
  put(key, value) {
    // 1.根据key映射到index
    const index = this.hashFunc(key, this.limit)

    // 2.取出数组，桶（桶里还是一个个的数组）
    let bucket = this.storage[index]
    if (bucket === undefined) { // 判断是否存在bucket
      bucket = [] // 不存在则创建
      this.storage[index] = bucket
    }

    // 3.判断是插入还是修改操作
    for (let tuple of bucket) { // 元组tuple的格式：[key, value]
      if (tuple[0] === key) { // 如果key相等，则修改数据
        tuple[1] = value
        return // 修改完tuple里数据，return终止，不再往下执行。
      }
    }

    // 4.如果没有覆盖，那么就是新增
    bucket.push([key, value]) // bucket 存储元组 tuple，格式为 [key, value]
    this.count++

    // 判断哈希表是否要扩容，若装填因子 > 0.75，则扩容
    if (this.count > this.limit * MAX_LOAD_FACTOR) {
      this.resize(this.getPrime(this.limit * 2))
    }
  }

  // get(key) 根据 key 获取 value
  get(key) {
    // 1.根据key获取index
    const index = this.hashFunc(key, this.limit)

    // 2.获取bucket
    const bucket = this.storage[index]
    if (bucket === undefined) {
      return null
    }

    // 3.遍历桶，查询
    for (const tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1]
      }
    }

    return null
  }

  // remove(key) 删除指定 key 的数据
  remove(key) {
    // 1.根据key获取index
    const index = this.hashFunc(key, this.limit)

    // 2.获取bucket
    const bucket = this.storage[index]
    if (bucket === undefined) {
      return null
    }

    // 3.遍历桶，查询
    for (let i = 0, len = bucket.length; i < len; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--

        // 根据装填因子的大小，判断是否要进行哈希表压缩
        if (this.limit > 7 && this.count < this.limit * MIN_LOAD_FACTOR) {
          this.resize(this.getPrime(Math.floor(this.limit / 2)))
        }

        return tuple[1] // 返回被删除的tuple的value
      }
    }
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  // 重新调整哈希表大小，扩容或压缩
  resize(newLimit) {

    // 1.保存旧的storage数组内容
    const oldStorage = this.storage

    // 2.重置所有属性
    this.storage = []
    this.count = 0
    this.limit = newLimit

    // 3.遍历oldStorage，取出所有数据，重新put到this.storage
    for (const bucket of oldStorage) {
      if (bucket) {
        for (const tuple of bucket) {
          this.put(tuple[0], tuple[1])
        }
      }
    }
  }

}