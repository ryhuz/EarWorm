$(".mode-option").click(function(){
    let box = $(this).parent().parent().parent().attr("id");
    let curr = $(this).attr("data-id");

    let mo = document.getElementById(box).getElementsByClassName("mode-option");
    let downed;
    let button;

    function notOnlyOne (){
        let test = 0;
        for (let x of mo){
            if (x.classList.contains("clicked")){
                test++;
                downed = x.attributes["data-id"].nodeValue;
                button = x;
            }
        }
        return test;
    }

    if (notOnlyOne()){
        if (downed != curr){
            button.classList.remove("clicked")
            $(this).addClass("clicked");
        }
    }else{
        $(this).addClass("clicked");
    }

    
});
