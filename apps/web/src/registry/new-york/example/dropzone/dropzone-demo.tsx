import { useState } from 'react';
import { Text } from 'react-aria-components';

import { DropZone } from '~/registry/new-york/ui/dropzone';

export function DropZoneDemo() {
  const [dropped, setDropped] = useState(false);

  return (
    <DropZone onDrop={() => setDropped(true)}>
      <Text slot="label">
        {dropped ? 'Successful drop!' : 'Drop files here'}
      </Text>
    </DropZone>
  );
}

export default DropZoneDemo;
