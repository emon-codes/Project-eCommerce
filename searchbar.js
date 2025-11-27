      const input = document.getElementById("productSearch");
        
          const items = document.querySelectorAll(".product-item");

          
          input.addEventListener("keyup", () => {
         
            let search = input.value.toLowerCase();

            items.forEach((card) => {
          
              let titleElement = card.querySelector(".product-title");

   
              if (titleElement) {
            
                let title = titleElement.innerText.toLowerCase();

                card.style.display = title.includes(search) ? "block" : "none";
              }
            });
          });