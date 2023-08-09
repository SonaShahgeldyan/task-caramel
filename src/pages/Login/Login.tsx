import { Card, CardBody, Input, Spacer } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../../components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../components/icons/EyeFilledIcon";
import { useState } from "react";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center">
      <Card className="flex items-center" style={{ width: 400 }}>
        <CardBody className="flex items-center gap-3">
          <Input
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your password"
            className="max-w-xs"
          />
          <Spacer x={4} />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
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
          />
        </CardBody>
      </Card>
    </div>
  );
}
