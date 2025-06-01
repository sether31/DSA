class HashMap{
  constructor(){
    this.table = new Array(10);
    this.size = 0;
  }

  // generate hash code
  hash = (key, size) =>{
    let hashCode = 0;
    const primeNumber = 31;
    for(let i = 0; i < key.length; i++){
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % size;
    }
    return hashCode;
  }

  // set value
  setItem = (key, value) =>{
    this.size++;
    const loadFactor = this.size / this.table.length;

    if(loadFactor > 0.75){
      this.resize();
    }

    const idx = this.hash(key, this.table.length);
    if(this.table[idx]){
      const item = this.table[idx].find(x => x[0] === key);

      if(item){
        item[1] = value;
      } else{
        this.table[idx].push([key, value]);
      }
    } else{
      this.table[idx] = [[key, value]];
    }
  }

  // get value
  getItem = (key) =>{
    const idx = this.hash(key, this.table.length);
    if(!this.table[idx]){
      return null;
    }
    return this.table[idx].find(x => x[0] === key)[1];
  }

  // removeItem
  removeItem(key){
    const idx = this.hash(key, this.table.length);
    
    if(!this.table[idx]) return false;

    const itemIndex = this.table[idx].findIndex(x => x[0] === key);

    if(itemIndex === -1) return false;

    this.table[idx].splice(itemIndex, 1);
    this.size--; 

    if(this.table[idx].length === 0) {
      this.table[idx] = undefined;
    }

    return true;
  }

  // entries
  entries = () =>{
    const allEntries = [];
    
    this.table.forEach(keys =>{
      if(keys){
        keys.forEach(([key, value]) =>{
          allEntries.push([key, value]);
        });
      }
    });
    return allEntries;
  }

  // get the total number of stored keys
  length = () =>{
    return this.size;
  }

  // check if key exist
  has = (key) => {
    const idx = this.hash(key, this.table.length);

    if (!this.table[idx]) return false;

    return this.table[idx].some(([k]) => k === key);
  };

  // get all keys
  keys = () =>{
    let storeKeys = '';
    this.table.forEach(keys =>{
      keys.forEach(keys =>{
        storeKeys += `${keys[0]}, `;
      });
    });

    return storeKeys;
  }

  // get all values
  values = () =>{
    let storeValues = '';
    this.table.forEach(keys =>{
      keys.forEach(keys =>{
        storeValues += `${keys[1]}, `;
      });
    });

    return storeValues;
  }

  // clear hashmap
  clear = () =>{
    this.table = new Array(10);
    this.size = 0;
  }

  // resize the hashmap
  resize = () =>{
    let newTable = new Array(this.table.length * 2);

    this.table.forEach(key =>{
      if(key){
        key.forEach(([key, value]) =>{
          const idx = this.hash(key, newTable.length);
          if(newTable[idx]){
            newTable[idx].push([key, value]);
          } else{
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    return this.table = newTable;
  }
}


export default HashMap;