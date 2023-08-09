import { Input } from "@nextui-org/react";

export default function InputField({ field, ...props }: { field: {} }) {
  return <Input className="max-w-xs" {...props} {...field} />;
}
