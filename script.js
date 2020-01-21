/**
 * When the user clicks a circle, show what the talk is about underneath
 */

talkData = {
    "cir_0_talk": {
        "time_to_be_released": "01/22/2020"
    },
    "cir_1_talk": {
        "speaker": "Dr Daria Sokhan",
        "title": " Mapping the world within",
        "abstract": "Protons are a mini-universe in themselves — just like space looks different across different scales (we can see stars, galaxies, the Milky Way as we zoom further and further out), the inner world of the proton appears to change as we zoom further and further in. At a casual glance, it looks like it’s composed of three quarks, but peer deeper inside and it will have shape-shifted into a teeming sea of quarks and gluons. How do its properties come about? What gives it its mass, 1000 times greater than that of its quarks? And what microscopes can we turn towards the infinity of the small at the heart of the proton?",
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

prev_id = ""

function onClickCircle(id) {
    //alert(id);
    document.getElementById("talkAfterClicked").style.opacity = 0;
    document.getElementById(id).style.transform = "scale(1.2)";
    if (prev_id) {
        document.getElementById(prev_id).style.transform = null;
        //document.getElementById(prev_id).onmouseover = function () {
        ///   document.getElementById(prev_id).style.transform = "scale(1.1)"
        //}
    }

    setTimeout(
        function () {
            document.getElementById("talkAfterClicked").style.opacity = 1;
            if (Date(talkData[id]["time_to_be_released"]) - Date.now() > 0) {
                document.getElementById("talkSpeaker").innerHTML = talkData[id]["speaker"]
                document.getElementById("talkTitle").innerHTML = talkData[id]["title"]
                document.getElementById("talkAbstract").innerHTML = talkData[id]["abstract"]
            } else {
                document.getElementById("talkSpeaker").innerHTML = ""
                document.getElementById("talkTitle").innerHTML = "XXX"
                document.getElementById("talkAbstract").innerHTML = "This will be released in " + Math.ceil((new Date(talkData[id]["time_to_be_released"]) - new Date()) / (1000 * 60 * 60 * 24)) + " days.  Can you guess what it's about?"
                //console.log(new Date(talkData[id]["time_to_be_released"]))
                //console.log(new Date)

                // document.getElementById("talkSpeaker").innerHTML = talkData[id]["speaker"]
                //console.log((new Date(talkData[id]["time_to_be_released"]).getTime() - new Date()) / (1000 * 60 * 60 * 24))

            }
        },
        300
    )
    //document.getElementById("talkAfterClicked").style.opacity = 1;
    //document.getElementById("talkSpeaker").innerHTML = talkData[id]["speaker"]
    //document.getElementById("talkTitle").innerHTML = talkData[id]["title"]
    //document.getElementById("talkAbstract").innerHTML = talkData[id]["abstract"]
    //document.getElementsByClassName()
    //Use the ID to get an element with the same id + "ToShow" to un-hide
    //document.getElementById(id + "ToShow").classList.add("show");

    prev_id = id;

}