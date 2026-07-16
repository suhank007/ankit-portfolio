import { MapPin } from "lucide-react";
import { EiffelTowerIcon, TajMahalIcon } from "@/components/ui/landmark-icons";

export function LocationIcon({ location, className }: { location: string; className?: string }) {
  if (/france/i.test(location)) return <EiffelTowerIcon className={className} />;
  if (/india/i.test(location)) return <TajMahalIcon className={className} />;
  return <MapPin className={className} strokeWidth={1.5} />;
}
