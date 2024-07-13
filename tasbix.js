let tesbix = document.querySelector("#tesbix")
let increment = document.querySelector("#increment-btn")
let reset =document.querySelector("#reset-btn")
let = value =0 
 
increment.addEventListener("click",function(){
    value++
    tesbix.innerHTML = value

    if(value == 4){
        document.body.style.backgroundColor= "red"
      }

    else if(value==5 ){
        document.body.style.backgroundColor= "blue"
      }

     else if(value == 6){
        document.body.style.backgroundColor= "green"
      }

    else if(value == 7){
        document.body.style.backgroundColor= "orange"
      }
    else if(value == 8){
        document.body.style.backgroundColor= "yellow"
      }
      
   else {
     document.body.style.backgroundColor= "white"
   }

})


reset.addEventListener("click", function(){
    value = 0
    tesbix.innerHTML = value
    
})