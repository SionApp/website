import type { EventProps } from "@/components/EventCard";
import { supabase } from "@/integrations/supabase/client";

/**
 * Eventos reales, publicados desde el panel admin (SionERP) — issue #72.
 * Antes este archivo tenía datos mock; ahora consulta la tabla `events`
 * real vía RLS pública (sólo lee `is_published = true`, ver migración
 * 20260827000009_public_visitor_registration.sql del lado de SionERP).
 */
export const fetchPublishedEvents = async (): Promise<EventProps[]> => {
  const { data, error } = await supabase
    .from("events")
    .select("id, title, description, event_date, start_time, location, category, image_url")
    .eq("is_published", true)
    .order("event_date", { ascending: true });

  if (error || !data) {
    console.error("Error fetching published events:", error);
    return [];
  }

  return data.map(
    (row): EventProps => ({
      id: row.id,
      title: row.title,
      description: row.description ?? "",
      date: row.event_date,
      time: row.start_time ?? "",
      location: row.location ?? "Iglesia Sion",
      category: row.category,
      image:
        row.image_url ??
        "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2670&auto=format&fit=crop",
    })
  );
};

/** Upcoming events sorted by nearest date first, optionally capped to `limit`. */
export const getUpcomingEvents = (events: EventProps[], limit?: number): EventProps[] => {
  const now = new Date();
  const upcoming = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
};

/** The single nearest upcoming event, or null if none is scheduled. */
export const getNextEvent = (events: EventProps[]): EventProps | null =>
  getUpcomingEvents(events, 1)[0] ?? null;

const MONTH_ABBR_ES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

/** Formats an ISO date ("2026-04-02") into the navy date-chip shape used by EventCard / activity lists. */
export const formatEventDateChip = (dateStr: string) => {
  // Parse as UTC so the authored calendar date never shifts a day due to local timezone offset.
  const date = new Date(dateStr);
  return {
    day: String(date.getUTCDate()).padStart(2, "0"),
    month: MONTH_ABBR_ES[date.getUTCMonth()],
  };
};
