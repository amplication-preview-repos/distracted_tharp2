import { AddonWhereUniqueInput } from "../addon/AddonWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PriceWhereInput = {
  addon?: AddonWhereUniqueInput;
  addonRelation?: StringNullableFilter;
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  currencyType?: StringNullableFilter;
  id?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
  product?: ProductWhereUniqueInput;
  productRelation?: StringNullableFilter;
  relatesToAddon?: StringNullableFilter;
  relatesToProduct?: StringNullableFilter;
  value?: FloatNullableFilter;
};
