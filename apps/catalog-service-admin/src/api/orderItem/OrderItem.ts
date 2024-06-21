import { Addon } from "../addon/Addon";
import { Order } from "../order/Order";
import { Price } from "../price/Price";
import { Product } from "../product/Product";

export type OrderItem = {
  addon?: Addon | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  price?: Price | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
