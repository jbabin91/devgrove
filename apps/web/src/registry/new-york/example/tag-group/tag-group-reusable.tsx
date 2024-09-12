import { GroveTagGroup, Tag } from '~/registry/new-york/ui/tag-group';

export function TagGroupReusable() {
  return (
    <GroveTagGroup label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </GroveTagGroup>
  );
}

export default TagGroupReusable;
