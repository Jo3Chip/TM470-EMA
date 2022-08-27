const createNew = () => {
    const newBtn = document.querySelector("#listCreate");
    
    
    newBtn.addEventListener("click", () => {
        const newDiv = document.createElement('div');
        const tag = document.createElement('p');
        var text = document.createTextNode("New List");
        const partyContainer =document.querySelector(".tileSection");
        partyContainer.appendChild(newDiv);
        newDiv.classList.add("tile");
        tag.appendChild(text);
        newDiv.appendChild(tag);
    });
}

createNew();