export function mergeSort(array){
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();

    mergeSortHelper(array, 0, array.length-1, auxArray, animations);
    return animations;
}

function mergeSortHelper(mainArr, startIndex, endIndex, auxArray, animations){
    if (startIndex === endIndex) {
        return;
    }
    const middleIndex = Math.floor((startIndex+endIndex)/2);
    mergeSortHelper(auxArray, startIndex, middleIndex, mainArr, animations);
    mergeSortHelper(auxArray, middleIndex+1, endIndex, mainArr, animations);
    doMerge(mainArr, startIndex, middleIndex, endIndex, auxArray, animations);
}

function doMerge(mainArr, startIndex, middleIndex, endIndex, auxArray, animations){
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1; 

    while (i <= middleIndex && j <= endIndex){
        animations.push([i,j]);
        animations.push([i,j]);
        
        if (auxArray[i] <= auxArray[j]){
            animations.push([k, auxArray[i]]);
            mainArr[k++] = auxArray[i++];
        } else {
            animations.push([k, auxArray[j]]);
            mainArr[k++] = auxArray[j++];
        }
    }

    while(i <= middleIndex){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k, auxArray[i]]);
        mainArr[k++] = auxArray[i++];
    }

    while (j <= endIndex) {
        animations.push([j,j]);
        animations.push([j,j])
        animations.push([k,auxArray[j]]);
        mainArr[k++] = auxArray[j++];
    }
}

export function quickSort(array){
    const animations = []
    if (array.length <= 1) return array;

    quickSortHelper(array, 0, array.length-1, animations)

    return animations;
}

function quickSortHelper(array, lowindex, highindex, animations){
    if (lowindex < highindex){
        const wall = partition(array, lowindex, highindex, animations)
        quickSortHelper(array, lowindex, wall - 1, animations)
        quickSortHelper(array, wall + 1, highindex, animations)
    }
    
}

function partition(array, lowindex, highindex, animations){
    let pivot = array[highindex];
    let wall = lowindex - 1;
    for (let i = lowindex; i <= highindex; i++){
        if (array[i] <= pivot){
            wall++;
            if(wall !== i){
                let temp = array[wall];
                array[wall] = array[i];
                array[i] = temp; 
                animations.push([wall, wall]);
                animations.push([wall, wall]);
                animations.push([wall, array[wall]]);
                animations.push([i,i]);
                animations.push([i,i]);
                animations.push([i, temp]);
            }
        }
    }
    return wall;
}

export function bubbleSort(array){
    const animations = []
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations)
    return animations;
}

function bubbleSortHelper(array, animations){
    let swapped = false;
    for (let i = 0; i < array.length -1; i++){
        swapped = false;
        for (let j = 0; j < array.length-1 - i; j++){
            if (array[j] > array[j+1]){
               
             
                //swap
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                //
                //animation
                
                animations.push([j,j]);
                animations.push([j,j]);

                animations.push([j, array[j]]);
                //
                animations.push([j+1, j+1]);
                animations.push([j+1, j+1]);
                animations.push([j+1, array[j+1]]);
                //
                
                swapped = true;
            }
        }
        if (!swapped){
            break;
        }
    }
}



export function insertionSort(array){
    const animations = []
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations)
    return animations;
}

function insertionSortHelper(array, animations){
    for (let i = 1; i < array.length; i++){
        let e = array[i];
        let k = i;
        while (k > 0 && e < array[k-1]){
            array[k] = array[k-1]
            animations.push([k,k]);
            animations.push([k,k]);
            animations.push([k, array[k]])
            animations.push([k-1,k-1]);
            animations.push([k-1,k-1]);
            animations.push([k-1, array[k-1]])
            k=k-1;
        }
        array[k] = e;
    }
}


export function selectionSort(array){
    const animations = []
    if (array.length <= 1) return array;
    selectionSortHelper(array, animations)
    return animations;
}

function selectionSortHelper(array, animations){

    for (let i = 0; i < array.length - 1; i++){
        let index =  i;
        let minValue = array[i];
        
        for (let k = i+1; k < array.length; k++){
            if (array[k] < minValue){
                index = k;
                minValue = array[k]
            }
        }
        if (index !== i){
            //Swap
            let temp = array[i];
            array[i] = array[index];
            array[index] =  temp;
            //
            animations.push([i,i]);
            animations.push([i,i]);
            animations.push([i, array[i]]);
            animations.push([index, index]);
            animations.push([index, index]);
            animations.push([index, array[index]]);
        }
    }
}


