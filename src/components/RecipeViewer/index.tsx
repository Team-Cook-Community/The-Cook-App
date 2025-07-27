import { Image, ScrollShadow } from "@heroui/react";
import PostCard from "@components/PostCard";
import StepCard from "./StepCard";

export default function RecipeViewer({ recipe }: any) {
  return (
    <ScrollShadow className="size-full" hideScrollBar>
      <article className="w-full h-full flex flex-col gap-3">
        <Image
          src={recipe.coverImg}
          alt={recipe.title}
          className="object-cover"
          width={"100%"}
          height={250}
          radius="none"
        />
        <div>
          <PostCard creator={recipe.creator} shadow="none" radius="none" className="p-1">
            {recipe.desc}
          </PostCard>
        </div>
        <div className="flex flex-col gap-5 p-1">
          {recipe.steps.map((step: any) => (
            <StepCard step={step} key={`${recipe.id}-step-${step.stepNum}`} />
          ))}
        </div>
      </article>
    </ScrollShadow>
  );
}
