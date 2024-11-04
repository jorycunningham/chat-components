import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import '@cloudscape-design/components/test-utils/dom';
export { ElementWrapper };
import AvatarWrapper from './avatar/index';
export { AvatarWrapper };
import ChatBubbleWrapper from './chat-bubble/index';
export { ChatBubbleWrapper };
import LoadingBarWrapper from './loading-bar/index';
export { LoadingBarWrapper };
declare module '@cloudscape-design/test-utils-core/dist/dom' {
    interface ElementWrapper {
        findAvatar(selector?: string): AvatarWrapper | null;
        findChatBubble(selector?: string): ChatBubbleWrapper | null;
        findLoadingBar(selector?: string): LoadingBarWrapper | null;
    }
}
export { createWrapper as default } from '@cloudscape-design/test-utils-core/dom';
