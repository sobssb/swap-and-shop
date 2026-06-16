import { useState } from "react";
import img from "../assets/pending1777314335pngwing.com.png";

const DealsArrayProducts = () => {
  // this is for the deals category images and their text
  const imgArray = [
    { image: img, text: "Shop All" },
    { image: img, text: "Outlet" },
    { image: img, text: "Home & kitchen" },
    { image: img, text: "Garden & Outdoors" },
    { image: img, text: "Fashion" },
    { image: img, text: "Home Improvement" },
    { image: img, text: "One more" },
    { image: img, text: "One more" },
  ];

  const namesOfCat = [
    "Furniture",
    "TV & Accessories",
    "Home & Kitchen",
    "Lawn",
    "Furniture",
    "TV & Accessories",
    "Home & Kitchen",
    "Furniture",
    "TV & Accessories",
    "Home & Kitchen",
    "Lawn",
    "Furniture",
    "TV & Accessories",
    "Home & Kitchen",
  ];

  const initialDepartmentRadioType = [
    {
      checked: false,
      text: "Swap & Shop Devices & Accessories",
      id: "devices",
    },
    { checked: false, text: "Swap & Shop Luxury", id: "luxury" },
    { checked: false, text: "Appliances", id: "appliances" },
    { checked: false, text: "Arts, Crafts & Sewing", id: "artCraft" },
    { checked: false, text: "Swap & Shop more", id: "more" },
    { checked: false, text: "Different styles", id: "styles" },
    {
      checked: false,
      text: "Swap & Shop Devices & Accessories",
      id: "devicess",
    },
    { checked: false, text: "Swap & Shop Luxury", id: "luxurys" },
    { checked: false, text: "Appliances", id: "appliancess" },
    { checked: false, text: "Arts, Crafts & Sewing", id: "artCrafst" },
    { checked: false, text: "Swap & Shop more", id: "mores" },
    { checked: false, text: "Different styles", id: "styless" },
  ];

  const initialBrandNames = [
    { checked: false, text: "Inspire", id: "inspire" },
    { checked: false, text: "LEVOIT", id: "levoit" },
    { checked: false, text: "Lenovo", id: "lenovo" },
    { checked: false, text: "Ring", id: "ring" },
    { checked: false, text: "Iphone", id: "iphone" },
    { checked: false, text: "Samsung", id: "samsung" },
    { checked: false, text: "Dell", id: "dell" },
    { checked: false, text: "Asus", id: "asus" },
    { checked: false, text: "Vivo", id: "vivo" },
    { checked: false, text: "Hp", id: "hp" },
    { checked: false, text: "Google", id: "google" },
    { checked: false, text: "Sony", id: "sony" },
    { checked: false, text: "One-Plus", id: "one-plus" },
    { checked: false, text: "Acer", id: "acer" },
    { checked: false, text: "JBL", id: "jbl" },
    { checked: false, text: "Oppo", id: "oppo" },
    { checked: false, text: "Nike", id: "nike" },
    { checked: false, text: "Adidas", id: "adidas" },
  ];

  return {
    imgArray,
    namesOfCat,
    initialBrandNames,
    initialDepartmentRadioType,
  };
};

export default DealsArrayProducts;
