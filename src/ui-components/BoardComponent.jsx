/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function BoardComponent(props) {
  const { board, overrides, ...rest } = props;
  return (
    <View
      width="369px"
      height="103px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "BoardComponent")}
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
        width="232px"
        height="39px"
        position="absolute"
        top="13px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.message}
        {...getOverrideProps(overrides, "message")}
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
        width="96px"
        height="17px"
        position="absolute"
        top="46px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.name}
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
        width="176px"
        height="23px"
        position="absolute"
        top="69px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.createdAt}
        {...getOverrideProps(overrides, "created at")}
      ></Text>
      <Image
        width="72px"
        height="48px"
        position="absolute"
        top="13px"
        left="278px"
        padding="0px 0px 0px 0px"
        src={board?.image}
        {...getOverrideProps(overrides, "306228011_675 1")}
      ></Image>
    </View>
  );
}
