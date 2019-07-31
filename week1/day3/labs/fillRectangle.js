function fillRectangle(width, height, chr) {
    rect = []
    for (let height_i = 0; height_i < height; height_i++) {
        rect.push(chr.repeat(width).split(""));
    }
    return rect;
}

function rectToString(rect) {
    halfRect = [];
    for (let array of rect) {
        halfRect.push(array.join(""));
    }
    return halfRect.join("\n");
}

console.log(rectToString(fillRectangle(5, 3, "🔥")));