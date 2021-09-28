var username = JSON.parse(localStorage.getItem('userdetail'))
let l = username.length-1;
let n = (username[l].name);

var acname = document.getElementById('username')
acname.innerText = n;

window.addEventListener('load', () => {
    var button = document.getElementById('logoutclick')
    button.addEventListener('click', logsection)
})

function logsection(){
    var status = 'Account'
    if(status == 'Account'){
        acname.innerText = status;
    }else{
        acname.innerText = n;
    }
}