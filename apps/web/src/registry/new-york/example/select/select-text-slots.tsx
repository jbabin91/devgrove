import { Text } from 'react-aria-components';

import { Label } from '@/registry/new-york/ui/field';
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '@/registry/new-york/ui/select';

export function SelectTextSlots() {
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Permissions</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectItem
            className="flex flex-col items-start justify-center"
            textValue="Read"
          >
            <Text slot="label">Read only</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Read only
            </Text>
          </SelectItem>
          <SelectItem
            className="flex flex-col items-start justify-center"
            textValue="Write"
          >
            <Text slot="label">Write</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Read and write only
            </Text>
          </SelectItem>
          <SelectItem
            className="flex flex-col items-start justify-center"
            textValue="Admin"
          >
            <Text slot="label">Admin</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Full access
            </Text>
          </SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export default SelectTextSlots;
