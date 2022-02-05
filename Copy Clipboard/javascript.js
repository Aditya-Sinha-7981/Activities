const textArea = document.querySelector('#copyArea')
const copyButton = document.querySelector('#copyButton')
const copied = document.querySelector('.copied')


copyButton.addEventListener('click', () => {
    textArea.select()
    copied.classList.remove('hidden')


    if(textArea.value === ''){
        console.log('Input something')
        copied.innerHTML = 'Please input something'
    }else{
        copied.innerHTML = 'Text copied'
        navigator.clipboard.writeText(textArea.value)
    }

    setTimeout(() => {
        copied.classList += ' hidden'
    }, 2000)
})

