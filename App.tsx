import { useEffect, useState } from "react";
import { translations, type Lang } from "./localization/translations";
import { useTodos } from "./hooks/useTodos";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LoadingMessage from "./components/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

const LANG_KEY = "lang";

function getSavedLang(): Lang {
  try {
    return localStorage.getItem(LANG_KEY) === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getSavedLang);
  const t = translations[lang];
  const { status, retry, visibleTodos, itemsLeft, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodos();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.appTitle;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Storage can be blocked (e.g. private mode); the app still works without it.
    }
  }, [lang, t]);

  return (
    <main className="app">
      <header className="header">
        <h1>{t.appTitle}</h1>
        <LanguageSwitcher lang={lang} onChange={setLang} t={t} />
      </header>

      {status === "loading" && <LoadingMessage t={t} />}
      {status === "error" && <ErrorMessage onRetry={retry} t={t} />}
      {status === "ready" && (
        <>
          <TodoInput onAdd={addTodo} t={t} />
          <TodoFilter filter={filter} onChange={setFilter} t={t} />
          <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} t={t} />
          <TodoFooter itemsLeft={itemsLeft} t={t} />
        </>
      )}
    </main>
  );
}
