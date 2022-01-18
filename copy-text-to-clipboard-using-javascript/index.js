//Selects the copy button
const copyBtn = document.querySelector('button')

//Listening to the button click
copyBtn.addEventListener('click', ()=>{
    
    //Selects the text field which is the first child of the .filed div
    const textField = document.querySelector('.field .text')
    
    //Copies only when there is some text to copy
    if(textField.value != ''){
        copyBtn.classList.add('show-msg')
        //Copies the value of the text inside the p tag to the clipboard
        navigator.clipboard.writeText(textField.value)
    }
})

//Removes the tooltip when mouse leaves the copy btn
copyBtn.addEventListener('mouseleave', ()=>{
    copyBtn.classList.remove('show-msg')
})