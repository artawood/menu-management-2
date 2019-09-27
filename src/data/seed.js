const data = {
  menus: {
    "menu-1": {
      id: "menu-1",
      name: "Breakfast",
      available: false
    },
    "menu-2": {
      id: "menu-2",
      name: "Lunch",
      available: true
    },
    "menu-3": {
      id: "menu-3",
      name: "Dinner",
      available: true
    }
  },
  menu_order: ["menu-1", "menu-2", "menu-3"],
  categories: {
    "category-1": {
      id: "category-1",
      name: "Entree"
    },
    "category-2": {
      id: "category-2",
      name: "Salads"
    },
    "category-3": {
      id: "category-3",
      name: "Dessert"
    }
  },
  category_order: ["category-1", "category-2", "category-3"],
  items: {
    "item-1": {
      id: "item-1",
      name: "Pad Thai",
      modifier_groups: ["modifier-group-1", "modifier-group-2", "modifier-group-3"]
    },
    "item-2": {
      id: "item-2",
      name: "House Salad",
      modifier_groups: ["modifier-group-3"]
    },
    "item-3": {
      id: "item-3",
      name: "Milkshake",
      modifier_groups: ["modifier-group-4"]
    }
  },
  items_order: ["item-1", "item-2", "item-3"],
  modifier_groups: {
    "modifier-group-1": {
      id: "modifier-group-1",
      name: "Proteins",
      text: "Proteins",
      value: "Proteins",
      min: "1",
      max: "1",
      modifiers: ["modifier-1", "modifier-2", "modifier-3"]
    },
    "modifier-group-2": {
      id: "modifier-group-2",
      name: "Veggies",
      text: "Veggies",
      value: "Veggies",
      min: "1",
      max: "-",
      modifiers: ["modifier-4", "modifier-5"]
    },
    "modifier-group-3": {
      id: "modifier-group-3",
      name: "Dressings",
      text: "Dressings",
      value: "Dressings",
      min: "1",
      max: "3",
      modifiers: ["modifier-6", "modifier-7", "modifier-8"]
    },
    "modifier-group-4": {
      id: "modifier-group-4",
      name: "Ice Cream",
      text: "Ice Cream",
      value: "Ice Cream",
      min: "1",
      max: "1",
      modifiers: ["modifier-9", "modifier-10"]
    }
  },
  modifier_groups_order: ["modifier-group-1", "modifier-group-2", "modifier-group-3", "modifier-group-4"],
  modifiers: {
    "modifier-1": {
      id: "modifier-1",
      name: "Beef",
      text: "Beef",
      value: "Beef"
    },
    "modifier-2": {
      id: "modifier-2",
      name: "Chicken",
      text: "Chicken",
      value: "Chicken"
    },
    "modifier-3": {
      id: "modifier-3",
      name: "Shrimp",
      text: "Shrimp",
      value: "Shrimp"
    },
    "modifier-4": {
      id: "modifier-4",
      name: "Brocoli",
      text: "Brocoli",
      value: "Brocoli"
    },
    "modifier-5": {
      id: "modifier-5",
      name: "Carrot",
      text: "Carrot",
      value: "Carrot"
    },
    "modifier-6": {
      id: "modifier-6",
      name: "Sweet Basil Vingrette",
      text: "Sweet Basil Vingrette",
      value: "Sweet Basil Vingrette"
    },
    "modifier-7": {
      id: "modifier-7",
      name: "Ranch",
      text: "Ranch",
      value: "Ranch"
    },
    "modifier-8": {
      id: "modifier-8",
      name: "Thousand Island",
      text: "Thousand Island",
      value: "Thousand Island"
    },
    "modifier-9": {
      id: "modifier-9",
      name: "Vanilla",
      text: "Vanilla",
      value: "Vanilla"
    },
    "modifier-10": {
      id: "modifier-10",
      name: "Mango",
      text: "Mango",
      value: "Mango"
    }
  },
  modifiers_order: [
    "modifier-1",
    "modifier-2",
    "modifier-3",
    "modifier-4",
    "modifier-5",
    "modifier-6",
    "modifier-7",
    "modifier-8",
    "modifier-9",
    "modifier-10"
  ]
};

export default data;
