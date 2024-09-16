import { useEffect, useState } from 'react';

import { Label } from '@/registry/new-york/ui/field';
import { Meter } from '@/registry/new-york/ui/meter';

export function MeterDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Meter className="w-3/5" value={progress}>
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Storage space</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  );
}

export default MeterDemo;
