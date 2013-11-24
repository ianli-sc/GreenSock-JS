(function() {
    var floater = $('.floater');
    TweenLite.to(floater, 2.5, {
        left : '300px',
        top : '0px',
        width: '30px',
        height: '30px'
    });
//    var tl = new TimelineLite();
//    tl.add(TweenLite.to(floater, 2.5, {
//        left : '300px',
//        top : '0px',
//        width: '30px',
//        height: '30px',
//        ease : Linear.easeNone
//    }));
//    tl.add(TweenLite.to(floater, 2.5, {
//        left : '300px',
//        top : '200px',
//        width: '40px',
//        height: '40px',
//        ease : Linear.easeNone
//    }));
//    tl.add(TweenLite.to(floater, 2.5, {
//        left : '0px',
//        top : '200px',
//        width: '50px',
//        height: '50px',
//        ease : Linear.easeNone
//    }));
//    tl.add(TweenLite.to(floater, 2.5, {
//        left : '0px',
//        top : '0px',
//        width: '20px',
//        height: '20px',
//        ease : Linear.easeNone,
//        onComplete : animationWithJs
//    }));
//
//    //jQuery animation
//    function animationWithJs() {
//        floater.animate({
//            left : '300px',
//            top : '0px',
//            width: '30px',
//            height: '30px'
//        }, 2500, 'linear', function() {
//            floater.animate({
//                left : '300px',
//                top : '200px',
//                width: '40px',
//                height: '40px'
//            }, 2500, 'linear', function() {
//                floater.animate({
//                    left : '0px',
//                    top : '200px',
//                    width: '50px',
//                    height: '50px'
//                }, 2500, 'linear', function() {
//                    floater.animate({
//                        left : '0px',
//                        top : '0px',
//                        width: '20px',
//                        height: '20px'
//                    }, 2500, 'linear');
//                });
//            });
//        });
//    }

})();