import express from 'express';
import ProductsRoutes from './routes/products.route';
import OrdersRoutes from './routes/orders.route';

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(OrdersRoutes);

export default app;
