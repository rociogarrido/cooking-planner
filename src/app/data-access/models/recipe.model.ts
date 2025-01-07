export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl?: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}
