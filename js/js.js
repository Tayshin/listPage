window.onload = function(){
    var active = document.getElementsByClassName('active')[0];
    var btn1 = document.getElementsByClassName('header-employer')[0];
    var btn2 = document.getElementsByClassName('header-carer')[0];
    btn2.addEventListener('click',function(){
        btn1.style.color = '#ffffff';
        btn2.style.color = '#5fc0cd';
        active.style.left = '7.1rem';
        console.log(active.style.left);
        console.log(active.style.right);
    },false);
    btn1.addEventListener('click',function(){
        btn2.style.color = '#ffffff';
        btn1.style.color = '#5fc0cd';
        active.style.left = '0';
        console.log(active.style.left);
        console.log(active.style.right);
    },false);
};