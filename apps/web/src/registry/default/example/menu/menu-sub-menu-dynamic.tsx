import { Button } from '~/registry/default/ui/button';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuSubTrigger,
  MenuTrigger,
} from '~/registry/default/ui/menu';

export function MenuSubMenuDynamic() {
  const items = [
    { id: 'cut', name: 'Cut' },
    { id: 'copy', name: 'Copy' },
    { id: 'delete', name: 'Delete' },
    {
      id: 'share',
      name: 'Share',
      children: [
        { id: 'sms', name: 'SMS' },
        { id: 'twitter', name: 'Twitter' },
        {
          id: 'email',
          name: 'Email',
          children: [
            { id: 'work', name: 'Work' },
            { id: 'personal', name: 'Personal' },
          ],
        },
      ],
    },
  ];

  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu items={items}>
          {function renderSubmenu(item) {
            return item.children ? (
              <MenuSubTrigger>
                <MenuItem key={item.name}>{item.name}</MenuItem>
                <MenuPopover>
                  <Menu items={item.children}>
                    {(item) => renderSubmenu(item)}
                  </Menu>
                </MenuPopover>
              </MenuSubTrigger>
            ) : (
              <MenuItem key={item.name}>{item.name}</MenuItem>
            );
          }}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export default MenuSubMenuDynamic;
