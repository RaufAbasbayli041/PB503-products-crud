import {
  getAllData,
  getDataById,
  addData,
  deleteDataById,
  editDataById,
} from "./service.js";
import { endpoint } from "./constants.js";

const sceleton = document.querySelector(".sceleton")



async function getProducts() {
  try {
    const products = await getAllData(endpoint.products);
    printCards(products);

  } catch (error) {
    console.log(error.message);
  }
}


function printCards(products) {
  const cards = document.querySelector(".cards");

  products.forEach((product) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className =
      " col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center tt";
    cardWrapper.innerHTML = ` 
          <div class="card ">
          
                  <div class="image-wrapper">
                  <img src="${product.image}" class="card-img-top flag" alt="..." />
                    </div>
                    <div class="card-body ">
                    <ul class="list-group list-group-flush desc ulList" >
                    <li class="list-group-item " style="height: 62px;" ><b>Title:</b> ${product.title} </li>
                    <li class="list-group-item"><b>Price:</b> ${product.price}$ </li>
                    <li class="list-group-item star"><b>Rating:</b> ${product.rating?.rate} &#127775</li>
                    </ul>
                   
                    </div> 
                   
                    </div>`;

    cards.appendChild(cardWrapper);
  });
}

getProducts();
