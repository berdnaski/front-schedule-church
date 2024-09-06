import Eu from "../../assets/eu.jpeg";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { SidebarSheet } from "../sidebar-sheet";

export function Header() {
  return (
    <Card className="border-0">
      <CardContent className="flex flex-row items-center justify-between p-4 bg-[#161616] border-0">
        <Link to="/"> 
          <img src={Eu} height={45} width={45} alt="Logo da foto" className="rounded-full" />
        </Link>

        <SidebarSheet />
      </CardContent>
    </Card>
  );
}
