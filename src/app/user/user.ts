export class User {
  first_name?: string;
  last_name?: string;
  email?: string;
  facebook_id?: string;
  gmail_id?: string;
  provider?: string;
  role?: string;
  gender?: string;
  phone_no?: string;
  birth_date?: any;
  id?: string;
  orderId?: string;
  images?: UserImage[]
}

export class UserImage {
    ImgURL: string;
    container: string;
    id: string;
    isActive: boolean;
    name: string;
    productId: string;
    type: string
}