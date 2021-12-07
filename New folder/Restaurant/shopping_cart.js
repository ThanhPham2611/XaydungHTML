// Add item to shopping
let shoppingCart = new Array();
let promotion = 0;
let voucher = 0;
let shipfee = 0;
let totalAll = 0;
function addItem(x) {
    let value = 1;
    let boxsp = x.parentElement.children;
    let img = boxsp[2].src;
    let foodName = boxsp[3].innerText;
    let Price = boxsp[5].innerText;
    let sp = new Array(img, foodName,value,Price);


    //Check sự trùng lặp
    let check = 0;
    for(let i=0;i<shoppingCart.length;i++){
        if(shoppingCart[i][1] == foodName){
            check = 1;
            value += shoppingCart[i][2];
            console.log(parseInt(value[i]));
            shoppingCart[i][2] = value;
            console.log(shoppingCart[i][2]);
            break;
        }
    }
    if(check == 0) {
        let value = 1;
        shoppingCart.push(sp);
    }
    countItem();

    // Lưu giỏ hàng trên web
    sessionStorage.setItem("Cart",JSON.stringify(shoppingCart));
}

function addItemMenu(x) {
    let boxsp = x.parentElement.parentElement.children;
    let img = boxsp[0].children[0].src;
    let foodName = boxsp[1].children[1].innerText;
    let Price = boxsp[1].children[3].innerText;
    let sp = new Array(img, foodName, Price);

    shoppingCart.push(sp);
    countItem();

    sessionStorage.setItem("Cart",JSON.stringify(shoppingCart));
}

function countItem() {
    document.getElementById("countsp").innerHTML = shoppingCart.length;
    sessionStorage.setItem("CountItem",JSON.stringify(shoppingCart.length));
    let countItem = sessionStorage.getItem("CountItem");
    let item = JSON.parse(countItem);
}

function addItemDisplay() {
    let displayCartEmpty = document.getElementById('cartEmpty');
    let displayCart = document.getElementById('showCart');
    //displayCart.style.display = "block";
    if(displayCartEmpty.style.display = 'block'){
        displayCartEmpty.style.display = "none";
    }
    addMyCart();
}



function showCart() {
    addMyCart();
    let displayCartEmpty = document.getElementById('cartEmpty');
    let displayCart = document.getElementById('showCart');
    if(shoppingCart == 0){
        if(displayCartEmpty.style.display == 'block'){
            displayCartEmpty.style.display = "none";
        }
        else{
            displayCartEmpty.style.display = "block";
        }
    }
    else{
        if(displayCart.style.display == 'block'){
            displayCartEmpty.style.display = "none";
            displayCart.style.display = "none";
        }
        else{
            displayCart.style.display = "block";
        }
    }
}

function addMyCart() {
    let infoCart = "";
    let total=0;
    let totalAll = 0
    for(let i=0;i<shoppingCart.length;i++){
        total += parseInt(shoppingCart[i][2])* parseInt(shoppingCart[i][3]);
        totalAll += total;
        infoCart += 
        '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td><img src="'+shoppingCart[i][0]+'" alt=""></td>'+
            '<td>'+shoppingCart[i][1]+'</td>'+
            '<td id="quantity">'+shoppingCart[i][2]+'</td>'+
            '<td>'+
                '<div>'+total+'.000 Đ</div>'+
            '</td>'+
        '</tr>';
    }
    infoCart += 
    '<tr class="total">'+
        '<th colspan="4">Tổng hóa đơn</th>'+
        '<th>'+
            '<div>'+totalAll+".000 Đ"+'</div>'+
        '</th>'+
    '</tr>';
    document.getElementById('mycart').innerHTML = infoCart;
}

