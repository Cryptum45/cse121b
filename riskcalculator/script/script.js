
const buttons = document.querySelectorAll('button');

//**************Math for reinforcements********************/

const reinforcements = function(number){

return 'With ' + number + ' territories' + ' You will get ' + (Math.floor(number / 3) || 1) + ' Reinforcements'

};

/*******Not a number***********************/
const wrongInput = function(number){
  if (number === NaN){
  return 'Must be a number'}
    if (number > 0 ){
      return reinforcements(number) 
    }
    else { return 'Must be postive'}
};
/***************************************/
buttons.forEach(function(button) {

  button.addEventListener('click', function() {
    const input = this.parentNode.querySelector('input')
    let numberOF = input.value;
    input.value = '';
    const list = this.parentNode.nextElementSibling.querySelector('ul')
    numberOF = wrongInput(+numberOF)

    const numberOf2 = document.createElement('li');
    const textList = document.createElement('span');
    const deleteButton = document.createElement('button');
  
    list.appendChild(numberOf2);
    numberOf2.appendChild(textList)
    textList.textContent = numberOF;
    
    
    numberOf2.appendChild(deleteButton);
    deleteButton.textContent = '❌';
  
    deleteButton.addEventListener('click', () => {
      list.removeChild(numberOf2);
    });
  
    input.focus();
  });

});

