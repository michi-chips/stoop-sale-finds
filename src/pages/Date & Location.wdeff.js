// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
    // event listener for the button click
    $w("#button2").onClick(() => {
        wixLocation.to("/https://www.google.com/maps/place/2nd+Pl+%26+Court+St,+Brooklyn,+NY+11231/data=!4m2!3m1!1s0x89c25a585c181957:0x50e694b8c1ef75b2?sa=X&ved=1t:242&ictx=111")
    });
