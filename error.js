async function fetchUser(userId) {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
   
    return null;
  }
}

const userId = "bmizerany";

fetchUser(userId)
  .then((userData) => {
    if (userData) {
      console.log(`User data for ${userId}:`);
      console.log(userData);
    } else {
      console.log("Failed to fetch user data.");
    }
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error);
  });
