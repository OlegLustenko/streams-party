export interface User {
  name: string;
  email: string;
  thumbnail: string;
  isActive: boolean;
}

export const usersAPI = {
  getUsers(): Promise<User[]> {
    return fetch("/users-random").then(response => response.json());
  }
};
