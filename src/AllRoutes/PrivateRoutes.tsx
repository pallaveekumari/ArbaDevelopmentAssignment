import { Navigate } from "react-router-dom";
interface Props {
  component: React.ComponentType;
  path: string;
}
export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  path,
}) => {
  const isAuthenticated: any = localStorage.getItem("token") != undefined;
  if (isAuthenticated) {
    return <RouteComponent />;
  }
  return <Navigate to={path} />;
};
