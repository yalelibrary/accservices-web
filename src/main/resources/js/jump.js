	/* 
	 Marking Jump Link Destination
	 Version 1.0
	 March 29, 2010

	 Will Bontrager
	 http://www.willmaster.com/
	 Copyright 2010 Bontrager Connection, LLC

	 Bontrager Connection, LLC grants you 
	 a royalty free license to use or modify 
	 this software provided this notice appears 
	 on all copies. This software is provided 
	 "AS IS," without a warranty of any kind.
	 */

	// Four preferences that may be changed:
	// The number of milliseconds (not seconds) between 
	//   background color switches.
	var switching_speed = 1000;

	// The background color the text has when the web page is loaded.
	var background_color = "#FEE8E8";

	// The background color to use when switching.
	var alt_background_color = "#FFF";

	// The number of seconds (not milliseconds) elapsed when 
	//   the switching shall automatically stop.
	var stop_when_elapsed = 10;

	//////////////////////////////////////
	// No other customization required. //
	//////////////////////////////////////
	var IntervalBGC = false;
	var IntervalID = "";
	var IntervalKey;

	function SwitchBackgroundColor() {
		var color = background_color;
		if (IntervalBGC) {
			IntervalBGC = false;
		} else {
			color = alt_background_color;
			IntervalBGC = true;
		}
		document.getElementById(IntervalID).style.backgroundColor = color;
	}

	function StartSwitcher(id) {
		//alert(id);
		if (IntervalID.length) {
			StopSwitcher(IntervalID);
		}
		IntervalID = id;
		IntervalKey = setInterval("SwitchBackgroundColor()", switching_speed);
		setTimeout("StopSwitcher('" + id + "')", stop_when_elapsed * 1000);
		//return true;
	}

	function StopSwitcher(id) {
		if (IntervalID != id) {
			return;
		}
		clearInterval(IntervalKey);
		document.getElementById(id).style.backgroundColor = background_color;
	}
