/**
 * Shared church contact & schedule info.
 *
 * Sourced from the copy that already existed in Contact.tsx / Footer.tsx /
 * Services.tsx before the redesign — centralized here so the new top bar,
 * the "En Vivo" off-air card and any other section that needs it stay in
 * sync instead of re-typing the same strings.
 */
export const CHURCH_INFO = {
  address: "Calle Ampies, Coro 4101, Falcón, Venezuela",
  phone: "+58 412-7590431",
  whatsapp: "+58 412-7590431",
  email: "iglesiaevangelicapsion@gmail.com",
  officeHours: "Lunes a Viernes: 9:00 AM – 5:00 PM",
  /** Matches the three Sunday services already listed in Services.tsx */
  sundayServiceTimes: ["7:00 AM", "9:00 AM", "11:00 AM"],
  sundayScheduleShort: "Dom 7:00 · 9:00 · 11:00 AM",
  foundingYear: 1936,
} as const;
