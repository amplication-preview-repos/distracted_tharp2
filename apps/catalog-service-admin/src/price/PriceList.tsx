import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDON_TITLE_FIELD } from "../addon/AddonTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const PriceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Prices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Addon" source="addon.id" reference="Addon">
          <TextField source={ADDON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="AddonRelation" source="addonRelation" />
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="currencyType" source="currencyType" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ProductRelation" source="productRelation" />
        <TextField label="RelatesToAddon" source="relatesToAddon" />
        <TextField label="RelatesToProduct" source="relatesToProduct" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
