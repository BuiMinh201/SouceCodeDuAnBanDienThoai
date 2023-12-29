import { ADD_TO_CART,DELETE_ITEM_CART,UPDATE_CART } from "../../shared/constants/action-type";
const initState = {
    items:[],
}
export default (state=initState,action)=>{
    switch(action.type){
        case ADD_TO_CART: return addItem(state, action.payload);
        case UPDATE_CART: return updateCart(state,action.payload);
        case DELETE_ITEM_CART:
            const newItems = state.items.filter((item)=>item._id!=action.payload._id);
            return {...state,items: newItems};
        default: return state;
    }
}
const addItem = (state,payload)=>{
    const items = state.items;
    let isProductExists = false;
    items.map((item)=>{
        if(item._id === payload._id){
            item.qty += payload.qty;
            isProductExists = true;
        }
        return item;
    })
    const newItems = isProductExists? items: [...items,payload];
    // localStorage.setItem("cart_items", JSON.stringify(newItems));
    return {...state,items: newItems}
}
const updateCart = (state,payload)=>{
    const itemns = state.items;
    const newItems = itemns.map((item)=>{
        if(item._id===payload._id){
            item.qty = payload.qty;
            
        }
        return item
    })
    return {...state,items:newItems}
}