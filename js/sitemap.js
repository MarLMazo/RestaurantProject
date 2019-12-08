
function sitemap(){


  var main= document.getElementsByClassName('main');
  var second = document.getElementsByClassName('second')
  var atag = document.querySelectorAll('a');
  var spanIcon= document.querySelectorAll('.main-content span');
  var descrip = document.getElementsByClassName('descrip')



  for(let i=0;i<spanIcon.length; i++){
      spanIcon[i].addEventListener("click",function(){
      this.classList.toggle("iconfolder");
      this.classList.toggle("iconOpenfolder");
      
      //descrip.innerHTML = "<h2>"+ this.innerText+"</h2>";
      Initialize();
      descrip[i].classList.remove("hidden");

      if( this.nextElementSibling === null){
        //If Span has no next UL-tag,
        //console.log("This is the last one"); 
             
      }
      else{
        this.nextElementSibling.classList.toggle("hidden");
      }
      // for(let i =0;i<descrip.length; i++){
      //   descrip[i].classList.add("hidden");
      // }
      
    });
  }


  function Initialize(){
    for(let i =0; i<descrip.length;i++){
      descrip[i].classList.add("hidden");
    }
  }
  Initialize();
}

sitemap();
