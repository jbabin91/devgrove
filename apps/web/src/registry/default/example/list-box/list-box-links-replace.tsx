import { ListBox, ListBoxItem } from '~/registry/default/ui/list-box';

export function ListBoxLinksReplace() {
  return (
    <ListBox
      aria-label="Links"
      className={'max-h-[200px]'}
      selectionBehavior="replace"
      selectionMode="multiple"
    >
      <ListBoxItem href="https://adobe.com/" target="_blank">
        Adobe
      </ListBoxItem>
      <ListBoxItem href="https://apple.com/" target="_blank">
        Apple
      </ListBoxItem>
      <ListBoxItem href="https://google.com/" target="_blank">
        Google
      </ListBoxItem>
      <ListBoxItem href="https://microsoft.com/" target="_blank">
        Microsoft
      </ListBoxItem>
    </ListBox>
  );
}

export default ListBoxLinksReplace;
