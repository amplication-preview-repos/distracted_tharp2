import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
