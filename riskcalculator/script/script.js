
const players = document.querySelector('.allplayers');
const dropdown = document.querySelector('#dropdown')
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

/**This will make eahc new player and add a plus one to the html to get the right propities to from the CSS */
dropdown.addEventListener('change', (event) => { 
  const value = +event.target.value;
  players.innerHTML = "";
  for (let i = 1; i <= value; i++){
    const playerhtml = `<div class="player${i}">
    <h1>Player${i}</h1>
    
      <div class="input">
        <label>How many territories?<br>
          <input type="text" id="t1" placeholder="Number" required></label>
        <button id="submitbutton" type="submit">Reinforce</button>
      </div>
      <div class="listcontainer">
        <ul class="list" >
        </ul>
      </div>
      <section>
      </section>
    </div>`;

    players.insertAdjacentHTML('beforeend', playerhtml);

  }
    
});

/**Button stuff but this time it will see it frim the javaside and not the HTML side */
players.addEventListener('click', function(event){

  if(event.target.tagName !== 'BUTTON') return;
  if (event.target.id === 'submitbutton') {
    const input = event.target.parentNode.querySelector('input')
      let numberOF = input.value;
         input.value = '';
         const list = event.target.parentNode.nextElementSibling.querySelector('ul')
         numberOF = wrongInput(+numberOF)
    
         const numberOf2 = document.createElement('li');
         const textList = document.createElement('span');
         const deleteButton = document.createElement('button');
      
         list.appendChild(numberOf2);
         numberOf2.appendChild(textList)
         textList.textContent = numberOF;
        
        
         numberOf2.appendChild(deleteButton);
         deleteButton.textContent = '❌';
    
    
  } else {
    event.target.closest('li').remove();
    
  }
});
