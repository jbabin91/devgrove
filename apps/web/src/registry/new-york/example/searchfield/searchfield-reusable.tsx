import { GroveSearchField } from '@/registry/new-york/ui/searchfield';

export function SearchfieldReusable() {
  return (
    <GroveSearchField
      isRequired
      description="Search for a component"
      label="Search"
    />
  );
}

export default SearchfieldReusable;
