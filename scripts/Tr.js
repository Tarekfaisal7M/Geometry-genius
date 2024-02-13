// triangle base value
function triangleCalculateArea(){
   const triangleBasedInput = document.getElementById(`triangle-base`);
   const triangleBasedText = triangleBasedInput.value;
   const base = parseFloat(triangleBasedText);
   console.log(base);

//    triangle.height value
   const triangleInput =document.getElementById(`triangle-height`);
   const triangleText = triangleInput.value;
   const height = parseFloat(triangleText);
   console.log(height);
   
   // calculate triangle area
   const area = .5 * base * height;
   console.log(`area is triangle of:`, area);

   // display triangle area
   const triangleAraSpan = document.getElementById(`triangle-area`);
   triangleAraSpan.innerText = area;
}

