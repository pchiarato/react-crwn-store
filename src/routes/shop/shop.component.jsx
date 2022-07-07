import { Routes, Route } from 'react-router-dom';
import './shop.component.scss';
import CategoriesPreviewComponent from '../../routes/categories-preview/categories-preview.component';
import CategoryComponent from '../category/category.component';
const ShopComponent = () => {
  return(
    <Routes>
      <Route index element={<CategoriesPreviewComponent />}></Route>
      <Route path=':category' element={<CategoryComponent />}></Route>
    </Routes>
  );
}

export default ShopComponent;