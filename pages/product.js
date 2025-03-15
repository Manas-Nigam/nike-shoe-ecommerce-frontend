import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const ProductDetails = ({ products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const product = {
    id: 2,
    attributes: {
      name: "Alpha All-Purpose Gen Z",
      subtitle: "Men's Basketball Shoes",
      price: 16295,
      description:
        "\"You've got the hops and the speedâ€”lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.\n\n- Colour Shown: White/Siren Red/Black\n- Style: DQ4123-100\"",
      size: {
        data: [
          {
            size: "5.5(38.5)",
            enabled: true,
          },
          {
            size: "6(39.0)",
            enabled: true,
          },
          {
            size: "6.5(40.5)",
            enabled: true,
          },
          {
            size: "7.0(41.5)",
            enabled: true,
          },
          {
            size: "7.5(42.0)",
            enabled: true,
          },
          {
            size: "8.0(42.5)",
            enabled: true,
          },
          {
            size: "8.5(43.5)",
            enabled: true,
          },
          {
            size: "9.0(44.5)",
            enabled: true,
          },
          {
            size: "9.5(45.0)",
            enabled: true,
          },
          {
            size: "10.0(45.5)",
            enabled: true,
          },
          {
            size: "10.5(46.5)",
            enabled: false,
          },
          {
            size: "11.0(48.0)",
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
  };
  const p = product.attributes;

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <Image src={`/productBgImg.svg`} width={800} height={800} />
            <div className="flex items-center gap-6 mt-8 flex-wrap">
              <Image src={`/subProduct-1.svg`} width={80} height={80} />
              <Image src={`/subProduct-2.svg`} width={80} height={80} />
              <Image src={`/subProduct-3.svg`} width={80} height={80} />
              <Image src={`/subProduct-4.svg`} width={80} height={80} />
              <Image src={`/subProduct-5.svg`} width={80} height={80} />
              <Image src={`/subProduct-6.svg`} width={80} height={80} />
            </div>
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1]">
            {/* PRODUCT TITLE */}
            <div className="flex mb-4 w-full justify-between items-center">
              <span className=" text-gray-600 text-lg font-semibold">Nike</span>
              <div className="flex gap-2">
                <CiHeart size={24} />
                <CiShare2 size={24} />
              </div>
            </div>
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="mb-5">
              Introducing the Nike Alpha All-Purpose Gen Z, the latest evolution
              in athletic footwear designed to meet the dynamic needs of the
              modern generation. These cutting-edge trainers represent a fusion
              of style, technology, and performance, making them a perfect
              choice for those who value both form and function. The Gen Z
              boasts a sleek, contemporary design that ...{" "}
              <strong>See more</strong>
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex-col mb-12">
              <div className="flex items-start mb-8">
                <p className="text-sm font-normal">
                  <strong>4K+ </strong>sold
                </p>
                <p className="ml-8 text-sm font-normal">
                  &#11088;<strong>4.8</strong> (156 reviews)
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-xl font-bold">$ 90.00</p>
                <p className="text-sm text-red-500  font-bold line-through">
                  $ 120.00
                </p>
              </div>
            </div>
            {/* PRODUCT SIZE RANGE START */}
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-sm">
                <strong>Color:</strong> White-orange
              </span>
              <span className="text-sm font-light">Size-Guide</span>
            </div>
            <div className="flex gap-2 mb-8">
              <Image src={`/color-1.svg`} width={100} height={100}/> 
              <Image src={`/color-2.svg`} width={100} height={100}/> 
              <Image src={`/color-3.svg`} width={100} height={100}/> 
              <Image src={`/color-4.svg`} width={100} height={100}/> 
              <Image src={`/color-5.svg`} width={100} height={100}/> 
            </div>
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-sm">
                  <span className="font-semibold text-md">Size:</span> 7.5(42.0)
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-2 rounded-lg bg-[#FFD470] text-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {}}
            >
              + Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
