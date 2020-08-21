export const validationErrorHandler = (err: any) => {
  let arr: { field: any; msg: any }[] = [];
  err.extensions.exception.validationErrors.forEach((error: any) => {
    let constr = Object.values(error.constraints);
    constr.forEach((element: any) => {
      arr.push({ field: error.property, msg: element });
    });
  });
  return arr;
};
