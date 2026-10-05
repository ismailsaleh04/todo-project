import type { Todo } from "../types/todo";
import type { Translation } from "../localization/translations";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  t: Translation;
}

export default function TodoItem({ todo, onToggle, onDelete, t }: Props) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span>{todo.title}</span>
      </label>
      <button className="delete" aria-label={t.delete} title={t.delete} onClick={() => onDelete(todo.id)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
    </li>
  );
}
