window.onload = function(){

    var checkBtn = document.getElementsByClassName('icon_check');
    /*属性的方法*/
/*    for(var j = 0 ; j < checkBtn.length; j++){
        checkBtn[j].onclick = function(){
            var hasChecked = this.getAttribute('checked');
            if(hasChecked !== null){
                this.removeAttribute('checked');
            }else{
                this.setAttribute('checked',' ');
            }
        }
    }*/
    /*类名的方法*/
    for(var j = 0 ; j < checkBtn.length; j++){
        checkBtn[j].onclick = function(){
            var hasChecked = this.getAttribute('class');
            if(this.getAttribute('class') == "icon_check checked"){
                this.setAttribute('class','icon_check');
            }else{
                this.setAttribute('class','icon_check checked');
            }
        }
    }
};
