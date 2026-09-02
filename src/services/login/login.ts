import type { LoginSchema } from "../../components/pages/Login/login.schema";
import { api } from "../api";
import type { AuthUser } from "../../stores/authStore";

interface LoginResponse {
  token: string;
  user: AuthUser;
}

export async function login(data: LoginSchema) {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data;
}
