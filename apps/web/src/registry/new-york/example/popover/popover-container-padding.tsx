import { Button } from '@/registry/new-york/ui/button';
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from '@/registry/new-york/ui/popover';

export function PopoverContainerPadding() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Container Padding</Button>
      <Popover containerPadding={50} placement="top">
        <PopoverDialog className="max-w-[150px]">
          This is a popover.
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  );
}

export default PopoverContainerPadding;
