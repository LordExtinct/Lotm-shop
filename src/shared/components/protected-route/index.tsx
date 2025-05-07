import { Navigate } from "react-router-dom";
import { userStore } from "../../store/auth/user-store";
import { observer } from "mobx-react-lite";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = observer(({ children }: ProtectedRouteProps) => {
  const { user } = userStore;

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}); 