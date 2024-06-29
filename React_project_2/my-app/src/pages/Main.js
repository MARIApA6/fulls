
import Card from '../components/Card';
import productImg from '../components/assets/product_1.jpg';
import pages from './pages.css';

export default function Main() {

    return (
        <>
            <h1>Product shop Main Page</h1>
            <div className='hader_main'>hader

            </div>
            <div className="card_arrange">
                <h1>Products</h1>
                <Card
                    productImg={productImg}
                    title="Product 1"
                    description="Description about Product 1"
                />
                <Card
                    productImg={productImg}
                    title="Product 2"
                    description="Description about Product 2"
                />
                <Card
                    productImg={productImg}
                    title="Product 3"
                    description="Description about Product 3"
                />
                <Card
                    productImg={productImg}
                    title="Product 4"
                    description="Description about Product 4"
                />
                <Card
                    productImg={productImg}
                    title="Product 5"
                    description="Description about Product 5"
                />
            </div>
        </>)
}