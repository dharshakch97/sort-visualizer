"use strict";

class sortAlgorithms {
    constructor(time) {
        this.list = document.querySelectorAll(".cell");
        this.size = this.list.length;
        this.time = time;
        this.help = new Helper(this.time, this.list);
    }

    // BUBBLE SORT
    BubbleSort = async () => {
        for(let outPointer = 0 ; outPointer < this.size - 1 ; ++outPointer) {
            for(let inPointer = 0 ; inPointer < this.size - outPointer - 1 ; ++inPointer) {
                await this.help.mark(inPointer);
                await this.help.mark(inPointer+1);
                if(await this.help.compare(inPointer, inPointer+1)) {
                    await this.help.swap(inPointer, inPointer+1);
                }
                await this.help.unmark(inPointer);
                await this.help.unmark(inPointer+1);
            }
            this.list[this.size - outPointer - 1].setAttribute("class", "cell done");
        }
        this.list[0].setAttribute("class", "cell done");
    }

    // INSERTION SORT
    InsertionSort = async () => {
        for(let outPointer = 0 ; outPointer < this.size - 1 ; ++outPointer) {
            let inPointer = outPointer;
            while(inPointer >= 0 && await this.help.compare(inPointer, inPointer+1)) {
                await this.help.mark(inPointer);
                await this.help.mark(inPointer+1);
                await this.help.pause();
                await this.help.swap(inPointer, inPointer+1);
                await this.help.unmark(inPointer);
                await this.help.unmark(inPointer+1);
                inPointer -= 1;
            }
        }
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    }

    // SELECTION SORT
    SelectionSort = async () => {
        for(let outPointer = 0 ; outPointer < this.size ; ++outPointer) {
            let minIndex = outPointer;
            for(let inPointer = outPointer ; inPointer < this.size ; ++inPointer) {
                await this.help.markSpl(minIndex);
                await this.help.mark(inPointer);
                if(await this.help.compare(minIndex, inPointer)) {
                    await this.help.unmark(minIndex);
                    minIndex = inPointer;
                }
                await this.help.unmark(inPointer);
                await this.help.markSpl(minIndex);
            }
            await this.help.mark(minIndex);
            await this.help.mark(outPointer);
            await this.help.pause();
            await this.help.swap(minIndex, outPointer);
            await this.help.unmark(minIndex);
            this.list[outPointer].setAttribute("class", "cell done");
        }
    }

    // MERGE SORT
    MergeSort = async () => {
        await this.MergeDivider(0, this.size - 1);
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    }

    MergeDivider = async (start, end) => {
        if(start < end) {
            let mid = start + Math.floor((end - start)/2);
            await this.MergeDivider(start, mid);
            await this.MergeDivider(mid+1, end);
            await this.Merge(start, mid, end);
        }
    }

    Merge = async (start, mid, end) => {
        let newList = new Array();
        let frontCounter = start;
        let midCounter = mid + 1;
        
        while(frontCounter <= mid && midCounter <= end) {
            let Fval = Number(this.list[frontCounter].getAttribute("value"));
            let Sval = Number(this.list[midCounter].getAttribute("value"));
            if(Fval >= Sval) {
                newList.push(Sval);
                ++midCounter;
            }
            else {
                newList.push(Fval);
                ++frontCounter;
            }
        }
        while(frontCounter <= mid) {
            newList.push(Number(this.list[frontCounter].getAttribute("value")));
            ++frontCounter;
        }
        while(midCounter <= end) {
            newList.push(Number(this.list[midCounter].getAttribute("value")));
            ++midCounter;
        }

        for(let counter = start ; counter <= end ; ++counter) {
            this.list[counter].setAttribute("class", "cell current");
        }
        for(let counter = start, point = 0 ; counter <= end && point < newList.length; 
            ++counter, ++point) {
                await this.help.pause();
                this.list[counter].setAttribute("value", newList[point]);
                this.list[counter].style.height = `${3.5*newList[point]}px`;
        }
        for(let counter = start ; counter <= end ; ++counter) {
            this.list[counter].setAttribute("class", "cell");
        }
    }

    // QUICK SORT
    QuickSort = async () => {
        await this.QuickDivider(0, this.size-1);
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    }

    QuickDivider = async (start, end) => {
        if(start < end) {
            let pivot = await this.Partition(start, end);
            await this.QuickDivider(start, pivot-1);
            await this.QuickDivider(pivot+1, end);
        }
    }

    Partition = async (start, end) => {
        let pivot = this.list[end].getAttribute("value");
        let prevIndex = start - 1;

        await this.help.markSpl(end);
        for(let counter = start ; counter < end ; ++counter) {
            let currValue = Number(this.list[counter].getAttribute("value"));
            await this.help.mark(counter);
            if(currValue < pivot) {
                prevIndex += 1;
                await this.help.mark(prevIndex);
                await this.help.swap(counter, prevIndex);
                await this.help.unmark(prevIndex);
            }
            await this.help.unmark(counter);
        }
        await this.help.swap(prevIndex+1, end);
        await this.help.unmark(end);
        return prevIndex + 1;
    }
};