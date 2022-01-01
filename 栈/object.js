class Stack{
    constructor(){
        this.count=0
        this.items={}
    }
    push(element){
        this.items[this.count]=element;
        this.count++
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count===0
    }
    pop(){
        if(this.count===0) return undefined
        else{
            this.count--
            const result=this.items[this.count]
            delete this.items[this.count]
            return result
        }
    }
    peek(){
        if(this.count===0){
            return undefined
        }
        else{
            return this.items[count-1]
        }
    }
    clear(){
        this.items={}
        this.count=0
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        else{
            let objString=`${this.items[0]}`
            for(let i=1;i<this.count;i++){
                objString+=`,${this.items[i]}`
            }
            return objString
        }
    }

}