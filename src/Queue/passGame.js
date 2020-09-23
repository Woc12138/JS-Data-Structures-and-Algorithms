import Queue from './queue'

function passGame(nameList, num) {
  // 1.创建队列
  const queue = new Queue()

  // 2.将 nameList 里面的每一个元素入队
  for(let name of nameList) {
    queue.enqueue(name)
  }

  // 3.开始数数，让这些人循环进入队列
  while(queue.size() > 1) {
    // 由于队列没有像数组一样的下标值不能直接取到某一元素，
    // 所以采用，把 num 前面的 num-1 个元素先删除后添加到队列末尾，
    // 这样第 num 个元素就排到了队列的最前面，可以直接使用 dequeue 方法进行删除
    for(let i=0;i<num-1;i++) {
      // 将数到规定数字之前的人都从队列头出去，再排入队列尾
      queue.enqueue(queue.dequeue())
    }
    // 数到规定的数字就被淘汰，出去不再进来
    queue.dequeue()
  }
  // 返回最后剩下的那个人的索引
  return nameList.indexOf(queue.front())

}

export default passGame