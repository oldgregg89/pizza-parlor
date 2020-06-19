//Business Logic

function Pizza(size, sauce, toppings){
  this.size = size
  this.sauce = sauce
  this.toppings = toppings
  this.price = 0
}

Pizza.prototype.getSize = function() {
  this.size = $("input[type='radio'][name='size']:checked").attr("id")
    if (this.size === "small"){
      this.price += 10.00
    } else if (this.size === "medium") {
      this.price += 12.00
    } else {
      this.price += 15.00
    }

}

Pizza.prototype.getSauce =function() {
  this.sauce = $("input[type='radio'][name='sauce']:checked").attr("id")
    if (this.sauce === "pesto"){
      this.price += 3.00
    } else if (this.sauce === "alfredo") {
      this.price += 2.00
    } else {
      this.price += .50
    }
}

Pizza.prototype.checkToppings = function() {
  this.toppings = $(".toppings:checked").length
  this.price += this.toppings

}

//User interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault(); 
    let pizza = new Pizza('','','')
    pizza.getSize()
    pizza.getSauce()
    pizza.checkToppings()
    let total = pizza.price
    debugger
    $("#priceOfPizza").text('$'+total)
  });
});