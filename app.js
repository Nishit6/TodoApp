const input = document.getElementById('inp');
const button = document.getElementById('btn');
const li = document.getElementById('list');



button.onclick = function(e){
       
    const inputValue = inp.value;
    const li = document.createElement('li');
   
    li.innerText = inputValue;
    
    li.onclick = function(e){
        e.target.remove();
        
    }
 
    

    list.append(li);
    

    inp.value ="";
    
}

