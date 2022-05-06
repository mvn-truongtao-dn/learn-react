import { api } from "../api";
import { ENDPOINTS } from "../endpoints";

export const apiProductGetList = () => {
  return api.get(ENDPOINTS.products);
};

export const apiProductGetDetails = (id) => {
  return api.get(`${ENDPOINTS.products}/${id}`);
};
