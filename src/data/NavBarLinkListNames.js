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
    { name: "Deals", url: "deals" },
    { name: "Electronics", url: "/" },
    { name: "Motors", url: "/" },
    { name: "Fashion", url: "/" },
    { name: "Collectablles & Art", url: "/" },
    { name: "Sports", url: "/" },
    { name: "Health & Beauty", url: "/" },
    { name: "Industrial Equipment", url: "/" },
    { name: "Home & Garden", url: "/" },
  ]

  return { watchListLinks, myShopLinks, allCategories };
};

export default NavBarLinkListNames;
