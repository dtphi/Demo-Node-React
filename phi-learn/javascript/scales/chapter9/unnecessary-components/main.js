'use strict';

import Router from 'router.js';
import ComponentFirst from 'component-first.js';
import ComponentSecond from 'component-second.js';

var router = new Router();

new ComponentFirst(router);
new ComponentSecond(router);

router.start();
