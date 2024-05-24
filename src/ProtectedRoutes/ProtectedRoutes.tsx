import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../services/verify-token";
import { useLoadingStore } from "../Loading-store";
import LoadingState from "../components/LoadingState";

export default function ProtectedRoutes({ children }) {
  const { API_URL, setIsLoading, authToken } = useLoadingStore();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const vToken = async () => {
      const { error, result } = await verifyToken(`${API_URL}auth/verify`, authToken, setIsLoading, setIsAuthorized);
      console.log(result);
    };

    vToken();
  }, [authToken, API_URL, setIsLoading]);

  if (isAuthorized === null) {
    return <LoadingState />;
  } else if (isAuthorized === true) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}
