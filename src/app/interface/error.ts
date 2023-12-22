export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSource;
};

export  type TErrorSource={
    path:string |number
    message:string
  }[];