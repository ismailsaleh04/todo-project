import type { Lang, Translation } from "../localization/translations";

const LANGS: Lang[] = ["en", "ar"];

interface Props {
  lang: Lang;
  onChange: (lang: Lang) => void;
  t: Translation;
}

export default function LanguageSwitcher({ lang, onChange, t }: Props) {
  return (
    <div className="segmented" role="group" aria-label={t.language}>
      {LANGS.map((l) => (
        <button key={l} className={lang === l ? "selected" : ""} aria-pressed={lang === l} onClick={() => onChange(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
