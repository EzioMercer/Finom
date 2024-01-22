const isUndefined = (x: any): x is undefined => typeof x === 'undefined';

export default isUndefined;