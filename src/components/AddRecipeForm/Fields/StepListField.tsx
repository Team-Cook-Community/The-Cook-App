import { Button } from "@heroui/react";
import StepField from "./StepField";
import { PlusIcon } from "@phosphor-icons/react";

export default function StepListField({
  className,
  stepFields,
  addStep,
  removeStep,
}: any) {
  const handleAddStep = () => {
    addStep({ img: undefined, desc: "" });
  };

  const handleRemoveStep = (index: number) => {
    if (stepFields.length === 1) return;
    removeStep(index);
  };

  return (
    <div className={`w-full flex flex-col gap-5 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold mb-[24px]!">Instructions</h2>
        {stepFields.map((_: any, i: number) => (
          <StepField key={i} index={i} onRemove={handleRemoveStep} />
        ))}
      </div>
      <Button
        className="w-fit bg-gray self-end"
        radius="full"
        onPress={handleAddStep}
        title="Add Step"
        isIconOnly
      >
        <PlusIcon size={15} weight="bold" />
      </Button>
    </div>
  );
}
