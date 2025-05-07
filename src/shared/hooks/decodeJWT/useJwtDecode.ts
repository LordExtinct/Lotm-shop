import { useCallback } from "react";

type JwtPayload = {
  id?: number;
  name?: string;
  email?: string;
  iat?: number;
  exp?: number;
};

export const useJwtDecode = () => {
  const decodeJwt = useCallback((token: string): JwtPayload | null => {
    try {
      const bazed = token.split(".")[1];
      const bazed64 = bazed.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(bazed64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      return JSON.parse(jsonPayload);
    } catch (e) {
      console.log(e);
      return null;
    }
  }, []);

  return { decodeJwt };
};
