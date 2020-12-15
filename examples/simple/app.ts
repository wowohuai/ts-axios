import axios from '../../src';

axios({
  method: 'get',
  url: '/simple/hello',
  params: {
    a: 1,
    b: 2
  }
});
