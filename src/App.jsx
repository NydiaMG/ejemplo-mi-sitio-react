
import ProductList from './components/Products/ProductList';
import styles from './App.module.css';
function App() {
return (
<div className={styles.container}>
<h1>Hola desde Netlify con despliegue continuo</h1>
<h1 className={styles.title}>Lista de Productos</h1>

<ProductList />
</div>
);
}
export default App;