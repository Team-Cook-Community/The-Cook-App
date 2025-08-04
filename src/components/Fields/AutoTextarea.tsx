import { useRef, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

export function ControlledTextareaField({
  minHeight,
  name,
  required = false,
  errorMessage,
  ...props
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={required && errorMessage ? { required: errorMessage } : {}}
      render={({ field }) => (
        <AutoTextarea
          value={field.value}
          onChange={field.onChange}
          minHeight={minHeight}
          name={name}
          {...props}
        />
      )}
    />
  );
}

export default function AutoTextarea({
  minHeight = 0,
  value,
  onChange,
  className,
  ...props
}: any) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${
        el.scrollHeight < minHeight ? minHeight : el.scrollHeight
      }px`;
    }
  };

  useEffect(() => {
    resize();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e)}
      onInput={resize}
      className={`outline-none resize-none overflow-hidden scrollbar-hide ${className}`}
      {...props}
    />
  );
}
