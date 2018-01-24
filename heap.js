

class Heap {
  constructor() {
    this.items = [];
  }
  this.getLeftChildIndex(parentIndex) {return 2* parentIndex + 1; }
  this.getRightChildIndex(parentIndex){ return 2 * parentIndex + 2; }
  this.getParentIndex(childIndex) {return (childIndex - 1)/2; }
    
  this.hasLeftChild(index) {return getLeftChildIndex(index) < last; }
  this.hasRightChild(index) {return getRightChildIndex(index) < last; }
  this.hasParent(index) { return getParentIndex(index) >= 0; }
    
  this.leftChild(index) {return items[getLeftChildIndex(index)]; }
  this.rightChild(index) {return items[getRightChildIndex(index)];}
  this.parent(index) {return items[getParentIndex(index)] ; }
    
    // looks at root
    this.peek() {
        if (last == 0) throw "nothing in heap";
        return items[0];
    }
    
    // is heap empty
    this.isEmpty() {
        return last == 0;
    }
    
    this.remove() {
        if (last == 0) throw "nothing in heap";
        let item = items[0];
        items[0] = items[last - 1];
        last--;
        heapifyDown();
        return item;
    }
    
    this.add(item) {
        items[items.length] = item;
        heapifyUp();
    }
    
    this.heapifyUp() {
        let index = items.length - 1;
        while (hasParent(index) && parent(index) > items[index]) {
            [getParentIndex(index), index] = [index, getParentIndex(index)]; // swap
            index = getParentIndex(index);
        }
    }
    
    this.heapifyDown() {
        int index = 0; 
        while(hasLeftChild(index)) {
            int smallerChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                smallerChildIndex = getRightChildIndex(index);
            }
            
            if (items[index] < items[smallerChildIndex]) {
                break;
            } else {
                swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
    
