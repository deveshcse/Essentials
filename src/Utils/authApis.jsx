
export const registerUser = async ({ username, email, password }) => {
  const url = "https://api.freeapi.app/api/v1/users/register";
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      role: "USER",
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    alert(data.message);
  } catch (error) {
    console.error(error);
  }
};








export const loginUser = async ({ email, password }) => {
  console.log("login",email, password);
  
  const url = "https://api.freeapi.app/api/v1/users/login";
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
