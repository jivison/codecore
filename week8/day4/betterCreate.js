function H(nodeName, attributes = {}, content = undefined) {
    hElement = document.createElement(nodeName);

    for (let attributeName of Object.keys(attributes)) {
        attributeValue = attributes[attributeName];

        hElement.setAttribute(attributeName, attributeValue);
    }

    (content) ? hElement.innerHTML = content : {};

    return hElement;
}