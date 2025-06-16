import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ProductGrid.css";
import productsData from "../Data/products.json";

const ProductGrid = () => {
    const {mainGrids, categories } = productsData;

    return (
        <div className="product-grid">
            <div className="row main-grid-row">
                {mainGrids.map((grid, index) => (
                    <div className="col-md-3 main-grid" key={index}>
                        <h4 className="main-grid-title">{grid.title}</h4>
                        <a href={grid.link}>
                            <img src={grid.image} alt={grid.title} className="main-grid-image" />
                        </a>
                        <a href="/" className="see-more-link">See more</a>
                    </div>
                ))}
            </div>

            <div className="row">
                {categories.map((category, index) => (
                    <div className="col-md-3 product-category" key={index}>
                        <h4 className="category-title">{category.title}</h4>
                        <div className="product-grid-container">
                            {category.products.map((product, i) => (
                                <div className="product-box" key={i}>
                                <a href={product.link}>
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </a>
                                <a href={product.link} className="product-name">{product.name}</a> {/* Now styled as plain text */}
                            </div>
                            
                            ))}
                        </div>
                        <a href="/" className="see-more-link">{category.seeMore}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;