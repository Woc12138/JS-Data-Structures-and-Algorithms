import Set from './Set'

// ---------------- 封装的栈结构测试 ---------------- //
// console.log('// ----- 集合结构测试 START -----//')
// const set = new Set()

// // add() 测试
// set.add('abc')
// console.log(set.add('abc')) //--> false
// set.add('123')
// set.add('456')
// console.log(set) //--> {items: {123: "123", 456: "456", abc: "abc"}}

// // has() 测试
// console.log(set.has('123')) //--> true
// console.log(set.has('321')) //--> false

// // remove() 测试
// console.log(set.remove('abc')) //--> true
// console.log(set.remove('abc')) //--> false
// console.log(set) //--> {items: {123: "123", 456: "456"}}

// // size() 测试
// console.log(set.size()) //--> 2

// // values() 测试
// console.log(set.values()) //--> ["123", "456"]

// // clear() 测试
// set.clear()
// console.log(set.values()) //--> []

// ------- 集合的操作测试 ------- //
const setA = new Set()
setA.add('111')
setA.add('222')
setA.add('333')

const setB = new Set()
setB.add('111')
setB.add('222')
setB.add('aaa')
setB.add('bbb')

// 求两个集合的并集 union() 测试
let unionSet = setA.union(setB)
console.log(unionSet.values()) //--> ["111", "222", "333", "aaa", "bbb"]

// 求两个集合的交集 intersection() 测试
let intersectionSet = setA.intersection(setB)
console.log(intersectionSet.values()) //--> ["111", "222"]

// 求两个集合的差集 difference() 测试
let differenceSet = setA.difference(setB)
console.log(differenceSet.values()) //--> ["333"]

// 求集合 A 是否为 集合 B 的 子集 subset() 测试
console.log(setA.subset(setB)) //--> false
