import productImg from './assets/product_1.jpg';
import card from './Card.css';

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={productImg} alt="Product Picture" />
            <h2 className="card_title">Card Title</h2>
            <p> Descritpion about the product </p>

        </div>
    )
}

export default Card