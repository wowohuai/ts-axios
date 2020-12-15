/**
 * 1. array
 * 2. object
 * 3. date
 * 4. 特殊字符 不希望被encode,  空格转换成 '+'
 * 5. 空值忽略
 * 6. 丢弃url中的hash
 * 7. 保存url中存在的参数
 */

import {isDate, isObject} from './utils';

export const encode = (val: string): string => {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
};

/**
 * 处理URL
 * @param url
 * @param params
 */
const buildURL = (url: string, params?: any): string => {
  if(!params) {
    return url;
  }
  const parts: string[] = [];
  Object.keys(params).forEach((k) => {
    const val = params[k];
    if(val === null || typeof val === 'undefined') {
      return;
    }

    let values: string[] = [];
    console.log(Array.isArray(val));
    if(Array.isArray(val)) {
      values = val;
      k += '[]';
    } else {
      values = [val];
    }

    values.forEach(item => {
      if(isDate(item)) {
        item = item.toISOString();
      } else if(isObject(item)) {
        item = JSON.stringify(item);
      }
      parts.push(`${encode(k)}=${encode(item)}`);
    });
  });
  const serializeParams = parts.join('&');
  if(serializeParams) {
    const hashMaskIndex = url.indexOf('#');
    if(hashMaskIndex !== -1) {
      url = url.slice(0, hashMaskIndex);
    }
    url += (url.includes('?') ? '&' : '?') + serializeParams;
  }
  return url;
};


export default buildURL;
