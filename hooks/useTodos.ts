import { useCallback, useEffect, useRef, useState } from "react";
import type { Filter, Todo } from "../types/todo";
import { fetchTodos } from "../services/todoService";

export type Status = "loading" | "error" | "ready";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [filter, setFilter] = useState<Filter>("all");
  const [attempt, setAttempt] = useState(0);
  const nextId = useRef(1000);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetchTodos()
      .then((data) => {
        if (cancelled) return;
        setTodos(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  // Returns false when the title is empty or only spaces.
  const addTodo = useCallback((title: string): boolean => {
    const trimmed = title.trim();
    if (!trimmed) return false;
    setTodos((prev) => [...prev, { id: nextId.current++, title: trimmed, completed: false }]);
    return true;
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const itemsLeft = todos.filter((todo) => !todo.completed).length;
  const visibleTodos = todos.filter((todo) =>
    filter === "all" ? true : filter === "active" ? !todo.completed : todo.completed,
  );

  return { status, retry, visibleTodos, itemsLeft, filter, setFilter, addTodo, toggleTodo, deleteTodo };
}
