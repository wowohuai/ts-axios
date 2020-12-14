# 此分支作为开发分支使用


# how to use ts-axios

```ts
import axios from 'axios';

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})

//or

axios.get('/simple/get')


```
