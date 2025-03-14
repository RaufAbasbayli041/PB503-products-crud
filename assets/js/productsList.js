// window.addEventListener("load", ()=>{
//   const loader = document.querySelector(".loader")
//   setTimeout(()=>{
// opac




//   })
//   loader.classList.add("loader-hidden")
//   loader.addEventListener("transitioned", ()=>{
//     document.body.removeChild("loader")
//   })
// })



import {
  getAllData,
  getDataById,
  addData,
  deleteDataById,
  editDataById,
} from "./service.js";
import { endpoint } from "./constants.js";

async function getProducts() {
  try {
    const products = await getAllData(endpoint.products);
    printTable(products);
  } catch (error) {
    console.log(error.message);
  }
}
getProducts();

function printTable(products) {
  const tBody = document.querySelector("tbody");
  products.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `  <td>${product.id}</td>
                <td>${product.category}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                <a href="detail.html?id=${product.id}" ><button type="button" class="btn btn-outline-success about"style="border: none; font-weight: bold;">About</button></a>
                </td>   
                <td>
                <button data-id="${product.id}" type="button" class="btn btn-outline-danger delete"style="border: none; font-weight: bold;" >Delete</button>
                </td>
                `;

    tBody.appendChild(trElem);
  });

  const allDeleteBtn = document.querySelectorAll(".delete");
  allDeleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result)
          const deletedId =e.target.getAttribute("data-id");
          deleteDataById(endpoint.products,deletedId)
          e.target.closest("tr").remove()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    
    });
  });
}

