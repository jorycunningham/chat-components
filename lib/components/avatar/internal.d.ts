import { InternalBaseComponentProps } from "../internal/base-component/use-base-component";
import { AvatarProps } from "./interfaces.js";
export interface InternalAvatarProps extends AvatarProps, InternalBaseComponentProps {
}
export default function InternalAvatar({ color, tooltipText, initials, loading, ariaLabel, iconName, iconSvg, iconUrl, __internalRootRef, ...rest }: InternalAvatarProps): import("react/jsx-runtime").JSX.Element;
