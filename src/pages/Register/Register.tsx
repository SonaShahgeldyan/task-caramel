import { Button, Card, CardBody } from "@nextui-org/react";

import { Field, Form, Formik } from "formik";
import { IRegisterData } from "../../types/register.type";
import { registerInitialValues } from "../../constants/initialValues.constants";
import PasswordInput from "../../components/PasswordInput";
import { sendRegistrationData } from "../../services/register.service";
import { RegisterFormSchema } from "../../schemas/register/register.schema";
import InputField from "../../components/Input";
import { setRegisterTrue } from "../../store/slices/register/RegisterSlice";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = async (data: IRegisterData) => {
    if (data.password === data.password_confirmation) {
      await sendRegistrationData(data);

      dispatch(setRegisterTrue());
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="flex items-center" style={{ width: 400 }}>
        <CardBody className="flex items-center gap-3">
          <Formik
            onSubmit={handleSubmit}
            initialValues={registerInitialValues}
            enableReinitialize
            validationSchema={RegisterFormSchema}
          >
            {(props) => (
              <Form name="filters-1">
                <Field
                  name="name"
                  label="Name"
                  variant="bordered"
                  placeholder="Enter your name"
                  className="max-w-xs"
                  component={InputField}
                />
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
                <Field
                  name="password_confirmation"
                  label="Confirm Password"
                  variant="bordered"
                  placeholder="Confirm your Password"
                  className="max-w-xs"
                  component={PasswordInput}
                />

                <div>
                  <Button color="primary" variant="light" type="reset">
                    Reset
                  </Button>
                  <Button color="primary" type="submit">
                    Apply
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
