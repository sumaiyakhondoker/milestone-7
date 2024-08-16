// localStorage.setItem('userId', 857432);


const addToLocalStorage = ()=>{
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value;


   
    // set to local storage
    localStorage.setItem(id,value)

     // clean the input field
     idInput.value = ''
     valueInput.value = ''
 
    
    

}