import { Button } from '~/registry/new-york/ui/button';
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from '~/registry/new-york/ui/popover';

export function PopoverCrossOffset() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Cross offset</Button>
      <Popover crossOffset={100} placement="top">
        <PopoverDialog>Offset by an additional 100px.</PopoverDialog>
      </Popover>
    </PopoverTrigger>
  );
}

export default PopoverCrossOffset;
