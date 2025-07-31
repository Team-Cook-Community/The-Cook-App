import { useState } from "react";

import { Image, ScrollShadow } from "@heroui/react";
import PostCard from "@components/PostCard";
import StepCard from "./StepCard";
import IngredientTable from "./IngredientTable";

export default function RecipeViewer({ recipe }: any) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <ScrollShadow className="size-full" hideScrollBar>
      <article className="w-full h-full flex flex-col gap-5">
        <div>
          <Image
            src={recipe.coverImg}
            alt={recipe.title}
            className="object-cover"
            width={"100%"}
            height={250}
            radius="none"
            onLoad={handleLoad}
            isLoading={isLoading}
          />
        </div>
        <div>
          <PostCard
            creator={recipe.creator}
            shadow="none"
            radius="none"
            isLoading={isLoading}
            className="px-1"
          >
            {recipe.desc}
          </PostCard>
        </div>
        <IngredientTable
          className="px-[16px] pb-[12px]"
          isLoading={isLoading}
          data={recipe.ingredients}
        />
        <div className="flex flex-col gap-5 px-1">
          {recipe.steps.map((step: any) => (
            <StepCard step={step} key={`${recipe.id}-step-${step.stepNum}`} />
          ))}
        </div>
      </article>
    </ScrollShadow>
  );
}
