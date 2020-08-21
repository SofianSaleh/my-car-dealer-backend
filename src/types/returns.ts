export interface responseTrue {
  success: boolean;
  res: Response;
}
export interface responseFalse {
    success: boolean;
  error: [{
      msg: string,
      location:string
  }];
}
