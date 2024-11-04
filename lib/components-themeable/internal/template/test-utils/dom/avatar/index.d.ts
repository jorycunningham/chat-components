import TooltipWrapper from "@cloudscape-design/components/test-utils/dom/internal/tooltip";
import { ComponentWrapper } from "@cloudscape-design/test-utils-core/dom";
export default class AvatarWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTooltip(): TooltipWrapper | null;
}
