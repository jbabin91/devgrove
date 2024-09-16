import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Breadcrumbs,
  BreadcrumbSeparator,
} from '@/registry/new-york/ui/breadcrumbs';
import { Icons } from '@/registry/new-york/ui/icons';

export function BreadcrumbsSeparator() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <BreadcrumbSeparator>
          <Icons.Slash />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        <BreadcrumbSeparator>
          <Icons.Slash />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}

export default BreadcrumbsSeparator;
