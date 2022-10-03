import { TOKEN_KEY } from 'config';
import { useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TokenService from 'services/tokenService';

const PrivateRoute = () => {
    // login auth : redirect "/"
    const auth = useRef<string | null>(TokenService.get(TOKEN_KEY as string));

    return auth.current ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
