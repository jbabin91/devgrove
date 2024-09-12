import { useState } from 'react';
import { FileTrigger, Text } from 'react-aria-components';

import { Button } from '~/registry/default/ui/button';
import { DropZone } from '~/registry/default/ui/dropzone';

export function DropZoneFile() {
  const [files, setFiles] = useState<string>();

  return (
    <DropZone
      onDrop={(e) => {
        const files = e.items.filter((file) => file.kind === 'file');
        const filenames = files.map((file) => file.name);
        setFiles(filenames.join(', '));
      }}
    >
      <FileTrigger
        allowsMultiple
        onSelect={(e) => {
          const files = [...e!];
          const filenames = files.map((file) => file.name);
          setFiles(filenames.join(', '));
        }}
      >
        <Button variant="outline">Select files</Button>
      </FileTrigger>
      <Text slot="label" style={{ display: 'block' }}>
        {files ?? 'Drop files here'}
      </Text>
    </DropZone>
  );
}

export default DropZoneFile;
