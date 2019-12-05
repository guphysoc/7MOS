/**
 * When the user clicks a circle, show what the talk is about underneath
 */

talkData = {
    "cir_vol_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Using tiny gravity sensors to see inside volcanoes.",
        "abstract": "In 1985 23,000 people were killed by a volcano in Columbia; this is just one example of the many deadly eruptions that have occurred around the globe in living memory. I’m part of a team that is making sensors that can help to reduce the chance of more deaths like this in the future. We’re creating extremely accurate gravity sensors using the same techniques used to make mobile phone accelerometers.By scanning such sensors over the ground you can infer changes in density, and in doing so create images of magma flow; improving the ability to forecast hazardous events"
    },
    "cir_nut_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": " consectetur adipiscing",
        "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus arcu, pretium ac dui in, consequat iaculis metus. Nulla nec iaculis erat. Praesent magna magna, suscipit non mauris et, ullamcorper aliquam nunc. Aenean hendrerit, justo in iaculis ullamcorper, dui augue tempus sem, vitae porttitor augue nibh sed lacus. Donec sodales ultrices tempus. Fusce ornare purus eget purus mollis sodales. Fusce luctus iaculis pharetra. Morbi scelerisque rhoncus quam, non bibendum nisi placerat quis. Aenean efficitur pharetra sem et lacinia."
    },
    "cir_mrs_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Nam ex metus",
        "abstract": "Donec malesuada in risus vitae efficitur. Nam ex metus, sagittis id porta non, tincidunt in sem. Pellentesque venenatis rhoncus bibendum. Mauris dapibus ipsum sed tortor fringilla, eget consectetur ante placerat. Integer in felis vitae eros venenatis tristique eget quis mi. Nam sit amet velit at felis rutrum tristique sit amet a mi. Suspendisse vehicula aliquet tortor et sollicitudin."
    },
    "cir_vr_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "facilisis in tellus eget",
        "abstract": "Morbi id imperdiet ipsum. Sed ante orci, facilisis in tellus eget, rutrum vehicula risus. Fusce consequat urna et vestibulum vulputate. Phasellus vel mauris nibh. Donec sodales ultrices semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin mi enim, at cursus neque molestie sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    "cir_dots_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Maecenas vestibulum",
        "abstract": "Nullam euismod dignissim nisi et rhoncus. Maecenas vestibulum, nisi at interdum ultricies, nisl turpis viverra nisi, ullamcorper condimentum risus erat vitae lorem. Curabitur blandit id lorem nec rutrum. Sed eget lectus velit. In vulputate, mi vulputate mattis aliquam, felis sapien ornare nisl, nec mattis diam risus ut tortor. Vivamus eget mollis erat, id ullamcorper leo. Maecenas venenatis mattis mi. Nullam eu dolor bibendum, porta libero sed, iaculis justo. In lobortis sapien quis mauris pulvinar, sed maximus odio euismod. Duis urna neque, ultricies et dolor sit amet, iaculis cursus elit. Integer vel pellentesque nibh. Aenean vestibulum ante augue, ac aliquet elit volutpat vitae."

    },

    "cir_dots_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Maecenas vestibulum",
        "abstract": "Nullam euismod dignissim nisi et rhoncus. Maecenas vestibulum, nisi at interdum ultricies, nisl turpis viverra nisi, ullamcorper condimentum risus erat vitae lorem. Curabitur blandit id lorem nec rutrum. Sed eget lectus velit. In vulputate, mi vulputate mattis aliquam, felis sapien ornare nisl, nec mattis diam risus ut tortor. Vivamus eget mollis erat, id ullamcorper leo. Maecenas venenatis mattis mi. Nullam eu dolor bibendum, porta libero sed, iaculis justo. In lobortis sapien quis mauris pulvinar, sed maximus odio euismod. Duis urna neque, ultricies et dolor sit amet, iaculis cursus elit. Integer vel pellentesque nibh. Aenean vestibulum ante augue, ac aliquet elit volutpat vitae."

    },
    "cir_dots_talk": {
        "speaker": "Dr Richard Middlemiss",
        "title": "Maecenas vestibulum",
        "abstract": "Nullam euismod dignissim nisi et rhoncus. Maecenas vestibulum, nisi at interdum ultricies, nisl turpis viverra nisi, ullamcorper condimentum risus erat vitae lorem. Curabitur blandit id lorem nec rutrum. Sed eget lectus velit. In vulputate, mi vulputate mattis aliquam, felis sapien ornare nisl, nec mattis diam risus ut tortor. Vivamus eget mollis erat, id ullamcorper leo. Maecenas venenatis mattis mi. Nullam eu dolor bibendum, porta libero sed, iaculis justo. In lobortis sapien quis mauris pulvinar, sed maximus odio euismod. Duis urna neque, ultricies et dolor sit amet, iaculis cursus elit. Integer vel pellentesque nibh. Aenean vestibulum ante augue, ac aliquet elit volutpat vitae."

    }

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
            document.getElementById("talkSpeaker").innerHTML = talkData[id]["speaker"]
            document.getElementById("talkTitle").innerHTML = talkData[id]["title"]
            document.getElementById("talkAbstract").innerHTML = talkData[id]["abstract"]
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