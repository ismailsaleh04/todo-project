import type { Translation } from "../localization/translations";

interface Props {
  onRetry: () => void;
  t: Translation;
}

export default function ErrorMessage({ onRetry, t }: Props) {
  return (
    <div role="alert" className="error">
      <p>{t.error}</p>
      <button onClick={onRetry}>{t.retry}</button>
    </div>
  );
}
