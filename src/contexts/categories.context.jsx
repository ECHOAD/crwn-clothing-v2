import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const categoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCateogriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };

    getCateogriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};
