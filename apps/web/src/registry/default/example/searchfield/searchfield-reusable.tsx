import { GroveSearchField } from '~/registry/default/ui/searchfield';

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
