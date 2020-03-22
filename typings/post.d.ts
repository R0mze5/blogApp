declare module 'types/posts' {
  export type TId = string | number;
  export type TBooked = boolean;
  export type TDate = string;
  export type TText = string;
  export type TImg = string;

  export interface IPost {
    id: TId;
    text: TText;
    booked: TBooked;
    date: TDate;
    img: TImg;
  }
}
