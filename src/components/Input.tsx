import { Input } from "@nextui-org/react";
import React from "react";

export default function InputField({ field, ...props }: { field: {} }) {
  return <Input className="max-w-xs" {...props} {...field} />;
}
