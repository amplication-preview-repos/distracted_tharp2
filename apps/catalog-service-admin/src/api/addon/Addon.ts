import { OrderItem } from "../orderItem/OrderItem";
import { Price } from "../price/Price";
import { Product } from "../product/Product";

export type Addon = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  prices?: Array<Price>;
  product?: Product | null;
  updatedAt: Date;
};
