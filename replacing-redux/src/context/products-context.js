import { createContext, useState } from "react";

const ProductsContext = createContext({
  products: [],
  toggleFavorite : (_id) => {/* */}
});

const ProductProvider = (props) => {
    const[productsList,setProductsList] = useState([
        {
          id: "p1",
          title: "Red Scarf",
          description: "A pretty red scarf.",
          isFavorite: false,
        },
        {
          id: "p2",
          title: "Blue T-Shirt",
          description: "A pretty blue t-shirt.",
          isFavorite: false,
        },
        {
          id: "p3",
          title: "Green Trousers",
          description: "A pair of lightly green trousers.",
          isFavorite: false,
        },
        {
          id: "p4",
          title: "Orange Hat",
          description: "Street style! An orange hat.",
          isFavorite: false,
        },
      ]);


    const toggleFavorite = (productId) => {
      setProductsList(curruntProductList => {
        const prodIndex = curruntProductList.findIndex(
          p => p.id === productId
        );
        const newFavStatus = !curruntProductList[prodIndex].isFavorite;
        const updatedProducts = [...curruntProductList];
        updatedProducts[prodIndex] = {
          ...curruntProductList[prodIndex],
          isFavorite: newFavStatus
        };
        return updatedProducts;
      } )
    }
    return (
        <ProductsContext.Provider value={{products : productsList, toggleFavorite}}>
            {props.children}
        </ProductsContext.Provider>
    )
}


export default ProductProvider;

export {ProductsContext};
