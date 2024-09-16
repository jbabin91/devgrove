import { Label } from '@/registry/new-york/ui/field';
import { Tag, TagGroup, TagList } from '@/registry/new-york/ui/tag-group';

export function TagGroupDisabledKeys() {
  const options = [
    { id: 1, name: 'News' },
    { id: 2, name: 'Travel' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Shopping' },
  ];

  return (
    <TagGroup
      className="space-y-1"
      disabledKeys={[2, 4]}
      selectionMode="multiple"
    >
      <Label>Categories</Label>
      <TagList items={options}>{(item) => <Tag>{item.name}</Tag>}</TagList>
    </TagGroup>
  );
}

export default TagGroupDisabledKeys;
