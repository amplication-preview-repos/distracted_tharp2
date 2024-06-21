import { AddonWhereUniqueInput } from "../addon/AddonWhereUniqueInput";
import { OrderItemUpdateManyWithoutPricesInput } from "./OrderItemUpdateManyWithoutPricesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PriceUpdateInput = {
  addon?: AddonWhereUniqueInput | null;
  addonRelation?: string | null;
  amount?: number | null;
  currency?: string | null;
  currencyType?: string | null;
  orderItems?: OrderItemUpdateManyWithoutPricesInput;
  product?: ProductWhereUniqueInput | null;
  productRelation?: string | null;
  relatesToAddon?: string | null;
  relatesToProduct?: string | null;
  value?: number | null;
};
