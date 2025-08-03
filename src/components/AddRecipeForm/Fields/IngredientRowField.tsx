import { useFormContext } from "react-hook-form";

import { Button } from "@heroui/react";
import { TrashIcon } from "@phosphor-icons/react";

export default function IngredientRowField({ index, onRemove }: any) {
  const { register } = useFormContext();

  return (
    <div className="flex justify-between gap-2 border-b-1 border-dashed!">
      <input
        className="w-1/2 py-2 outline-none"
        placeholder="e.g. Angus Steak"
        {...register(`ingredients.${index}.item`)}
      />
      <input
        className="w-1/2 py-2 outline-none text-right"
        placeholder="e.g. 16 oz"
        {...register(`ingredients.${index}.amount`)}
      />
      <Button
        className="bg-transparent"
        onPress={() => onRemove(index)}
        title="Delete Ingredient"
        isIconOnly
      >
        <TrashIcon size={20} weight="regular" />
      </Button>
    </div>
  );
}
