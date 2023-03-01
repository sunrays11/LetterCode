import React from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

interface Props {
  title: string;
  subTitle: string;
  titleSize: number;
  subTitleSize: number;
}
export const NFTTitle = (props: Props) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: props.titleSize,
          color: COLORS.primary,
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: props.subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {props.subTitle}
      </Text>
    </View>
  );
};

interface PProps {
  ascii: number;
}
export const EthPrice = (props: PProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
       
        style={{width: 20, height: 20, marginRight: 2}}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {props.ascii}
      </Text>
    </View>
  );
};

interface IProps {
  imgUrl: ImageSourcePropType;
  index: number;
}

const ImageCmp = (props: IProps) => {
  return (
    <Image
      source={props.imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: props.index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
