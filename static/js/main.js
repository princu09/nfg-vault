$(document).ready(function() {

    // $('.btn').click(function() {

    // var paswd = $(this).prop('input');
    // alert(paswd)

    // if (paswd.attr("type") == "password") {

    //     paswd.attr("type", "text");

    //     document.getElementById("eye").className = "btn mx-2 far fa-eye";

    // } else {
    //     paswd.attr("type", "password");

    //     document.getElementById("eye").className = "btn mx-2 far fa-eye-slash";
    // }
    // })

    var colors = [
        "rgba(128, 0, 0 , 0.2)", "rgba(139, 0, 0 , 0.2)", "rgba(165, 42, 42 , 0.2)", "rgba(178, 34, 34 , 0.2)", "rgba(220, 20, 60 , 0.2)", "rgba(255, 0, 0 , 0.2)", "rgba(255, 99, 71 , 0.2)", "rgba(255, 127, 80 , 0.2)", "rgba(205, 92, 92 , 0.2)", "rgba(240, 128, 128 , 0.2)", "rgba(233, 150, 122 , 0.2)", "rgba(250, 128, 114 , 0.2)", "rgba(255, 160, 122 , 0.2)", "rgba(255, 69, 0 , 0.2)", "rgba(255, 140, 0 , 0.2)", "rgba(255, 215, 0 , 0.2)", "rgba(255, 165, 0 , 0.2)", "rgba(184, 134, 11 , 0.2)", "rgba(218, 165, 32 , 0.2)", "rgba(238, 232, 170 , 0.2)", "rgba(189, 183, 107 , 0.2)", "rgba(240, 230, 140 , 0.2)", "rgba(128, 128, 0 , 0.2)", "rgba(255, 255, 0 , 0.2)", "rgba(154, 205, 50 , 0.2)", "rgba(85, 107, 47 , 0.2)", "rgba(107, 142, 35 , 0.2)", "rgba(124, 252, 0 , 0.2)", "rgba(127, 255, 0 , 0.2)", "rgba(173, 255, 47 , 0.2)", "rgba(0, 100, 0 , 0.2)", "rgba(0, 128, 0 , 0.2)", "rgba(34, 139, 34 , 0.2)", "rgba(0, 255, 0 , 0.2)", "rgba(50, 205, 50 , 0.2)", "rgba(144, 238, 144 , 0.2)", "rgba(152, 251, 152 , 0.2)", "rgba(143, 188, 143 , 0.2)", "rgba(0, 250, 154 , 0.2)", "rgba(0, 255, 127 , 0.2)", "rgba(46, 139, 87 , 0.2)", "rgba(102, 205, 170 , 0.2)", "rgba(60, 179, 113 , 0.2)", "rgba(32, 178, 170 , 0.2)", "rgba(47, 79, 79 , 0.2)", "rgba(0, 128, 128 , 0.2)", "rgba(0, 139, 139 , 0.2)", "rgba(0, 255, 255 , 0.2)", "rgba(0, 255, 255 , 0.2)", "rgba(224, 255, 255 , 0.2)", "rgba(0, 206, 209 , 0.2)", "rgba(64, 224, 208 , 0.2)", "rgba(72, 209, 204 , 0.2)", "rgba(175, 238, 238 , 0.2)", "rgba(127, 255, 212 , 0.2)", "rgba(176, 224, 230 , 0.2)", "rgba(95, 158, 160 , 0.2)", "rgba(70, 130, 180 , 0.2)", "rgba(100, 149, 237 , 0.2)", "rgba(0, 191, 255 , 0.2)", "rgba(30, 144, 255 , 0.2)", "rgba(173, 216, 230 , 0.2)", "rgba(135, 206, 235 , 0.2)", "rgba(135, 206, 250 , 0.2)", "rgba(25, 25, 112 , 0.2)", "rgba(0, 0, 128 , 0.2)", "rgba(0, 0, 139 , 0.2)", "rgba(0, 0, 205 , 0.2)", "rgba(0, 0, 255 , 0.2)", "rgba(65, 105, 225 , 0.2)", "rgba(138, 43, 226 , 0.2)", "rgba(75, 0, 130 , 0.2)", "rgba(72, 61, 139 , 0.2)", "rgba(106, 90, 205 , 0.2)", "rgba(123, 104, 238 , 0.2)", "rgba(147, 112, 219 , 0.2)", "rgba(139, 0, 139 , 0.2)", "rgba(148, 0, 211 , 0.2)", "rgba(153, 50, 204 , 0.2)", "rgba(186, 85, 211 , 0.2)", "rgba(128, 0, 128 , 0.2)", "rgba(216, 191, 216 , 0.2)", "rgba(221, 160, 221 , 0.2)", "rgba(238, 130, 238 , 0.2)", "rgba(255, 0, 255 , 0.2)", "rgba(218, 112, 214 , 0.2)", "rgba(199, 21, 133 , 0.2)", "rgba(219, 112, 147 , 0.2)", "rgba(255, 105, 180 , 0.2)", "rgba(255, 182, 193 , 0.2)", "rgba(255, 20, 147 , 0.2)", "rgba(255, 192, 203 , 0.2)", "rgba(250, 235, 215 , 0.2)", "rgba(245, 245, 220 , 0.2)", "rgba(255, 228, 196 , 0.2)", "rgba(255, 235, 205 , 0.2)", "rgba(245, 222, 179 , 0.2)", "rgba(255, 248, 220 , 0.2)", "rgba(255, 250, 205 , 0.2)", "rgba(250, 250, 210 , 0.2)", "rgba(255, 255, 224 , 0.2)", "rgba(139, 69, 19 , 0.2)", "rgba(160, 82, 45 , 0.2)", "rgba(210, 105, 30 , 0.2)", "rgba(205, 133, 63 , 0.2)", "rgba(244, 164, 96 , 0.2)", "rgba(222, 184, 135 , 0.2)", "rgba(210, 180, 140 , 0.2)", "rgba(188, 143, 143 , 0.2)", "rgba(255, 228, 181 , 0.2)", "rgba(255, 222, 173 , 0.2)", "rgba(255, 218, 185 , 0.2)", "rgba(255, 228, 225 , 0.2)", "rgba(255, 240, 245 , 0.2)", "rgba(250, 240, 230 , 0.2)", "rgba(253, 245, 230 , 0.2)", "rgba(255, 239, 213 , 0.2)", "rgba(255, 245, 238 , 0.2)", "rgba(245, 255, 250 , 0.2)", "rgba(112, 128, 144 , 0.2)", "rgba(119, 136, 153 , 0.2)", "rgba(176, 196, 222 , 0.2)", "rgba(230, 230, 250 , 0.2)", "rgba(255, 250, 240 , 0.2)", "rgba(240, 248, 255 , 0.2)", "rgba(248, 248, 255 , 0.2)", "rgba(240, 255, 240 , 0.2)", "rgba(255, 255, 240 , 0.2)", "rgba(240, 255, 255 , 0.2)", "rgba(255, 250, 250 , 0.2)"
    ];

    var cards = document.querySelectorAll(".color");

    for (i = 0; i < cards.length; i++) {
        // Pick a random color from the array 'colors'.
        cards[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };

    let search = document.getElementById('searchTxt');

    search.addEventListener("input", function() {

        let inputVal = search.value.toLowerCase();
        let noteCards = document.getElementsByClassName('noteCard');

        Array.from(noteCards).forEach(function(element) {
            let cardTxt = element.getElementsByTagName('p')[0].innerHTML.toLowerCase();

            // console.log(cardTxt);
            if (cardTxt.includes(inputVal)) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        })
    })

});

$('.preloader').delay(100).fadeOut(500);



// "AliceBlue", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightBlue", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightYellow", "LightSteelBlue", "Lime", "LimeGreen", "Magenta", "Linen", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "Moccasin", "MistyRose", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "WhiteSmoke", "Yellow", "YellowGreen"