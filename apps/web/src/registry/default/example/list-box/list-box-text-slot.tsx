import { Text } from 'react-aria-components';

import { ListBox, ListBoxItem } from '@/registry/default/ui/list-box';

export function ListBoxTextSlot() {
  return (
    <ListBox aria-label="Permissions" className="max-h-[200px]">
      <ListBoxItem className="flex flex-col items-start" textValue="Read">
        <Text slot="label">Read</Text>
        <Text className="text-sm text-muted-foreground" slot="description">
          Read only
        </Text>
      </ListBoxItem>
      <ListBoxItem className="flex flex-col items-start" textValue="Read">
        <Text slot="label">Write</Text>
        <Text className="text-sm text-muted-foreground" slot="description">
          Read and write only
        </Text>
      </ListBoxItem>
      <ListBoxItem className="flex flex-col items-start" textValue="Read">
        <Text slot="label">Admin</Text>
        <Text className="text-sm text-muted-foreground" slot="description">
          Full access
        </Text>
      </ListBoxItem>
    </ListBox>
  );
}

export default ListBoxTextSlot;
