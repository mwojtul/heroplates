$(document).ready(function(){
	

	/* following code from @filipbech
 * https://gist.github.com/filipbech/84a5864399111c15619b
 * 
 * In this example we use a polygon instead 
 * of a path - concept is the same!
 * Beware: for morphing to work, the number of points 
 * must be the same!
 */

 var newPoints = '263.6,115.5 171,125 149.9,30.2 135,129 35.8,115.1 63,184 80.2,248.6 150,171 219.1,248.6 240,184';

 var s = new Snap('#mySvg');
 var myPolygon = s.selectAll('polygon');

 /* Define the animation with snap.svg*/
 var mySnapAni = myPolygon.animate({
 	points:newPoints,
 	fill:'#00ff00'
 },200); /* duration:200 doensn't matter since playback is via GSAP */
 
 /* Get the animation controller */
 var mySnapAniCtrl = mySnapAni[0].anims[Object.keys(mySnapAni[0].anims)[0]];
 
 /* Pause the animation right away*/
 mySnapAniCtrl.pause(); 
 
 var tweenerObj={progress:0};
 var tl = new TimelineMax({yoyo:true,repeat:-1});

 tl.to(tweenerObj, 1, { /* this duration (in seconds) is what matters */
 	progress:1,
 	ease:Linear.easeNone,
 	onUpdate:function() {
 		mySnapAniCtrl.status(tweenerObj.progress);
 		mySnapAniCtrl.update();
 	}
 });





})
