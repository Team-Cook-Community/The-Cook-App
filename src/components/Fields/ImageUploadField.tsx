import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

import ImagePlaceholder from "@assets/images/placeholders/image-placeholder.png";

import { Button, Image } from "@heroui/react";

export function ControlledImageUploadField({
  name,
  required = false,
  errorMessage,
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={required && errorMessage ? { required: errorMessage } : {}}
      render={({ field }) => (
        <ImageUploadField image={field.value} onUpload={field.onChange} />
      )}
    />
  );
}

export default function ImageUploadField({ image, onUpload }: any) {
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileUploadRef.current?.click();
  };

  const handleFileUploadChange = async () => {
    const file = fileUploadRef.current?.files?.[0];
    const cachedImage = URL.createObjectURL(file!);
    onUpload(cachedImage);
  };

  return (
    <div className="w-full h-fit">
      <Button
        className="h-fit w-full p-0"
        title="Upload Image"
        radius="none"
        onPress={handleImageClick}
      >
        <Image
          src={image || ImagePlaceholder}
          title="Upload Image"
          className="object-cover"
          width={"100%"}
          height={250}
          radius="none"
          removeWrapper
        />
      </Button>
      <input
        type="file"
        ref={fileUploadRef}
        onChange={handleFileUploadChange}
        hidden
      />
    </div>
  );
}
