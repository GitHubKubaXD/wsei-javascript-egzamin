window.onload = function(){

    const list = document.getElementById('shopping-list');
    const button1 = document.getElementById('button-1');
    const button2 = document.getElementById('button-2');
    const button3 = document.getElementById('button-3');

    function firstButtonClick(){
        const newListEl = document.createElement('li');
        newListEl.textContent = 'chleb';

        list.appendChild(newListEl);
    }

    function secondButtonClick(){
        if(list.children.length > 0){
            list.removeChild(list.children[list.children.length - 1]);
        }
    }

    function thirdButtonClick(){
        if(list.children.length > 1){
            const newListEl = list.children[1].cloneNode(true);
    
            list.appendChild(newListEl);
        }
    }

    button1.addEventListener('click', firstButtonClick);
    button2.addEventListener('click', secondButtonClick);
    button3.addEventListener('click', thirdButtonClick);

}