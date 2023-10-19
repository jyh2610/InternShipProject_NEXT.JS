import axiosInstance from "./baseApi";

import type { AxiosRequestConfig } from "axios";

type IAxiosParams = {
  url?: string;
  options?: AxiosRequestConfig;
  body?: unknown;
};

export class baseApi {
  private axiosInstance = axiosInstance;
  reSettingURL(url: string) {
    this.axiosInstance.defaults.baseURL = url;
  }

  addHeaders(header: {}) {
    return {
      ...this.axiosInstance.defaults.headers,
      ...header,
    } as AxiosRequestConfig["headers"];
  }

  async get({ url = "/", options = {} }: IAxiosParams) {
    try {
      const data = await axiosInstance.get(url, {
        ...options,
        headers: this.addHeaders(options.headers!),
      });
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async post({ url = "/", options = {}, body = {} }: IAxiosParams) {
    try {
      const data = await axiosInstance.post(url, body, {
        ...options,
        headers: this.addHeaders(options.headers!),
      });
      return data.data.refreshToken;
    } catch (error) {
      console.error(error);
    }
  }
  async withTokenPost(token: string, { url = "/", options = {}, body = {} }: IAxiosParams) {
    this.axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
    try {
      const data = await axiosInstance.post(url, body, {
        ...options,
        headers: this.addHeaders(options.headers!),
      });
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }

  async put({ url = "/", options = {}, body = {} }: IAxiosParams) {
    try {
      const data = await axiosInstance.put(url, body, {
        ...options,
        headers: this.addHeaders(options.headers!),
      });
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete({ url = "/", options = {} }: IAxiosParams) {
    try {
      const data = await axiosInstance.delete(url, {
        ...options,
        headers: this.addHeaders(options.headers!),
      });
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
