let library = [
    {   artist: "Senses Fail",
        artistThumb: "/resources/artistthumb/sensesfail.jpeg",
        genre: "Rock",
        albums:[{   title: "Let It Enfold You",
                    tracks:[
                            {   tracktitle: "Lady In A Blue Dress",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "You're Cute When Your Scream",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Bite To Break Skin",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                        ]
                },
                {   title: "Still Searching",
                    tracks:[
                            {   tracktitle: "Bonecrusher",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Can't Be Saved",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Calling All Cars",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                        ]
                }
        ]
    },
    {   artist: "Funeral For A Friend",
        genre: "Rock",
        artistThumb: "/resources/artistthumb/ffaf.jpeg",
        albums:[{   title: "Casually Dressed And Deep In Conversation",
                    tracks:[
                            {   tracktitle: "Rookie Of The Year",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Juneau",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Bend Your Arms To Look Like Wings",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                        ]
                },
                {   title: "Hours",
                    tracks:[
                            {   tracktitle: "All The Rage",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Streetcar",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                            {   tracktitle: "Roses For The Dead",
                                lyrics: ["excerpt 1", "excerpt 1", "excerpt 1"],
                                clip: ["clip 1", "clip 2", "clip 3"]
                            },
                        ]
                }
        ]
    }
];
let mode = "";
let diff = "";
let genre = "";
let artist = "";

fillArtist();

// selecting options
$(".mode-option").click(function(){
    let box = $(this).parent().parent().parent().attr("id");
    let curr = $(this).attr("data-id");
    let mo = document.getElementById(box).getElementsByClassName("mode-option");
    let downed;
    let button;

    // check if any button is clicked
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

    // store game settings
    function setSetting (){
        if (box == "mode") {
            mode = curr;
        }else{
            diff = curr;
        }
    }

    // to depress button or to switch button
    if (notOnlyOne()){
        if (downed != curr){
            button.classList.remove("clicked")
            $(this).addClass("clicked");
            setSetting();
        }
    }else{
        $(this).addClass("clicked");
        setSetting();
    }
});

// clicking start
$("#start").click(function(){
    // check if options are valid
    let str = "";
    if (mode == "" || diff == ""){
        if (mode == "" && diff == ""){
            str = "game mode and difficulty";
        }else if (mode == ""){
            str = "game mode";
        }else{
            str = "difficulty";
        }

        swal({
            title: "Please select your options",
            text: "You didn't select the " + str, 
            icon: "error",
          });
    }else {
        let rules = $("#rules");
        let options = $("#options");
        let cArtist = $("#choose-artist");
        let cGenre = $("#choose-genre");
        
        // hide current windows and show 2nd option window
        options.hide();
        rules.hide();

        setTimeout(function () {
            if (mode == "artist"){
                
                cArtist.show();
            }else if (mode == "genre"){

            }else {
                cArtist.show();
                
            }
        }, 500);
    }
});

// Back to menu button
$("#back").click(function(){
    let box = $(this).parent().parent().parent();
    
        box.hide();

        setTimeout( function() {
            $("#rules").show();
            $("#options").show();          
        }, 500);
});
// get artists/genres from library and populate the choice menu

function fillArtist(){
    let cArtist = $("#artist-select");

    library.forEach ((x, index) =>{
        let thumbPath = x.artistThumb;
        let image = document.createElement("img");
        image.setAttribute("src", thumbPath);
        image.setAttribute("data-id", index);
        cArtist.append(image);
    });
};

/* /* function tranIn(x) {
    x.show();
    x.addClass("animate__animated animate__backInUp animate__slow");
    x.on('animationend', () => {
        x.removeClass("animate__animated animate__backInUp animate__slow");
    });
}

function tranOut(x) {
    x.on('animationend', () => {
        x.hide();
        x.removeClass("animate__animated animate__backOutDown animate__slow");
    });
    x.addClass("animate__animated animate__backOutDown animate__slow");
} */

// set options as buttons, put data-id of the artist/genre in the respective boxes



console.log(library);