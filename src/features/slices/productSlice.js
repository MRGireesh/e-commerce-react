import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
    name : "products",
    initialState : {
        filteredProducts : JSON.parse(sessionStorage.getItem("filteredData" )) || storeData,
    },
    reducers : {
        filterProducts : (state , actions) =>{
            try {
                console.log("try");
                const filter = storeData.filter((product)=>product.type === actions.payload);
                console.log(filter);
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", saveState);
            } catch (error) {
                return error;
            }
        }
    }
});

export const {filterProducts} = productSlice.actions;
export default productSlice.reducer;