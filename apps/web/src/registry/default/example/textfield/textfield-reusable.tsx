import { GroveTextField } from '~/registry/default/ui/textfield';

export function TextfieldReusable() {
  return (
    <div className="flex flex-col gap-4">
      <GroveTextField isRequired description="Enter your name" label="Name" />
      <GroveTextField
        isRequired
        textArea
        description="Leave a review"
        label="Review"
      />
    </div>
  );
}

export default TextfieldReusable;
