import { InternalBaseComponentProps } from "../internal/base-component/use-base-component";
import { ChatBubbleProps } from "./interfaces.js";
export interface InternalChatBubbleProps extends ChatBubbleProps, InternalBaseComponentProps {
}
export default function InternalChatBubble({ type, children, avatar, actions, showLoadingBar, hideAvatar, ariaLabel, __internalRootRef, ...rest }: InternalChatBubbleProps): import("react/jsx-runtime").JSX.Element;
