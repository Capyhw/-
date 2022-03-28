class Set {
    constructor() {
        this.items = {}
    }
    //判断元素是否在集合中
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    //增加
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
        }
    }
    //删除
    delete(element){
        if(this.has(element)){
            delete this.items[element]
        }
    }
    //清空
    clear(){
        this.items={}
    }
    //集合中元素数量
    size(){
        return Object.keys(this.items).length
    }
    //返回所有值构成的数组
    values(){
        return Object.values(this.items)
    }

    //并集
    union(otherSet){
        const unionSet=new Set()
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet
    }
    //交集
    
}

/* //并集
const a=new Set()
const b=new Set()
a.add(1)
a.add(2)
a.add(3)
b.add(2)
b.add(3)
b.add(5) */






