
let now = new Date();
let firstWorkDate = new Date(2015, 8,1);
let diff = new Date(now.getTime() - firstWorkDate.getTime());
let year = diff.getUTCFullYear() - 1970;
let month = diff.getMonth();
let day = diff.getDate() - 1;

let itStartDate = new Date(2020, 11,1);
let diff2 = new Date(now.getTime() - itStartDate.getTime());
let year2 = diff2.getUTCFullYear() - 1970;
let month2 = diff2.getMonth();
let day2 = diff2.getDate() - 1;

let dateExp = document.querySelector('#experience-date');
dateExp.innerHTML = '(' + year + ' years  ' + month + ' months ' + day + ' days' + ' common experience <br>and ' + year2 + ' years  ' + month2 + ' months ' + day2 + ' days' + ' in IT experience)';
dateExp.classList.add('position-date');


function generatePDF() {

    // Choose the element id which you want to export.
    const element = document.getElementById('divToExport');
    // element.style.width = '1920px';
    // element.style.height = '1200px';
    const opt = {
        // margin:       0.1,
        filename: 'resume.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait', precision: '12'},
        pagebreak: {mode: ['legacy']}

    };

    html2pdf().set(opt).from(element).save();
}


document.querySelector('#generate-pdf').addEventListener('click', function () {
    generatePDF()
})
