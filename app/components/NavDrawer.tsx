"use client";

import { Bars } from "@gravity-ui/icons";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { NavLink } from "../types";
import type { MouseEvent } from "react";

export default function Navigation({links}:{links:NavLink[]}) {
    const state = useOverlayState();

    const closeOnLinkClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest("a")) state.close();
    };

    return (
        <Drawer state={state}>
            <Button variant="secondary" className={"lg:hidden"}>
                <Bars />
            </Button>
            <Drawer.Backdrop variant="blur">
                <Drawer.Content placement="right">
                    <Drawer.Dialog onClick={closeOnLinkClick}>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>ন্যাভিগেশন</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1 justify-between">
                                <NavLinks className="flex flex-col gap-2" links={links}/>
                            </nav>

                        </Drawer.Body>
                        <Drawer.Footer className="flex justify-start">
                                <AuthButtons className="flex gap-2" />
                        </Drawer.Footer>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}
