import Link from 'next/link';

type TodoIdProps = {
  params: {
    todoId: string;
  };
};

export interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: TodoType[] = await res.json();

  const trimmedTodos = todos.splice(0, 10); // api 차단 방지

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    cache: 'force-cache',
  });
  const todo: TodoType = await res.json();
  return todo;
};

async function TodoId({ params: { todoId } }: TodoIdProps) {
  const todo = await fetchTodo(todoId);

  return (
    <div className="bg-slate-300 p-2">
      <div>Todo Id : {todoId}</div>
      <div>Todo Title : {todo.title}</div>
      <div className="border-t border-black py-2">
        Completed :{todo.completed ? <span> Yes</span> : <span> No</span>}
      </div>
      <Link
        className="bg-blue-500 hoverclassNamelue-700 text-white font-bold py-2 px-4 rounded"
        href="/todos"
      >
        돌아가기
      </Link>
    </div>
  );
}

export default TodoId;
