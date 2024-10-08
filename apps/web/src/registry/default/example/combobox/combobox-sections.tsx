import { Button } from '@/registry/default/ui/button';
import {
  Combobox,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from '@/registry/default/ui/combobox';
import { FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';

export function ComoboxSections() {
  return (
    <Combobox>
      <Label>Preferred fruit or vegetable</Label>
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
          <ComboboxSection>
            <ComboboxHeader>Fruit</ComboboxHeader>
            <ComboboxItem id="Apple">Apple</ComboboxItem>
            <ComboboxItem id="Banana">Banana</ComboboxItem>
            <ComboboxItem id="Orange">Orange</ComboboxItem>
            <ComboboxItem id="Honeydew">Honeydew</ComboboxItem>
            <ComboboxItem id="Grapes">Grapes</ComboboxItem>
            <ComboboxItem id="Watermelon">Watermelon</ComboboxItem>
            <ComboboxItem id="Cantaloupe">Cantaloupe</ComboboxItem>
            <ComboboxItem id="Pear">Pear</ComboboxItem>
          </ComboboxSection>
          <ComboboxSection>
            <ComboboxHeader>Vegetable</ComboboxHeader>
            <ComboboxItem id="Cabbage">Cabbage</ComboboxItem>
            <ComboboxItem id="Broccoli">Broccoli</ComboboxItem>
            <ComboboxItem id="Carrots">Carrots</ComboboxItem>
            <ComboboxItem id="Lettuce">Lettuce</ComboboxItem>
            <ComboboxItem id="Spinach">Spinach</ComboboxItem>
            <ComboboxItem id="Bok Choy">Bok Choy</ComboboxItem>
            <ComboboxItem id="Cauliflower">Cauliflower</ComboboxItem>
            <ComboboxItem id="Potatoes">Potatoes</ComboboxItem>
          </ComboboxSection>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  );
}

export default ComoboxSections;
