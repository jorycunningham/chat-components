module.exports = {
  "name": "LoadingBar",
  "releaseStatus": "stable",
  "regions": [],
  "functions": [],
  "properties": [
    {
      "name": "variant",
      "type": "string",
      "inlineType": {
        "name": "LoadingBarProps.Variant",
        "type": "union",
        "values": [
          "gen-ai",
          "gen-ai-masked"
        ]
      },
      "optional": false,
      "description": "Specifies the variant of the loading bar. Use `gen-ai` to indicate an ongoing generative AI process.\nUse `gen-ai-masked` for generative AI processes where the bar is displayed at the edge of an element\nwith rounded corners."
    }
  ],
  "events": []
};