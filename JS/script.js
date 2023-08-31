document.querySelector("#header").style.display = "none";
document.querySelector("#main").style.display = "none"
document.getElementById("load").classList.add("ring") ;

setTimeout(()=> 

    {

        document.getElementById("load").classList.remove("ring") ;
        document.querySelector("#header").style.display = "block";
        document.querySelector("#main").style.display = "block"
        
    },3000);


function makesLike(itemId) {
    
        let x = document.getElementById("Likes" + itemId);
        let sel = parseInt(x.innerText);
        
        if (x.dataset.liked === "true") {
          sel--;
          x.dataset.liked = "false";
        } else {
          sel++;
          x.dataset.liked = "true";
        }
        
        x.innerText = sel;
      }
