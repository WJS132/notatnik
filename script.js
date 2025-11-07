const addBtn = document.querySelector('.add'); 
const deleteAllBtn = document.querySelector('.delete-all'); 
const noteArea = document.querySelector('.note-area'); 
const notePanel = document.querySelector('.note-panel'); 
const category = document.querySelector('#category'); 
const textArea = document.querySelector('#text'); 
const error = document.querySelector('.error'); 
const saveBtn = document.querySelector('.save'); 
const cancelBtn = document.querySelector('.cancel');

function openPanel(){
    notePanel.style.display = "flex";
}
addBtn.addEventListener("click", openPanel);

function closePanel(){
    notePanel.style.display = "none";
    category.value = 0;
    textArea.value = "";
}
cancelBtn.addEventListener("click", closePanel);

function createNote(text, cat){
    let newNote = `<div class="note">

            <div class="note-header">
                <h3 class="note-title">Kategoria: ${cat}</h3>
                <button class="delete-note" onclick="delNote(this)">
                    <i class="fas fa-times icon usunNotatke">usuń</i>
                </button>
            </div>
            <div class="note-body">
                ${text}
            </div>

        </div>`;
    noteArea.innerHTML += newNote;
}

function addNote(){
    if(textArea.value !== "" && category.value != 0){
        let text = textArea.value;
        let cat = category.title;
        createNote(text, cat);
        closePanel();
    }
}

saveBtn.addEventListener("click", addNote);

function delNote(ele){
    ele.parentNode.parentNode.remove();
}

deleteAllBtn.addEventListener("click", () => {noteArea.innerHTML = "";});

function test(){
    for (let i = 1; i < 5; i++){
        createNote("test #" + i, "test #" + i);
    }
}