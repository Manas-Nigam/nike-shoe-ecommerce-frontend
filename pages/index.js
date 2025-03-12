import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
export default function Home({}) {
    const products = [
        {
          id: 2,
          attributes: {
            name: "Air Jordan XXXVII Low PF",
            subtitle: "Men's Basketball Shoes",
            price: 16295,
            description:
              "\"You've got the hops and the speedâ€”lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.\n\n- Colour Shown: White/Siren Red/Black\n- Style: DQ4123-100\"",
            size: {
              data: [
                {
                  size: "UK 6",
                  enabled: true,
                },
                {
                  size: "UK 6.5",
                  enabled: true,
                },
                {
                  size: "UK 7",
                  enabled: true,
                },
                {
                  size: "UK 7.5",
                  enabled: true,
                },
                {
                  size: "UK 8",
                  enabled: true,
                },
                {
                  size: "UK 8.5",
                  enabled: true,
                },
                {
                  size: "UK 9",
                  enabled: true,
                },
                {
                  size: "UK 9.5",
                  enabled: true,
                },
                {
                  size: "UK 10",
                  enabled: true,
                },
                {
                  size: "UK 10.5",
                  enabled: true,
                },
                {
                  size: "UK 11",
                  enabled: false,
                },
                {
                  size: "UK 11.5",
                  enabled: false,
                },
              ],
            },
            original_price: 18295,
            slug: "air-jordan-xxxvii-low-pf",
            createdAt: "2023-03-17T00:49:02.221Z",
            updatedAt: "2023-03-17T00:49:09.916Z",
            publishedAt: "2023-03-17T00:49:09.754Z",
            image: {
              data: [
                {
                  id: 11,
                  attributes: {
                    name: "9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/large_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a.webp",
                        hash: "large_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                        mime: "image/webp",
                        name: "large_9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp",
                        path: null,
                        size: 22.11,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/small_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a.webp",
                        hash: "small_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                        mime: "image/webp",
                        name: "small_9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp",
                        path: null,
                        size: 8.18,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/medium_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a.webp",
                        hash: "medium_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                        mime: "image/webp",
                        name: "medium_9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp",
                        path: null,
                        size: 14.85,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/thumbnail_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a.webp",
                        hash: "thumbnail_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                        mime: "image/webp",
                        name: "thumbnail_9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp",
                        path: null,
                        size: 1.54,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 28.83,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "9cb30549_fe13_4998_ad7d_6c2876be3b5b_d8c3f3895a",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:47:59.231Z",
                    updatedAt: "2023-03-17T00:47:59.231Z",
                  },
                },
                {
                  id: 10,
                  attributes: {
                    name: "28422f23-d3f7-4e32-92ac-c63f90e02e36.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/large_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63.webp",
                        hash: "large_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                        mime: "image/webp",
                        name: "large_28422f23-d3f7-4e32-92ac-c63f90e02e36.webp",
                        path: null,
                        size: 32.99,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/small_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63.webp",
                        hash: "small_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                        mime: "image/webp",
                        name: "small_28422f23-d3f7-4e32-92ac-c63f90e02e36.webp",
                        path: null,
                        size: 12.08,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/medium_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63.webp",
                        hash: "medium_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                        mime: "image/webp",
                        name: "medium_28422f23-d3f7-4e32-92ac-c63f90e02e36.webp",
                        path: null,
                        size: 22.1,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/thumbnail_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63.webp",
                        hash: "thumbnail_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                        mime: "image/webp",
                        name: "thumbnail_28422f23-d3f7-4e32-92ac-c63f90e02e36.webp",
                        path: null,
                        size: 2.37,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 46.8,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "28422f23_d3f7_4e32_92ac_c63f90e02e36_4f24982b63",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:47:58.930Z",
                    updatedAt: "2023-03-17T00:47:58.930Z",
                  },
                },
                {
                  id: 9,
                  attributes: {
                    name: "46e4d54c-895f-466c-a1b3-4fa284739297.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/large_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15.webp",
                        hash: "large_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                        mime: "image/webp",
                        name: "large_46e4d54c-895f-466c-a1b3-4fa284739297.webp",
                        path: null,
                        size: 19.39,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/small_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15.webp",
                        hash: "small_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                        mime: "image/webp",
                        name: "small_46e4d54c-895f-466c-a1b3-4fa284739297.webp",
                        path: null,
                        size: 7.33,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/medium_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15.webp",
                        hash: "medium_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                        mime: "image/webp",
                        name: "medium_46e4d54c-895f-466c-a1b3-4fa284739297.webp",
                        path: null,
                        size: 13.14,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/thumbnail_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15.webp",
                        hash: "thumbnail_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                        mime: "image/webp",
                        name: "thumbnail_46e4d54c-895f-466c-a1b3-4fa284739297.webp",
                        path: null,
                        size: 1.43,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 25.27,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "46e4d54c_895f_466c_a1b3_4fa284739297_22b6e01f15",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:47:58.913Z",
                    updatedAt: "2023-03-17T00:47:58.913Z",
                  },
                },
                {
                  id: 8,
                  attributes: {
                    name: "c33a5f8a-49c4-4dc6-98fe-f9f32aed42fe.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/large_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267.webp",
                        hash: "large_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                        mime: "image/webp",
                        name: "large_c33a5f8a-49c4-4dc6-98fe-f9f32aed42fe.webp",
                        path: null,
                        size: 25.22,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/small_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267.webp",
                        hash: "small_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                        mime: "image/webp",
                        name: "small_c33a5f8a-49c4-4dc6-98fe-f9f32aed42fe.webp",
                        path: null,
                        size: 9.33,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/medium_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267.webp",
                        hash: "medium_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                        mime: "image/webp",
                        name: "medium_c33a5f8a-49c4-4dc6-98fe-f9f32aed42fe.webp",
                        path: null,
                        size: 17.07,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/thumbnail_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267.webp",
                        hash: "thumbnail_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                        mime: "image/webp",
                        name: "thumbnail_c33a5f8a-49c4-4dc6-98fe-f9f32aed42fe.webp",
                        path: null,
                        size: 1.49,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 32.07,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "c33a5f8a_49c4_4dc6_98fe_f9f32aed42fe_2302a31267",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:47:58.859Z",
                    updatedAt: "2023-03-17T00:47:58.859Z",
                  },
                },
              ],
            },
            thumbnail: {
              data: {
                id: 7,
                attributes: {
                  name: "thumbnail.webp",
                  alternativeText: null,
                  caption: null,
                  width: 592,
                  height: 592,
                  formats: {
                    small: {
                      ext: ".webp",
                      url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/small_thumbnail_eaaeb43daf.webp",
                      hash: "small_thumbnail_eaaeb43daf",
                      mime: "image/webp",
                      name: "small_thumbnail.webp",
                      path: null,
                      size: 10.1,
                      width: 500,
                      height: 500,
                      provider_metadata: {
                        public_id: "small_thumbnail_eaaeb43daf",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".webp",
                      url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/thumbnail_thumbnail_eaaeb43daf.webp",
                      hash: "thumbnail_thumbnail_eaaeb43daf",
                      mime: "image/webp",
                      name: "thumbnail_thumbnail.webp",
                      path: null,
                      size: 1.92,
                      width: 156,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_thumbnail_eaaeb43daf",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "thumbnail_eaaeb43daf",
                  ext: ".webp",
                  mime: "image/webp",
                  size: 14.85,
                  url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678994278/thumbnail_eaaeb43daf.webp",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "thumbnail_eaaeb43daf",
                    resource_type: "image",
                  },
                  createdAt: "2023-03-17T00:47:58.637Z",
                  updatedAt: "2023-03-17T00:47:58.637Z",
                },
              },
            },
            categories: {
              data: [
                {
                  id: 1,
                  attributes: {
                    name: "Jordan",
                    slug: "jordan",
                    createdAt: "2023-03-17T00:36:11.697Z",
                    updatedAt: "2023-03-17T00:36:16.008Z",
                    publishedAt: "2023-03-17T00:36:15.847Z",
                  },
                },
                {
                  id: 4,
                  attributes: {
                    name: "Running Shoes",
                    slug: "running-shoes",
                    createdAt: "2023-03-17T00:37:12.335Z",
                    updatedAt: "2023-03-17T00:37:16.405Z",
                    publishedAt: "2023-03-17T00:37:16.247Z",
                  },
                },
              ],
            },
          },
        },
        {
          id: 1,
          attributes: {
            name: "Air Jordan 1 Mid SE",
            subtitle: "Men's Shoes",
            price: 12295,
            description:
              '"**Every time the AJ1** gets a remake, you get the classic sneaker in new colours and textures for an exciting, revamped look but with all the familiar comforts you know. Premium materials and accents give modern expression to an all-time favourite.\n\n- Colour Shown: White/Black/Ice Blue\n- Style: DV1308-104"',
            size: {
              data: [
                {
                  size: "UK 6",
                  enabled: true,
                },
                {
                  size: "UK 6.5",
                  enabled: true,
                },
                {
                  size: "UK 7",
                  enabled: true,
                },
                {
                  size: "UK 7.5",
                  enabled: false,
                },
                {
                  size: "UK 8",
                  enabled: false,
                },
                {
                  size: "UK 8.5",
                  enabled: true,
                },
                {
                  size: "UK 9",
                  enabled: true,
                },
                {
                  size: "UK 9.5",
                  enabled: true,
                },
                {
                  size: "UK 10",
                  enabled: true,
                },
                {
                  size: "UK 10.5",
                  enabled: true,
                },
                {
                  size: "UK 11",
                  enabled: false,
                },
                {
                  size: "UK 11.5",
                  enabled: false,
                },
                {
                  size: "UK 12",
                  enabled: false,
                },
              ],
            },
            original_price: 20000,
            slug: "air-jordan-1-mid-se",
            createdAt: "2023-03-17T00:32:55.048Z",
            updatedAt: "2023-03-17T00:49:44.651Z",
            publishedAt: "2023-03-17T00:49:44.447Z",
            image: {
              data: [
                {
                  id: 6,
                  attributes: {
                    name: "266f9922-ec59-41e3-9b36-85c5fab5c1ec.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/large_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150.webp",
                        hash: "large_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                        mime: "image/webp",
                        name: "large_266f9922-ec59-41e3-9b36-85c5fab5c1ec.webp",
                        path: null,
                        size: 35.85,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993282/small_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150.webp",
                        hash: "small_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                        mime: "image/webp",
                        name: "small_266f9922-ec59-41e3-9b36-85c5fab5c1ec.webp",
                        path: null,
                        size: 13.53,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/medium_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150.webp",
                        hash: "medium_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                        mime: "image/webp",
                        name: "medium_266f9922-ec59-41e3-9b36-85c5fab5c1ec.webp",
                        path: null,
                        size: 24.62,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/thumbnail_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150.webp",
                        hash: "thumbnail_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                        mime: "image/webp",
                        name: "thumbnail_266f9922-ec59-41e3-9b36-85c5fab5c1ec.webp",
                        path: null,
                        size: 2.52,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 49.94,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "266f9922_ec59_41e3_9b36_85c5fab5c1ec_73139ae150",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:31:22.954Z",
                    updatedAt: "2023-03-17T00:31:22.954Z",
                  },
                },
                {
                  id: 5,
                  attributes: {
                    name: "ca113e5f-2165-476a-8dcf-ce7a0d85356c.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/large_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92.webp",
                        hash: "large_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                        mime: "image/webp",
                        name: "large_ca113e5f-2165-476a-8dcf-ce7a0d85356c.webp",
                        path: null,
                        size: 23.45,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/small_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92.webp",
                        hash: "small_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                        mime: "image/webp",
                        name: "small_ca113e5f-2165-476a-8dcf-ce7a0d85356c.webp",
                        path: null,
                        size: 7.99,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/medium_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92.webp",
                        hash: "medium_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                        mime: "image/webp",
                        name: "medium_ca113e5f-2165-476a-8dcf-ce7a0d85356c.webp",
                        path: null,
                        size: 15.26,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993282/thumbnail_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92.webp",
                        hash: "thumbnail_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                        mime: "image/webp",
                        name: "thumbnail_ca113e5f-2165-476a-8dcf-ce7a0d85356c.webp",
                        path: null,
                        size: 1.4,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 30.64,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993282/ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "ca113e5f_2165_476a_8dcf_ce7a0d85356c_39fea4ac92",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:31:22.700Z",
                    updatedAt: "2023-03-17T00:31:22.700Z",
                  },
                },
                {
                  id: 4,
                  attributes: {
                    name: "0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/large_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b.webp",
                        hash: "large_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                        mime: "image/webp",
                        name: "large_0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e.webp",
                        path: null,
                        size: 21.95,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/small_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b.webp",
                        hash: "small_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                        mime: "image/webp",
                        name: "small_0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e.webp",
                        path: null,
                        size: 7.59,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/medium_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b.webp",
                        hash: "medium_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                        mime: "image/webp",
                        name: "medium_0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e.webp",
                        path: null,
                        size: 14.34,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/thumbnail_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b.webp",
                        hash: "thumbnail_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                        mime: "image/webp",
                        name: "thumbnail_0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e.webp",
                        path: null,
                        size: 1.37,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 30.06,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "0d6a88ca_7ff8_4ad9_991b_b2e2a33cf66e_40035ca86b",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:31:21.798Z",
                    updatedAt: "2023-03-17T00:31:21.798Z",
                  },
                },
                {
                  id: 3,
                  attributes: {
                    name: "672537b9-5384-49e0-8128-5dedd538c208.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/large_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3.webp",
                        hash: "large_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                        mime: "image/webp",
                        name: "large_672537b9-5384-49e0-8128-5dedd538c208.webp",
                        path: null,
                        size: 8.11,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/small_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3.webp",
                        hash: "small_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                        mime: "image/webp",
                        name: "small_672537b9-5384-49e0-8128-5dedd538c208.webp",
                        path: null,
                        size: 3.18,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/medium_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3.webp",
                        hash: "medium_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                        mime: "image/webp",
                        name: "medium_672537b9-5384-49e0-8128-5dedd538c208.webp",
                        path: null,
                        size: 5.66,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/thumbnail_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3.webp",
                        hash: "thumbnail_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                        mime: "image/webp",
                        name: "thumbnail_672537b9-5384-49e0-8128-5dedd538c208.webp",
                        path: null,
                        size: 0.7,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 10.34,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "672537b9_5384_49e0_8128_5dedd538c208_aa898e07c3",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T00:31:21.674Z",
                    updatedAt: "2023-03-17T00:31:21.674Z",
                  },
                },
              ],
            },
            thumbnail: {
              data: {
                id: 2,
                attributes: {
                  name: "thumbnail.webp",
                  alternativeText: null,
                  caption: null,
                  width: 592,
                  height: 592,
                  formats: {
                    small: {
                      ext: ".webp",
                      url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/small_thumbnail_3d64d57bc0.webp",
                      hash: "small_thumbnail_3d64d57bc0",
                      mime: "image/webp",
                      name: "small_thumbnail.webp",
                      path: null,
                      size: 9.92,
                      width: 500,
                      height: 500,
                      provider_metadata: {
                        public_id: "small_thumbnail_3d64d57bc0",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".webp",
                      url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993280/thumbnail_thumbnail_3d64d57bc0.webp",
                      hash: "thumbnail_thumbnail_3d64d57bc0",
                      mime: "image/webp",
                      name: "thumbnail_thumbnail.webp",
                      path: null,
                      size: 1.75,
                      width: 156,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_thumbnail_3d64d57bc0",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "thumbnail_3d64d57bc0",
                  ext: ".webp",
                  mime: "image/webp",
                  size: 15.38,
                  url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678993281/thumbnail_3d64d57bc0.webp",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "thumbnail_3d64d57bc0",
                    resource_type: "image",
                  },
                  createdAt: "2023-03-17T00:31:21.511Z",
                  updatedAt: "2023-03-17T00:31:21.511Z",
                },
              },
            },
            categories: {
              data: [
                {
                  id: 1,
                  attributes: {
                    name: "Jordan",
                    slug: "jordan",
                    createdAt: "2023-03-17T00:36:11.697Z",
                    updatedAt: "2023-03-17T00:36:16.008Z",
                    publishedAt: "2023-03-17T00:36:15.847Z",
                  },
                },
                {
                  id: 2,
                  attributes: {
                    name: "Football Shoes",
                    slug: "football-shoes",
                    createdAt: "2023-03-17T00:36:33.228Z",
                    updatedAt: "2023-03-17T00:36:37.543Z",
                    publishedAt: "2023-03-17T00:36:37.384Z",
                  },
                },
              ],
            },
          },
        },
        {
          id: 9,
          attributes: {
            name: "Air Jordan 1 Mid SE Craft",
            subtitle: "Men's Shoes",
            price: 12295,
            description:
              '"Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its ""inside out""-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.\n\nColour Shown: Sail/Fossil Stone/Celestial Gold/Taupe Haze\nStyle: DM9652-102"',
            size: {
              data: [
                {
                  size: "UK 6",
                  enabled: true,
                },
                {
                  size: "UK 6.5",
                  enabled: true,
                },
                {
                  size: "UK 7",
                  enabled: true,
                },
                {
                  size: "UK 7.5",
                  enabled: true,
                },
                {
                  size: "UK 8",
                  enabled: true,
                },
                {
                  size: "UK 8.5",
                  enabled: true,
                },
                {
                  size: "UK 9",
                  enabled: true,
                },
                {
                  size: "UK 9.5",
                  enabled: true,
                },
                {
                  size: "UK 10",
                  enabled: true,
                },
                {
                  size: "UK 10.5",
                  enabled: true,
                },
                {
                  size: "UK 11",
                  enabled: false,
                },
                {
                  size: "UK 11.5",
                  enabled: false,
                },
              ],
            },
            original_price: 18295,
            slug: "air-jordan-1-mid-se-craft",
            createdAt: "2023-03-17T01:04:12.470Z",
            updatedAt: "2023-03-17T01:04:23.770Z",
            publishedAt: "2023-03-17T01:04:23.573Z",
            image: {
              data: [
                {
                  id: 44,
                  attributes: {
                    name: "air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".jpeg",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/large_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7.jpg",
                        hash: "large_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                        mime: "image/jpeg",
                        name: "large_air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg",
                        path: null,
                        size: 58.86,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".jpeg",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/small_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7.jpg",
                        hash: "small_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                        mime: "image/jpeg",
                        name: "small_air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg",
                        path: null,
                        size: 15.56,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".jpeg",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/medium_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7.jpg",
                        hash: "medium_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                        mime: "image/jpeg",
                        name: "medium_air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg",
                        path: null,
                        size: 34.16,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".jpeg",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/thumbnail_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7.jpg",
                        hash: "thumbnail_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                        mime: "image/jpeg",
                        name: "thumbnail_air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg",
                        path: null,
                        size: 2.32,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                    ext: ".jpeg",
                    mime: "image/jpeg",
                    size: 43.2,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7.jpg",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id:
                        "air_jordan_1_mid_se_craft_shoes_Rm_P7_J6_02a19cc4d7",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T01:03:39.058Z",
                    updatedAt: "2023-03-17T01:03:39.058Z",
                  },
                },
                {
                  id: 45,
                  attributes: {
                    name: "cb9e0841-2e25-42b5-89f8-71a958794c2a.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/large_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f.webp",
                        hash: "large_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                        mime: "image/webp",
                        name: "large_cb9e0841-2e25-42b5-89f8-71a958794c2a.webp",
                        path: null,
                        size: 28.52,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/small_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f.webp",
                        hash: "small_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                        mime: "image/webp",
                        name: "small_cb9e0841-2e25-42b5-89f8-71a958794c2a.webp",
                        path: null,
                        size: 8.68,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/medium_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f.webp",
                        hash: "medium_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                        mime: "image/webp",
                        name: "medium_cb9e0841-2e25-42b5-89f8-71a958794c2a.webp",
                        path: null,
                        size: 17.67,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/thumbnail_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f.webp",
                        hash: "thumbnail_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                        mime: "image/webp",
                        name: "thumbnail_cb9e0841-2e25-42b5-89f8-71a958794c2a.webp",
                        path: null,
                        size: 1.19,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 41.5,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "cb9e0841_2e25_42b5_89f8_71a958794c2a_4a1245bc5f",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T01:03:39.178Z",
                    updatedAt: "2023-03-17T01:03:39.178Z",
                  },
                },
                {
                  id: 46,
                  attributes: {
                    name: "693cc53f-d228-472a-bf17-0a2e2c42daf7.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/large_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d.webp",
                        hash: "large_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                        mime: "image/webp",
                        name: "large_693cc53f-d228-472a-bf17-0a2e2c42daf7.webp",
                        path: null,
                        size: 39.28,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/small_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d.webp",
                        hash: "small_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                        mime: "image/webp",
                        name: "small_693cc53f-d228-472a-bf17-0a2e2c42daf7.webp",
                        path: null,
                        size: 9.89,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/medium_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d.webp",
                        hash: "medium_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                        mime: "image/webp",
                        name: "medium_693cc53f-d228-472a-bf17-0a2e2c42daf7.webp",
                        path: null,
                        size: 22.79,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/thumbnail_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d.webp",
                        hash: "thumbnail_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                        mime: "image/webp",
                        name: "thumbnail_693cc53f-d228-472a-bf17-0a2e2c42daf7.webp",
                        path: null,
                        size: 1.34,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 57.62,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "693cc53f_d228_472a_bf17_0a2e2c42daf7_5a381af34d",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T01:03:39.315Z",
                    updatedAt: "2023-03-17T01:03:39.315Z",
                  },
                },
                {
                  id: 47,
                  attributes: {
                    name: "38175751-fd04-468e-8049-c772d41f5397.webp",
                    alternativeText: null,
                    caption: null,
                    width: 864,
                    height: 1080,
                    formats: {
                      large: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/large_38175751_fd04_468e_8049_c772d41f5397_e3898be743.webp",
                        hash: "large_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                        mime: "image/webp",
                        name: "large_38175751-fd04-468e-8049-c772d41f5397.webp",
                        path: null,
                        size: 36.05,
                        width: 800,
                        height: 1000,
                        provider_metadata: {
                          public_id:
                            "large_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                          resource_type: "image",
                        },
                      },
                      small: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/small_38175751_fd04_468e_8049_c772d41f5397_e3898be743.webp",
                        hash: "small_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                        mime: "image/webp",
                        name: "small_38175751-fd04-468e-8049-c772d41f5397.webp",
                        path: null,
                        size: 12.13,
                        width: 400,
                        height: 500,
                        provider_metadata: {
                          public_id:
                            "small_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                          resource_type: "image",
                        },
                      },
                      medium: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/medium_38175751_fd04_468e_8049_c772d41f5397_e3898be743.webp",
                        hash: "medium_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                        mime: "image/webp",
                        name: "medium_38175751-fd04-468e-8049-c772d41f5397.webp",
                        path: null,
                        size: 23.55,
                        width: 600,
                        height: 750,
                        provider_metadata: {
                          public_id:
                            "medium_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                          resource_type: "image",
                        },
                      },
                      thumbnail: {
                        ext: ".webp",
                        url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/thumbnail_38175751_fd04_468e_8049_c772d41f5397_e3898be743.webp",
                        hash: "thumbnail_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                        mime: "image/webp",
                        name: "thumbnail_38175751-fd04-468e-8049-c772d41f5397.webp",
                        path: null,
                        size: 2.13,
                        width: 125,
                        height: 156,
                        provider_metadata: {
                          public_id:
                            "thumbnail_38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                          resource_type: "image",
                        },
                      },
                    },
                    hash: "38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                    ext: ".webp",
                    mime: "image/webp",
                    size: 52.39,
                    url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995218/38175751_fd04_468e_8049_c772d41f5397_e3898be743.webp",
                    previewUrl: null,
                    provider: "cloudinary",
                    provider_metadata: {
                      public_id: "38175751_fd04_468e_8049_c772d41f5397_e3898be743",
                      resource_type: "image",
                    },
                    createdAt: "2023-03-17T01:03:39.334Z",
                    updatedAt: "2023-03-17T01:03:39.334Z",
                  },
                },
              ],
            },
            thumbnail: {
              data: {
                id: 48,
                attributes: {
                  name: "thumbnail.jpeg",
                  alternativeText: null,
                  caption: null,
                  width: 592,
                  height: 592,
                  formats: {
                    small: {
                      ext: ".jpeg",
                      url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995232/small_thumbnail_f348a61abd.jpg",
                      hash: "small_thumbnail_f348a61abd",
                      mime: "image/jpeg",
                      name: "small_thumbnail.jpeg",
                      path: null,
                      size: 19.79,
                      width: 500,
                      height: 500,
                      provider_metadata: {
                        public_id: "small_thumbnail_f348a61abd",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpeg",
                      url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995231/thumbnail_thumbnail_f348a61abd.jpg",
                      hash: "thumbnail_thumbnail_f348a61abd",
                      mime: "image/jpeg",
                      name: "thumbnail_thumbnail.jpeg",
                      path: null,
                      size: 2.9,
                      width: 156,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_thumbnail_f348a61abd",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "thumbnail_f348a61abd",
                  ext: ".jpeg",
                  mime: "image/jpeg",
                  size: 17.29,
                  url: "https://res.cloudinary.com/dcqbcgues/image/upload/v1678995231/thumbnail_f348a61abd.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "thumbnail_f348a61abd",
                    resource_type: "image",
                  },
                  createdAt: "2023-03-17T01:03:52.488Z",
                  updatedAt: "2023-03-17T01:03:52.488Z",
                },
              },
            },
            categories: {
              data: [
                {
                  id: 1,
                  attributes: {
                    name: "Jordan",
                    slug: "jordan",
                    createdAt: "2023-03-17T00:36:11.697Z",
                    updatedAt: "2023-03-17T00:36:16.008Z",
                    publishedAt: "2023-03-17T00:36:15.847Z",
                  },
                },
              ],
            },
          },
        },
      ];

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.map((product,index) => (
            <Link
              href={`/product/${product.id}`}
              className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
            >
              <Image
                width={500}
                height={500}
                src={`slide-${index+1}.svg`}
                alt={product.attributes.name}
              />
              <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{product.attributes.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                  <p className="mr-2 text-lg font-semibold">&#8377;{product.attributes.price} INR</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
