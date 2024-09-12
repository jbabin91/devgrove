import { Label } from '~/registry/default/ui/field';
import { Tag, TagGroup, TagList } from '~/registry/default/ui/tag-group';

export function TagDisabledItems() {
  return (
    <TagGroup className="space-y-1" selectionMode="multiple">
      <Label>Sandwich contents</Label>
      <TagList>
        <Tag>Lettuce</Tag>
        <Tag>Tomato</Tag>
        <Tag>Cheese</Tag>
        <Tag isDisabled>Tuna Salad</Tag>
        <Tag>Egg Salad</Tag>
        <Tag>Ham</Tag>
      </TagList>
    </TagGroup>
  );
}

export default TagDisabledItems;
