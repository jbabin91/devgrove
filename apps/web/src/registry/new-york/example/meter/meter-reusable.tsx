import { GroveMeter } from '~/registry/new-york/ui/meter';

export function MeterReusable() {
  return <GroveMeter className="w-3/5" label="Storage space" value={80} />;
}

export default MeterReusable;