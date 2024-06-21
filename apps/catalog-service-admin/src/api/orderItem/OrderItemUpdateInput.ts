import { AddonWhereUniqueInput } from "../addon/AddonWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  addon?: AddonWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  price?: PriceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
