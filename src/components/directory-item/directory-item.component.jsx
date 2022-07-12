import './directory-item.component.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItemComponent = ({ categoryItem }) => {
    const { title, imageUrl, route } = categoryItem;
    const navigate = useNavigate();
    const onNavitateHandler = () => navigate(route)
    return (
        <div className="category__container" onClick={onNavitateHandler}>
            <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="category__body">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    );
}

export default DirectoryItemComponent;