class BinaryTree{
    constructor(){
      this.root = null;
  
    }
  
    insert(value){
      if(!this.root){
        this.root = new Node(value);
      }
      else{
        let currentNode = this.root;
        let newNode = new Node(value);
        while(true){
  
            if(value <= currentNode.value){
              if(!currentNode.left){
              currentNode.left = newNode;
              return this;
  
              }
              currentNode = currentNode.left;
            }
            else
            {
              if(!currentNode.right){
  
              currentNode.right = newNode;
              return this;
  
              }
              currentNode = currentNode.right;
  
  
            }
            
            
          }
        }
      
    }

    lookup(value){
        if(!this.root){
            return false;
        }
        else{
          
          let currentNode = this.root;
          while(currentNode)
          {
            if( value < currentNode.value){
              currentNode = currentNode.left;
            }
            else if(value > currentNode.value){
              currentNode = currentNode.right;

            }
            else if (value === currentNode.value){
              return currentNode.value;
            }
          }

          return false;
        }

    }
  
  }
  
  class Node{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let bi = new BinaryTree();
  
  bi.insert(5);
  bi.insert(4);
  bi.insert(6);
  bi.insert(3);
  bi.insert(8);
  bi.insert(7);
  bi.insert(1);

  bi.insert(9);

  bi.insert(0);
  bi.insert(6);



  // bi.lookup(5);

  
  // bi.insert(5);
  
  
  
  
  
  console.log(bi);
  