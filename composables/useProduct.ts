import type { Product } from "~/types/product";

const productData: Product[] = [
  {
    id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
    title: "Bethel Bliss",
    subtitle: null,
    description: null,
    handle: "bethel-bliss",
    is_giftcard: false,
    discountable: true,
    thumbnail: "http://localhost:9000/static/1733304750932-2.png",
    collection_id: null,
    type_id: null,
    weight: null,
    length: null,
    height: null,
    width: null,
    hs_code: null,
    origin_country: null,
    mid_code: null,
    material: null,
    created_at: "2024-12-04T09:32:30.999Z",
    updated_at: "2024-12-04T09:32:30.999Z",
    type: null,
    collection: null,
    options: [
      {
        id: "opt_01JE8G74XAVG06HFB08GPHR8FN",
        title: "Default option",
        metadata: null,
        product_id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
        created_at: "2024-12-04T09:32:30.999Z",
        updated_at: "2024-12-04T09:32:30.999Z",
        deleted_at: null,
        values: [
          {
            id: "optval_01JE8G74XC9GZ6BH258NHN2VGV",
            value: "Default option value",
            metadata: null,
            option_id: "opt_01JE8G74XAVG06HFB08GPHR8FN",
            created_at: "2024-12-04T09:32:30.999Z",
            updated_at: "2024-12-04T09:32:30.999Z",
            deleted_at: null,
          },
        ],
      },
    ],
    tags: [],
    images: [
      {
        id: "img_01JE8G74XG1Y38YQQXJSADQ7YP",
        url: "http://localhost:9000/static/1733304750932-2.png",
        metadata: null,
        rank: 0,
        product_id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
        created_at: "2024-12-04T09:32:30.999Z",
        updated_at: "2024-12-04T09:32:30.999Z",
        deleted_at: null,
      },
      {
        id: "img_01JE8G74XGE1XZWBAKCJAAQDB4",
        url: "http://localhost:9000/static/1733304750933-Copy%20of%20IMG_4186.JPG",
        metadata: null,
        rank: 1,
        product_id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
        created_at: "2024-12-04T09:32:30.999Z",
        updated_at: "2024-12-04T09:32:30.999Z",
        deleted_at: null,
      },
      {
        id: "img_01JE8G74XGCYKPE8BBRBQSY9CB",
        url: "http://localhost:9000/static/1733304750933-Image1.jpg",
        metadata: null,
        rank: 2,
        product_id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
        created_at: "2024-12-04T09:32:30.999Z",
        updated_at: "2024-12-04T09:32:30.999Z",
        deleted_at: null,
      },
    ],
    variants: [
      {
        id: "variant_01JE8G74YD5ZH8Y3WDKFM4BTNJ",
        title: "Default variant",
        sku: null,
        barcode: null,
        ean: null,
        upc: null,
        allow_backorder: false,
        manage_inventory: false,
        hs_code: null,
        origin_country: null,
        mid_code: null,
        material: null,
        weight: null,
        length: null,
        height: null,
        width: null,
        metadata: null,
        variant_rank: 0,
        product_id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
        created_at: "2024-12-04T09:32:31.054Z",
        updated_at: "2024-12-04T09:32:31.054Z",
        deleted_at: null,
        options: [
          {
            id: "optval_01JE8G74XC9GZ6BH258NHN2VGV",
            value: "Default option value",
            metadata: null,
            option_id: "opt_01JE8G74XAVG06HFB08GPHR8FN",
            option: {
              id: "opt_01JE8G74XAVG06HFB08GPHR8FN",
              title: "Default option",
              metadata: null,
              product_id: "prod_01JE8G74WZDC0G42C2E8PJBKEY",
              created_at: "2024-12-04T09:32:30.999Z",
              updated_at: "2024-12-04T09:32:30.999Z",
              deleted_at: null,
            },
            created_at: "2024-12-04T09:32:30.999Z",
            updated_at: "2024-12-04T09:32:30.999Z",
            deleted_at: null,
          },
        ],
      },
    ],
  },
];

export function useProduct() {
  const getMockProducts = () => {
    return productData;
  };

  return {
    getMockProducts,
  };
}
