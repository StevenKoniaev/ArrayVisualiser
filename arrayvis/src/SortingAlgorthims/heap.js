class MaxHeap{
    constructor(){
        this.heap = [];
    }

    parentIndex(index){
        return Math.floor((index-1)/2);
    }

    leftChildIndex(index){
        return (2*index+1);
    }

    rightChildIndex(index){
        return (2*index+2);
    }

    swap(a,b){
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    insert(i, animations, arr) {
        let item = arr[i];

        this.heap.push(item);
        //
        animations.push([this.heap.length-1, this.heap.length-1]);
        animations.push([this.heap.length-1, this.heap.length-1]);
        animations.push([this.heap.length-1, item]);
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([i, arr[this.heap.length-1]]);
        //
        var index = this.heap.length - 1;
        var parent = this.parentIndex(index);
        
        while(this.heap[parent] < this.heap[index]) {
            if (parent < 0){
            break;
            }
            this.swap(parent, index);
            //
            animations.push([parent, parent]);
            animations.push([parent, parent]);
            animations.push([parent, this.heap[parent]])
            animations.push([index, index]);
            animations.push([index, index]);
            animations.push([index, this.heap[index]])
            //
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
        }
    
    }

    downHeap(leng, animations){
        let i = 0;
        var leftChild = this.leftChildIndex(0);
        var rightChild = this.rightChildIndex(0);
        
        while (leftChild <= leng || rightChild <= leng){

            if (leftChild <= leng && rightChild <= leng && this.heap[leftChild] > this.heap[i] && this.heap[rightChild] > this.heap[i]){
                if (this.heap[leftChild] > this.heap[rightChild]){
                    this.swap(leftChild, i);
                    //
                    animations.push([leftChild, leftChild]);
                    animations.push([leftChild, leftChild]);
                    animations.push([leftChild, this.heap[leftChild]]);
                    animations.push([i,i]);
                    animations.push([i,i]);
                    animations.push([i, this.heap[i]]);
                    //
                    i = leftChild;
                } else if (this.heap[rightChild] >= this.heap[leftChild]){
                    this.swap(rightChild, i);
                    //
                    animations.push([rightChild, rightChild]);
                    animations.push([rightChild, rightChild]);
                    animations.push([rightChild, this.heap[rightChild]]);
                    animations.push([i,i]);
                    animations.push([i,i]);
                    animations.push([i, this.heap[i]]);
                    //
                    i = rightChild;
                }
            } else if (leftChild <= leng && this.heap[leftChild] > this.heap[i]){
                this.swap(leftChild, i);
                //
                animations.push([leftChild, leftChild]);
                animations.push([leftChild, leftChild]);
                animations.push([leftChild, this.heap[leftChild]]);
                animations.push([i,i]);
                animations.push([i,i]);
                animations.push([i, this.heap[i]]);
                //
                i = leftChild;
            } else if (rightChild <= leng && this.heap[rightChild] > this.heap[i]){
                this.swap(rightChild, i);
                i = rightChild;
                 //
                 animations.push([rightChild, rightChild]);
                animations.push([rightChild, rightChild]);
                 animations.push([rightChild, this.heap[rightChild]]);
                 animations.push([i,i]);
                 animations.push([i,i]);
                 animations.push([i, this.heap[i]]);
                 //
            } else {return;}
            leftChild = this.leftChildIndex(i);
            rightChild = this.rightChildIndex(i);

        }
    }
}

export function heapSORT(arr){
    const animations = []
    if (arr.length <= 1) return arr;

    var heap1 = new MaxHeap();
    //Build heap
    for (let i = 0; i < arr.length; i++){
        heap1.insert(i, animations, arr);
    }


    for(let i=0; i < heap1.heap.length-1; i++){
        heap1.swap(0, arr.length-1-i)
        //
        animations.push([0,0]);
        animations.push([0,0]);
        animations.push([0, heap1.heap[0]])
        animations.push([arr.length-1-i, arr.length-1-i]);
        animations.push([arr.length-1-i, arr.length-1-i]);
        animations.push([arr.length-1-i, heap1.heap[arr.length-1-i]])
        //
        heap1.downHeap(arr.length-1-i-1, animations);
    }
    //console.log(animations.length)
    return animations;
}