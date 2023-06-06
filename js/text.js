let timePerLetter = 300,
    newLineCharacter = '|',
    text = document.createTextNode('');


document.getElementById('test').appendChild(text);

$()

function printOut(str) {
    let i = 0;
    (function main() {
        let char = str[i++];
        text.nodeValue += char === newLineCharacter ? '\n' : char;
        if(i < str.length)
            setTimeout(main, timePerLetter);
    })();
}


