'use strict';

import angular from 'angular';

export default angular.module('t2naApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
