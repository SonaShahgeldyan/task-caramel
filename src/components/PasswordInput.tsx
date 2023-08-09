import { Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";

export default function PasswordInput({ field, ...props }: { field: {} }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      {...props}
      {...field}
    />
  );
}
