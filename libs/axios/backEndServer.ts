import axios from "axios";

const backEndServer = axios.create({
  baseURL: "https://test-domain-devunity.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url: string) => {
  try {
    const response = await backEndServer.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data: any) => {
  try {
    const response = await backEndServer.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default backEndServer;
