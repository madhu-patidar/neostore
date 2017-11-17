export class Category {
  category_name:string;
  category_isactive: true;
  category_description:string;
  id:string;
  images: CategoryImage[]
}

export class CategoryImage {
    ImgURL: string;
    container: string;
    id: string;
    isActive: boolean;
    name: string;
    productId: string;
    type: string;
    categoryId: string;
    ThumbURL:string
}