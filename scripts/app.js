"use strict";

const start = async () => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    let speedValue = Number(document.querySelector(".speed-menu").value);

    if(speedValue === 0) {
        speedValue = 1;
    }
    if(algoValue === 0) {
        alert("No Algorithm Selected");
        return;
    }

    let algorithm = null;
    if(algoValue <= 6) {
        algorithm = new sortAlgorithms(speedValue);
    }

    if(algoValue === 1) {
        await algorithm.BubbleSort();
    }
    if(algoValue === 2) {
        await algorithm.SelectionSort();
    }
    if(algoValue === 3) {
        await algorithm.InsertionSort();
    }
    if(algoValue === 4) {
        await algorithm.MergeSort();
    }
    if(algoValue === 5) {
        await algorithm.QuickSort();
    }
};

const RenderScreen = async () => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    if(algoValue <= 6) {
        await RenderList();
    }
}

const RenderList = async () => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    if(sizeValue === 0) {
        sizeValue = 0;
    }
    await clearScreen();
    
    let list = await randomList(sizeValue);
    const arrayNode = document.querySelector(".array");
    for(const element of list)
    {
        const node = document.createElement("div");
        node.className = "cell";
        node.setAttribute("value", String(element));
        node.style.height = `${4*element}px`;
        arrayNode.appendChild(node);
    }
};

const RenderArray = async (sorted) => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    if(sizeValue === 0) {
        sizeValue = 0;
    }
    await clearScreen();

    let list = await randomList(sizeValue);
    if(sorted) list.sort((a, b) => a - b);

    const arrayNode = document.querySelector('.array');
    const Wrapper = document.createElement('div'); 
    Wrapper.className = 's-array';

    for(const element of list) {
        const node = document.createElement('div');
        node.className = 's-cell';
        node.innerText = element;
        Wrapper.appendChild(node);
    }
    arrayNode.appendChild(Wrapper);
}

const randomList = async (Length) => {
    let list = new Array();
    let lowerBound = 1;
    let upperBound = 100;

    for (let counter = 0; counter < Length ; ++counter) {
        let randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1) 
            + lowerBound);
        list.push(parseInt(randomNumber));
    }
    return list;
};

const clearScreen = async () => {
    document.querySelector(".array").innerHTML = "";
};

const response = () => {
    let Navbar = document.querySelector(".navbar");
    if(Navbar.className === "navbar") {
        Navbar.className += " responsive";
    }
    else {
        Navbar.className = "navbar";
    }
};

document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload = RenderScreen;