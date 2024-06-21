/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddonWhereUniqueInput } from "../../addon/base/AddonWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderItemUpdateManyWithoutPricesInput } from "./OrderItemUpdateManyWithoutPricesInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class PriceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddonWhereUniqueInput)
  @IsOptional()
  @Field(() => AddonWhereUniqueInput, {
    nullable: true,
  })
  addon?: AddonWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addonRelation?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currencyType?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutPricesInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutPricesInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutPricesInput, {
    nullable: true,
  })
  orderItems?: OrderItemUpdateManyWithoutPricesInput;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productRelation?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relatesToAddon?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relatesToProduct?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number | null;
}

export { PriceUpdateInput as PriceUpdateInput };