function showCartPay() {
    let carts = sessionStorage.getItem("Cart");
    let shoppingCart = JSON.parse(carts);
    let infoCart = "";
    let total = 0;
    let totalAll = 0;
    let totalPay = 0
    infoCart += 
    '<section class="py-4 pb-md-6">'+
        '<div class="container">'+
            '<div class="row justify-content-center">'+
                '<div class="col-12 col-md-10">'+
                    '<div class="d-flex justify-content-between px-3">'+
                        '<h6>Giỏ hàng của bạn</h6>'+
                        '<h6 class="mb-0 d-lg-none">'+
                            '<span>'+(shoppingCart.length)+' món</span>'+
                        '</h6>'+
                    '</div>';
    for(let i=0;i<shoppingCart.length;i++){
        total = parseInt(shoppingCart[i][2]) * parseInt(shoppingCart[i][3]);
        totalAll += total 
        totalPay = totalAll + promotion + shipfee + voucher;
        infoCart +=  
                    '<ul class="list-unstyled container-fluid px-0">'+
                        '<li class="row no-gutters border-grey-lighter py-2 cart-item border-bottom">'+
                            '<div class="col-12 col-md-7 mb-4 mb-md-0 flex-fit pr-2">'+
                                '<div class="row row-product-confirm">'+
                                    '<div class="col-product-confirm-img col-lg-5">'+
                                        '<div class="">'+
                                            '<img src="'+shoppingCart[i][0]+'" alt="" class="img-fluid rounded-xl">'+
                                        '</div>'+
                                    '</div>'+

                                    '<div class="col-product-confirm-ctx col-lg-7 flex-fit">'+
                                        '<div class="d-flex flex-column">'+
                                            '<div class="product">'+
                                                '<p class="mb-2 mb-md-3">'+shoppingCart[i][1]+'</p>'+
                                            '</div>'+

                                            '<div class="small mt-2 d-none d-md-block">'+
                                                '<a href="#" class="text-armchair mr-3" data-toggle="modal" data-target="">Điều chỉnh</a>'+
                                                '<a href="#" class="blue">Xóa</a>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+

                            '<div class="col-12 col-md-5 flex-fit">'+
                                '<div class="d-flex flex-column flex-grow-1 justify-content-between">'+
                                    '<div class="d-flex justify-content-between align-items-center align-items-md-start flex-md-row-reverse">'+
                                        '<div class="input-group input-group-number-picker input-group-responsive flex-nowrap float-md-right">'+
                                            

                                            '<input type="text" id="quantity" class="form-control border-grey-lighter" value="'+shoppingCart[i][2]+'">'+

                                
                                        '</div>'+

                                        '<span class="font-weight-bold price">'+
                                            '<span>'+total+'.000 Đ</span>'+
                                        '</span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</li>'+
                    '</ul>';
                    
    }
        infoCart+= 
                    '<div class="row justify-content-end no-gutters px-3 pb-4">'+
                        '<div class="col-12 col-lg-6 offset-lg-2">'+
                            '<div class="w-100 mb-2">'+
                                '<div class="coupon">'+
                                    '<ul class="list-unstyled"></ul>'+
                                    '<form action="#">'+
                                        '<div class="card-body mt-0 pt-0 w-100 px-0 pb-0">'+
                                            '<div class="w-100 bg-contain--annklg bg-img-sm-none">'+
                                                '<div class="row w-100 mx-0">'+
                                                    '<div class="w-100">'+
                                                        '<div class="input-group input-group-coke">'+
                                                            '<input class="form-control" type="text" name="voucher" id="voucher" placeholder="Nhập mã khuyến mại" >'+
                                                            '<button type="button" onclick="apply()" class="btn input-group-append p-0" style="border: none;">'+
                                                                '<span class="input-group-text text-white">Áp Dụng</span>'+
                                                            '</button>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</form>'+
                                '</div>'+
                            '</div>'+

                            '<div class="cart_summary mb-2">'+
                                '<div class="row mb-1 cart_summary_total">'+
                                    '<div class="col-8">'+
                                        '<span class="text-secondary">Tổng</span>'+
                                    '</div>'+

                                    '<div class="col-4 text-right">'+
                                        '<span class="">'+totalAll+'.000 Đ</span>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row mb-1 cart_summary_promotion">'+
                                    '<div class="col-8">'+
                                        '<span class="text-secondary">Giảm khuyến mãi</span>'+
                                    '</div>'+

                                    '<div class="col-4 text-right">'+
                                        '<span class="">'+promotion+'.000 Đ</span>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row mb-1 cart_summary_voucher">'+
                                    '<div class="col-8">'+
                                        '<span class="text-secondary">Giảm voucher</span>'+
                                    '</div>'+

                                    '<div class="col-4 text-right">'+
                                        '<span class="">'+voucher+'.000 Đ</span>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row mb-1 cart_summary_shipping">'+
                                    '<div class="col-8">'+
                                        '<span class="text-secondary">Phí giao hàng</span>'+
                                    '</div>'+

                                    '<div class="col-4 text-right">'+
                                        '<span class="">'+shipfee+'.000 Đ</span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+

                        '<div class="d-flex justify-content-lg-end mt-1 mt-lg-0">'+
                                '<a href="./thanhtoan.html" class="btn btn-coke align-middle w-100">'+
                                    '<span class="mx-md-10">'+
                                        'Thanh Toán'+
                                        '<span class="pl-4">'+
                                            '<span>'+totalPay+'.000đ</span>'+
                                        '</span>'+
                                    '</span>'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</section>';
    document.getElementById('mycart').innerHTML = infoCart;
    sessionStorage.setItem('Tongmon',JSON.stringify(totalAll));
    sessionStorage.setItem('Tongtien',JSON.stringify(totalPay));
    
}

