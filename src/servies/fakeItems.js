const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

const allItems = [
  {
    id: 1,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 2,
    imageURL:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6pro-5g-oversea/listpage/Phone-List-Page-product-list-Black-427-x-600.png.thumb.webp",
    title: "Oppo",
    description: "12gb RAM, 512gb ROM, HDR display and much more",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 3,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 4,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 5,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 6,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 7,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 8,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 9,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 10,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 11,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
  {
    id: 12,
    imageURL:
      "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
    title: "Bag",
    description:
      "Made with premium lather and have five pockets with two hidden compartments",
    startTime: currentTime,
    currentDate: currentDate,
    category: "Accessories",
  },
];
export function getItems() {
  return allItems;
}

export function getItem(id) {
  return allItems.find((e) => e.id === id);
}
