import { Recipe } from "../models/recipe.model";

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Pancetta', quantity: 100, unit: 'g' },
      { name: 'Eggs', quantity: 2, unit: 'pcs' },
      { name: 'Parmesan Cheese', quantity: 50, unit: 'g' },
    ],
    imageUrl: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: '2',
    name: 'Chicken Curry',
    description: 'A flavorful curry dish made with tender chicken, spices, and coconut milk.',
    ingredients: [
      { name: 'Chicken', quantity: 500, unit: 'g' },
      { name: 'Coconut Milk', quantity: 200, unit: 'ml' },
      { name: 'Curry Powder', quantity: 2, unit: 'tbsp' },
    ],
    imageUrl: 'https://example.com/chicken-curry.jpg',
  },
];
