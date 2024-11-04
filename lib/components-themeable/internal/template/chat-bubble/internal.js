import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { getDataAttributes } from "../internal/base-component/get-data-attributes";
import { InternalLoadingBar } from "../loading-bar/internal";
import styles from "./styles.css.js";
export default function InternalChatBubble({ type, children, avatar, actions, showLoadingBar, hideAvatar = false, ariaLabel, __internalRootRef = null, ...rest }) {
    const avatarRef = useRef(null);
    useEffect(() => {
        // We have to do this because `inert` isn't properly supported until
        // React 19 and this seems much more maintainable than version detection.
        // `inert` is better than `hidden` because it also blocks pointer and
        // focus events as well as hiding the contents from screen readers.
        // https://github.com/facebook/react/issues/17157
        if (avatarRef.current) {
            avatarRef.current.inert = hideAvatar;
        }
    }, [hideAvatar]);
    return (_jsxs("div", { className: styles.root, ...getDataAttributes(rest), ref: __internalRootRef, role: "group", "aria-label": ariaLabel, children: [avatar && (_jsx("div", { ref: avatarRef, className: clsx(styles.avatar, hideAvatar && styles.hide), children: avatar })), _jsxs("div", { className: clsx(styles["message-area"], styles[`chat-bubble-type-${type}`], {
                    [styles["with-loading-bar"]]: showLoadingBar,
                }), children: [_jsx("div", { className: styles.content, children: children }), actions && _jsx("div", { className: styles.actions, children: actions }), showLoadingBar && _jsx(InternalLoadingBar, { variant: "gen-ai-masked" })] })] }));
}
//# sourceMappingURL=internal.js.map