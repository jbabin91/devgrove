import { ChevronsUpDown } from 'lucide-react';

import { Button } from '~/registry/default/ui/button';
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from '~/registry/default/ui/combobox';
import { FieldGroup, Label } from '~/registry/default/ui/field';

export function ComboboxLinks() {
  return (
    <Combobox>
      <Label>Tech company websites</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button className="mr-1 size-6 p-1" size="icon" variant="ghost">
          <ChevronsUpDown aria-hidden="true" className="size-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem href="https://adobe.com/" target="_blank">
            Adobe
          </ComboboxItem>
          <ComboboxItem href="https://apple.com/" target="_blank">
            Apple
          </ComboboxItem>
          <ComboboxItem href="https://google.com/" target="_blank">
            Google
          </ComboboxItem>
          <ComboboxItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  );
}

export default ComboboxLinks;
