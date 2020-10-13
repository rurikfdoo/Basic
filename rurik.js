// console.log("hiiii");
// let arr=['hi', 'rurik', 'do', 'this' ,'perfect'];
// let mynum=[1,2,3,4,5];
// arr.fill('HI',3,5);
// if(mynum.find(4)){console.log(hh);}

// function press(){
// console.log(arr[3]);
// document.getElementById("hi").style.color="red";
// setTimeout(function(){document.getElementById("hi").style.color="blue";},2000);
// }

// node{
//     value=5,
//     next = node{
//         value= 8,
//         next={
//             value = 9,
//             next = null
//         }
//     }
// }


class Node {
    constructor(value){
        this.head ={

            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;

    }
    append(value){
    const newNode={
        value: value,
        next:null,
    }
    this.tail.next= newNode;
    this.tail =newNode;
    this.length++;
    return this;
    
    }

    prepend(value){
        const newNode={
            value: value,
            next:null,
        }
        newNode.next =this.head;
        this.head = newNode;
        this.length++;
        return this;

    }

    insert (value,index)
    {
        if(index >= this.length){
            return this.append(value);
        }

        const newNode={
            value: value,
            next:null,
        };
        const leaderNode = this.traverseToIndex(index-1);
        let pointerNode = leaderNode.next;
        leaderNode.next= newNode;
        newNode.next=pointerNode;
        this.length++; 


    }
    remove(index){
        const leaderNode = this.traverseToIndex(index-1);
        let unwantedNode = leaderNode.next;
        leaderNode.next= unwantedNode.next;
        this.length--; 
        
    }

    traverseToIndex(index) 
         {
            let counter =0 ;
            let currentNode = this.head;
            while(counter !== index){
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
    }
   
    prinList(){
        const arr=[];
        let currentNode = this.head;
        // arr.push(1);
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;

        }
        return arr;
    }

}

mynode = new Node(3);
mynode.append(4);
mynode.append(5);

mynode.append(7);
mynode.prepend(2);
mynode.prepend(1);
mynode.insert(6,4);
mynode.insert(9,5);

console.log(mynode.prinList());
mynode.remove(5);
mynode.remove(2);

console.log(mynode.prinList());
// console.log(mynode);







