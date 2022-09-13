
'use strict';
{
  document.querySelector('#target1').addEventListener('click',() =>{
    document.getElementById('target1').textContent = '変更する';
  });

  document.querySelector('#target1').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
    });


}
