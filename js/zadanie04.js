// Podpunkt 1.
const sampleClassElements = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements){
    const newArr = [];

    for(let i = 0; i < elements.length; i++){
        newArr.push(elements[i].tagName);
    }

    return newArr;
}

console.log(getTagsOfElements(sampleClassElements));

// Podpunkt 2.
const sampleIdEl = document.getElementById('sample_id');

function getClassesOfElement(element){
    const newArr = [];

    for(let i = 0; i < element.classList.length; i++){
        newArr.push(element.classList[i]);
    }

    return newArr;
}

console.log(getClassesOfElement(sampleIdEl));

// Podpunkt 3.
const listElements = document.querySelectorAll('.sample_class_2 li');

function getInnerTextsOfElements(elements){
    const newArr = [];

    for(let i = 0; i < elements.length; i++){
        newArr.push(elements[i].textContent);
    }

    return newArr;
}

console.log(getInnerTextsOfElements(listElements));

// Podpunkt 4.
const links = document.querySelectorAll('a');

function getAddressesOfElements(elements){
    const newArr = [];

    for(let i = 0; i < elements.length; i++){
        newArr.push(elements[i].href);
    }

    return newArr;
}

console.log(getAddressesOfElements(links));

// Podpunkt 5.
const sampleParent = document.querySelector('.sample_class_3');
const parentChildren = sampleParent.children;

console.log(getTagsOfElements(parentChildren));