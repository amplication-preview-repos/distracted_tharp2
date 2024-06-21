import { Addon as TAddon } from "../api/addon/Addon";

export const ADDON_TITLE_FIELD = "name";

export const AddonTitle = (record: TAddon): string => {
  return record.name?.toString() || String(record.id);
};
