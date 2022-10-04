import SignInAndSignUpPath from './path/SignInAndSignUpPath';
import TodoListsPath from './path/TodoListPath';

export default function Routes(token: boolean) {
    return [...SignInAndSignUpPath(token), ...TodoListsPath(token)];
}
