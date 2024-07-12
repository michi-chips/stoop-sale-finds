// The code in this file will load on every page of your site
import wixLocation from 'wix-location'
$w.onReady(function () {
	// event listener for the button click
    $w("#button2").onClick(() => {
        wixLocation.to("Date & Location")
    });


	

});
});