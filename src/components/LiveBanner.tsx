import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";

const LiveBanner = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    checkLiveStatus();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('live-stream-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'live_streams'
        },
        () => {
          checkLiveStatus();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const checkLiveStatus = async () => {
    try {
      const { data } = await supabase
        .from('live_streams')
        .select('*')
        .eq('is_live', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (data?.youtube_video_id) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    } catch (error) {
      console.error('Error checking live status:', error);
      setIsLive(false);
    }
  };

  const scrollToLiveStream = () => {
    const element = document.getElementById('streaming');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isLive) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top duration-500">
      <div className="bg-live/95 backdrop-blur-sm text-live-foreground px-6 py-3 rounded-full shadow-lg border border-live/20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <Radio className="w-4 h-4" />
            <span className="font-semibold text-sm">¡ESTAMOS EN VIVO!</span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={scrollToLiveStream}
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            Ver ahora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LiveBanner;