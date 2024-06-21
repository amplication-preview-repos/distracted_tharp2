import { AddonWhereUniqueInput } from "../addon/AddonWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutPricesInput } from "./OrderItemCreateNestedManyWithoutPricesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PriceCreateInput = {
  addon?: AddonWhereUniqueInput | null;
  addonRelation?: string | null;
  amount?: number | null;
  currency?: string | null;
  currencyType?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutPricesInput;
  product?: ProductWhereUniqueInput | null;
  productRelation?: string | null;
  relatesToAddon?: string | null;
  relatesToProduct?: string | null;
  value?: number | null;
};
