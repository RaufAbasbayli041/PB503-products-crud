const id = new URLSearchParams(window.location.search).get("id");
import { getAllData, getDataById } from "./service.js";
import { endpoint } from "./constants.js";

if (!id) {
  window.location.href = "productsList.html";
}

async function getProduct() {
  try {
    const product = await getDataById(endpoint.products, id);
    console.log(product);
    printData(product);
  } catch (error) {
    console.log(error);
  }
}

getProduct();

function printData(product) {
  const detailMain = document.querySelector(".detail-main");
  const data = document.createElement("data");
  data.innerHTML = `  <div class="data " style="width: 500px;">
        <p class="name " style="color: rgb(255, 115, 0); margin-bottom: 40px; ">${product.title}</p>
        <ul style="margin-bottom: 50px; padding: 0;">
            <li><b>Description:</b> ${product.description}</li>
            <li><b>Category:</b> ${product.category}</li>
            <li><b>Price:</b> ${product.price}</li>
            <li><b>Rating:</b> ${product.rating.rate}</li>
            <li><b>Stock count:</b> ${product.rating.count}</li>
        </ul>
         <button type="button" class="btn btn-dark back" >Go back</button>
      </div>
                  `;

  detailMain.appendChild(data);
  const backBtn = document.querySelector(".back");
  backBtn.addEventListener("click", function(){
    window.history.back();
});
}
