export function formatAttributeCategory(category: string) {
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

export function formatAuspice(auspice: string) {
  switch (auspice) {
    case "Rahu":
      return "🌕 Rahu";
    case "Cahalith":
      return "🌔 Cahalith";
    case "Elodoth":
      return "🌓 Elodoth";
    case "Ithaeur":
      return "🌒 Ithaeur";
    case "Irraka":
      return "🌑 Irraka";
    default:
      return auspice;
  }
}