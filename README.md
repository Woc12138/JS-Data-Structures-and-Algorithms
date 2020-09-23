# JavaScript 数据结构与算法

代码均采用 ES6 编写，使用 webpack 和 babel 将 ES6 自动转换成 ES5。

> 重点要掌握数据结构与算法的思想，编程语言只是一种实现工具。

## 文档

## 代码目录

- [栈的封装](src/Stack/stack.js)
- [队列的封装](src/Queue/queue.js)
- [优先队列的封装](src/PriorityQueue/priorityQueue.js)
- [单向链表的封装](src/LinkedList/linkedList.js)
- [双向链表的封装](src/DoublyLinkedList/doublyLinkedList.js)
- [集合的封装](src/Set/set.js)
- [字典的封装](src/Map/map.js)
- [哈希表的封装](src/HashTable/hashTable.js)
- [二叉搜索树的封装](src/Tree/tree.js)

## 测试环境

### 安装依赖
```bash
npm install
```

### 启动服务
```bash
npm run start
```

开启**测试环境**的服务后，可在 `src/index.js` 选择要测试的代码，查看具体值输出。

```js
// 导入栈结构的封装及测试代码
// import './Stack'

// 导入队列结构的封装及测试代码
// import './Queue'

// 导入优先队列结构的封装及测试代码
// import './PriorityQueue'

// 导入单向链表结构的封装及测试代码
// import './LinkedList'

// 导入双向链表结构的封装及测试代码
// import './DoublyLinkedList'

// 导入集合结构的封装及测试代码
// import './Set'

// 导入字典结构的封装及测试代码
// import './Map'

// 导入哈希表结构的封装及测试代码
// import './HashTable';

// 导入树结构的封装及测试代码
import './Tree';
```

## 参考

[JavaScript(ES6)数据结构和算法](https://www.bilibili.com/video/BV1x7411L7Q7?p=1)