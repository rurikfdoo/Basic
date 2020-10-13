class Array {
constructor(){
    this.length =0;
    this.data = {};
}


get (index){
    return this.data[index];
}

push(value){
    this.data[this.length] = value;
    this.length++;
    return this.length;
}

pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    console.log(lastItem);


}

delete(index){
    if(index >= this.length-1){
        this.pop();
    }
    for (let i=index; i < this.length-1; i++)
    {
        this.data[i] = this.data[i+1];
    }
        delete this.data[this.length-1];
        this.length--;
}

}

let myArr = new Array();

myArr.push(1);
myArr.push(2);
myArr.push(3);
myArr.push(4);
// myArr.pop();
myArr.push(5);
myArr.push(6);
console.log(myArr);


myArr.delete(2);
console.log(myArr);


// myArr.push(4);


// Reverse string


// let str = 'rurik fernando';


function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string'){
      return 'Hmm not good'
    }
     return str.split('').reverse().join('');
    }
    
    console.log(reverse('kirur'));
    
    
    function reverse2(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
      return 'Hmm not good'
    }
    
    let b=[];
    
    for (i=str.length; i>=0; i--){
      b.push(str[i]);
    }
    
     return b.join('');
    }
    
    console.log(reverse2('ki'));