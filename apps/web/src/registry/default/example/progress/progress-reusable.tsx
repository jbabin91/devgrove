import { GroveProgressBar } from '@/registry/default/ui/progress';

export function ProgressReusable() {
  return <GroveProgressBar className="w-3/5" label="Loading…" value={80} />;
}

export default ProgressReusable;
