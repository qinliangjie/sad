import '../css/pc-index.css'
import '../css/pcindex.scss'
import '../css/animate.min.css'
import './store.js'
import layer from 'layui-layer'



import rshow0 from '../img/pc/c_img/0.jpg'
import rshow1 from '../img/pc/c_img/1.jpg'
import rshow2 from '../img/pc/c_img/2.jpg'
import rshow3 from '../img/pc/c_img/3.jpg'
import rshow4 from '../img/pc/c_img/4.jpg'
import rshow5 from '../img/pc/c_img/5.jpg'

var _rList = document.getElementsByClassName('role_list')[0];
var _rItem = document.getElementsByClassName('role_item')
var _rshow = document.getElementsByClassName('role_show')[0];
var _rimg = document.getElementById('role_img')
_rList.onmouseover = function (e) {
    _rshow.className = 'role_show active animated fadeInUp'
}
_rList.onmouseout = function (e) {
    _rshow.className = 'role_show active animated fadeOutDown'
}
for (var i = 0; i < _rItem.length; i++) {
    _rItem[i].onmouseover = function (e) {
        e.target.className = 'role_item'
        var s = e.target.getAttribute('data-id')
        switch (s) {
            case '0':
                _rimg.src = rshow0
                break;
            case '1':
                _rimg.src = rshow1
                break;
            case '2':
                _rimg.src = rshow2
                break;
            case '3':
                _rimg.src = rshow3
                break;
            case '4':
                _rimg.src = rshow4
                break;
            case '5':
                _rimg.src = rshow5
                break;
        }
    }
    _rItem[i].onmouseout = function (e) {
        e.target.className = 'role_item gray'
    }
}

var blood = document.getElementById('blood');
var blists = document.getElementById('ul1');
var sex = document.getElementById('sex');
var slists = document.getElementById('ul2');
var constellation = document.getElementById('constellation');
var clists = document.getElementById('ul3');
var age = document.getElementById('age');
var alists = document.getElementById('ul4');
var round = document.getElementsByClassName('round');
var bloodVal='',sexVal='',conVal='',ageVal = '';
blood.addEventListener('click',function(e){
    if(blists.style.display =='block'){
        blists.style.display = 'none'
        round[0].className = 'round'
    }
    else{
        blists.style.display = 'block'
        round[0].className = 'round deg7'
    }
    
});
sex.addEventListener('click',function(e){
    if(slists.style.display =='block'){
        slists.style.display = 'none'
        round[1].className = 'round'
    }
    else{
        slists.style.display = 'block'
        round[1].className = 'round deg8'
    }
});
constellation.addEventListener('click',function(e){
    if(clists.style.display =='block'){
        clists.style.display = 'none'
        round[2].className = 'round'
    }
    else{
        clists.style.display = 'block'
        round[2].className = 'round deg7'
    }
});
age.addEventListener('click',function(e){
    if(alists.style.display =='block'){
        alists.style.display = 'none'
        round[3].className = 'round'
    }
    else{
        alists.style.display = 'block'
        round[3].className = 'round deg8'
    }
});
for(var b = 0;b<blists.children.length;b++){
    blists.children[b].addEventListener('click',function(e){
        blists.style.display = 'none'
        round[0].className = 'round'
        e.stopPropagation();
        blood.children[0].innerHTML = e.target.innerText+'型';
        bloodVal = e.target.innerText;
    })
}
for(var s = 0;s<slists.children.length;s++){
    slists.children[s].addEventListener('click',function(e){
        slists.style.display = 'none'
        round[1].className = 'round'
        e.stopPropagation();
        sex.children[0].innerHTML = e.target.innerText;
        sexVal = e.target.innerText;
    })
}
for(var c = 0;c<clists.children.length;c++){
    clists.children[c].addEventListener('click',function(e){
        clists.style.display = 'none'
        round[2].className = 'round'
        e.stopPropagation();
        constellation.children[0].innerHTML = e.target.innerText;
        conVal = e.target.innerText;
    })
}
for(var a = 0;a<alists.children.length;a++){
    alists.children[a].addEventListener('click',function(e){
        alists.style.display = 'none'
        round[3].className = 'round'
        e.stopPropagation();
        age.children[0].innerHTML = e.target.innerText;
        ageVal = e.target.innerText;
    })
}

var testrole = document.getElementById('testRole');
testrole.addEventListener('click',function(e){
    console.log(ageVal)
    if(bloodVal==''){
        layer.msg('請選擇血型');
        return
    }
    if(sexVal==''){
        layer.msg('請選擇性別');
        return
    }
    if(conVal==''){
        layer.msg('請選擇星座');
        return
    }
    if(ageVal==''){
       layer.msg('請選擇年齡');
       return
    }
})