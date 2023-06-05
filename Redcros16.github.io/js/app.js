const logo = document.querySelector('#logo-font-span');

logo.addEventListener('click', (e) => {
    alert('hey')

    copy('123123123123');
})

console.log(123)

let copy = (textId) =>  {
    document.getElementById(textId).select();
    document.execCommand('copy');
}