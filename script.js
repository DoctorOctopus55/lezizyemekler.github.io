// Recipes with ingredients
const recipes = [
  {
    id: 1,
    title: "Tomato Soup",
    description: "Delicious homemade tomato soup.",
    image: "https://via.placeholder.com/280x180?text=Tomato+Soup",
    ingredients: ["Tomato", "Onion", "Garlic", "Salt", "Water", "Butter"]
  },
  {
    id: 2,
    title: "Cheese Omelette",
    description: "Simple and cheesy omelette.",
    image: "https://via.placeholder.com/280x180?text=Cheese+Omelette",
    ingredients: ["Eggs", "Cheese", "Milk", "Butter", "Salt"]
  },
  {
    id: 3,
    title: "Chicken Curry",
    description: "Spicy and tasty chicken curry.",
    image: "https://via.placeholder.com/280x180?text=Chicken+Curry",
    ingredients: ["Chicken", "Onion", "Garlic", "Tomato", "Salt", "Olive oil"]
  },
  {
    id: 4,
    title: "Sucuklu Yumurta",
    description: "Spicy and tasty sucuklu yumurta.",
    image: "https://via.placeholder.com/280x180?text=Sucuklu+Yumurta",
    ingredients: ["Eggs", "Butter", "Salt", "Green pepper"]
  },
  {
    id: 5,
    title: "Beef Stew",
    description: "Hearty beef stew with vegetables.",
    image: "https://via.placeholder.com/280x180?text=Beef+Stew",
    ingredients: ["Beef", "Onion", "Carrots", "Potatoes", "Garlic", "Salt", "Water"]
  },
  {
    id: 6,
    title: "Pasta with Tomato Sauce",
    description: "Classic pasta with fresh tomato sauce.",
    image: "https://via.placeholder.com/280x180?text=Pasta+Tomato+Sauce",
    ingredients: ["Pasta", "Tomato", "Onion", "Garlic", "Olive oil", "Salt"]
  },
  {
    id: 7,
    title: "Rice Pilaf",
    description: "Fluffy rice pilaf cooked in butter.",
    image: "https://via.placeholder.com/280x180?text=Rice+Pilaf",
    ingredients: ["Rice", "Butter", "Salt", "Water"]
  },
  {
    id: 8,
    title: "Beans Salad",
    description: "Fresh beans salad with olive oil.",
    image: "https://via.placeholder.com/280x180?text=Beans+Salad",
    ingredients: ["Beans", "Tomato", "Onion", "Olive oil", "Salt"]
  },
  {
    id: 9,
    title: "Bulgur Pilaf",
    description: "Traditional bulgur pilaf with vegetables.",
    image: "https://via.placeholder.com/280x180?text=Bulgur+Pilaf",
    ingredients: ["Bulgur", "Tomato", "Onion", "Butter", "Salt", "Water"]
  },
  {
    id: 10,
    title: "Garlic Bread",
    description: "Crunchy garlic bread with butter.",
    image: "https://via.placeholder.com/280x180?text=Garlic+Bread",
    ingredients: ["Bread", "Garlic", "Butter", "Salt"]
  },
  {
    id: 11,
    title: "Lentil Soup",
    description: "Warm and hearty lentil soup.",
    image: "https://via.placeholder.com/280x180?text=Lentil+Soup",
    ingredients: ["Lentils", "Carrot", "Onion", "Tomato paste", "Olive oil", "Salt", "Water"]
  },
  {
    id: 12,
    title: "Menemen",
    description: "Traditional Turkish scrambled eggs with tomatoes.",
    image: "https://via.placeholder.com/280x180?text=Menemen",
    ingredients: ["Eggs", "Tomato", "Onion", "Green pepper", "Olive oil", "Salt"]
  },
  {
    id: 13,
    title: "Grilled Salmon",
    description: "Healthy grilled salmon with lemon.",
    image: "https://via.placeholder.com/280x180?text=Grilled+Salmon",
    ingredients: ["Salmon", "Lemon", "Garlic", "Olive oil", "Salt", "Black pepper"]
  },
  {
    id: 14,
    title: "Stuffed Peppers",
    description: "Colorful bell peppers stuffed with rice and spices.",
    image: "https://via.placeholder.com/280x180?text=Stuffed+Peppers",
    ingredients: ["Bell pepper", "Rice", "Onion", "Tomato paste", "Olive oil", "Salt"]
  },
  {
    id: 15,
    title: "French Toast",
    description: "Sweet and soft French toast.",
    image: "https://via.placeholder.com/280x180?text=French+Toast",
    ingredients: ["Bread", "Eggs", "Milk", "Sugar", "Butter", "Cinnamon"]
  },
  {
    id: 16,
    title: "Greek Salad",
    description: "Fresh Greek salad with feta cheese.",
    image: "https://via.placeholder.com/280x180?text=Greek+Salad",
    ingredients: ["Tomato", "Cucumber", "Onion", "Feta", "Olives", "Olive oil", "Salt"]
  },
  {
    id: 17,
    title: "Pancakes",
    description: "Fluffy pancakes perfect for breakfast.",
    image: "https://via.placeholder.com/280x180?text=Pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking powder", "Butter"]
  },
  {
    id: 18,
    title: "Spaghetti Carbonara",
    description: "Creamy Italian pasta with bacon.",
    image: "https://via.placeholder.com/280x180?text=Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon", "Black pepper", "Salt"]
  },
  {
    id: 19,
    title: "Eggplant Moussaka",
    description: "Layered eggplant and meat dish.",
    image: "https://via.placeholder.com/280x180?text=Moussaka",
    ingredients: ["Eggplant", "Ground beef", "Tomato", "Onion", "Olive oil", "Salt"]
  },
  {
    id: 20,
    title: "Zucchini Fritters",
    description: "Crispy zucchini fritters with herbs.",
    image: "https://via.placeholder.com/280x180?text=Zucchini+Fritters",
    ingredients: ["Zucchini", "Eggs", "Flour", "Onion", "Parsley", "Salt", "Olive oil"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-ingredient-modal');
  const modal = document.getElementById('ingredient-modal');
  const closeBtn = document.getElementById('close-modal');
  const confirmBtn = document.getElementById('confirm-ingredients');
  const ingredientItems = document.querySelectorAll('#ingredient-list li');

  let selectedIngredients = [];

  // Open modal on button click only
  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // Close modal on cancel button click
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal if clicking outside modal content area
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Toggle ingredient selection on click
  ingredientItems.forEach(item => {
    item.addEventListener('click', () => {
      const ing = item.getAttribute('data-ingredient');
      if (selectedIngredients.includes(ing)) {
        selectedIngredients = selectedIngredients.filter(i => i !== ing);
        item.classList.remove('selected');
      } else {
        selectedIngredients.push(ing);
        item.classList.add('selected');
      }
    });
  });

    // Confirm selection and close modal
    confirmBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        console.log('Selected ingredients:', selectedIngredients);

        // Filter recipes that contain at least one selected ingredient
        const matchedRecipes = recipes.filter(recipe => 
            recipe.ingredients.some(ing => selectedIngredients.includes(ing))
        );

        if (matchedRecipes.length === 0) {
            alert('No recipes found with selected ingredients.');
            return;
        }

        // Save matched recipe IDs to localStorage
        const matchedIds = matchedRecipes.map(r => r.id);
        localStorage.setItem('filteredRecipeIds', JSON.stringify(matchedIds));

        // Redirect to filtered recipes page
        window.location.href = '/filtered-recipes.html';
        });
});

document.getElementById('open-recipes-btn').addEventListener('click', () => {
  window.location.href = '/recipes.html';  // or '/recipes' if you use routing/server
});

document.getElementById('open-favorites-btn').addEventListener('click', () => {
    window.location.href = '/favorites.html';
});