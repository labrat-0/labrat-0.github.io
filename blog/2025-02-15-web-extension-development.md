# Web Extension Development for Chrome and Edge

After spending the last few weeks developing browser extensions for both Chrome and Edge stores, I wanted to share some learnings and best practices. Working on the RatScale icon generation extension has been particularly rewarding.

## Key Challenges

- **Manifest V3 Transition**: Adapting to the new extension manifest format requires rethinking background processes
- **Cross-Browser Compatibility**: Ensuring extensions work seamlessly on both Chrome and Edge with minimal code differences
- **Store Submission Processes**: Navigating the different review processes for Chrome Web Store vs Microsoft Edge Add-ons

## Adaptive Cards Implementation

One of the more interesting aspects has been implementing Adaptive Cards for rich UI components:

```javascript
const card = {
  type: "AdaptiveCard",
  version: "1.5",
  body: [
    {
      type: "TextBlock",
      text: "Icon Generation Settings",
      weight: "bolder",
      size: "medium"
    },
    {
      type: "Input.Toggle",
      title: "Generate PNG formats",
      value: true,
      id: "pngToggle"
    },
    {
      type: "Input.Toggle",
      title: "Include SVG format",
      value: true,
      id: "svgToggle"
    }
  ],
  actions: [
    {
      type: "Action.Submit",
      title: "Generate Icons",
      data: {
        action: "generate"
      }
    }
  ]
};
```

These cards provide a consistent UI across platforms with minimal effort. The way they adapt to different container sizes makes them perfect for extensions that need to work on various devices.

## Research Resources

For anyone interested in extension development, I've found these resources invaluable:

- [DevBytes app](https://devbytes.app) - Great bite-sized development tips and tricks
- [dev.to](https://dev.to) - The community articles on extension development are outstanding
- [Extension Workshop by Mozilla](https://extensionworkshop.com/) - Even though I'm targeting Chrome/Edge, their conceptual guides are excellent

I'll be launching RatScale on both stores next week once the final accessibility improvements are completed. 