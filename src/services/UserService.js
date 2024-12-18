import axios from "axios";
import { InfoUrl } from "../until/InfoUrl";
const UserService = {
  fetchTeamsByUserId: async (userId) => {
    try {
      const response = await axios.get(
        `${InfoUrl}/api/users/${userId}/same-project`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  calculateWorkingTime: (startDate) => {
    const endDate = new Date();
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    return diffDays;
  },
  uploadAvatar: async (user, formData) => {
    try {
      const jwt = localStorage.getItem("accessToken");

      const response = await axios.put(
        `${InfoUrl}/api/users/${user.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${jwt}`, // Di chuyển vào headers
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  fetchUserById: async (userId) => {
    try {
      const response = await axios.get(`${InfoUrl}/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default UserService;
