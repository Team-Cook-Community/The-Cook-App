import { recipeList } from "@data/recipe.ts";

import RecipeList from "@components/RecipeList";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] size-full">
      <RecipeList recipeData={recipeList} />
    </div>
  );
}
