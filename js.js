var body = document.querySelector('#info');
var form = document.querySelector('#add');
var table = document.querySelector('#body-item');

if(localStorage.getItem('table'))
    table.innerHTML = localStorage.getItem('table');
form.style.display = 'none'

var addbtn = document.querySelector(".btn-add");
addbtn.addEventListener('click',function(){
    body.style.display = 'none';
    form.style.display = 'block';
    var forms = document.querySelectorAll('.form-control');
    for(let f of forms){
        let i = f.querySelector('input[type = "text"]');
        if(i) 
            i.value = "";
    }
});
var createbtn = document.querySelector(".btn-save");
createbtn.addEventListener('click',function(){
    form.style.display = 'none';
    body.style.display = 'block';
    let manufacturer = document.querySelector('input[name="manufacturer"]').value;
    let model = document.querySelector('input[name="model"]').value;
    let dvigatel = document.querySelector('select[name="dvigatel"]').value;
    let objom = document.querySelector('input[name="objom"]').value;
    let hp = document.querySelector('input[name="hp"]').value;
    let transmissia = document.querySelector('select[name="transmissia"]').value;
    let privod = document.querySelector('select[name="privod"]').value;
    
    table.innerHTML += `<tr>
                            <td>${manufacturer}</td>
                            <td>${model}</td>
                            <td>${dvigatel}</td>
                            <td>${objom}</td>
                            <td>${hp}</td>
                            <td>${transmissia}</td>
                            <td>${privod}</td>
                        </tr>`;
    localStorage.setItem('table',table.innerHTML);
});

var input = document.querySelector("input[type = 'text']");

function search(key = ''){
    let perm = localStorage.getItem('table').split('<tr>').join('').split('</tr>');
    if (key === ''){
        alert('Ничего не найдено.');
        return;
    }
    table.innerHTML = '';
    for (let sperm of perm){
        if (sperm.indexOf(key) !== -1){
            table.innerHTML += '<tr>'+sperm+'</tr>';
        }
    }
}

var searchBtn = document.querySelector(".search");
searchBtn.addEventListener('click',function(){
    search(input.value);
});
