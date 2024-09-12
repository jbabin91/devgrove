import { Label } from '~/registry/new-york/ui/field';
import { TagGroup, TagList } from '~/registry/new-york/ui/tag-group';

export function TagGroupEmpty() {
  return (
    <TagGroup>
      <Label>Categories</Label>
      <TagList renderEmptyState={() => 'No categories.'}>{[]}</TagList>
    </TagGroup>
  );
}

export default TagGroupEmpty;
