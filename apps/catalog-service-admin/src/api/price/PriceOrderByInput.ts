import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  addonId?: SortOrder;
  addonRelation?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  currencyType?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  productRelation?: SortOrder;
  relatesToAddon?: SortOrder;
  relatesToProduct?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
