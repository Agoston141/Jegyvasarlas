const button = document.querySelector("button");
button.addEventListener("click", createResult);

function createResult(){
    const quantity = document.querySelector(".mycontainer div input");
    const ticketType = document.querySelector(".mycontainer div:nth-child(2) select");
    const result =document.querySelector(".mycontainer div:nth-child(3) input");
    let discount;


    /*if (ticketType.value==="adult"){
        result.value=quantity.value*350+"Ft"
    }
    else{
        result.value=`${quantity.value*175}Ft`
    }*/
    
    discount=quantity.value>=10?0.9:1;
    result.value=ticketType.value==="adult"?`${quantity.value*350*discount}Ft`:`${quantity.value*175*discount}Ft`;


}   