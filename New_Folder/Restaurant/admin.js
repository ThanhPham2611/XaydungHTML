let listFood = new Array();
let foodName = document.getElementById('foodName').value;
let img = document.getElementById('linkImg').value;
let price = document.getElementById('price').value;

function addFood() {
    let sp = new Array(foodName, img, price);
    listFood.push(sp);
    showFood()
    //Lưu dữ liệu
    //sessionStorage.setItem('dsfood',JSON.stringify(listFood));
}

function showFood() {
    //let showF = JSON.parse(sessionStorage.getItem("dsfood"));
    let infoCart = '';
    for(let i=0;i<showF.length;i++){
        infoCart += 
        '<tr>' +
            '<td>'+showF[i][0]+'</td>'+
            '<td><img src="'+showF[i][1]+'" alt=""></td>'+
            '<td>'+showF[i][2]+' Đ</td>'+
        '</tr>';
    }
    

    document.getElementById('showFood').innerHTML = infoCart;
}