import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
const ProductList = () => {
const [products, setProducts] = useState([]);
const [search, setSearch] = useState('');
useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => setProducts(data));
}, []);
const filteredProducts = products.filter(product =>
product.title.toLowerCase().includes(search.toLowerCase())
);
return (
<>
<input
type="text"
placeholder="Buscar producto..."
value={search}
onChange={e => setSearch(e.target.value)}
className={styles.search}
/>
<div className={styles.list}>
{filteredProducts.map(product => (
<div key={product.id} className={styles.card}>
<img src={product.image} alt={product.title} />
<h3>{product.title}</h3>
<p>${product.price}</p>
</div>
))}
</div>
</>
);
};
export default ProductList;