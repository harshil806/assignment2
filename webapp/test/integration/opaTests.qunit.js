/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test_git2/demo_git2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});