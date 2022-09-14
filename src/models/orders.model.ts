import { Pool } from 'mysql2/promise';

import Order from '../interfaces/orders.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // https://database.guide/json_arrayagg-create-a-json-array-from-the-rows-of-a-query-in-mysql/

  public async getAll(): Promise<Order[]> {
    const sql = `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds
    FROM Trybesmith.Products AS Products
    INNER JOIN Trybesmith.Orders AS Orders 
    ON Orders.id = Products.orderId
    GROUP BY Orders.id
    ORDER BY Orders.userId`;
    const result = await this.connection.execute(sql);
    const [rows] = result;
    return rows as Order[];
  }
}