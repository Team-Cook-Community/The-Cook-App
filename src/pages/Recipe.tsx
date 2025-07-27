import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { fullRecipes } from "@data/recipe";

import RecipeViewer from "@components/RecipeViewer";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !(id in fullRecipes)) {
      navigate("/404", { replace: true });
    }
  }, [id, navigate]);

  if (!id || !(id in fullRecipes)) {
    return null;
  }

  const recipe = fullRecipes[id];
  return <RecipeViewer recipe={recipe} />;
}


