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

export function ComboboxMenuTrigger() {
  return (
    <div className="flex flex-col gap-6">
      <Combobox menuTrigger="input">
        <Label>Favorite Animal (Input)</Label>
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
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Combobox menuTrigger="focus">
        <Label>Favorite Animal (Focus)</Label>
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
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Combobox menuTrigger="manual">
        <Label>Favorite Animal (Manual)</Label>
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
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default ComboboxMenuTrigger;
