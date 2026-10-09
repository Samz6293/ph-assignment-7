
import { Bars } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { NavLink } from "../types";

export default function Navigation({links}:{links:NavLink[]}) {

    return (
        <Drawer>
            <Button variant="secondary" className={"lg:hidden"}>
                <Bars />
            </Button>
            <Drawer.Backdrop variant="blur">
                <Drawer.Content placement="right">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>ন্যাভিগেশন</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1 justify-between">
                                <NavLinks className="flex flex-col gap-2" links={links}/>
                            </nav>

                        </Drawer.Body>
                        <Drawer.Footer>
                                <AuthButtons className="flex gap-2 mx-auto" />
                        </Drawer.Footer>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}