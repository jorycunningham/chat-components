import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from "clsx";
import styles from "./styles.css.js";
export default function LoadingDots({ color }) {
    return (
    // "gen-ai" class is added so that the gradient background animates.
    _jsx("div", { className: clsx(styles.root, { [styles["gen-ai"]]: color === "gen-ai" }), children: _jsxs("div", { className: styles.typing, children: [_jsx("div", { className: styles.dot }), _jsx("div", { className: styles.dot }), _jsx("div", { className: styles.dot })] }) }));
}
//# sourceMappingURL=index.js.map