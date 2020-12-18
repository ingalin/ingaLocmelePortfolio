// // const app = {};
// // app.cliksPut = function () {

// //     let classTrue = false;

// //     $(".carousel-cell").off("click").on('click', function () {

        
// //     if (classTrue == true) {
// //         // console.log(classTrue)
// //         // console.log("ksks22")
// //         // $(".is-selected").on('click', function () {
// //             console.log("ksks22")
// //         $(".is-selected").find(".moreInfoHover").removeClass("show");
// //         $(".carousel-cell").attr('tabindex', -1);
// //         // $(".carousel-cell").prop('disabled', true);
// //                     classTrue = false;
// //         // $("button").blur();
        
// //     }

// //     else {
// //         // $(".carousel-cell").on('click', function () {
// //             // console.log("ksks")
// //         // $(".is-selected").attr("disabled", true);
// //         $(".is-selected").attr('tabindex', 0).find(".moreInfoHover").addClass("show");
// //         // $(".is-selected");
// //             // .find(".is-selected")
// //                 // });
// //         classTrue = true;
// //         console.log(classTrue)


// //     }
// //     })
// // }


// // //Start
// // app.init = function () {
// //     // $(".carousel-cell").attr('tabindex', -1);
// //     // app.cliksPut();
    
// //     // $(".carousel-cell").attr('tabindex', -1);
// //     // $(".is-selected").attr('tabindex', 0);
// //     // document.getElementById("is-selected").focus();
// // };

// // //Document Ready
// // $(() => app.init());


// jQuery(function ($) {

//     const target = $("h1");
//     target.html(target.text().replace(/./g, "<span>$&</span>"));

//     setTimeout(runAnimation, 100);

//     function runAnimation() {
//         var index, spans;

//         index = 0;
//         spans = target.children();
//         doOne();

//         function doOne() {
//             const span = $(spans[index]);
//             if (!$.trim(span.text())) {
//                 // Skip blanks
//                 next();
//                 return;
//             }

//             // Do this one
//             span.css({
//                 position: "relative",
//             }).animate({
//                 // top: "-20"
//                 right: "-20"
//             }, "fast").animate({
//                 // top: "0"
//                 left: "0"
//             }, "fast", function () {
//                 span.css("position", "");
//                 next();
//             });
//         }
//         function next() {
//             ++index;
//             if (index < spans.length) {
//                 doOne();
//             }
//             else {
//                 setTimeout(runAnimation, 500);
//             }
//         }
//     }

// });