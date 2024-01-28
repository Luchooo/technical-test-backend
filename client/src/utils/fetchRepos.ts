import { UserRepositories } from "../types";

export const fetchRepos = async (pathName: string): Promise<UserRepositories> => {
  try {
    const url = new URL(pathName, "https://technical-test-backend-6vi1.onrender.com/");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching repositories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};