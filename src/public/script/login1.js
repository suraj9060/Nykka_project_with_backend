window.addEventListener('load', () => {
    var button = document.getElementById('loginbtn')
    button.addEventListener('click', login)
})

function login() {
    event.preventDefault()
    var formdet = document.getElementById('form');
    var formdata = new FormData(form);
    var number = formdata.get('Number');
    var log = {
        numb: number
    }
    var arr = JSON.parse(localStorage.getItem('usernumber')) || [];
    if (arr != null) {
        arr.push(log)
        if (log.numb == '') {
            alert('Fill details')
            return
        } else {
            localStorage.setItem('usernumber', JSON.stringify(arr))
            window.location.href = 'login2.html'
        }
     }
}
