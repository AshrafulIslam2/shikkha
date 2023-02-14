import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const filterContex = createContext();

const API = "https://api.pujakaitem.com/api/products";
const FilterContextProvider = ({ children }) => {
  const [products, SetProducts] = useState([]);
  const gteProducts = async (url) => {
    const res = await axios.get(url);
    const AllProducts = await res.data;
    SetProducts(AllProducts);
  };

  useEffect(() => {
    gteProducts(API);
  }, []);
  const data = { products };
  return <filterContex.Provider value={data}>{children}</filterContex.Provider>;
};

export const useFileContexthooks = () => {
  return useContext(filterContex);
};

export { filterContex, FilterContextProvider };
