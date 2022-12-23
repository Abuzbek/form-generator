import { IDocumentBody } from "@/models";
import { Service } from "@/service";
import { AxiosError } from "axios";

export const getListOfDocuments = async () => {
  try {
    const response = await Service.getListOfDocuments();
    return response;
  } catch (err) {
    const error = err as AxiosError;
    return error.response;
  }
};

export const getDocumentById = async (id: number) => {
  try {
    const response = await Service.getDocumentById(id);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    return error.response;
  }
};

export const createDocument = async (body: IDocumentBody) => {
  try {
    const response = await Service.createDocument(body);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    return error.response;
  }
};
