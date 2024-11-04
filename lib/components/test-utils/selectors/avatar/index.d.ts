import TooltipWrapper from "@cloudscape-design/components/test-utils/selectors/internal/tooltip";
import { ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class AvatarWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTooltip(): TooltipWrapper;
}
