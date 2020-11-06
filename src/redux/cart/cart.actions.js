import CartActionTypes from './cart.types'
export const toggleCartHidden = () => ({
 type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addItem = detail => ({
 type: CartActionTypes.ADD_ITEM,
 payload: detail
});
export const clearItemFromCart = detail => ({
 type: CartActionTypes.CLEAR_ITEM_FROM_CART,
 payload: detail
})
export const removeItem = detail => ({
 type: CartActionTypes.REMOVE_ITEM,
 payload: detail
})