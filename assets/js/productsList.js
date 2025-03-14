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
                <td>${product.rating.count}</td>
                <td>
                <button type="button" class="btn btn-outline-success"style="border: none; font-weight: bold;" >Delete</button>
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
     const deletedId =e.target.getAttribute("data-id");
     
     btn.closest("tr").remove()
      deleteDataById(endpoint.products,deletedId)
    });
  });
}


deleteDataById(endpoint.products,2)