import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const Orders = await this.orderService.getAll();
    res.status(200).json(Orders);
  };
}

export default OrderController;