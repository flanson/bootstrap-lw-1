/**
 * Created by Grumly on 21/02/2016.
 */
+function ($) {
    'use strict';

    var $body = $('body');

    //modal
    $body.on('click', '.modal', e, function(e){
        //apply modal
    });

    //progressive bar
/*
    var startColor = '#FC5B3F';
    var endColor = '#6FD57F';

    var element = document.getElementById('example-animation-container');
    var circle = new ProgressBar.Circle(element, {
        color: startColor,
        trailColor: '#eee',
        trailWidth: 1,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 5,

        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    circle.animate(1.0, {
        from: {color: startColor},
        to: {color: endColor}
    });
*/


}(jQuery);
