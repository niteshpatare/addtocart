import { productAction } from './productSlice';
import axios from "axios";

export const fetchToProduct = () => {
    return async (dispatch) => {
        const fetchDataFun = async () => {
            debugger;
            const url = 'https://k2kitchen-default-rtdb.firebaseio.com/meallist.json';
            const res = await axios.get(url)
            if(res.status === 200){
                debugger;
                return res.data;
            }
            else{
                throw new Error("Fetching error");
            }
        }
        try{
            const pData = await fetchDataFun();
            debugger;
            dispatch(productAction.fetchProducts({products: pData.products}))
        }
        catch(error){
            throw new Error("Fetch to product error", error);
        }
    }
}
