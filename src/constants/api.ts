export const BASE_API_URL = `${process.env.NEXT_PUBLIC_BASE_API_ADDRESS}/api`;
export const LOGIN_URL = `${BASE_API_URL}/auth/login`;
export const SIGNUP_URL = `${BASE_API_URL}/auth/signup`;
export const SELF_URL = `${BASE_API_URL}/auth/self`;
export const TRANSFORM_URL = `${BASE_API_URL}/transform`;
export const GET_ART_URL = (id: string)=>`${BASE_API_URL}/arts/${id}`;
