//selectors
const myBtn = document.querySelector('#set');
var shapeProperty = document.getElementsByName('cssProperty');

//event Listeners
myBtn.addEventListener('click', setShape);

//functions
function setShape(e){
    e.preventDefault();
    for(var index = 0; index < shapeProperty.length; index++){
        let cssProperty = shapeProperty[index].getAttribute('id');
        let cssValue = shapeProperty[index].value; 
   
    //modify the square shape
    let modifySquare = document.getElementById('modify');
    modifySquare.style[ cssProperty ] = cssValue;
   }
}
