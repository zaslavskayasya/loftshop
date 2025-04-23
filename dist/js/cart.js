document.addEventListener("DOMContentLoaded", function () {
    const cart = document.querySelector(".cart");
    const summarySubtotal = document.querySelector(".cart-summary__row:not(.cart-summary__row--total) strong");
    const summaryTotal = document.querySelector(".cart-summary__row--total strong");

    function updateTotal() {
      let total = 0;

      cart.querySelectorAll(".cart__item").forEach(item => {
        const quantityInput = item.querySelector(".quant_input");
        const priceText = item.querySelector(".cart__price").textContent;
        const totalCell = item.querySelector(".cart__total");

        const quantity = parseInt(quantityInput.value);
        const price = parseInt(priceText.replace(/[^\d]/g, ''));

        const spanBold = document.createElement('p');
        spanBold.className = 'price-small-bold';
        spanBold.textContent = totalCell.dataset.text || ''; 

        const itemTotal = price * quantity;
        totalCell.textContent = itemTotal.toLocaleString("uk-UA") + " ₴";
        totalCell.prepend(spanBold);

        total += itemTotal;
      });

      const totalText = total.toLocaleString("uk-UA") + " ₴";
      if (summarySubtotal) summarySubtotal.textContent = totalText;
      if (summaryTotal) summaryTotal.textContent = totalText;
    }

    // Плюс/Мінус
    cart.querySelectorAll(".cart__item").forEach(item => {
      const minusBtn = item.querySelector(".minus");
      const plusBtn = item.querySelector(".plus");
      const input = item.querySelector(".quant_input");

      input.setAttribute("readonly", true); // Заборонити ручне редагування

      minusBtn.addEventListener("click", () => {
        let value = parseInt(input.value);
        if (value > 1) {
          input.value = value - 1;
          updateTotal();
        }
      });

      plusBtn.addEventListener("click", () => {
        let value = parseInt(input.value);
        input.value = value + 1;
        updateTotal();
      });
    });

    updateTotal(); // Ініціалізація при завантаженні
  });