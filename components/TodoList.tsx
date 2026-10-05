import type { Todo } from "../types/todo";
import type { Translation } from "../localization/translations";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  t: Translation;
}

export default function TodoList({ todos, onToggle, onDelete, t }: Props) {
  if (todos.length === 0) return <p>{t.empty}</p>;

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} t={t} />
      ))}
    </ul>
  );
}
