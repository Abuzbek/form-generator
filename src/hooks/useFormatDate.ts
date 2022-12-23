export const useFormatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("ru-Ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: 'numeric',
      second: 'numeric',
    });
  };
  