export type InferActionsTypes<T> = T extends
{ [keys: string]: (...args: never[]) => infer U }
  ? U
  : never;
