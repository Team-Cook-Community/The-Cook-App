import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router";

import { recipeList, fullRecipes } from "@data/recipe";

import { Button, Form, ScrollShadow } from "@heroui/react";
import { TitleField, IngredientTableField, StepListField } from "./Fields";

import {
  ControlledImageUploadField,
  ControlledTextareaField,
} from "@components/Fields";

function FormButtonContainer({ className }: any) {
  return (
    <div className={`w-full px-[16px] flex gap-4 ${className}`}>
      <Button
        type="button"
        className="bg-gray text-md font-semibold h-12 w-1/2"
        title="Save as Draft"
      >
        Draft
      </Button>
      <Button
        type="submit"
        className="bg-obsidian text-snow text-md font-semibold h-12 w-1/2"
        title="Submit"
      >
        Submit
      </Button>
    </div>
  );
}

export default function AddRecipeForm() {
  const methods = useForm({
    defaultValues: {
      coverImg: undefined,
      title: "",
      creator: {
        avatar: null,
        firstName: "User",
        lastName: "Test Alpha",
        username: "test_user",
      },
      desc: "",
      ingredients: [
        { item: "", amount: "" },
        { item: "", amount: "" },
      ],
      steps: [{ img: undefined, desc: "" }],
    },
  });

  const { control, handleSubmit } = methods;

  const {
    fields: ingredientFields,
    append: addIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: stepFields,
    append: addStep,
    remove: removeStep,
  } = useFieldArray({
    control,
    name: "steps",
  });

  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    const id = recipeList.length + 1;

    const newRecipe = {
      title: data.title,
      coverImg: data.coverImg,
      creator: data.creator,
      likes: 0,
      id: id,
    };

    const steps = data.steps
      .filter(({ img, desc }: any) => img || desc)
      .map((step: any, index: number) => ({
        stepNum: index + 1,
        ...step,
      }));

    const ingredients = data.ingredients
      .filter((ingredient: any) => ingredient.item)
      .reduce((acc: any, { item, amount }: any) => {
        acc[item] = amount;
        return acc;
      }, {});

    const newFullRecipe = {
      ...newRecipe,
      steps,
      ingredients,
      desc: data.desc,
    };

    recipeList.push(newRecipe);
    fullRecipes[id] = newFullRecipe;
    navigate(`/recipe/${id}`);
  };

  return (
    <ScrollShadow className="size-full" isEnabled={false} hideScrollBar>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <ControlledImageUploadField name="coverImg" />
          <div className="w-full px-[16px] flex flex-col gap-2">
            <TitleField />
            <ControlledTextareaField
              className="w-full py-2 outline-none text-[16px]"
              placeholder="Description"
              minHeight={150}
              name="desc"
            />
            <IngredientTableField
              ingredientFields={ingredientFields}
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
            />
            <StepListField
              stepFields={stepFields}
              addStep={addStep}
              removeStep={removeStep}
            />
          </div>
          <FormButtonContainer className="my-4" />
        </Form>
      </FormProvider>
    </ScrollShadow>
  );
}
