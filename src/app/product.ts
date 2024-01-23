export interface Product {
  _id: string;
  imageCover: string;
  category: {
    name: string;
  };
  title: string;
  price: number;
  ratingsAverage: any;
  // Other properties
}
