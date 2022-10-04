import SignInAndSignUp from 'pages/signInAndSignUp';
import TodoLists from 'pages/todoLists';
import { Navigate, RouteObject } from 'react-router-dom';

export default function TodoListsPath(token: boolean): RouteObject[] {
    return [
        {
            path: '/todo',
            element: token ? <TodoLists /> : <Navigate to="/" replace />,
        },
    ];
}
