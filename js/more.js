const caret =document.getElementById('caret');
caret.addEventListener('click',()=>{
    caret.lastElementChild.classList.toggle('fa-angle-up')
})
// Get references to the panel and document
const panel = document.getElementById("test1");
const documentBody = document.body;

