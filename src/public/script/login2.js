var number = JSON.parse(localStorage.getItem('usernumber'))
let l = number.length-1;
var n = number[l].numb;
var show = document.getElementById('numr')
show.innerText = n;

window.addEventListener('load', () => {
    var button = document.getElementById('save')
    button.addEventListener('click', login)
})

function login(){
    event.preventDefault() 
    var formdata = new FormData(form)
    var nnme = formdata.get('name')
    var email = formdata.get('email')

    var login = {
        name:nnme,
        eml:email
    }
    var arr = JSON.parse(localStorage.getItem('userdetail')) || [];

    if(arr != null){
        arr.push(login)
        localStorage.setItem('userdetail',JSON.stringify(arr))
        if(nnme === '' && email === ''){
           alert('Fill all details')
        }
        else if(nnme === '' || email === ''){
            alert('Fill required data')
        }else{
            window.location.href = 'index.html'
        }
    }
}