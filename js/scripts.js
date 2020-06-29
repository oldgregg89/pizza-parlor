//Business Logic

function Pizza(){
  this.price = 0;
}

Pizza.prototype.getSize = function(size) {
    if (size === "small"){
      this.price += 10.00;
    } else if (size === "medium") {
      this.price += 12.00;
    } else {
      this.price += 15.00;
    }
}

Pizza.prototype.getSauce =function(sauce) {
    if (sauce === "pesto"){
      this.price += 3.00;
    } else if (sauce === "alfredo") {
      this.price += 2.00;
    } else {
      this.price += .50;
    }
}

Pizza.prototype.checkToppings = function(toppings) {
  this.price += toppings;
}

//User interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    let pizza = new Pizza();
    let size = $("input[type='radio'][name='size']:checked").attr("id");
    let sauce = $("input[type='radio'][name='sauce']:checked").attr("id");
    let toppings = $(".toppings:checked").length;
    event.preventDefault(); 
    pizza.getSize(size);
    pizza.getSauce(sauce);
    pizza.checkToppings(toppings);
    $("#priceOfPizza").text('$'+pizza.price);
  });
});