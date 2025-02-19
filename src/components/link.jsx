/* eslint-disable react/prop-types */

import { cn } from "../lib/utils";

export default function Link({ href, className, target = "_self", children }) {
    return (
        <a className={cn("cursor-[url('/assets/pointer.png'),auto]", className)} href={href} target={target}>
            {children}
        </a>
    )
}