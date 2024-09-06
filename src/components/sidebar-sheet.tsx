import { Button } from "@/components/ui/button";
import Eu from "../assets/eu.jpeg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogInIcon, MenuIcon } from "lucide-react";

export function SidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={Eu} />
            </Avatar>
            <div>
              <p className="font-bold">Erick</p>
              <p className="text-xs">email</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5">
          <Button className="justify-start gap-2" variant="ghost">
            <LogInIcon size={18} />
            Login
          </Button>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
