const toString = Object.prototype.toString;

export const isDate = (val: unknown): val is Date => {
  return toString.call(val) === '[object Date]';
};


export const isObject = (val: unknown): boolean => {
  return toString.call(val) === '[object Object]';
};
