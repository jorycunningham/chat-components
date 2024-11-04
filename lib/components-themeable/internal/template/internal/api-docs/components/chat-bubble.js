module.exports = {
  "name": "ChatBubble",
  "releaseStatus": "stable",
  "regions": [
    {
      "name": "actions",
      "description": "Actions slot of the chat bubble, placed at the footer. Use [button group](/components/button-group/).",
      "isDefault": false
    },
    {
      "name": "avatar",
      "description": "Avatar slot paired with the chat bubble content. Use [avatar](/components/avatar/).",
      "isDefault": false
    },
    {
      "name": "children",
      "description": "Content of the chat bubble",
      "isDefault": true
    }
  ],
  "functions": [],
  "properties": [
    {
      "name": "ariaLabel",
      "type": "string",
      "optional": false,
      "description": "Adds aria-label to the chat bubble container. Use this to provide a unique accessible name for each chat bubble on the page.\nFor example, \"John Doe at 3:42:10am\"."
    },
    {
      "name": "hideAvatar",
      "type": "boolean",
      "optional": true,
      "description": "Hides the avatar while preserving its space.\nUseful for when there are multiple consecutive messages coming from the same author."
    },
    {
      "name": "showLoadingBar",
      "type": "boolean",
      "optional": true,
      "description": "Adds a loading bar to the bottom of the chat bubble. This property should only be used for Generative AI loading state.\nIf avatar is being used, set its `loading` state to true."
    },
    {
      "name": "type",
      "type": "string",
      "inlineType": {
        "name": "ChatBubbleProps.Type",
        "type": "union",
        "values": [
          "incoming",
          "outgoing"
        ]
      },
      "optional": false,
      "description": "Defines the type of the chat bubble and sets its color accordingly."
    }
  ],
  "events": []
};