import { Text } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from '@/registry/default/ui/combobox';
import { FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';

export function ComboboxTextSlot() {
  return (
    <Combobox>
      <Label>Select action</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button className="mr-1 size-6 p-1" size="icon" variant="ghost">
          <Icons.ChevronsUpDown
            aria-hidden="true"
            className="size-4 opacity-50"
          />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem
            className="flex flex-col items-start"
            textValue="Add to queue"
          >
            <Text slot="label">Add to queue</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Add to current watch queue.
            </Text>
          </ComboboxItem>
          <ComboboxItem
            className="flex flex-col items-start"
            textValue="Add review"
          >
            <Text slot="label">Add review</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Post a review for the episode.
            </Text>
          </ComboboxItem>
          <ComboboxItem
            className="flex flex-col items-start"
            textValue="Report"
          >
            <Text slot="label">Report</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Report an issue/violation.
            </Text>
          </ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  );
}

export default ComboboxTextSlot;
