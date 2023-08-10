import { Button, Card, CardBody } from "@nextui-org/react";

import { Field, Form, Formik } from "formik";
import InputField from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import { loginInitialValues } from "../../constants/initialValues.constants";
import { LoginFormSchema } from "../../schemas/login/login.schema";
import { ILoginData } from "../../types/login.type";
import { sendLoginData } from "../../services/login.service";

export default function Login() {
  const handleSubmit = async (data: ILoginData) => {
    const res = await sendLoginData(data);
    localStorage.setItem("token", JSON.stringify(res.access_token));
  };

  return (
    <div className="flex justify-center">
      <Card className="flex items-center" style={{ width: 400 }}>
        <CardBody className="flex items-center gap-3">
          <Formik
            onSubmit={handleSubmit}
            initialValues={loginInitialValues}
            enableReinitialize
            validationSchema={LoginFormSchema}
          >
            {(props) => (
              <Form name="filters-1">
                <Field
                  name="email"
                  label="Email"
                  variant="bordered"
                  placeholder="Enter your Email"
                  className="max-w-xs"
                  component={InputField}
                />
                <Field
                  name="password"
                  label="Password"
                  variant="bordered"
                  placeholder="Enter your Password"
                  className="max-w-xs"
                  component={PasswordInput}
                />

                <div>
                  <Button color="primary" variant="light" type="reset">
                    Reset
                  </Button>
                  <Button color="primary" type="submit">
                    login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}
