export class MaxHeap{
    constructor(){
        this.heap = [];
    }
    insert(resume){
        this.heap().push(resume);
        this.bubbleUp(this.heap.length-1);
    }
}