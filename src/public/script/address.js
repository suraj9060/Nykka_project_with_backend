var detail = JSON.parse(localStorage.getItem('userdetail'))
var l = detail.length-1;

var set = document.getElementById('useremail')
set.innerText = detail[l].eml;


window.addEventListener('load', () => {
    var button = document.getElementById('btnconfirm')
    button.addEventListener('click', confirmpayment)
})

function confirmpayment(event) {
    event.preventDefault()
    var formdet = document.getElementById('form');
    var formdata = new FormData(form);
    var username = formdata.get('name');
    var number = formdata.get('number');
    var pincode = formdata.get('pincode');
    var addresss = document.querySelector('.textarea').value
    

    var paydet = {
        uname: username,
        numb: number,
        pinc:pincode,
        add: addresss
    }
    var arr = JSON.parse(localStorage.getItem('addressdetail')) || [];

    if (arr != null) {
        arr.push(paydet)
        if (paydet.numb == '' || paydet.uname == '' || paydet.pinc == '') {
            alert('Fill details')
            return
        } else {
            localStorage.setItem('addressdetail', JSON.stringify(arr))
            window.location.href = 'payment.html'
        }
     }
}