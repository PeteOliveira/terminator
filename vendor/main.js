$(document).ready(function () {
    console.log("js and jQuery loaded!");

    // Loading instructions after a bit on page load.

    var instructionMessage = "Welcome! You are a Cyberdyne Systems series T-800, Model 101 Terminator (living tissue over a metal endoskeleton). Your objective: Find and terminate Sarah Connor. First, check the Yellow Pages, where you'll find possible locations Sarah may be hiding. Then to the gun shop, where you should find 20 rounds of ammo to complete your objective. You must eliminate Sarah bofore you run out of ammo. Good luck!";

var instruct = function(){
  $("h4").html(`${instructionMessage}`);
};
setTimeout(instruct, 2000);

instruct();
//
// setTimeout(function(){
//   $("instructions").html(`${instructionMessage}`);
// }, 3000);
    // Global Variables and objects

    var ammoCount = 0;
    var ammoNeeded = 0;
    var missionMessage = "";

    var allLocations = {
        locationsToChooseFrom: [
            "Alamo Guns",
            "Work",
            "Suburban Home",
            "Under the Bridge",
            "Restaurant",
            "Crappy Motel",
            "Technoir | Club",
            "Police Station",
            "Apartment"
        ]
    };

    // Functions for Mousing over and clicking buttons.
    // Come back to later and try to wrap all of this up in a function or two.
    $("#bottom-right-button").on("mouseenter", function () {
        $(this).css("background-color", "rgba(255,255,255, .3)");
    });

    $("#bottom-right-button").on("mouseleave", function () {
        $(this).css("background-color", "rgba(0,0,0, .5)");
    });

    $("#bottom-right-button").on("click", function () {
        $(this).addClass("clicked");
        ammoCount += 19;
        // Assigning the original ammo starter to the bottom-right-button, which should hopefully have the Text "Alamo Guns", by this point."
        $("h5").html(`AMMO: ${ammoCount}`);
        $(this).off();
        alert("You now have 19 rounds of ammo, as you used one round wasting the store owner. He's dead...");
    });


    $("#top-left-button").on("mouseenter", function () {
        $(this).css("background-color", "rgba(255,255,255, .3)");
    });

    $("#top-left-button").on("mouseleave", function () {
        $(this).css("background-color", "rgba(0,0,0, .5)");
    });

    $("#top-left-button").on("click", function () {
        $(this).addClass("clicked");
        ammoNeeded = 3;
        missionMessage ="You've found and murdered Sarah Connor. In cold blood... You win!!";
        $(this).off();
        didWin();
    });

    //Wrapping up Top Left Button functionality

    $("#top-right-button").on("mouseenter", function () {
        $(this).css("background-color", "rgba(255,255,255, .3)");
    });

    $("#top-right-button").on("mouseleave", function () {
        $(this).css("background-color", "rgba(0,0,0, .5)");
    });

    $("#top-right-button").on("click", function () {
        $(this).addClass("clicked");
        ammoNeeded = 3;
        $(this).off();
        didWin();
    });

    // Top Middle Button Clicking.

    $("#top-middle-button").on("mouseenter", function () {
        $(this).css("background-color", "rgba(255,255,255, .3)");
    });

    $("#top-middle-button").on("mouseleave", function () {
        $(this).css("background-color", "rgba(0,0,0, .5)");
    });

    $("#top-middle-button").on("click", function () {
        $(this).addClass("clicked");
        ammoNeeded = 4;
        $(this).off();
        didWin();
    });


    //Top middle button clicking.

    $("#bottom-left-button").on("mouseenter", function () {
        $(this).css("background-color", "rgba(255,255,255, .3)");
    });

    $("#bottom-left-button").on("mouseleave", function () {
        $(this).css("background-color", "rgba(0,0,0, .5)");
    });
    $("#bottom-left-button").on("click", function () {
        $(this).addClass("clicked");
        ammoNeeded = 7;
        missionMessage ="Kyle Reese was protecting Sarah!! You used 7 rounds of ammo...";
        $(this).off();
        didWin();
    });

    //Bottom left button clicking.

    $("#bottom-middle-button").on("mouseenter", function () {
        $(this).css("background-color", "rgba(255,255,255, .3)");
    });

    $("#bottom-middle-button").on("mouseleave", function () {
        $(this).css("background-color", "rgba(0,0,0, .5)");
    });

    $("#bottom-middle-button").on("click", function () {
        $(this).addClass("clicked");
        ammoNeeded = 5;
        $(this).off();
        didWin();
    });

    //Bottom Middle button clicking

    //Bottom Right Button Clicking

    var chosenLocations = [];
    // Function to choose 6 random locations to push to buttons. Not pushed yet.
    var randomLocation = function (array) {
        // Making sure ALAMO GUNS is always present, so user can get ammo at the beginning of the game, every playthrough.
        chosenLocations[0] = allLocations.locationsToChooseFrom[0];
        var gunStore = array.splice(array[0], 1);
        for (let i = 1; i < 6; i++) {
            var randomIndex = Math.ceil(Math.random() * array.length - 1);

            chosenLocations.push(array[randomIndex]);


            array.splice(randomIndex, 1);
            // if(chosenLocations[0] === allLocations.locationsToChooseFrom[0]) {
            //   allLocations.locationsToChooseFrom[0].addClass(".image_connor");
            // }
        }
        array.splice(randomIndex, 1);
        console.log(randomIndex, "SPLICED INDEX");
    };
    randomLocation(allLocations.locationsToChooseFrom);
    console.log(chosenLocations, "CHOSEN LOCATIONS");

// Give random index of chosenLocations the class of .image_connor and image-reese

// Next we'll give an overlay with instructions!

// Function to push the 6 random locations to the button divs.

    var pushToButtons = function () {

        $("#bottom-right-button").html(chosenLocations[0]).addClass("button-text");
        chosenLocations.splice(current, 1);
        console.log(chosenLocations, "CHOSEN LOCATIONS 6");
        current = Math.ceil(Math.random() * chosenLocations.length - 1);


        var current = Math.ceil(Math.random() * chosenLocations.length - 1);

        $("#top-left-button").html(chosenLocations[current]).addClass("button-text");
        chosenLocations.splice(current, 1);
        console.log(chosenLocations, "CHOSEN LOCATIONS 1");
        current = Math.ceil(Math.random() * chosenLocations.length - 1);

        $("#top-middle-button").html(chosenLocations[current]).addClass("button-text");
        chosenLocations.splice(current, 1);
        console.log(chosenLocations, "CHOSEN LOCATIONS 2");
        current = Math.ceil(Math.random() * chosenLocations.length - 1);

        $("#top-right-button").html(chosenLocations[current]).addClass("button-text");
        chosenLocations.splice(current, 1);
        console.log(chosenLocations, "CHOSEN LOCATIONS 3");
        current = Math.ceil(Math.random() * chosenLocations.length - 1);

        $("#bottom-left-button").html(chosenLocations[current]).addClass("button-text");
        chosenLocations.splice(current, 1);
        console.log(chosenLocations, "CHOSEN LOCATIONS 4");
        current = Math.ceil(Math.random() * chosenLocations.length - 1);

        $("#bottom-middle-button").html(chosenLocations[current]).addClass("button-text");
        chosenLocations.splice(current, 1);
        console.log(chosenLocations, "CHOSEN LOCATIONS 5");
        current = Math.ceil(Math.random() * chosenLocations.length - 1);

    };

    $(".yellow-pages").on("click", pushToButtons);
    //Checking conditions for winning.
    var didWin = function () {
        ammoCount = (ammoCount - ammoNeeded);
        if (ammoCount < 0) {
            alert("No Ammo, Mission failed! To the hydraulic press with you!");
        } else {
            $("h5").html(`AMMO: ${ammoCount}`);
            if (missionMessage != "") {
                alert(missionMessage);
            }
            missionMessage = "";
        }
    };

});

//Adding image of Sarah Connor to random index of buttons.
// var addConnor = function () {
//   let buttons = ["#bottom-right-button","#bottom-middle-button","#bottom-left-button","#top-right-button","#top-middle-button","#top-right-button"];
//   let randomIndex = Math.ceil(Math.random() *  buttons.length - 1);
//   $(buttons[randomIndex]).addClass("image-connor");
// };
// addConnor();


//TRYING to add box-shadow when clicked. DON'T WORRY ABOUT IT.

// $(".yellow-pages").on("click", function() {
//   console.log("clicked");
//   $(this).addClass("clicked");
// });


// Function to PUSH random locales to the actual buttons


//Push 6 random locations to chosenLocations,


// Set the background image to cover.
//We'll be selecting 6 random array values for buttons for the user to select. Gun shop and police station will always be shown, however.
