import { IDocument, IDocumentBody, IDocumentDetail } from "@/models";
import { $api } from "@/utils/$api";
import { AxiosResponse } from "axios";

export class Service {
  static async getListOfDocuments(): Promise<AxiosResponse<IDocument[]>> {
    return await $api({
      method: "GET",
      url: "api/v1/documents",
    });
  }

  static async getDocumentById(
    id: number
  ): Promise<AxiosResponse<IDocumentDetail>> {
    return await $api({
      method: "GET",
      url: `api/v1/document/${id}`,
    });
  }

  static async createDocument(data: IDocumentBody) {
    return await $api({
      method: "POST",
      url: `api/v1/documents/create`,
      data,
    });
  }
}
