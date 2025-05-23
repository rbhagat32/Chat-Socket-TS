import {
  DialogContent,
  Dialog as DialogShadCN,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface PropTypes {
  children: React.ReactNode;
  component: React.ReactNode;
}

export function Dialog({ children, component }: PropTypes) {
  return (
    <DialogShadCN>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900">
        {/* required for aria-label warnings */}
        <DialogTitle className="sr-only">Dialog</DialogTitle>
        <DialogDescription className="sr-only">Opened</DialogDescription>

        {component}
      </DialogContent>
    </DialogShadCN>
  );
}
