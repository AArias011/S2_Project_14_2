"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Anthony Arias
   Date:   4/3/19 

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.onload = setupCart;

//this function defines the event handlers for the Add to Order buttons on the page
function setupCart() {
      // this code contains the collection of elements belonging to the addButton class
      var addButtons = document.getElementsByClassName("addButton");

      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}

//This item adds items to the shopping cart on the page
function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      //this code create a copy of the foodItem element and all of its descendants
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      // this determines whether a product ordered by the customer has already been ordered
      var duplicateOrder = false;
      for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
            // this determines whether the ID of the element node equals foodID 
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstElementChild.textContent++;
                  break;
            }
      }

      //This if condition test whether duplicateOrder is false
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
}