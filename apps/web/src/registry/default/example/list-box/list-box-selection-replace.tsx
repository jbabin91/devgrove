import { ListBox, ListBoxItem } from '~/registry/default/ui/list-box';

export function ListBoxSelectionReplace() {
  return (
    <ListBox
      aria-label="Sandwich contents"
      className={'max-h-[200px]'}
      selectionBehavior="replace"
      selectionMode="multiple"
    >
      <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
      <ListBoxItem id="tomato">Tomato</ListBoxItem>
      <ListBoxItem id="cheese">Cheese</ListBoxItem>
      <ListBoxItem id="tuna">Tuna Salad</ListBoxItem>
      <ListBoxItem id="egg">Egg Salad</ListBoxItem>
      <ListBoxItem id="ham">Ham</ListBoxItem>
    </ListBox>
  );
}

export default ListBoxSelectionReplace;
