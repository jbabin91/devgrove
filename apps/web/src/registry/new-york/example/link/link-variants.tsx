import { Link } from '~/registry/new-york/ui/link';

export function LinkVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/docs/components/link">Link</Link>
        <Link href="/docs/components/link" variant="destructive">
          Destructive
        </Link>
        <Link href="/docs/components/link" variant="ghost">
          Ghost
        </Link>
        <Link href="/docs/components/link" variant="link">
          Link
        </Link>
        <Link href="/docs/components/link" variant="outline">
          Outline
        </Link>
        <Link href="/docs/components/link" variant="secondary">
          Secondary
        </Link>
      </div>
      Disabled
      <div className="flex flex-wrap justify-center gap-4">
        <Link isDisabled href="/docs/components/link">
          Link
        </Link>
        <Link isDisabled href="/docs/components/link" variant="destructive">
          Destructive
        </Link>
        <Link isDisabled href="/docs/components/link" variant="ghost">
          Ghost
        </Link>
        <Link isDisabled href="/docs/components/link" variant="link">
          Link
        </Link>
        <Link isDisabled href="/docs/components/link" variant="outline">
          Outline
        </Link>
        <Link isDisabled href="/docs/components/link" variant="secondary">
          Secondary
        </Link>
      </div>
    </div>
  );
}

export default LinkVariants;
