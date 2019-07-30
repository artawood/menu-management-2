const data = {
  menu_items: {
    "task-1": { id: "task-1", name: "Hamburger" },
    "task-2": { id: "task-2", name: "Cheeseburger" },
    "task-3": { id: "task-3", name: "Bacon Cheeseburger" },
    "task-4": { id: "task-4", name: "Hot Dog" },
    "task-5": { id: "task-5", name: "Bacon Hot Dog" },
    "task-6": { id: "task-6", name: "Ham Sandwich" },
    "task-7": { id: "task-7", name: "Veggie Sandwich" },
    "task-8": { id: "task-8", name: "Grilled Cheese Sandwich" },
    "task-9": { id: "task-9", name: "Cajun Fries" },
    "task-10": { id: "task-10", name: "Coke" },
    "task-11": { id: "task-11", name: "Sprite" },
    "task-12": { id: "task-12", name: "Milkshakes" }
  },
  menu_sections: {
    "column-1": {
      id: "column-1",
      title: "Burgers",
      //Maintain order
      menu_items: ["task-1", "task-2", "task-3"]
    },
    "column-2": {
      id: "column-2",
      title: "Dogs",
      //Maintain order
      menu_items: ["task-4", "task-5"]
    },
    "column-3": {
      id: "column-3",
      title: "Sandwiches",
      //Maintain order
      menu_items: ["task-6", "task-7", "task-8"]
    },
    "column-4": {
      id: "column-4",
      title: "Fries",
      //Maintain order
      menu_items: ["task-9"]
    },
    "column-5": {
      id: "column-5",
      title: "Drinks",
      //Maintain order
      menu_items: ["task-10", "task-11"]
    },
    "column-6": {
      id: "column-6",
      title: "Shakes",
      //Maintain order
      menu_items: ["task-12"]
    }
  },
  // Facilitate reordering of the columns
  // Also for rendering out number of columns
  menuSectionOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6"
  ]
};

export default data;
