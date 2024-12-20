function solve() {
   let allProducts = [];
   let totalPrice = 0;

   const buttons = Array.from(document.querySelectorAll("button.add-product"));

   const output = document.querySelector("textarea");

   buttons.forEach(button => {
      button.addEventListener("click", addedOnCard);
   });

   function addedOnCard(button) {
      const currentProduct = button.currentTarget.parentNode.parentNode;

      const productTitle = currentProduct.querySelector(".product-title").textContent;
      const productPrice = currentProduct.querySelector(".product-line-price").textContent;

      if (!allProducts.includes(productTitle)) {
         allProducts.push(productTitle);
      }

      totalPrice += Number(productPrice);

      output.value += `Added ${productTitle} for ${productPrice} to the cart.\n`
   }

   const checkout = document.querySelector("button.checkout");
   checkout.addEventListener("click", onCheckout);

   function onCheckout(e) {
      output.value += `You bought ${allProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
   
      buttons.forEach((button) => {
         button.removeEventListener("click", addedOnCard);
         button.disabled = true;
      });

      checkout.disabled = true;
   }
}

