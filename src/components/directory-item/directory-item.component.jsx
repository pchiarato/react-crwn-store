import './directory-item.component.scss';

const DirectoryItemComponent = ({categoryItem}) => {
    const {title, imageUrl} = categoryItem;
    return (
        <div className="category__container">
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