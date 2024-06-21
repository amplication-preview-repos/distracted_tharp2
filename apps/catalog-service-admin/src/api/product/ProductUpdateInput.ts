import { AddonUpdateManyWithoutProductsInput } from "./AddonUpdateManyWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { PriceUpdateManyWithoutProductsInput } from "./PriceUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  addons?: AddonUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  prices?: PriceUpdateManyWithoutProductsInput;
};
