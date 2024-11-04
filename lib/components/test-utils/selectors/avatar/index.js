"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const tooltip_1 = require("@cloudscape-design/components/test-utils/selectors/internal/tooltip");
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const __1 = require("..");
const styles_selectors_js_1 = require("../../../avatar/styles.selectors.js");
class AvatarWrapper extends selectors_1.ComponentWrapper {
    findTooltip() {
        return (0, __1.default)().findComponent(`.${tooltip_1.default.rootSelector}`, tooltip_1.default);
    }
}
exports.default = AvatarWrapper;
AvatarWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map