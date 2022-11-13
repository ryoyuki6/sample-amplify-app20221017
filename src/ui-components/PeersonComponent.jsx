/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PeersonComponent(props) {
  const { person, overrides, ...rest } = props;
  return (
    <View
      width="371px"
      height="137px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PeersonComponent")}
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
        width="109px"
        height="23px"
        position="absolute"
        top="0px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
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
        width="91px"
        height="18px"
        position="absolute"
        top="31px"
        left="11px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.email}
        {...getOverrideProps(overrides, "email")}
      ></Text>
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
        width="121px"
        height="21px"
        position="absolute"
        top="69px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.age}
        {...getOverrideProps(overrides, "age")}
      ></Text>
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
        width="157px"
        height="29px"
        position="absolute"
        top="100px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.tel}
        {...getOverrideProps(overrides, "tel")}
      ></Text>
    </View>
  );
}
