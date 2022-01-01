function formate(num){
    let rem=[]
    let str=''
    while(num>0){
        let res=Math.floor(num%2)
        rem.push(res)
        num=Math.floor(res/2)
    }
    while(res.length-1!==0){
        str+=rem.pop()
    }
}