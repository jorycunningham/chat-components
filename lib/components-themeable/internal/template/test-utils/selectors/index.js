"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.LoadingBarWrapper = exports.ChatBubbleWrapper = exports.AvatarWrapper = exports.ElementWrapper = void 0;
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
Object.defineProperty(exports, "ElementWrapper", { enumerable: true, get: function () { return selectors_1.ElementWrapper; } });
require("@cloudscape-design/components/test-utils/selectors");
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const index_1 = require("./avatar/index");
exports.AvatarWrapper = index_1.default;
const index_2 = require("./chat-bubble/index");
exports.ChatBubbleWrapper = index_2.default;
const index_3 = require("./loading-bar/index");
exports.LoadingBarWrapper = index_3.default;
selectors_1.ElementWrapper.prototype.findAvatar = function (selector) {
    const rootSelector = `.${index_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, index_1.default);
};
selectors_1.ElementWrapper.prototype.findChatBubble = function (selector) {
    const rootSelector = `.${index_2.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, index_2.default);
};
selectors_1.ElementWrapper.prototype.findLoadingBar = function (selector) {
    const rootSelector = `.${index_3.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, index_3.default);
};
var selectors_2 = require("@cloudscape-design/test-utils-core/selectors");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return selectors_2.createWrapper; } });
//# sourceMappingURL=index.js.map