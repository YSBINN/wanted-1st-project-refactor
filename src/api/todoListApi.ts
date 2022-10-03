import { BASE_URL } from 'config';
import { TodoPostType, TodoUpdateType } from 'types/db/todo';
import axiosInstance from './axiosInstance';

class todoListApi extends axiosInstance {
    public async postTodoList(todoList: TodoPostType) {
        const { data } = await this.axios.post('todos', todoList);
        return data;
    }
    public async getTodoList() {
        const { data } = await this.axios.get('todos');
        return data;
    }
    public async updateTodoList(updateTodo: TodoUpdateType) {
        const { data } = await this.axios.put(`todos/${updateTodo.id}`, updateTodo.data);
        return data;
    }
    public async deleteTodoList(todoListId: number) {
        const { data } = await this.axios.delete(`todos/${todoListId}`);
        return data;
    }
}

export default new todoListApi(BASE_URL);
