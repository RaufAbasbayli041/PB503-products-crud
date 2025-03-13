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
  getProducts()

  function printTable(products) {
    const tBody = document.querySelector("tbody")
    products.forEach((product) => {
        const trElem= document.createElement("tr")
        trElem.innerHTML = `  <td>${product.id}</td>
                <td>${product.category}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.rating.count}</td>
                <td>
                <button type="button" class="btn btn-outline-danger">Delete</button>
                </td>
                `;

            tBody.appendChild(trElem)
    });
  }