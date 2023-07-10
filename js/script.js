window.addEventListener("scroll",function(e){
    if(this.window.scrollY>4)
    {
        
     let header=document.getElementById('navigation')
navigation.className="sticky";
    }
    else{
        let header=document.getElementById('navigation')
navigation.className="navigation";
    }
})