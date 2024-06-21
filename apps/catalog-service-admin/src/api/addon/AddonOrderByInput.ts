import { SortOrder } from "../../util/SortOrder";

export type AddonOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
