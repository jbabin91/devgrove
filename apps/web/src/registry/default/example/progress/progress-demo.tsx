import { useEffect, useState } from 'react';

import { Label } from '@/registry/default/ui/field';
import { Progress } from '@/registry/default/ui/progress';

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress className="w-3/5" value={progress}>
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Loading...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  );
}

export default ProgressDemo;
