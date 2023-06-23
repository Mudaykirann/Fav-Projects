const addbtn = document.querySelector('#addbtn')
const main = document.querySelector('#main')

addbtn.addEventListener('click',addNote)
function addNote(){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
    <textarea></textarea>
    `;


    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");


    save.addEventListener("cilck",savenotes);
    textarea.addEventListener('input',savenotes);
    trash.addEventListener('click', ()=>{
        note.remove();
        savenotes();
    })

    main.appendChild(note);
}

function savenotes(){
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length === 0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}

function loadNotes(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !== null){
        lsNotes.forEach(notetext => {
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length-1];
            lastNote.value = notetext;
        });
    }else{
        addNote();
    }
}
loadNotes();


