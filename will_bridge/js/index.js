$(function() { // wait for document ready	
var baseplate = document.getElementById("baseplate");
var mainimg = document.getElementById("mainimg");
var mobileadvanced = document.getElementById("mobileadvanced");
var example_wrapper = document.getElementById("example-wrapper");
var content_wrapper = document.getElementById("content-wrapper");
// mainimg.addEventListener('touchmove', function(e) {
//  e.preventDefault();
// }, false);

// init controller
    var controller = new ScrollMagic.Controller({
        container: example_wrapper,
        //duration: 2400, //in px
    });
//PIN scroll magic Pin//
    //var pindur = 20; //in px

    //var scenepin = new ScrollMagic.Scene({
    //triggerElement: "#triggerpin", //if not specifed it will be at top
    //duration: pindur //in px
     //});
     // .setPin("#example-wrapper")// object not to move
     // .addTo(controller);
    

 //code dump//
 //.to( f1_image, .7, {scale:0.4, x:-55, y:-5, ease:Cubic.easeInOut, force3D:true, rotationZ:0.01}, "f4+=0.3" )   
 //TweenMax.set("#baseplate", {x: 220, scaleX:1.4, scaleY:1.4, transformOrigin:"1500px 300px"});
onAnimationComplete = function () {
    // Log duration of timeline
    console.log( 'Animation Duration: ' + tl_bridge.time() + 's' );
};
//_set up for start_//

TweenMax.set(mainimg, {x:-496, y:0, scale:0.5, transformOrigin:'12% 0%'});
//TweenMax.set(baseplate, {x:"-33%", y:"-33%", scale:0.4});

//_This is the MAIN time line_//
    tl_bridge = new TimelineMax({
        // delay: 0.1
        //onComplete: nameSpace.onAnimationComplete
        //onComplete: endiconsPlay
       onComplete: onAnimationComplete
    });

tl_bridge.timeScale(1);//sets timeScale

tl_bridge.to(mainimg, 40, {x:-850, y:3000,scale:1.5, force3D:true, rotationZ:0.01}, '1');
tl_bridge.to(mobileadvanced, 40, {backgroundColor: "white",scale: 0.4,borderRadius: 75}, "-=40");
//tl_bridge.to(mainimg, 10, {x:-850, y:3900,scale:1.5, force3D:true, rotationZ:0.01}, '41');

//_end timeline tl_bridge_//

    // init scene
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger",
            // duration: 500,
            duration: 4500,
            offset: 75
        });
        scene.setTween(tl_bridge);
        scene.setPin("#mobileadvanced");

        //scene.duration:33;
        //scene.addIndicators({name:"1(duration 4500)"});
       scene.addTo(controller);
/////
/////

/////
////

    // detect if mobile browser. regex -> http://detectmobilebrowsers.com
    var isMobile = (function(a) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    // we'd only like to use iScroll for mobile...
    if (isMobile) {
        // configure iScroll
        var myScroll = new IScroll('#example-wrapper', {
            // don't scroll horizontal
            scrollX: false,
            // but do scroll vertical
            scrollY: true,
            // show scrollbars
            scrollbars: true,
            // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
            // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
            useTransform: false,
            // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
            useTransition: false,
            // set to highest probing level to get scroll events even during momentum and bounce
            // requires inclusion of iscroll-probe.js
            probeType: 3,
            // pass through clicks inside scroll container
            click: true
        });

        // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
        controller.scrollPos(function() {
            return -myScroll.y;
        });

        // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
        myScroll.on("scroll", function() {
            controller.update();
        });

        // add indicators to scrollcontent so they will be moved with it.
        scene.addIndicators({
            parent: ".scrollContent"
        });
    } else {
        // add indicators (requires plugin)
        scene.addIndicators();
    }
});