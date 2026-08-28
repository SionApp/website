import { useEffect, useState } from "react";
import type { EventProps } from "@/components/EventCard";
import { fetchPublishedEvents } from "@/data/events";

/** Eventos reales publicados desde SionERP — issue #72. */
export function useEvents() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedEvents().then((data) => {
      if (!cancelled) {
        setEvents(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { events, loading };
}
