export function formatPostDate(date: string): string {
  const formatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

  return formatted.replace(" de ", " ").replace(" de ", " ").replace(".", "");
}
