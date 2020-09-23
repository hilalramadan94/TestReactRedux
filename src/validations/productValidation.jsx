const productValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Please input name";
  }

  if (!values.price || values.price === "") {
    errors.price = "Please input price";
  }

  return errors;
};

export default productValidation;
