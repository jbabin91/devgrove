import { Button } from '@/registry/new-york/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/registry/new-york/ui/dialog';
import { Label } from '@/registry/new-york/ui/field';
import { Input, TextField } from '@/registry/new-york/ui/textfield';

export function ModalDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Sign up...</Button>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[425px]">
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

export default ModalDemo;
