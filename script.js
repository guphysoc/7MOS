/**
 * When the user clicks a circle, show what the talk is about underneath,
 * all the fields are relativley self-explanitory
 */

talkData = {
    "cir_0_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Jan 28 | Using tiny gravity sensors to see inside volcanoes",
        "abstract": "In 1985 23,000 people were killed by a volcano in Columbia; this is just one example of the many deadly eruptions that have occurred around the globe in living memory. I’m part of a team that is making sensors that can help to reduce the chance of more deaths like this in the future. We’re creating extremely accurate gravity sensors using the same techniques used to make mobile phone accelerometers.By scanning such sensors over the ground you can infer changes in density, and in doing so create images of magma flow; improving the ability to forecast hazardous events",
        "time_to_be_released": "01/22/2020"
    },
    "cir_1_talk": {
        "speaker": "Dr Daria Sokhan",
        "title": " Feb 4 | Mapping the world within",
        "abstract": "Protons are a mini-universe in themselves — just like space looks different across different scales (we can see stars, galaxies, the Milky Way as we zoom further and further out), the inner world of the proton appears to change as we zoom further and further in. At a casual glance, it looks like it’s composed of three quarks, but peer deeper inside and it will have shape-shifted into a teeming sea of quarks and gluons. How do its properties come about? What gives it its mass, 1000 times greater than that of its quarks? And what microscopes can we turn towards the infinity of the small at the heart of the proton?",

        "time_to_be_released": "01/22/2020"
    },
    "cir_2_talk": {
        "speaker": "Dr Luke Daly",
        "title": " Jan 28 | The origin of Earth’s oceans",
        "abstract": "The Earth’s oceans were critical for the emergence of life. But our cosy nurturing planet was not always so. The Earth formed in a dry rocky region of our Solar System and so was initially a dry barren wasteland, a far cry from the pale blue dot we see today. Where our oceans came from has been a puzzle we’ve been trying to solve for decades. Now, with new analytical technologies, and fresh samples collected from the surface of asteroids we may finally have the missing piece of the puzzle to understand the origin of our blue planet.",

        "time_to_be_released": "01/24/2020"
    },
    "cir_3_talk": {
        "speaker": "Hannah Doran",
        "title": "Feb 4 | Extraction of heat from radioactive waste",
        "abstract": "The Nuclear Industry has received a lot of controversy regarding its safety, security and future development after the Fukushima disaster in 2011. Many countries are entering their nuclear decommissioning phase, marking a definitive end to the commercialisation of nuclear energy. However, the build-up of radioactive waste in nuclear stores remains a future burden. My talk will discuss the back-end fuel cycle issues, specifically the interim storage and permanent disposal stages, and suggest novel techniques to recycle and utilise the decay heat produced from radioactive waste for heat and/or electricity production.",

        "time_to_be_released": "01/24/2020"
    },
    "cir_4_talk": {
        "speaker": "Jay Mackenzie",
        "title": "Feb 4 | On Lines On Boards",
        "abstract": "From many years of watching lecturers drawing dotted lines on chalk boards, we are motivated to ask \"is there a better way of doing this?\"The answer depends on how your lecturer was drawing their dotted lines, but there is certainly a best* way of drawing them.  In this talk, I motivate our interest in dotted lines, discuss how our preferred line drawing method works, and finish with the underlying mechanical principles that allows efficiency in our dottyness. \n* For a given value of \"best\"",

        "time_to_be_released": "01/24/2020"
    },
    "cir_5_talk": {
        "speaker": "Dr Steven Johnson",
        "title": "Jan 28 | How can you see with individual photons?",
        "abstract": "A photon is the elementary particle of light. The recent invention of specialised cameras mean we can now see individual photons, and even measure the distance to things the photon interacted with. The creation of this hardware now has us asking the question: how many photons do we need to be able to see an object?",

        "time_to_be_released": "01/25/2020"
    },
    "cir_6_talk": {
        "speaker": "Dr Juan Manuel Parrilla Gutierrez",
        "title": "Feb 4 | Engineering artificial life from the bottom-up",
        "abstract": "Life appeared on planet Earth around 4 billion of years ago, during a process known as abiogenesis or the Origin of Life. My research studies how did this happen, and aims to apply some of those processes into the design of bio-inspired robots. If we know that life happened already at least once, why cannot we use that knowledge to create artifial life?",

        "time_to_be_released": "01/25/2020"
    },
    "cir_7_talk": {
        "speaker": "Dr Derek Fabel",
        "title": "Jan 28 | A tale of fraudulent Scotch whiskies and the atom bomb",
        "abstract": "A major threat to the Scotch whisky industry is the sale of counterfeit single malt whiskies with purported distillation years in the 19th and early- to mid-20th centuries. However, these are often much more recent spirits, distilled in the latter part of the 20th or first part of the 21st centuries. These sales impinge upon the reputation of auction houses, retailers, brand owners and distillers.\n\n  The atmospheric testing of nuclear weapons in the 1950s and early 1960s caused a dramatic increase of radioactive 14C in the atmosphere. Using newly developed chemical techniques and accelerator mass spectrometry we have created a 14C calibration curve derived from known-age, single malt whiskies for the period 1950–2015 that enables whisky distilled during the period from 1955 onwards to have the distillation year determined to within 1–3 years for certain periods. However, because of the shape of the curve, two possible age ranges are often possible. The correct range can often be determined from a further plot of δ13C values against distillation year, which shows a trend of decreasing values through time. Examples are given of the determination of both genuine and fake products.",

        "time_to_be_released": "01/25/2020"
    },
    "cir_8_talk": {
        "time_to_be_released": "01/26/2020"
    },
    "cir_9_talk": {
        "time_to_be_released": "01/26/2020"
    },
    "cir_10_talk": {
        "time_to_be_released": "01/26/2020"
    },
    "cir_11_talk": {
        "time_to_be_released": "01/27/2020"
    },
    "cir_12_talk": {
        "time_to_be_released": "01/27/2020"
    },
    "cir_13_talk": {
        "time_to_be_released": "01/27/2020"
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
            if (Date.parse(talkData[id]["time_to_be_released"]) - Date.now() < 0) {
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