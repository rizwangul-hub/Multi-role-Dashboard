import { Navigate, useLocation } from "react-router-dom";

// ProtectedRoute component
// Props:
// - children: The component to render if authorized
// - allowedRoles: Array of roles that can access this route (e.g., ['admin', 'customer', 'marketing', 'sale'])
// If allowedRoles is not provided, only checks if user is logged in

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();

  // Check if user is logged in
  const isAuthenticated = localStorage.getItem("userData");
  const userRole = localStorage.getItem("role");

  // If not logged in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If allowedRoles is provided, check user role
  if (allowedRoles && allowedRoles.length > 0) {
    // Parse the stored user to get role
    const storedUser = JSON.parse(isAuthenticated);
    const userRoleFromStorage = storedUser.role;

    // Check if user's role is in allowed roles
    if (!allowedRoles.includes(userRoleFromStorage)) {
      // User doesn't have permission, redirect to their dashboard
      return <Navigate to="/dashboards" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
