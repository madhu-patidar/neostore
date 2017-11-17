export class Product {
  product_name: string;
  categoryId: string;
  product_producer: string;
  product_description: string;
  product_cost: number;
  product_avg_rating: number;
  product_stock: number;
  product_color: string;
  product_isactive: true;
  product_material: string;
  id: string;
  images: ProductImage[]
}

export class ProductImage {
    ImgURL: string;
    container: string;
    id: string;
    isActive: boolean;
    name: string;
    productId: string;
    type: string
}