      const input = document.getElementById("productSearch");
          // Get all product cards by the class 'product-item'
          const items = document.querySelectorAll(".product-item");

          // Attach an event listener for every key press in the search box
          input.addEventListener("keyup", () => {
            // Get the current search text and convert it to lowercase for case-insensitive search
            let search = input.value.toLowerCase();

            // Loop through each product card
            items.forEach((card) => {
              // Find the product title element within the current card
              let titleElement = card.querySelector(".product-title");

              // Ensure the title element exists
              if (titleElement) {
                // Get the product title and convert it to lowercase
                let title = titleElement.innerText.toLowerCase();

                // Check if the product title includes the search text
                // If true, display the card (block); otherwise, hide it (none)
                card.style.display = title.includes(search) ? "block" : "none";
              }
            });
          });