// export type Cart = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
// };

//dummy json product types
export type Review = {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
};

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Meta = {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
};

export type Cart = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type ProductsResponse = {
  products: Cart[];
  total?: number;
  skip?: number;
  limit?: number;
};

export type State = {
  items: Cart[];
};
export const initialState = {
  items: [],
};
export type Action =
  | { type: "ADD"; payload: Cart[] }
  | { type: "REMOVE"; payload: { id: number } };

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        items: action.payload,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }
  }
  return state;
}
