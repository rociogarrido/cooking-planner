import { Recipe } from '../models/recipe.model';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    description:
      'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Pancetta', quantity: 100, unit: 'g' },
      { name: 'Eggs', quantity: 2, unit: 'pcs' },
      { name: 'Parmesan Cheese', quantity: 50, unit: 'g' },
    ],
    imageUrl: 'assets/images/spaghetti.jpg',
  },
  {
    id: '2',
    name: 'Chicken Curry',
    description:
      'A flavorful curry dish made with tender chicken, spices, and coconut milk.',
    ingredients: [
      { name: 'Chicken', quantity: 500, unit: 'g' },
      { name: 'Coconut Milk', quantity: 200, unit: 'ml' },
      { name: 'Curry Powder', quantity: 2, unit: 'tbsp' },
    ],
    imageUrl: 'assets/images/chicken-curry.jpg',
  },
  {
    id: '3',
    name: 'Greek Salad',
    description:
      'A refreshing salad made with cucumbers, tomatoes, olives, feta cheese, and olive oil.',
    ingredients: [
      { name: 'Cucumber', quantity: 1, unit: 'pcs' },
      { name: 'Tomatoes', quantity: 3, unit: 'pcs' },
      { name: 'Feta Cheese', quantity: 100, unit: 'g' },
      { name: 'Olives', quantity: 50, unit: 'g' },
    ],
    imageUrl: 'assets/images/greek-salad.jpg',
  },
  {
    id: '4',
    name: 'Beef Tacos',
    description:
      'Crispy taco shells filled with seasoned ground beef, lettuce, and cheese.',
    ingredients: [
      { name: 'Ground Beef', quantity: 300, unit: 'g' },
      { name: 'Taco Shells', quantity: 6, unit: 'pcs' },
      { name: 'Lettuce', quantity: 100, unit: 'g' },
      { name: 'Cheese', quantity: 50, unit: 'g' },
    ],
    imageUrl: 'assets/images/beef-tacos.jpg',
  },
];
