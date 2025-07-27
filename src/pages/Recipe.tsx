import { useParams, useNavigate } from "react-router-dom";

import { fullRecipes } from "@data/recipe";

import RecipeViewer from "@components/RecipeViewer";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return navigate("/404");

  const recipe = fullRecipes[id];

  return <RecipeViewer recipe={recipe} />;
}
