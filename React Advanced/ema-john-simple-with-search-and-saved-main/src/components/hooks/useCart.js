import { useEffect } from "react";
import { useState } from "react";
import getStoredCart from "../../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if(products.length){
            const SavedCart = getStoredCart();
            const StoredCart = [];
            for(const key in SavedCart){
                const addedProducts = products.find(product => product.key === key);
                if(addedProducts){
                    const quantity = SavedCart[key];
                    addedProducts.quantity = quantity;
                    StoredCart.push(addedProducts);
                }
            }
            setCart(StoredCart)
        }
        
    },[products]);

    return [cart];
};

export default useCart;