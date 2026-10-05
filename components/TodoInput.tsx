import { useEffect, useRef, useState } from "react";
import type { Translation } from "../localization/translations";

interface Props {
  onAdd: (title: string) => boolean;
  t: Translation;
}

export default function TodoInput({ onAdd, t }: Props) {
  const [title, setTitle] = useState("");
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onAdd(title)) {
      setTitle("");
      setInvalid(false);
    } else {
      setInvalid(true);
    }
    inputRef.current?.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add">
        <input
          ref={inputRef}
          value={title}
          placeholder={t.placeholder}
          aria-invalid={invalid}
          onChange={(e) => {
            setTitle(e.target.value);
            setInvalid(false);
          }}
        />
        <button type="submit">{t.add}</button>
      </form>
      {invalid && <p className="error" role="alert">{t.emptyTitle}</p>}
    </>
  );
}
