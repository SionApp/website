import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface EventProps {
  id: number;
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
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
      <Card className="relative h-full overflow-hidden border-0 bg-card/40 backdrop-blur-md rounded-2xl transition-all duration-300 hover:translate-y-[-5px]">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <Badge
            className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-black/70"
          >
            {event.category.toUpperCase()}
          </Badge>
        </div>

        <CardContent className="p-6 relative z-20">
          {/* Date Badge */}
          <div className="absolute -top-10 left-6 bg-card/90 backdrop-blur-xl p-3 rounded-xl border border-white/10 shadow-xl text-center min-w-[70px]">
            <span className="block text-xs font-medium text-muted-foreground uppercase">
              {new Date(event.date).toLocaleDateString('es-ES', { month: 'short' })}
            </span>
            <span className="block text-2xl font-bold text-primary">
              {new Date(event.date).getDate()}
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {event.description}
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
            </div>

            {/* <Button
              className="w-full group/btn bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-0"
              onClick={() => onRegister?.(event)}
            >
              Inscribirse
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;
