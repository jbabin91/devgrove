import { ListBox, ListBoxItem } from '~/registry/default/ui/list-box';

export function ListBoxDisabledKeys() {
  const options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' },
  ];

  return (
    <ListBox
      aria-label="Animals with disabledKeys"
      className="max-h-[200px]"
      disabledKeys={[4, 6]}
      items={options}
      selectionMode="single"
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}

export default ListBoxDisabledKeys;
