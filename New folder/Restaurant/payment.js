let paymentCustomer = new Array();
let local_time = document.getElementById('time').value;
console.log(local_time);
document.getElementById('local-time').style.display = "none";
function infoOrder() {
    let name = document.getElementById('fullName').value;
    let phone = document.getElementById('Phone').value;
    let Express = document.getElementById('option3');
    let ATM = document.getElementById('rd-method-1');
    let Credit = document.getElementById('rd-method-2');
    let Momo = document.getElementById('rd-method-3');
    let ZaloPay = document.getElementById('rd-method-4');
    let Moca = document.getElementById('rd-method-5');
    let ShopeePay = document.getElementById('rd-method-6');
    let Cash = document.getElementById('rd-method-7');
    
    if(Express.checked){
        delivery = "Giao ngay";
    }
    else{
        delivery = "Hẹn giờ";
    }

    let pay = "";
    if(ATM.checked) {
        pay = ATM.value;
    }
    else if(Credit.checked) {
        pay = Credit.value;
    }
    else if(Momo.checked) {
        pay = Momo.value;
    }
    else if(ZaloPay.checked) {
        pay = ZaloPay.value;
    }
    else if(Moca.checked) {
        pay = Moca.value;
    }
    else if(ShopeePay.checked) {
        pay = ShopeePay.value
    }
    else{
        pay = Cash.value;
    }

    //Lưu dữ liệu trên web
    sessionStorage.setItem('name',JSON.stringify(name));
    sessionStorage.setItem('phone',JSON.stringify(phone));
    sessionStorage.setItem('delivery',JSON.stringify(delivery));
    sessionStorage.setItem('pay',JSON.stringify(pay));
}

function infoCustomer() {
    let name = JSON.parse(sessionStorage.getItem("name"));
    let phone = JSON.parse(sessionStorage.getItem("phone"));
    let delivery = JSON.parse(sessionStorage.getItem("delivery"));
    let pay = JSON.parse(sessionStorage.getItem("pay"));
    let info = "";
    let order = "";
    info += 
    '<tr>'+
        '<td>'+name+'</td>'+
        '<td>'+phone+'</td>'+
    '</tr>';

    document.getElementById('infoCus').innerHTML = info;

    order += 
    '<tr>'+
        '<td>'+delivery+'</td>'+
        '<td>'+pay+'</td>'+
    '</tr>';

    document.getElementById('order').innerHTML = order;
}

function checkPayment() {
    document.querySelector('.butpay').setAttribute("disabled","disabled");
    let name = document.getElementById('fullName').value;
    let phone = document.getElementById('Phone').value;
    if(name == '' || phone == '') {
        document.querySelector('.butpay').setAttribute("disabled","disabled");
    }
    else if(isNaN(phone)){
        document.querySelector('.butpay').setAttribute("disabled","disabled");
    }
    else{
        document.querySelector(".butpay").removeAttribute("disabled");
        document.querySelector(".butpay").classList.remove("disabled");
    }
}

function checkErrorPhone() {
    let phone = document.getElementById('Phone').value;
    console.log(isNaN(phone));
    if(phone == '' || phone == ' ' || phone == undefined) {
        document.getElementById('error-p').style.display = "block";
        document.getElementById('error-phone').style.display = "none";
        document.getElementById('error-p').innerHTML = 'Điền số điện thoại của bạn';
    }
    else if (isNaN(phone) == true){
        document.getElementById('error-p').style.display = "none";
        document.getElementById('error-phone').style.display = "block";
        document.getElementById('error-phone').innerHTML = 'Bạn cần điền số';

    }
    else{
        document.getElementById('error-p').style.display = "none";
        document.getElementById('error-phone').style.display = "none";
    }
}

function checkErrorName() {
    let name = document.getElementById('fullName').value;
    if(name == '' || name == ' ' || name == undefined){
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = 'Điền tên của bạn';
    }
    else{
        document.getElementById('error').style.display = "none";
    }
}

function checkDelivery() {
    let timer = document.getElementById('option4');
    let Express = document.getElementById('option3');
    if(timer.checked){
        document.getElementById('local-time').style.display = "block"
    }
    else if(Express.checked){
        document.getElementById('local-time').style.display = "none";
    }
    else{
        document.getElementById('local-time').style.display = "none";
    }
}

