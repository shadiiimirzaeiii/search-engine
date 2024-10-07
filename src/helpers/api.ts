import httpRequest from "@helpers/httpRequest";

export const getRequest = async <T>({ url, params = {} }: { url: string, params: Record<string, unknown> }): Promise<T | unknown> => {
  try {
    const { data } = await httpRequest.get<T>(url, { params });
    return data;
  } catch (error) {
    return error;
  }
};