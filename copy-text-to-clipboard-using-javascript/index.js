//Selects the button
const copyBtn = document.querySelector('button')

copyBtn.addEventListener('click', ()=>{
    

    //Selects the text field which is the first child of the .filed div
    const textField = document.querySelector('.field .text')
    
    if(textField.value != ''){
        copyBtn.classList.add('show-msg')
        //Copies the value of the text inside the p tag to the clipboard
        navigator.clipboard.writeText(textField.value)
    }
})
copyBtn.addEventListener('mouseleave', ()=>{
    copyBtn.classList.remove('show-msg')
})