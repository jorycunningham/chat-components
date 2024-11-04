import { ElementWrapper } from '@cloudscape-design/test-utils-core/selectors';
import '@cloudscape-design/components/test-utils/selectors';
export { ElementWrapper };
import AvatarWrapper from './avatar/index';
export { AvatarWrapper };
import ChatBubbleWrapper from './chat-bubble/index';
export { ChatBubbleWrapper };
import LoadingBarWrapper from './loading-bar/index';
export { LoadingBarWrapper };
declare module '@cloudscape-design/test-utils-core/dist/selectors' {
    interface ElementWrapper {
        findAvatar(selector?: string): AvatarWrapper;
        findChatBubble(selector?: string): ChatBubbleWrapper;
        findLoadingBar(selector?: string): LoadingBarWrapper;
    }
}
export { createWrapper as default } from '@cloudscape-design/test-utils-core/selectors';
