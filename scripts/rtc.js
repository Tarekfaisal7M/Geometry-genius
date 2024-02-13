function calculateRectangleArea(){
    // get rtc length
    const lengthInput = document.getElementById(`rectangle-len`);
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width value
    const widthInput = document.getElementById(`rectangle-wid`);
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate rectangle area
    const area = length * width;
    console.log(`area of the rectangle:`, area);

    // display rectangle area
    const areaSpan = document.getElementById(`rectangle-area`)
    areaSpan.innerText =area;
}