let count =1;
let timer = setInterval(function(){
    console.log(count);
    count++;
    if(count > 10){
        clearInterval(timer);
        console.log("Timer stopped");
    }
})