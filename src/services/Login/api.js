import request from "../request";

export const signIn = async (object) => {
  return await request.post('login', { ...object });
}

