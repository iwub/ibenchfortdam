var actions = require('./idol4_actions.js');
var parser = require('./idol4_log_parser.js');

actions.addTask('lighton');
actions.addTask('unlock');

actions.addTask('test_cold_start', 1);
actions.addTask('test_warm_start', 2);
actions.addTask('test_switch_mode', 1);
actions.addTask('test_switch_camera', 2);
actions.addTask('test_capture',3);

actions.addTask('test_instant_capture', 3);