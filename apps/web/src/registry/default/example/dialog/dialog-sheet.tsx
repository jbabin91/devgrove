import { Button } from '~/registry/default/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '~/registry/default/ui/dialog';
import { Label } from '~/registry/default/ui/field';
import { Input, TextField } from '~/registry/default/ui/textfield';

export function ModalSheet() {
  return (
    <DialogTrigger>
      <Button variant="outline">Edit Profile</Button>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[425px]" side="right">
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Sign up</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <TextField>
                  <Label>First Name</Label>
                  <Input />
                </TextField>
                <TextField>
                  <Label>Last Name</Label>
                  <Input />
                </TextField>
              </div>
              <DialogFooter>
                <Button type="submit" onPress={close}>
                  Save changes
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  );
}

export default ModalSheet;