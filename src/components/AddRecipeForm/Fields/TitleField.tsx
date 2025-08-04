import { useFormContext } from "react-hook-form";

export default function TitleField({ required = false, errorMessage }: any) {
  const { register } = useFormContext();

  return (
    <div className="border-b border-b-default-300">
      <input
        className="w-full py-2 outline-none text-3xl font-semibold"
        type="text"
        placeholder="Recipe Name"
        {...register("title", {
          required: required
            ? errorMessage || "A recipe title is required"
            : false,
        })}
      />
    </div>
  );
}
