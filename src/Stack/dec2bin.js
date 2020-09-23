// 十进制转二进制（decial to binary）
// 利用栈结构的特点封装实现十进制转换为二进制的方法
import Stack from './stack'

function dec2binary(dec) {
  // 1.创建stack
  const stack = new Stack()

  // 2.循环取余
  while(dec > 0) {
    let remainder = dec % 2
    dec = Math.floor(dec / 2)
    stack.push(remainder)
  }

  // 3.拼接字符串
  let binStr = ''
  while(!stack.isEmpty()) {
    binStr += stack.pop()
  }
  return binStr
}

export default dec2binary
