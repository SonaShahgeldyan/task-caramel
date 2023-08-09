export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ITransform<T> {
  onSubmit(newValue: Partial<T>): Promise<void>;

  initialValues: Partial<T>;
  submitText?: string;
}

export interface IRegisterResponseData {
  access_token: string;
}
