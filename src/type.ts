import { ImageSourcePropType } from "react-native";

export interface Bids {
    id: string,
    name: string,
    price: number,
    image: ImageSourcePropType,
    date: string
  }


  export interface NFT {
    id: string,
    name: string,
    creator: string,
    price: number,
    description: string,
    image: ImageSourcePropType,
    bids: Bids[]
  }


  export interface Words {
    word: string,
    definition: string,
  }


  export interface Alphabets {
    letter: string,
    image:ImageSourcePropType,
    name: string
    phonetic: string
    uppercase: string
    lowercase: string
    ascii_code: number,
    ascii_binary:string,
    words: Words[],
  }