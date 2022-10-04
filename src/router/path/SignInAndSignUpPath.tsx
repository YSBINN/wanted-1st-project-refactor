import SignInAndSignUp from 'pages/signInAndSignUp';
import TodoLists from 'pages/todoLists';
import { Navigate, RouteObject } from 'react-router-dom';

export default function SignInAndSignUpPath(token: boolean): RouteObject[] {
    return [
        {
            path: '/',
            element: token ? <Navigate to="todo" replace /> : <SignInAndSignUp />,
        },
    ];
}
