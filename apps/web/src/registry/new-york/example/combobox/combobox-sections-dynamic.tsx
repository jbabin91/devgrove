import { Button } from '~/registry/new-york/ui/button';
import {
  Combobox,
  ComboboxCollection,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from '~/registry/new-york/ui/combobox';
import { FieldGroup, Label } from '~/registry/new-york/ui/field';
import { Icons } from '~/registry/new-york/ui/icons';

export function ComboboxSectionsDynamic() {
  const options = [
    {
      name: 'Fruit',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' },
        { name: 'Honeydew' },
        { name: 'Grapes' },
        { name: 'Watermelon' },
        { name: 'Cantaloupe' },
        { name: 'Pear' },
      ],
    },
    {
      name: 'Vegetable',
      children: [
        { name: 'Cabbage' },
        { name: 'Broccoli' },
        { name: 'Carrots' },
        { name: 'Lettuce' },
        { name: 'Spinach' },
        { name: 'Bok Choy' },
        { name: 'Cauliflower' },
        { name: 'Potatoes' },
      ],
    },
  ];
  return (
    <Combobox defaultItems={options}>
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
        <ComboboxListBox<(typeof options)[number]>>
          {(section) => (
            <ComboboxSection id={section.name}>
              <ComboboxHeader>{section.name}</ComboboxHeader>
              <ComboboxCollection items={section.children}>
                {(item) => (
                  <ComboboxItem id={item.name}>{item.name}</ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxSection>
          )}
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  );
}

export default ComboboxSectionsDynamic;
