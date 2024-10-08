import { Button } from '@/registry/new-york/ui/button';
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from '@/registry/new-york/ui/combobox';
import { FieldGroup, Label } from '@/registry/new-york/ui/field';
import { Icons } from '@/registry/new-york/ui/icons';

export function ComboboxContent() {
  const options = [
    { id: 1, name: 'Aerospace' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
    { id: 4, name: 'Biomedical' },
    { id: 5, name: 'Nuclear' },
    { id: 6, name: 'Industrial' },
    { id: 7, name: 'Chemical' },
    { id: 8, name: 'Agricultural' },
    { id: 9, name: 'Electrical' },
  ];

  return (
    <Combobox defaultItems={options}>
      <Label>Major</Label>
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
        <ComboboxListBox<(typeof options)[number]>>
          {(item) => <ComboboxItem>{item.name}</ComboboxItem>}
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  );
}

export default ComboboxContent;
