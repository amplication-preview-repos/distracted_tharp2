import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type AddonWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  prices?: PriceListRelationFilter;
  product?: ProductWhereUniqueInput;
};
