import type { ComponentType, SVGProps } from "react";

import { Bars } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

export default function Navigation() {

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
                            <Drawer.Heading>Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1 justify-between">
                                <NavLinks className="flex flex-col gap-2"/>
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