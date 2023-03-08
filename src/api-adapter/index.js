import { saveToLocalStorage } from "../utils/localStorage";

const BASE_URL = "https://juicebox-mld2.onrender.com/api";
// const BASE_URL = "https://pelnik.dev/api/juicebox";

export async function login(username, password) {
  try {
    let token = null;

    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const fullResponse = await response.json();
    console.log("login response", fullResponse);

    if ("token" in fullResponse) {
      token = fullResponse.token;
      saveToLocalStorage(token);
    }

    return token;
  } catch (error) {
    console.error(error);
  }
}

export async function getPosts(token) {
  const headerObject = {
    "Content-Type": "application/json",
  };

  if (token !== "") {
    headerObject.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: headerObject,
    });

    const fullResponse = await response.json();
    console.log("getPosts response", fullResponse);

    const posts = fullResponse.posts;

    return posts;
  } catch (error) {
    console.error(error);
  }
}

export async function register(user) {
  try {
    let token = null;

    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        name: user.name,
        location: user.location,
      }),
    });
    const fullResponse = await response.json();
    console.log("register response", fullResponse);

    if ("token" in fullResponse) {
      token = fullResponse.token;
      saveToLocalStorage(token);
    }

    return token;
  } catch (error) {
    console.error(error);
  }
}
