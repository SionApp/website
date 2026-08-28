import { Clock, MapPin } from "lucide-react";
import { formatEventDateChip } from "@/data/events";

export interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface EventCardProps {
  event: EventProps;
  onRegister?: (event: EventProps) => void;
}

const EventCard = ({ event, onRegister }: EventCardProps) => {
  const { day, month } = formatEventDateChip(event.date);

  return (
    <div className="tilt-3d h-full bg-card border border-border rounded-[10px] overflow-hidden shadow-[0_6px_24px_-8px_hsl(var(--navy)/0.18)]">
      <div className="relative h-[170px]">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <span className="absolute top-3 right-3 bg-navy text-navy-foreground text-center rounded-[5px] px-2.5 py-1.5">
          <span className="block text-[9px] opacity-70">{month}</span>
          <span className="block text-sm font-bold">{day}</span>
        </span>
      </div>

      <div className="p-[18px]">
        <span className="text-[10px] font-bold tracking-[0.05em] text-primary">
          {event.category.toUpperCase()}
        </span>
        <h3 className="font-serif font-bold text-[17px] text-navy dark:text-foreground my-1.5 line-clamp-1">
          {event.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2.5 line-clamp-2">
          {event.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {event.location}
          </span>
        </div>
        {onRegister && (
          <button
            type="button"
            onClick={() => onRegister(event)}
            className="mt-3 w-full rounded-[6px] bg-primary text-primary-foreground text-xs font-bold py-2 hover:opacity-90 transition-opacity"
          >
            Inscribirme
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
