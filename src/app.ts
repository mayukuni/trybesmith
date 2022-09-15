import express from 'express';
import ProductsRoutes from './routes/products.route';
import OrdersRoutes from './routes/orders.route';
import UserRoutes from './routes/users.route';

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(OrdersRoutes);
app.use(UserRoutes);

export default app;
