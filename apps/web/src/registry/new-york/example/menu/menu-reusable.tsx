import { GroveMenu, MenuItem } from '~/registry/new-york/ui/menu';

export function MenuReusable() {
  return (
    <GroveMenu label="Edit" variant="outline">
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Delete Item</MenuItem>
    </GroveMenu>
  );
}

export default MenuReusable;