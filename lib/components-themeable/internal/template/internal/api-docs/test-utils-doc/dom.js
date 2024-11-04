module.exports = {
      classes: [{"name":"AvatarWrapper","methods":[{"name":"blur","returnType":{"name":"void","type":"intrinsic"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.blur"}},{"name":"click","description":"Performs a click by triggering a mouse event.\nNote that programmatic events ignore disabled attribute and will trigger listeners even if the element is disabled.","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"params","typeName":"MouseEventInit","flags":{"isOptional":true}}],"inheritedFrom":{"name":"AbstractWrapper.click"}},{"name":"find","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.find"}},{"name":"findAll","returnType":{"name":"array","type":"reference"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findAll"}},{"name":"findAllByClassName","returnType":{"name":"array","type":"reference"},"parameters":[{"name":"className","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findAllByClassName"}},{"name":"findByClassName","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[{"name":"className","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findByClassName"}},{"name":"findComponent","returnType":{"name":"Wrapper | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}},{"name":"ComponentClass","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findComponent"}},{"name":"findTooltip","returnType":{"name":"TooltipWrapper | null","type":"union"},"parameters":[]},{"name":"fireEvent","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"event","typeName":"Event","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.fireEvent"}},{"name":"focus","returnType":{"name":"void","type":"intrinsic"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.focus"}},{"name":"getElement","returnType":{"name":"HTMLElement","type":"reference"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.getElement"}},{"name":"keydown","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keydown"}},{"name":"keypress","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keypress"}},{"name":"keyup","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keyup"}},{"name":"matches","returnType":{"name":"this | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.matches"}}]},{"name":"ChatBubbleWrapper","methods":[{"name":"blur","returnType":{"name":"void","type":"intrinsic"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.blur"}},{"name":"click","description":"Performs a click by triggering a mouse event.\nNote that programmatic events ignore disabled attribute and will trigger listeners even if the element is disabled.","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"params","typeName":"MouseEventInit","flags":{"isOptional":true}}],"inheritedFrom":{"name":"AbstractWrapper.click"}},{"name":"find","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.find"}},{"name":"findActionsSlot","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[]},{"name":"findAll","returnType":{"name":"array","type":"reference"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findAll"}},{"name":"findAllByClassName","returnType":{"name":"array","type":"reference"},"parameters":[{"name":"className","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findAllByClassName"}},{"name":"findAvatarSlot","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[]},{"name":"findByClassName","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[{"name":"className","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findByClassName"}},{"name":"findComponent","returnType":{"name":"Wrapper | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}},{"name":"ComponentClass","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findComponent"}},{"name":"findContentSlot","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[]},{"name":"findLoadingBar","returnType":{"name":"LoadingBarWrapper | null","type":"union"},"parameters":[]},{"name":"fireEvent","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"event","typeName":"Event","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.fireEvent"}},{"name":"focus","returnType":{"name":"void","type":"intrinsic"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.focus"}},{"name":"getElement","returnType":{"name":"HTMLElement","type":"reference"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.getElement"}},{"name":"keydown","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keydown"}},{"name":"keypress","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keypress"}},{"name":"keyup","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keyup"}},{"name":"matches","returnType":{"name":"this | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.matches"}}]},{"name":"LoadingBarWrapper","methods":[{"name":"blur","returnType":{"name":"void","type":"intrinsic"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.blur"}},{"name":"click","description":"Performs a click by triggering a mouse event.\nNote that programmatic events ignore disabled attribute and will trigger listeners even if the element is disabled.","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"params","typeName":"MouseEventInit","flags":{"isOptional":true}}],"inheritedFrom":{"name":"AbstractWrapper.click"}},{"name":"find","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.find"}},{"name":"findAll","returnType":{"name":"array","type":"reference"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findAll"}},{"name":"findAllByClassName","returnType":{"name":"array","type":"reference"},"parameters":[{"name":"className","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findAllByClassName"}},{"name":"findByClassName","returnType":{"name":"ElementWrapper | null","type":"union"},"parameters":[{"name":"className","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findByClassName"}},{"name":"findComponent","returnType":{"name":"Wrapper | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}},{"name":"ComponentClass","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.findComponent"}},{"name":"fireEvent","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"event","typeName":"Event","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.fireEvent"}},{"name":"focus","returnType":{"name":"void","type":"intrinsic"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.focus"}},{"name":"getElement","returnType":{"name":"HTMLElement","type":"reference"},"parameters":[],"inheritedFrom":{"name":"AbstractWrapper.getElement"}},{"name":"keydown","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keydown"}},{"name":"keypress","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keypress"}},{"name":"keyup","returnType":{"name":"void","type":"intrinsic"},"parameters":[{"name":"keyCode","typeName":"KeyCode","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.keyup"}},{"name":"matches","returnType":{"name":"this | null","type":"union"},"parameters":[{"name":"selector","typeName":"string","flags":{"isOptional":false}}],"inheritedFrom":{"name":"AbstractWrapper.matches"}}]}]
    }
    