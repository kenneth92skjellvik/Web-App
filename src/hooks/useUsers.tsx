import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../interface/user";


// Custom hook for users
const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Get all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Create user
  const createUser = async (user: Partial<User>) => {
    try {
      const response = await axios.post<User>("/api/users", user);
      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Update user by ID
  const updateUser = async (user: User) => {
    try {
      const response = await axios.put<User>(`/api/users/${user._id}`, user);
      setUsers((prevUsers) => {
        const index = prevUsers.findIndex((u) => u._id === user._id);
        const newUsers = [...prevUsers];
        newUsers[index] = response.data;
        return newUsers;
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete user by ID
  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Get user by ID
  const getUser = async (id: string) => {
    try {
      const response = await axios.get<User>(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };

  //Get user by pagination
  const getUserByPagination = async (page: number, limit: number) => {
    try {
      const response = await axios.get<User>(`/api/users/${page}/${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };

  return {
    users,
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUserByPagination,
  };
};

export default useUsers;