function countValue() {
    let incrementButton = document.getElementsByClassName('plus-btn');
}

function Minus() {
    document.querySelector('.minus-btn').setAttribute("disabled","disabled");
    let valueCount;

    document.querySelector(".minus-btn").addEventListener("click",function(){
        valueCount = document.getElementById("quantity").value;
        valueCount--;
        document.getElementById("quantity").value = valueCount--;

        if(valueCount == 2){
            document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
        }
    })
}

function Plus() {
    document.querySelector('.minus-btn').setAttribute("disabled","disabled");
    let valueCount;

    document.querySelector(".plus-btn").addEventListener("click",function(){
        valueCount = document.getElementById("quantity").value;
        valueCount++;
        document.getElementById("quantity").value = valueCount++;

        if(valueCount > 1){
            document.querySelector(".minus-btn").removeAttribute("disabled");
            document.querySelector(".minus-btn").classList.remove("disabled");
        }
    })
}

function showPayment() {
    let totalP = JSON.parse(sessionStorage.getItem('Tongmon'));
    let totalAP = JSON.parse(sessionStorage.getItem('Tongtien'));
    let shoppingCart = JSON.parse(sessionStorage.getItem("Cart"));
    let infoCart = "";
    infoCart +=
                    '<div class="container">'+
                        '<div class="row justify-content-center">'+
                            '<div class="col-12 col-md-12">'+
                                '<div class="org-cart">'+
                                    '<div class="org-cart-title nomal my-3">'+
                                        '<div class="org-cart-title-p d-flex justify-content-between align-items-center">'+
                                            '<p class="text-grey-darker font-weight-bold mb-0">Đơn hàng của bạn</p>'+
                                            '<p class="text-coke mb-0">'+
                                                '<span>'+shoppingCart.length+' món</span>'+
                                            '</p>'+
                                        '</div>'+

                                        '<div class="cart-sumary mb-2">'+
                                            '<div class="row mb-1 cart_summary-total">'+
                                                '<div class="col-8">'+
                                                    '<span class="text-secondary">Tổng</span>'+
                                                '</div>'+

                                                '<div class="col-4 text-right">'+
                                                    '<span>'+
                                                        '<span>'+totalP+'.000 Đ</span>'+
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+

                                            '<div class="row mb-1 cart_summary-promotion">'+
                                                '<div class="col-8">'+
                                                    '<span class="text-secondary">Khuyến mãi</span>'+
                                                '</div>'+

                                                '<div class="col-4 text-right">'+
                                                    '<span>'+
                                                        '<span>'+promotion+'.000Đ</span>'+
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+

                                            '<div class="row mb-1 cart_summary-voucher">'+
                                                '<div class="col-8">'+
                                                    '<span class="text-secondary">Giảm voucher</span>'+
                                                '</div>'+

                                                '<div class="col-4 text-right">'+
                                                    '<span>'+
                                                        '<span>'+voucher+'.000 Đ</span>'+
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+

                                            '<div class="row mb-1 cart_summary-ship">'+
                                                '<div class="col-8">'+
                                                    '<span class="text-secondary">Phí giao hàng</span>'+
                                                '</div>'+

                                                '<div class="col-4 text-right">'+
                                                    '<span>'+
                                                        '<span>'+shipfee+'.000 Đ</span>'+
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+

                                        '<div class="org-cart-title my-1 mb-md-4">'+
                                            '<div class="d-flex justify-content-between align-items-center font-weight-bold text-coke bigger">'+
                                                '<p class="mb-0">Tổng cộng</p>'+
                                                '<p class="mb-0">'+
                                                    '<span>'+totalAP+'.000 Đ</span>'+
                                                '</p>'+
                                            '</div>'+
                                        '</div>';
    for(let i=0;i<shoppingCart.length;i++){
        infoCart +=
                                        '<table class="table org-cart-table my-3">'+
                                            '<tbody>'+
                                                '<tr class="cart-r-item mt-1">'+
                                                    '<td class="cart-r-item-amount pb-0">'+(i+1)+'</td>'+
                                                    '<td class="cart-r-item-symbol pb-0">X</td>'+
                                                    '<td class="cart-r-item-product pb-0">'+
                                                        '<div class="d-flex justify-content-between">'+
                                                            '<p class="mb-3 pr-2">'+shoppingCart[i][1]+'</p>'+
                                                            '<div class="wrapper text-right">'+
                                                                '<span class="mb-0 d-block">'+
                                                                    '<span>'+shoppingCart[i][2]+'</span>'+
                                                                '</span>'+
                                                            '</div>'+
                                                        '</div>'+

                                                        '<div class="d-flex justify-content-between mb-2">'+
                                                            '<div class="wrapper">'+

                                                            '</div>'+

                                                            '<div class="avatar rounded-xl product-thumbnail">'+
                                                                '<div class="avatar-img ">'+
                                                                    '<img src="'+shoppingCart[i][0]+'" alt="">'+
                                                                '</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</td>'+
                                                '</tr>'+
                                            '</tbody>'+
                                        '</table>';
    }
    infoCart +=
                                           
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    document.getElementById('my_payment').innerHTML = infoCart;                                  

}

