import { ListBox, ListBoxItem } from '@/registry/default/ui/list-box';

export function ListBoxDemo() {
  return (
    <ListBox
      aria-label="Favorite animal"
      selectedKeys={['cat']}
      selectionMode="single"
    >
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  );
}

export default ListBoxDemo;
