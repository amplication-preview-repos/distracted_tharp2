import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADDON_TITLE_FIELD } from "../addon/AddonTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PRICE_TITLE_FIELD } from "./PriceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const PriceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="OrderItem"
          target="priceId"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Addon" source="addon.id" reference="Addon">
              <TextField source={ADDON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Price" source="price.id" reference="Price">
              <TextField source={PRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
