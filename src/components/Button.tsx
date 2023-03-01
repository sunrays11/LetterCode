import React from "react";
import { TouchableOpacity, Text, Image, GestureResponderEvent, ImageSourcePropType } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export interface Props {
  imgUrl: ImageSourcePropType;
  handlePress?: ((event: GestureResponderEvent) => void) | undefined
  right?: number;
  top: number;
  left?:number;

}

export const CircleButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={props.handlePress}
    >
      <Image
        source={props.imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};


export interface RectProps {
  minWidth: number;
  fontSize: number;
  handlePress: ((event: GestureResponderEvent) => void) | undefined
  top: string;

}

export const RectButton = (rProps: RectProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...rProps,
      }}
      onPress={rProps.handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
       Description
      </Text>
    </TouchableOpacity>
  );
};
