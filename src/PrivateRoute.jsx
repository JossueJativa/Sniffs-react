import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element: Component }) => {
    const isAuthenticated = localStorage.getItem('access_token');

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};