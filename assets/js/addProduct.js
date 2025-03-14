import { addData } from "./service.js";
import { endpoint } from "./constants.js";
const addBtn = document.querySelector("add")
const input = document.querySelectorAll()
async function addProduct() {
    try {
        const newProduct= await addData(endpoint.products)
      
        drawForm(newProduct)
    } catch (error) {
        console.log(error.message)
    }
}
addProduct()

function drawForm(newProduct){
    const newData = document.querySelector(".new-product");
  const data = document.createElement("data");
  data.innerHTML = `  <div class="data" style="width: 100%;height: 100%; padding-top: 50px;">
            <h1 class="name" style="color: rgb(0, 255, 0); margin-bottom: 40px">
              Add a New Product
            </h1>
            <ul style=" padding: 0;display: flex; justify-content: center; flex-direction: column; align-items: center;">
              <li >
                <form action="" >Title</form>
                <input type="text" placeholder="" style="height: 40px;" class="input"/>
              </li>
              <li >
                <form action="">Description</form>
                <input type="text" placeholder="" style="height: 40px;" class="input"/>
              </li>
              <li >
                <form action="" >Category</form>
                <input type="text" placeholder="" style="height: 40px;" class="input"/>
              </li>
              <li >
                <form action="" >Price</form>
                <input type="text" placeholder="" style="height: 40px;" class="input"/>
              </li>
              <li >
                <form action="" >Count</form>
                <input type="text" placeholder="" style="height: 40px;" class="input"/>
              </li>
             
    
            </ul>
            <button type="button" class="btn btn-success add">Add New Product</button>
          </div>`
      newData.appendChild(data)

}


