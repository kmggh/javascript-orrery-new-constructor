// Planetary Orrery example using Crockford's new_constructor.
// Copyright (C) 2015 by Ken Guyton.  All Rights Reserved.

var orrery = require('./orrery.js');
var new_constructor = require('./new_constructor.js');


/* 
 * Create a list of planets.
 *
 * Right now we just use the small set:  Mercury, Earth and Jupiter.
 */
function createPlanets() {
  'use strict';
  var mercury, earth, jupiter;

  mercury = orrery.Planet('Mercury', 0.39, 0.0);
  earth = orrery.Planet('Earth', 1.0, 0.0);
  jupiter = orrery.Planet('Jupiter', 5.0, 0.0);

  return [mercury, earth, jupiter];
}


/* 
 * Create the orrery from a list of planet objects.
 *
 * Right now we just use the small set:  Mercury, Earth and Jupiter.
 */
function createOrrery(planets) {
  'use strict';
  var my_orrery, i;

  my_orrery = orrery.Orrery();

  for (i = 0; i < planets.length; i += 1) {
    my_orrery.addPlanet(planets[i]);
  }

  return my_orrery;
}


/* 
 * Initialize a solar system model and step some.
 * 
 * This is a small model with just three representative planets.
 */
function main() {
  'use strict';
  var my_orrery, step, steps, planets, i;

  step = 2.0 / 52.0;
  steps = 5;

  planets = createPlanets();
  my_orrery = createOrrery(planets);

  console.log('Total time: ' + my_orrery.totalTime.toFixed(2));
  console.log(my_orrery.toStr());
  for (i = 1; i <= steps; i += 1) {
    my_orrery.step(step);
    console.log('Total time: ' + my_orrery.totalTime.toFixed(2));
    console.log(my_orrery.toStr());
  }
}


main();
