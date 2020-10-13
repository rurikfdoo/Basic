
class Node {
    constructor(value){
        this.head ={

            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;

    }
    append(value){
    const newNode={
        value: value,
        next:null,
        prev: null,
    }
    newNode.prev= this.tail;
    this.tail.next= newNode;
    this.tail =newNode;
    this.length++;
    return this;
    
    }

    prepend(value){
        const newNode={
            value: value,
            next:null,
            prev:null,
        }
        newNode.next =this.head;
        this.head.prev = newNode;
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
            prev:null,
        };
        const leaderNode = this.traverseToIndex(index-1);
        let pointerNode = leaderNode.next;
        leaderNode.next= newNode;
        newNode.prev = leaderNode;
        newNode.next=pointerNode;
        pointerNode.prev =newNode;
        this.length++; 


    }
    remove(index){
        const leaderNode = this.traverseToIndex(index-1);
        let unwantedNode = leaderNode.next;
        
        leaderNode.next= unwantedNode.next;
        let follow= leaderNode.next;
        follow.prev = leaderNode;
        
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

mynode = new Node(1);
mynode.append(2);
mynode.append(3);

mynode.append(4);
mynode.prepend(0);
// mynode.prepend(1);
mynode.insert(6,2);

// mynode.insert(9,5);

// console.log(mynode.prinList());
// mynode.remove(5);

console.log(mynode.prinList());
mynode.remove(2);

console.log(mynode.prinList());

console.log(mynode);







