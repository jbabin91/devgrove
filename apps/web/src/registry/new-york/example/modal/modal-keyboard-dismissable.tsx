import { Button } from '@/registry/new-york/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/registry/new-york/ui/dialog';

export function ModalKeyboardDismissable() {
  return (
    <DialogTrigger>
      <Button variant="outline">Delete...</Button>
      <DialogOverlay isKeyboardDismissDisabled>
        <DialogContent className="sm:max-w-[425px]" role="alertdialog">
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Delete file</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                This will permanently delete the selected file. Continue?
              </DialogDescription>
              <DialogFooter>
                <Button onPress={close}>Cancel</Button>
                <Button variant="destructive" onPress={close}>
                  Delete
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  );
}

export default ModalKeyboardDismissable;
