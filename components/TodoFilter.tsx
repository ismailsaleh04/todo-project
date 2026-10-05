import type { Filter } from "../types/todo";
import type { Translation } from "../localization/translations";

const FILTERS: Filter[] = ["all", "active", "done"];

interface Props {
  filter: Filter;
  onChange: (filter: Filter) => void;
  t: Translation;
}

export default function TodoFilter({ filter, onChange, t }: Props) {
  return (
    <nav className="filters">
      {FILTERS.map((f) => (
        <button key={f} className={filter === f ? "selected" : ""} onClick={() => onChange(f)}>
          {t[f]}
        </button>
      ))}
    </nav>
  );
}
