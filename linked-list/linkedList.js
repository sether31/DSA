class LinkedListNode{
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  }


  // add first
  prepend(value){
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  // add last
  append(value){
    const newNode = new LinkedListNode(value, null);

    if(!this.head){
      this.head = newNode;
    } else{
      let current = this.head;
      while(current.next !== null){
        current = current.next;
      }

      current.next = newNode;
    }
    this.length++;
  }

  // remove last value 
  pop(){
    if(!this.head) return null;

    if(this.head.next === null){
      const container = this.head.value;
      this.head = null;
      this.length--;

      return container;
    } 
    
    let current = this.head;
    while(current.next.next !== null){
      if(current.next.next){
        current = current.next;
      }
    }
    const container = current.next.value
    current.next = null;
    this.length--;
    return container;
  }

  // return node at index
  at(index){
    if(index < 0 || index >= this.length) return null;

    let current = this.head;
    for(let i = 0; i < index; i++){
      current = current.next;
    }
    return current;
  }

  // get first value
  heads(){
    return this.at(0);
  }

  // get last value
  tail(){
    return this.at(this.length - 1);
  }

  // find match value
  find(value){
    let current = this.head;
    for(let i = 0; i < this.length; i++){
      if(current.value === value) return i;
      current = current.next;
    }
    return null;
  }

  // check if value exist
  contains(value){
    let current = this.head;
    for(let i = 0; i < this.length; i++){
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // size
  size(){
    return this.length;
  }

  // print value in '() ->' format
  toString(){
    let current = this.head;
    let output = '';

    while(current){
      output += `(${current.value}) -> `;
      current = current.next;
    }

    return output + null;
  }
}


export default LinkedList;