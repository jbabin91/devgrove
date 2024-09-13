import { config$ } from '~/hooks/use-config';
import { type Style } from '~/registry/styles';

type StyleWrapperProps = {
  styleName?: Style['name'];
} & React.HTMLAttributes<HTMLDivElement>;

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const currentStyle = config$.get().style;

  if (!styleName || currentStyle === styleName) {
    return <>{children}</>;
  }

  return null;
}
