/**
 * When the user clicks a circle, show what the talk is about underneath,
 * all the fields are relativley self-explanitory
 */

talkData = {
    "cir_0_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Using tiny gravity sensors to see inside volcanoes",
        "abstract": "In 1985 23,000 people were killed by a volcano in Columbia; this is just one example of the many deadly eruptions that have occurred around the globe in living memory. I’m part of a team that is making sensors that can help to reduce the chance of more deaths like this in the future. We’re creating extremely accurate gravity sensors using the same techniques used to make mobile phone accelerometers.By scanning such sensors over the ground you can infer changes in density, and in doing so create images of magma flow; improving the ability to forecast hazardous events",
        "time_to_be_released": "01/22/2020"
    },
    "cir_1_talk": {
        "time_to_be_released": "01/23/2020"
    },
    "cir_2_talk": {
        "time_to_be_released": "01/24/2020"
    },
    "cir_3_talk": {
        "time_to_be_released": "01/29/2020"
    },
    "cir_4_talk": {
        "time_to_be_released": "01/30/2020"
    },
    "cir_5_talk": {
        "time_to_be_released": "01/25/2020"
    },
    "cir_6_talk": {
        "time_to_be_released": "01/31/2020"
    },
    "cir_7_talk": {
        "time_to_be_released": "01/26/2020"
    },
    "cir_8_talk": {
        "time_to_be_released": "01/27/2020"
    },
    "cir_9_talk": {
        "time_to_be_released": "02/01/2020"
    },
    "cir_10_talk": {
        "time_to_be_released": "01/28/2020"
    },
    "cir_11_talk": {
        "time_to_be_released": "02/02/2020"
    },
    "cir_12_talk": {
        "time_to_be_released": "02/03/2020"
    },
    "cir_13_talk": {
        "time_to_be_released": "02/04/2020"
    },

}

// Static for the functon below,
// prev_id is the id of the currently sellected talk cir_xy_talk
prev_id = ""

function onClickCircle(id) {
    // Have one fade out and another fade in, fade controlled by CSS
    // Fade currently selected one out and scale circle back to normal
    document.getElementById("talkAfterClicked").style.opacity = 0;
    document.getElementById(id).style.transform = "scale(1.2)";
    if (prev_id) {
        document.getElementById(prev_id).style.transform = null;
    }

    // FFade clicked on speaker in
    setTimeout(
        function () {
            document.getElementById("talkAfterClicked").style.opacity = 1;
            if (Date(talkData[id]["time_to_be_released"]) - Date.now() > 0) {
                // The release date has passed, show the user the speaker, title and abstract
                document.getElementById("talkSpeaker").innerHTML = talkData[id]["speaker"]
                document.getElementById("talkTitle").innerHTML = talkData[id]["title"]
                document.getElementById("talkAbstract").innerHTML = talkData[id]["abstract"]
            } else {
                // The user should be able to see it because it hasn't been released yet
                document.getElementById("talkSpeaker").innerHTML = ""
                document.getElementById("talkTitle").innerHTML = "XXX"
                document.getElementById("talkAbstract").innerHTML = "This will be released in " + Math.ceil((new Date(talkData[id]["time_to_be_released"]) - new Date()) / (1000 * 60 * 60 * 24)) + " days.  Can you guess what it's about?"

            }
        },
        300
    )

    prev_id = id;
}