export async function getPostById(id: number = 1) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function getUserById(id: number = 1) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
