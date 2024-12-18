import axios from "axios";
import { InfoUrl } from "../until/InfoUrl";
const ProjectService = {
    fetchProjectById: async (projectId) => {
        try {
            const response = await axios.get(`${InfoUrl}/api/projects/${projectId}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
};
export default ProjectService;