export function getCategoryHeader(category: string) {
  switch (category) {
    case "Mental":
      return "🧠 Mental";
    case "Physical":
      return "💪 Physical";
    case "Social":
      return "💬 Social";
    default:
      return category;
  }
}