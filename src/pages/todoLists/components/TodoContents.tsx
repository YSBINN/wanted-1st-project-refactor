import styled from 'styled-components';
import { TodoDataType } from 'types/db/todo';
import TodoList from './TodoList';

export default function TodoContents({ todos, setTodos }: TodoContentsProps) {
    return (
        <Container>
            {todos &&
                todos.map((v: TodoDataType) => (
                    <TodoList todos={todos} key={v.id} todo={v} setTodos={setTodos} />
                ))}
        </Container>
    );
}

interface TodoContentsProps {
    todos: TodoDataType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoDataType[]>>;
}

const Container = styled.div`
    width: 360px;
    padding-bottom: 120px;
    margin: 0 auto;
`;
