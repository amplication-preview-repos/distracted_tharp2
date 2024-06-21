import { OrderItemUpdateManyWithoutAddonsInput } from "./OrderItemUpdateManyWithoutAddonsInput";
import { PriceUpdateManyWithoutAddonsInput } from "./PriceUpdateManyWithoutAddonsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type AddonUpdateInput = {
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutAddonsInput;
  prices?: PriceUpdateManyWithoutAddonsInput;
  product?: ProductWhereUniqueInput | null;
};
