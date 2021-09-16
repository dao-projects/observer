# @daoxin/observer

## 安装

```bash
npm install @daoxin/observer
```

## 对象模型

| 类型成员     | 描述                       |
| ------------ | -------------------------- |
| - _eventPool | 监听处理函数存储池         |
| + on ()      | 绑定监听函数               |
| + off ()     | 移除监听函数               |
| + fire ()    | 触发监听函数               |
| + onve ()    | 绑定监听函数（仅监听一次） |

## 使用

```typescript
import Observer from '@daoxin/observer'

class TestClass extends Observer<{
  'inc': { value: number },
  'dev': { val: number }
}> {
  private _value = 1
  constructor () {
    super()
  }
  inc () : void {
    this._value++
    this.fire('inc', {
      value: this._value
    })
  }
  dec () : void {
    this._value--
    this.fire('dev', {
      val: this._value
    })
  }
}

```

```javascript
const testObj = new TestClass()
let count = 0
testObj.on('inc', () => {
  count++
})
testObj.on('dev', () => {
  count++
})
testObj.inc() // +1
testObj.inc() // +1
testObj.inc() // +1
testObj.dec() // +1
testObj.dec() // +1
// output: count = 5
```

```javascript
const testObj = new TestClass()
let count = 0
const handler = testObj.on('inc', () => {
count++
})
testObj.on('dev', () => {
count++
})
testObj.inc() // +1
testObj.inc() // +1
handler.remove()
testObj.dec() // +1
testObj.inc()
testObj.dec() // +1
// output: count = 4
```

```javascript
const testObj = new TestClass()
let count = 0
testObj.on('inc', () => {
  count++
})
testObj.on('inc', () => {
  count++
})
testObj.on('dev', () => {
  count++
})
testObj.inc() // +2
testObj.dec() // +1
testObj.off('inc')
testObj.inc()
testObj.inc()
testObj.dec() // +1
// output: count = 4
```

```javascript
const testObj = new TestClass()
let count = 0
const handler = testObj.on('inc', () => {
  count++
})
testObj.off('inc')
handler.remove()
testObj.inc()
// output: count = 0
```

```javascript
const testObj = new TestClass()
let count = 0
const handler = testObj.on('inc', () => {
  count++
  handler.remove()
})
testObj.inc()
testObj.inc()
// output: count = 1
```


```
echo "# observer" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dao-projects/observer.git
git push -u origin main


git remote add origin https://github.com/dao-projects/observer.git
git branch -M main
git push -u origin main
```