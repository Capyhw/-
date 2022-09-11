/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (this.map.has(key)) {
      let value = this.map.get(key);
      //删除重新set,相当于更新到map最后
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);
    //超容量了,删掉map里第一个
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
