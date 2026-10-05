import type { Translation } from "../localization/translations";

interface Props {
  itemsLeft: number;
  t: Translation;
}

export default function TodoFooter({ itemsLeft, t }: Props) {
  return <footer>{t.itemsLeft(itemsLeft)}</footer>;
}
