import type { Translation } from "../localization/translations";

export default function LoadingMessage({ t }: { t: Translation }) {
  return <p role="status">{t.loading}</p>;
}
