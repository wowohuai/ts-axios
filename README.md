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
## 版本
```shell
npm version patch 升级补丁 0.0.1 变成 0.0.2

npm version minor 升级补丁 0.0.1 变成 0.1.0

npm version major 升级补丁 0.0.1 变成 1.0.0
