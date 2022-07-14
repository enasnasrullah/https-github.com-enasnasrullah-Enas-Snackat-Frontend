import axios from "axios";

export const  getProductst=()=> {
    return axios.get('https://fakestoreapi.com/products');
  }
  