// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location'

$w.onReady(function () {
    // event listener for the button click
    $w("#button2").onClick(() => {
        wixLocation.to("/date-location")
    });
	

});