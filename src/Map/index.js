import Map from './Map'

// ---------------- 封装的字典结构测试 ---------------- //
console.log('// ----- 字典结构测试 START -----//')
const map = new Map()

// set() 测试
console.log(map.set('name', 'wy')) //--> true
console.log(map.set('name', 'sss')) //--> true
map.set('age', 18)
map.set('gender', 'male')
console.log(map) //--> {items: {name: "sss", age: 18, gender: "male"}}

// has() 测试
console.log(map.has('name')) //--> true
console.log(map.has('address')) //--> false

// remove() 测试
map.remove('name')
console.log(map) //--> {items: {age: 18, gender: "male"}}

// get() 测试
console.log(map.get('age')) //--> 18

// keys() 测试
console.log(map.keys()) //--> ["age", "gender"]

// values() 测试
console.log(map.values()) //--> [18, "male"]

// size() 测试
console.log(map.size()) //--> 2
