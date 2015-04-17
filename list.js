
// An object to hold the item we will be
// storing in our list
var ListItem = function(data, tail) {
  this.tail = tail
  this.data = data
}

// List implementation
var List = function() {
  this.item = null

  // Add a data item to the front of the list
  this.add = function(elem) {
    this.item = new ListItem(elem, this.item)
  }

  // Returns true if the list is empty
  this.empty = function() {
    return this.item === null
  }

  // Returns the data at the head of the list. If
  // the list is empty, return null. This leaves
  // the list unmodified
  this.head = function() {
   // ......
   if (this.empty()){
    return null
  }
  else{
    return this.item.data
  }
}

  // Remove item off the head of the list and return
  // its value. The new head of the list must be the
  // next element in the list if it exists. If the
  // list is empty, we return null
  this.pop = function() {
    if(this.item === null){
      return null
    }
    else{
      var list = this.item.data
      this.item = this.item.tail
      return list
    }
  }

  // Return the number of elements in the list.
  this.length = function() {
    var count = 0    // ......
    var temp = this.item

    while(temp !=null){
      count ++
      temp = temp.tail
    }
    return count
  }

  // Return the last data item in the list if it exists. If
  // not, return null
  this.last = function() {
   if(this.item!=null){
    return this.item.tail.tail.data
  }
  else{ 
    return null
  }

   // In place sort of the list from smallest to largest
  this.sort = function() {
      var swapped;
      var temp = '';
      do {
          swapped = false;
          for(var i = 0; i < List.length -1; i ++){
            if(List[i]>List[i+1]){
              var temp = List[i]
              List[i] = List[i+1];
              List[i+1] = temp;
              swapped = true;
            }
          }
      }while (swapped);
    //........
  }
}this.sort(List);
console.log(List);
}
}


