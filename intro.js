function total_cost(x,y){
    x=parseInt(document.getElementById("text1").value);
    y=parseInt(document.getElementById("text2").value);
    var answer=document.getElementById("text3");
    answer.value=x*y
    var result=x*y;
        alert("the price is: "+ result)
}