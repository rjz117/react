import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id : 'p1',
    price : 120,
    title : 'My first Book',
    description : 'The first book I ever read.'
  },
  {
    id : 'p2',
    price : 150,
    title : 'My second Book',
    description : 'The second book I ever read.'
  }
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => {
        return <ProductItem
          key={product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        })}
      </ul>
    </section>
  );
};

export default Products;
