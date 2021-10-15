let form = document.getElementById('cap-form'),
      capInput = document.getElementById('capcha-inp'),
      generateBtn = document.getElementById('btn-gen'),  
      copyBtn = document.getElementById('btn-copy');  

      // Event Llisteners
    form.addEventListener('submit' , e => {   
        generateCap()
       e.preventDefault()
    })

    copyBtn.addEventListener('click' , copyCap)
    // ==========================================

    // generate capcha each with 8 characters each call
    function generateCap(){
        let capcha = ""
        let capText= '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
        for (var i = 0; i < 8; i++) {
            capcha += capText.charAt(Math.random()* 65)    
        }
        capInput.value = capcha
    }

    // copy to clipBoard 
    function copyCap(){
         
     capInput.select();
     capInput.setSelectionRange(0, 99999); 
     navigator.clipboard.writeText(capInput.value);

}