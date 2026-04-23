import React from "react";

const FooterLinkListNames = () => {
  const knowUs = [
    { title: "Get to know us" },
    { name: "Careers", url: "/" },
    { name: "Blog", url: "/" },
    { name: "About Swap and Shop", url: "/" },
    { name: "Investor Relations", url: "/" },
    { name: "Swap and Shop Devices", url: "/" },
    { name: "Amazon Science", url: "/" },
  ];

  const makeMoney = [
    { title: "Make Money with us" },
    { name: "Sell products on Swap and Shop", url: "/" },
    { name: "Sell on Swap and Shop Business", url: "/" },
    { name: "Sell apps on Swap and Shop", url: "/" },
    { name: "Become an Affiliate", url: "/" },
    { name: "Advertise Your Products", url: "/" },
    { name: "Self-Publish with Us", url: "/" },
    { name: "Host on Swap and Shop Hub", url: "/" },
    { name: "See More Make Money with Us", url: "/" },
  ];

  const paymentProducts = [
    { title: "Swap and Shop Payment Products" },
    { name: "Swap and Shop Business Card", url: "/" },
    { name: "Shop with points", url: "/" },
    { name: "Reload Your Balance", url: "/" },
    { name: "Swap and Shop Currency Converter", url: "/" },
  ];

  const letHelpYou = [
    { title: "Let Us Help You" },
    { name: "Swap and Shop Business Card", url: "/" },
    { name: "Shop with points", url: "/" },
    { name: "Reload Your Balance", url: "/" },
    { name: "Swap and Shop Currency Converter", url: "/" },
  ];

  return { knowUs, makeMoney, paymentProducts, letHelpYou };
};

export default FooterLinkListNames;
