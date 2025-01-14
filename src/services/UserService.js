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
  async uploadAvatar(user, formData) {
    try {
      const jwt = localStorage.getItem("accessToken");
  
      // Gọi API PUT để upload avatar, sử dụng formData
      const response = await axios.put(
        `${InfoUrl}/api/users/updateUserWithAvatar/${user.id}`,
        formData,  // Truyền formData chứa avatar
        {
          headers: {
            "Content-Type": "multipart/form-data",  // Đảm bảo gửi đúng Content-Type
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
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
