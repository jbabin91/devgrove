import { useThemeStore } from '~/libs/use-theme-store';
import { type Style } from '~/registry/styles';

type StyleWrapperProps = {
  styleName?: Style['name'];
} & React.HTMLAttributes<HTMLDivElement>;

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const currentStyle = useThemeStore((state) => state.style);

  if (!styleName || currentStyle === styleName) {
    return <>{children}</>;
  }

  return null;
}
