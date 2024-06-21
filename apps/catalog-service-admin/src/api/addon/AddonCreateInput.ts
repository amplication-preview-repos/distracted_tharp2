import { OrderItemCreateNestedManyWithoutAddonsInput } from "./OrderItemCreateNestedManyWithoutAddonsInput";
import { PriceCreateNestedManyWithoutAddonsInput } from "./PriceCreateNestedManyWithoutAddonsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type AddonCreateInput = {
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutAddonsInput;
  prices?: PriceCreateNestedManyWithoutAddonsInput;
  product?: ProductWhereUniqueInput | null;
};
