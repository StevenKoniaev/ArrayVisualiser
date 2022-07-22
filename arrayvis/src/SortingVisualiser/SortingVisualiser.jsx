import React from 'react';
import './SortingVisualiser.css';
import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from '../SortingAlgorthims/sortingAlgorthims';
import { heapSORT } from '../SortingAlgorthims/heap';
export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props)

        this.state = { 
            array: [], 
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() { 
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
         clearTimeout(i); 
        }

        const array = [];
        for (let i  = 0; i < 100; i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
        const arrayBars = document.getElementsByClassName('array-bar');
       for (let i = 0; i < arrayBars.length; i++){
            arrayBars[i].style.backgroundColor = 'pink';
        }
    }

    mergeSortAlgo(){
        const animations = mergeSort(this.state.array);
        
       this.displayAnimations(animations, 5)
    }

    quickSortAlgo(){
        const animations = quickSort(this.state.array);

       

       this.displayAnimations(animations, 5);

    }

    heapSortAlgo(){
        const animations = heapSORT(this.state.array);
        

       this.displayAnimations(animations, 5);
    }

    bubbleSortAlgo(){
        const animations = bubbleSort(this.state.array);
        

        this.displayAnimations(animations, 1);
    }

    insertionSortAlgo(){
        
        const animations = insertionSort(this.state.array);

       this.displayAnimations(animations, 3);
    }

    selectionSortAlgo(){
        const animations = selectionSort(this.state.array);

       
        this.displayAnimations(animations, 8)
    }


    testSortingAlgorthim(){

        for (let i = 0; i < 1000; i++){
            let arr = [];
            let arr2= [];
            for (let i = 0; i < 1000 ; i++){
                arr.push(randomIntFromInterval(-1000, 1000));
            }

            const javaScriptSortedArray = arr
            .slice()
            .sort((a,b) => a - b);

           // console.log(arr)
             arr2 = heapSORT(arr)
           //  console.log(arr2)
            console.log(areArraysEqual(javaScriptSortedArray, arr2));
        }
    }

    displayAnimations(animations, speed){
        for(let i =  0; i< animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !==2;

            if (isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                const color = i % 3 === 0 ? 'red' : 'turquoise'
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },  i*speed);
            } else {
                setTimeout(() =>{
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle =  arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                },  i*speed)
            }
        }
    }

    render(){
        const {array} = this.state
    

        return (
            <div className='container'>
            
            <div className='array-container'>
            {array.map((value, index) => (
                <div className='array-bar' key={index} style={{height: `${value}px`}}>
            
                </div>
            ))}
            <div className='array-shadow'></div>
            </div>
            
            <br></br>
            <br></br>
            <div className='buttons'>
            <button onClick={() => this.resetArray()}>Genereate New Array</button>
            <button onClick={() => this.mergeSortAlgo()}>Merge Sort</button>
            <button onClick={() => this.quickSortAlgo()}>Quick Sort</button>
            <button onClick={() => this.heapSortAlgo()}>Heap Sort</button>
            <button onClick={() => this.bubbleSortAlgo()}>Bubble Sort</button>
            <button onClick={() => this.insertionSortAlgo()}>Insertion Sort</button>
            <button onClick={() => this.selectionSortAlgo()}>Selection Sort</button>
            </div>
            <br></br>
            
            <p className ='disclaimerText'>(Animation speeds do not represent actual sorting speed)</p>
            
            
            </div>
        );
            }
        
    }

    function randomIntFromInterval(min, max){
        return Math.floor(Math.random() * (max-min + 1) + min);
    }

    function areArraysEqual(arr1, arr2){
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }


