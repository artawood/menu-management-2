const data = {
  menu_items: {
    "item-1": {
      id: "item-1",
      name: "Hamburger",
      price: "7.99",
      soldOut: false
    },
    "item-2": {
      id: "item-2",
      name: "Cheeseburger",
      price: "8.99",
      soldOut: true
    },
    "item-3": {
      id: "item-3",
      name: "Bacon Cheeseburger",
      price: "9.99",
      soldOut: false
    },
    "item-4": { id: "item-4", name: "Hot Dog", price: "7.99", soldOut: false },
    "item-5": {
      id: "item-5",
      name: "Bacon Hot Dog",
      price: "8.99",
      soldOut: false
    },
    "item-6": {
      id: "item-6",
      name: "Ham Sandwich",
      price: "7.99",
      soldOut: false
    },
    "item-7": {
      id: "item-7",
      name: "Veggie Sandwich",
      price: "6.99",
      soldOut: false
    },
    "item-8": {
      id: "item-8",
      name: "Grilled Cheese Sandwich",
      price: "6.99",
      soldOut: false
    },
    "item-9": {
      id: "item-9",
      name: "Cajun Fries",
      price: "4.99",
      soldOut: false
    },
    "item-10": { id: "item-10", name: "Coke", price: "1.99", soldOut: false },
    "item-11": {
      id: "item-11",
      name: "Sprite",
      price: "1.99",
      soldOut: false
    },
    "item-12": {
      id: "item-12",
      name: "Milkshakes",
      price: "2.99",
      soldOut: false
    }
  },
  menu_sections: {
    "section-1": {
      id: "section-1",
      title: "Burgers",
      //Maintain order
      menu_items: ["item-1", "item-2", "item-3"]
    },
    "section-2": {
      id: "section-2",
      title: "Dogs",
      //Maintain order
      menu_items: ["item-4", "item-5"]
    },
    "section-3": {
      id: "section-3",
      title: "Sandwiches",
      //Maintain order
      menu_items: ["item-6", "item-7", "item-8"]
    },
    "section-4": {
      id: "section-4",
      title: "Fries",
      //Maintain order
      menu_items: ["item-9"]
    },
    "section-5": {
      id: "section-5",
      title: "Drinks",
      //Maintain order
      menu_items: ["item-10", "item-11"]
    },
    "section-6": {
      id: "section-6",
      title: "Shakes",
      //Maintain order
      menu_items: ["item-12"]
    }
  },
  // Facilitate reordering of the sections
  // Also for rendering out number of sections
  menuSectionOrder: [
    "section-1",
    "section-2",
    "section-3",
    "section-4",
    "section-5",
    "section-6"
  ],
  location: [
    { key: "AL0193", text: "Five Guys - AL0193", value: "AL0193" },
    { key: "AL0230", text: "Five Guys - AL0230", value: "AL0230" },
    { key: "AL0048", text: "Five Guys - AL0048", value: "AL0048" },
    { key: "AL0068", text: "Five Guys - AL0068", value: "AL0068" },
    { key: "AL0434", text: "Five Guys - AL0434", value: "AL0434" },
    { key: "000000", text: "Other Customer", value: "Other" }
  ]
};

export default data;
