import DirectoryItemComponent from "../directory-item/directory-item.component"

const CategoriesComponent = ({categories}) => {
    return (
        <section className="categories">
        {
          categories.map((category) => (
            <DirectoryItemComponent categoryItem={category} key={category.id}/>
          ))
        }
        </section>
    )
}

export default CategoriesComponent;