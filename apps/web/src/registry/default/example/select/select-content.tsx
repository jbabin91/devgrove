import { Label } from '@/registry/default/ui/field';
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '@/registry/default/ui/select';

export function SelectContent() {
  const options = [
    { id: 1, name: 'Aerospace' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
    { id: 4, name: 'Biomedical' },
    { id: 5, name: 'Nuclear' },
    { id: 6, name: 'Industrial' },
    { id: 7, name: 'Chemical' },
    { id: 8, name: 'Agricultural' },
    { id: 9, name: 'Electrical' },
  ];

  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Pick an engineering major</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox items={options}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export default SelectContent;
