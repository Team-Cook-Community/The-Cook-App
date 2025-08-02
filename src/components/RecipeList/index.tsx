import Masonry from "react-responsive-masonry";
import { ScrollShadow } from "@heroui/react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipeData }: any) {
  return (
    <ScrollShadow className="size-full" isEnabled={false} hideScrollBar>
      <Masonry columnsCount={2} className="size-full gap-2! px-2 pt-2">
        {recipeData.map((recipe: any) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Masonry>
    </ScrollShadow>
  );
}
