import { Addon } from "../addon/Addon";
import { OrderItem } from "../orderItem/OrderItem";
import { Price } from "../price/Price";

export type Product = {
  addons?: Array<Addon>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  prices?: Array<Price>;
  updatedAt: Date;
};
