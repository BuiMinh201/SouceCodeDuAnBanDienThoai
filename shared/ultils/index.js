import { BASE_URL } from "../constants/app";
export const getImageProduct = (name)=>{
    return`${BASE_URL}/assets/uploads/products/${name}`;
}