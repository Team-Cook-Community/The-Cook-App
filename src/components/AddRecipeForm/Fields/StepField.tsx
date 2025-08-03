import {
  ControlledImageUploadField,
  ControlledTextareaField,
} from "@components/Fields";
import { TrashIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/react";

export default function StepField({ index, onRemove }: any) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">Step {index + 1}</h3>
        <Button
          className="bg-transparent"
          onPress={() => onRemove(index)}
          title="Delete Step"
          isIconOnly
        >
          <TrashIcon size={20} weight="regular" />
        </Button>
      </div>
      <ControlledImageUploadField name={`steps.${index}.img`} />
      <ControlledTextareaField
        name={`steps.${index}.desc`}
        minHeight={100}
        placeholder="Add Instructions"
      />
    </div>
  );
}
