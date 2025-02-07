const total_Char = document.querySelector("#total-char");
const remaining_Char = document.querySelector("#remaining-char");
const textArea = document.querySelector("#textarea");

textArea.addEventListener("keyup",() => {
    updateCounter()
    
})
function updateCounter(){
    total_Char.innerText = textArea.value.length
    remaining_Char.innerText = textArea.getAttribute("maxLength") - textArea.value.length
}
