export type Lang = "en" | "ar";

export const translations = {
  en: {
    appTitle: "Todo list",
    placeholder: "What needs to be done?",
    add: "Add",
    emptyTitle: "Please enter a title.",
    all: "All",
    active: "Active",
    done: "Done",
    delete: "Delete",
    loading: "Loading todos...",
    error: "Failed to load todos.",
    retry: "Retry",
    empty: "Nothing here.",
    itemsLeft: (n: number) => (n === 1 ? "1 item left" : `${n} items left`),
    language: "Language",
  },
  ar: {
    appTitle: "قائمة المهام",
    placeholder: "ما الذي يجب إنجازه؟",
    add: "إضافة",
    emptyTitle: "يرجى إدخال عنوان.",
    all: "الكل",
    active: "النشطة",
    done: "المنجزة",
    delete: "حذف",
    loading: "جارٍ تحميل المهام...",
    error: "فشل تحميل المهام.",
    retry: "إعادة المحاولة",
    empty: "لا يوجد شيء هنا.",
    itemsLeft: (n: number) =>
      n === 0 ? "لا مهام متبقية" : n === 1 ? "مهمة واحدة متبقية" : n === 2 ? "مهمتان متبقيتان" : n <= 10 ? `${n} مهام متبقية` : `${n} مهمة متبقية`,
    language: "اللغة",
  },
};

export type Translation = (typeof translations)["en"];
