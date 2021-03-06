import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap }

  useEffect(() => {
    // setProducts(SHOP_DATA)
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoryMap();
  }, [])
  return (
  <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
}



