import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AddonTitle } from "../addon/AddonTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { ProductTitle } from "../product/ProductTitle";

export const PriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="addon.id" reference="Addon" label="Addon">
          <SelectInput optionText={AddonTitle} />
        </ReferenceInput>
        <TextInput label="AddonRelation" source="addonRelation" />
        <NumberInput label="amount" source="amount" />
        <TextInput label="currency" source="currency" />
        <TextInput label="currencyType" source="currencyType" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="ProductRelation" source="productRelation" />
        <TextInput label="RelatesToAddon" source="relatesToAddon" />
        <TextInput label="RelatesToProduct" source="relatesToProduct" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
