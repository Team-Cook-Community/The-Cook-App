import { useFormContext } from "react-hook-form";

export default function TitleField() {
  const { register } = useFormContext();

  return (
    <div className="border-b border-b-default-300">
      <input
        className="w-full py-2 outline-none text-[32px] font-semibold"
        type="text"
        placeholder="Recipe Name"
        {...register("title")}
      />
    </div>
  );
}
