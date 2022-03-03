import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard(state, actions) {
      const newItem = actions.payload;
      //check if item exists
      const existingItem = state.itemsList.find(item=> item.id === newItem.id)
      if(existingItem){
          existingItem.quantity++;
          existingItem.price += newItem.price;
      }else{
        state.itemsList.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.price
        })
        state.totalQuantity=  state.totalQuantity+1 
      }
    },

    removeFromCart(state, actions) {
      state.itemsList = state.itemsList.filter(
        (item) => item !== actions.payload.id
      );
    },
    showCart(state) {
      state.showCart = true;
    },
  },

});


export const {addToCard, removeFromCart,showCart} = cartSlice.actions
export default cartSlice;
