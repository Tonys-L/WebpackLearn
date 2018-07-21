//这里仅导入了 cube 并未导入 square，所以 square应该被删除掉
import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');
  
  element.innerHTML = [
         'Hello webpack!',
         '5 cubed is equal to ' + cube(5)
       ].join('\n\n');
    
    return element;
  }
  
  document.body.appendChild(component);
