window.addEventListener("scroll",function(e){
    if(this.window.scrollY>4)
    {
    console.log("working");  
     let header=document.getElementById('navigation')
navigation.className="navigation";
    }
    else{
        let header=document.getElementById('navigation')
navigation.className="sticky";
    }
})

