import { getAllData,getDataById,addData,deleteDataById,editDataById, } from "./service.js";
import { endpoint } from "./constants.js";

// console.log(getAllData("Products"))


async function getProducts() {
    try {
        const products = await getAllData(endpoint.products)
        console.log(products);
        
    } catch (error) {
        console.log(error.message);
    }
}

async function getProductById() {
    try {
        const product = await getDataById("products",2)
        console.log(product);
        
    } catch (error) {
        console.log(error);
        
    }
}



function printCards (pro) {





}












getProducts()
