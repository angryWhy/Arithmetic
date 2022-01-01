class Stack{
    constructor(){
        this.items=[]
    }
    //添加
    push(element){
        this.items.push(element)
    }
    //删除栈顶
    pop(element){
        this.items.pop(element)
    }
    //查看栈顶元素
    peek(){
        return this.items[length-1]
    }
    //查询是否为空
    isEmpty(){
        return this.items.length===0;
    }
    //查询长度
    size(){
        return this.items.length
    }
    clear(){
        this.items=[]
    }
}