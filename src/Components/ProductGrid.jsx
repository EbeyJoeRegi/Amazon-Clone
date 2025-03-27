import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ProductGrid.css";
import productsData from "../Data/products.json";

const ProductGrid = () => {
    const {mainGrids } = productsData;

    return (
        <div className="product-grid">
            <div className="row main-grid-row">
                {mainGrids.map((grid, index) => (
                    <div className="col-md-3 main-grid" key={index}>
                        <h4 className="main-grid-title">{grid.title}</h4>
                        <a href={grid.link}>
                            <img src={grid.image} alt={grid.title} className="main-grid-image" />
                        </a>
                        <a href={grid.link} className="see-more-link">See more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;