import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('First Recipe',
    'This is a simple test',
    'http://picturetherecipe.com/wp-content/uploads/2018/05/Persian-Chicken-Kebab-Featured-680x900.jpg',
[

    new Ingredient('apple', 5),
    new Ingredient('mango', 10)


]
    ),
    // tslint:disable-next-line: max-line-length
    new Recipe('Second Recipe',
     'This is a simple test',
     'http://picturetherecipe.com/wp-content/uploads/2018/05/Spicy-Pork-Vindaloo-PictureTheRecipe-Featured-680x900.jpg',
     [
      new Ingredient('apple', 5),
      new Ingredient('mango', 10)
     ]),
    // tslint:disable-next-line: max-line-length
    new Recipe('Third Recipe',
     'This is a simple test',
     'https://image.shutterstock.com/image-vector/screen-printing-pattern-radiant-frame-600w-432360148.jpg',
    [
      new Ingredient('apple', 5),
      new Ingredient('mango', 10)
    ] )
  ];
  constructor(private slService: ShopingListService){}
getRecipes (){
  return this.recipes.slice();
}
addIngredientsToShopingList(ingredients: Ingredient[]){
 this.slService.addIngredients(ingredients);
}
}
