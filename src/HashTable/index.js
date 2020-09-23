import HashTable, { hashFunc, isPrime } from './hashTable';

// ---------------- 封装的哈希表结构测试 ---------------- //
// console.log('=== START 哈希函数测试 START === ');
// console.log(hashFunc('123')); //--> 5
// console.log(hashFunc('abc')); //--> 6

console.log('// ----- 哈希表结构测试 START -----//');
const hashTable = new HashTable()

// put() 测试
hashTable.put('name', 'wy')
hashTable.put('age', 18)
hashTable.put('email', 'woc12138')
hashTable.put('height', '160')
hashTable.put('gender', 'female')
console.log(hashTable)
/*HashTable {
    storage:
      [
        empty,
        ["name", "wy"],
        [["age", 18], ["email", "woc12138"]],
        empty,
        ["height", "160"],
        ["gender", "female"]
      ],
    count: 5,
    limit: 7
  }
*/

// put() 覆盖 和 resize() 测试
hashTable.put('age', 20)
hashTable.put('email2', 'wocc12138')
console.log(hashTable.storage[0])
/*HashTable {
    storage:
      [
        empty,
        [["email2", 'wocc12138'], ["gender", "female"]],
        ["age", 20],
        empty, empty,
        ["email", 'woc12138'],
        ["name", 'wy'],
        empty, empty, empty, empty, empty, empty, empty, empty,
        ["height", "160"],
      ],
    count: 6,
    limit: 17
  }
*/

// get() 测试
console.log(hashTable.get('name')); //--> wy
console.log(hashTable.get('abc')); //--> null

// remove() 测试
console.log(hashTable.remove('age')) //--> 20
console.log(hashTable.remove('age')) //--> undefined

console.log(hashTable);
/*HashTable {
    storage:
      [
        empty,
        [["email2", 'wocc12138'], ["gender", "female"]],
        [],
        empty, empty,
        ["email", 'woc12138'],
        ["name", 'wy'],
        empty, empty, empty, empty, empty, empty, empty, empty,
        ["height", "160"],
      ],
    count: 6,
    limit: 17
  }
*/

// isEmpty() size() 测试
console.log(hashTable.isEmpty()) //--> false
console.log(hashTable.size()) //--> 5


