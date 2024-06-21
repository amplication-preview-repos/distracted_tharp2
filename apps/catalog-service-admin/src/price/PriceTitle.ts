import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "addonRelation";

export const PriceTitle = (record: TPrice): string => {
  return record.addonRelation?.toString() || String(record.id);
};
