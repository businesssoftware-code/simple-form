
import axios, { AxiosError } from 'axios';
import { ApiErrorResponse } from '../types/type';





export const publicAPI = axios.create({

    baseURL: process.env.NEXT_PUBLIC_API_BASE_POINT,
    

});

export function getErrorMessage(err: unknown): string {
  const axiosErr = err as AxiosError<ApiErrorResponse>;

  const apiError = axiosErr.response?.data;
   
    const apiMessage = Array.isArray(apiError?.message)
    ? apiError?.message[0]
    : apiError?.message;

  return (
    apiMessage   ||
    apiError?.error ||    
    apiError?.statusCode?.toString() ||
    axiosErr.message ||
    "Something went wrong"
  );
}
