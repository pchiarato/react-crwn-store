import CategoryItemComponent from "../category-item/category-item.component"

const CategoriesComponent = ({categories}) => {
    return (
        <section className="categories">
        {
          categories.map((category) => (
            <CategoryItemComponent categoryItem={category} key={category.id}/>
          ))
        }
        </section>
    )
}

export default CategoriesComponent;