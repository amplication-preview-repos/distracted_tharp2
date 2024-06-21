import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  addonId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  priceId?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
