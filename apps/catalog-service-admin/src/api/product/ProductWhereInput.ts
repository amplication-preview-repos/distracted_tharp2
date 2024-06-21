import { AddonListRelationFilter } from "../addon/AddonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";

export type ProductWhereInput = {
  addons?: AddonListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  prices?: PriceListRelationFilter;
};
