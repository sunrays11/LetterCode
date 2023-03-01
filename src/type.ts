import { ImageSourcePropType } from "react-native";


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