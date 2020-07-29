export const verifyForms = async (data) => {
  let listErrors = {};
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (
      data[Object.keys(data)[i]] === undefined ||
      data[Object.keys(data)[i]] === ""
    ) {
      listErrors[Object.keys(data)[i]] = "Ne doit pas etre vide!";
    }
  }
  return {
    listErrors,
    valid: Object.keys(listErrors).length === 0 ? true : false,
  };
};

export const atLeastOneTrue = async (data) => {
  let bool = false;
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (data[Object.keys(data)[i]]) {
      bool = true;
      break;
    }
  }
  return {
    listErrors: "Veuillez faire au moins un choix.",
    valid: bool,
  };
};
