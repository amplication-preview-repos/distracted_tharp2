import { AddonCreateNestedManyWithoutProductsInput } from "./AddonCreateNestedManyWithoutProductsInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";
import { PriceCreateNestedManyWithoutProductsInput } from "./PriceCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  addons?: AddonCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  prices?: PriceCreateNestedManyWithoutProductsInput;
};
