import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Breadcrumbs,
  BreadcrumbSeparator,
} from '@/registry/new-york/ui/breadcrumbs';
import { Button } from '@/registry/new-york/ui/button';
import { Icons } from '@/registry/new-york/ui/icons';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@/registry/new-york/ui/menu';

export function BreadcrumbsDropdown() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <MenuTrigger>
          <Button className="flex items-center gap-1">
            Components
            <Icons.ChevronDown className="size-4" />
          </Button>
          <MenuPopover>
            <Menu>
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Themes</MenuItem>
              <MenuItem>GitHub</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}

export default BreadcrumbsDropdown;
