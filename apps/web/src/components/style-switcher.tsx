'use client';

import { useMounted } from '~/hooks/use-mounted';
import { useThemeStore } from '~/hooks/use-theme-store';
import { cn } from '~/libs/utils';
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '~/registry/new-york/ui/select';
import { type Style, styles } from '~/registry/styles';

export function StyleSwitcher({ className }: { className?: string }) {
  const currentStyle = useThemeStore((state) => state.style);
  const updateStyle = useThemeStore((state) => state.setStyle);
  const mounted = useMounted();

  return mounted ? (
    <Select
      aria-label="Select Style"
      defaultSelectedKey={currentStyle}
      placeholder="Select Style"
      onSelectionChange={(key) => updateStyle(key as Style['name'])}
    >
      <SelectTrigger
        className={cn('h-7 w-[145px] text-xs [&_svg]:size-4', className)}
      >
        <span className="text-muted-foreground">Style: </span>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          {styles.map((style) => (
            <SelectItem
              key={style.name}
              className="text-xs"
              id={style.name}
              textValue={style.name}
            >
              {style.label}
            </SelectItem>
          ))}
        </SelectListBox>
      </SelectPopover>
    </Select>
  ) : null;
}
