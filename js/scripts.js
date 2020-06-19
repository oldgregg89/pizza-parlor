//Business Logic
function finalPrice (){

}

function pizza(size, sauce, toppings){
  this.size(
    <option value="10">small</option>
    <option value="12">medium</option>
    <option value="15">large</option>
  this.sauce(
    <option value="3">Pesto</option>
    <option value="2">Alfredo</option>
    <option value=".50">Marinara</option>
  )
  this.toppings = toppings
}


//User interface logic
$(document).ready(function(){
  $("form#orderPizza").submit(function(event) {
    event.preventDefault ();
});