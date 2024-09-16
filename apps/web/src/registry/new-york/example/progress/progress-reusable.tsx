import { GroveProgressBar } from '@/registry/new-york/ui/progress';

export function ProgressReusable() {
  return <GroveProgressBar className="w-3/5" label="Loading…" value={80} />;
}

export default ProgressReusable;
