import { Button } from "@heroui/react";
import IngredientRowField from "./IngredientRowField";
import { PlusIcon } from "@phosphor-icons/react";

export default function IngredientTableField({
  className,
  ingredientFields,
  addIngredient,
  removeIngredient,
}: any) {
  const handleAddIngredientRow = () => {
    addIngredient({ item: "", amount: "" });
  };

  const handleRemoveIngredientRow = (index: number) => {
    if (ingredientFields.length === 1) return;
    removeIngredient(index);
  };

  return (
    <div className={`w-full flex flex-col gap-5 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold mb-[16px]!">Ingredients</h2>
        {ingredientFields.map((_: any, i: number) => (
          <IngredientRowField
            key={i}
            index={i}
            onRemove={handleRemoveIngredientRow}
          />
        ))}
      </div>
      <Button
        className="w-fit bg-gray self-end"
        radius="full"
        onPress={handleAddIngredientRow}
        title="Add Ingredient"
        isIconOnly
      >
        <PlusIcon size={15} weight="bold" />
      </Button>
    </div>
  );
}
