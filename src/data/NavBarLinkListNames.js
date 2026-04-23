const NavBarLinkListNames = () => {
  // stored some nav links here for the watch list dropdown and also my shop
  // used in the Nav.jsx
  const watchListLinks = [
    { name: "Link one", url: "/" },
    { name: "Link two", url: "/" },
    { name: "Link three", url: "/" },
  ];
  const myShopLinks = [
    { name: "Text one", url: "/" },
    { name: "Text two", url: "/" },
    { name: "Text three", url: "/" },
  ];

  const allCategories = [
    { name: "Saved", url: "/" },
    { name: "Electronics", url: "/" },
    { name: "Motors", url: "/" },
    { name: "Fashion", url: "/" },
    { name: "Collectablles & Art", url: "/" },
    { name: "Sports", url: "/" },
    { name: "Health & Beauty", url: "/" },
    { name: "Industrial Equipment", url: "/" },
    { name: "Home & Garden", url: "/" },
  ];

  const navCategories = [
    {
      name: "Electronics",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Motors",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Fashion",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Collectablles & Art",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Sports",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Health & Beauty",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Industrial Equipment",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple is here",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories isn't it",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
    {
      name: "Home & Garden",
      url: "/",
      img: "/assets/backgroundBanner.png",
      categories: [
        "Apple is not",
        "Samsung",
        "Portable audio and headphones",
        "Smart watches",
        "Deals",
        "Sell on ebay",
      ],
      popular: [
        "Smartphones and accessories for try",
        "Video games and consoles",
        "Computers and tablets",
        "Cameras and photo",
        "Camera drones",
        "Refurbished",
        "Smart home",
      ],
    },
  ];

  return { watchListLinks, myShopLinks, allCategories, navCategories };
};

export default NavBarLinkListNames;
