

var timer;
var ele = document.getElementById("timer");
(function (){
    var sec=0;
    timer=setInterval(()=>{
        if(sec<=10){
            ele.innerHTML='00:'+sec;
            sec++;
        }
        
        
    },1000)
var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>4){
        counter=1
    }
},5000);
    
})()
 function pause(){
   clearInterval(timer)
 }