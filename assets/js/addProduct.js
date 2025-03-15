const form = document.querySelector(".form");
import { addData } from "./service.js";
import { endpoint } from "./constants.js";

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", async function () {
  
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const category = document.querySelector("#category").value.trim();
  const price = Number(document.querySelector("#price").value.trim());
  const count = Number(document.querySelector("#count").value.trim());

  const newProduct = {
    title,
    description,
    category,
    price,
    rating:count,
  };

console.log(newProduct)

  if (title && description && category && !isNaN(price) && !isNaN(count)) {
    try {
      const nw= await addData(endpoint.products, newProduct)
    
      
      // form.reset()  ancaq title goturur
      // console.log(form)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Product has been added ",
        showConfirmButton: false,
        timer: 1500
      });
    
    console.log(nw);

      
    } catch (error) {
      console.log(error.message);
    }
    
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill all inputs!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
});

