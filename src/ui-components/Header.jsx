/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, overrides, ...rest } = props;
  return (
    <View
      width="307px"
      height="58px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(13,248,37,1)"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="307px"
        height="58px"
        position="absolute"
        top="10px"
        left="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={label}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </View>
  );
}
