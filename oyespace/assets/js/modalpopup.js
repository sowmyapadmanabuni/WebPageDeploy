     window.onload=function(){
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }
    
    //(*****--------IT WILL GET THE POPUP OF THE (+) BUTTON--------------******)
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('Video');
    var img1 = document.getElementById('myImg1');
    var img2 = document.getElementById('myImg2');
    var img3 = document.getElementById('myImg3');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    img.addEventListener('click',function(){
         console.log('test');
      modal.style.display = "block";
      modalImg.src = src="assets/images/Gif2_delivery_boy.gif"; // Delivery Boy
      captionText.innerHTML = this.alt;
    })

    img1.addEventListener('click',function(){
        console.log('test');
     modal.style.display = "block";
     modalImg.src = src="assets/images/Gif3_maid.gif"; //  Maid 
     captionText.innerHTML = this.alt;
   })

    img2.addEventListener('click',function(){
        console.log('test');
     modal.style.display = "block";
     modalImg.src = src="assets/images/Gif1_Guest.gif";   //  Guest
     captionText.innerHTML = this.alt;
   })

    img3.addEventListener('click',function(){
        console.log('test');
     modal.style.display = "block";
     modalImg.src = src="assets/images/Gif4_Guard.gif";      //   Guard
     captionText.innerHTML = this.alt;
   })
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
   

     }
     

     