function show_Thankyou() {
    let carts = sessionStorage.getItem("Cart");
    let shoppingCart = JSON.parse(carts);
    let infoCart = "";
    let total = 0;
    let totalAll = 0;
    for(let i=0;i<shoppingCart.length;i++){
        total = parseInt(shoppingCart[i][2]) * parseInt(shoppingCart[i][3]);
        totalAll += total;
        infoCart += 
        '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td><img src="'+shoppingCart[i][0]+'" alt=""></td>'+
            '<td>'+shoppingCart[i][1]+'</td>'+
            '<td>'+shoppingCart[i][2]+'</td>'+
            '<td>'+
                '<div>'+total+'.000 Đ</div>'+
            '</td>'+
        '</tr>';
    }
    infoCart += 
    '<tr class="total">'+
        '<th colspan="4">Tổng hóa đơn</th>'+
        '<th>'+
            '<div>'+totalAll+".000 Đ"+'</div>'+
        '</th>'+
    '</tr>';
    document.getElementById('myInfo').innerHTML = infoCart;
}

function apply() {

    let vouchercode = document.getElementById('voucher').value;
    if(vouchercode == 'abc'){
        alert('Nhập mã thành công');
        promotion = -10;
        voucher = -5;
    }
    else{
        alert('Nhập mã không đúng');
    }
}

//Count Item

