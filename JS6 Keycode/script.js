var info = document.getElementById('info');
var key  = document.getElementById('key');

document.onkeydown = document.body.onkeydown = function(e){
    e = e || window.event;
    info.innerHTML = '';
    key.innerHTML = e.keyCode  || e.which;
    return false;
}