import type { Todo } from "../types/todo";

const fakeTodoData: Todo[] = [
  { id: 1, title: "Waking Up", completed: false },
  { id: 2, title: "Eating", completed: false },
  { id: 3, title: "Showering", completed: false },
  { id: 4, title: "Go to Work", completed: false },
];

function simulateRequest<T>(operation: () => T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 1 / 3) {
        reject(new Error("Server is unavailable"));
        return;
      }
      resolve(operation());
    }, 1000);
  });
}

export function fetchTodos(): Promise<Todo[]> {
  return simulateRequest(() => fakeTodoData.map((todo) => ({ ...todo })));
}
