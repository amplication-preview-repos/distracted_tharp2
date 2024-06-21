import { Addon } from "../addon/Addon";
import { OrderItem } from "../orderItem/OrderItem";
import { Product } from "../product/Product";

export type Price = {
  addon?: Addon | null;
  addonRelation: string | null;
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  currencyType: string | null;
  id: string;
  orderItems?: Array<OrderItem>;
  product?: Product | null;
  productRelation: string | null;
  relatesToAddon: string | null;
  relatesToProduct: string | null;
  updatedAt: Date;
  value: number | null;
};
