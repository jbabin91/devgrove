import { ListBox, ListBoxItem } from '~/registry/default/ui/list-box';

export function ListBoxDisabledItems() {
  return (
    <ListBox
      aria-label="Choose sandwich contents with disabled items"
      className={'max-h-[200px]'}
      selectionMode="multiple"
    >
      <ListBoxItem>Lettuce</ListBoxItem>
      <ListBoxItem>Tomato</ListBoxItem>
      <ListBoxItem>Cheese</ListBoxItem>
      <ListBoxItem isDisabled>Tuna Salad</ListBoxItem>
      <ListBoxItem>Egg Salad</ListBoxItem>
      <ListBoxItem>Ham</ListBoxItem>
    </ListBox>
  );
}

export default ListBoxDisabledItems;
