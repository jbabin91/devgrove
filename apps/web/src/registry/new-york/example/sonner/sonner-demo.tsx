import { toast } from 'sonner';

import { Button } from '~/registry/new-york/ui/button';

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onPress={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}

export default SonnerDemo;
