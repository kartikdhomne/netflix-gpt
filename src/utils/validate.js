export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[A-Za-z]+([ A-Za-z]+)*/.test(name);

  if (!isEmailValid) return "Email ID is not a valid email";
  if (!isPasswordValid) return "Password is not a valid";
  if (!isNameValid) return "Name is not a valid";

  return null;
};
