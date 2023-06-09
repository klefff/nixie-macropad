// BASED ON CODE BY JAMES LISSIAK https://github.com/BlankSourceCode

'use strict';

const hid = require('node-hid');        // RAW HID Communication 
const win = require('win-audio');       // Grab system audio level
const {setTimeout} = require('timers/promises');


// Audio Level Setup
const sysvol = win.speaker;
var cur_vol = -1;
var prev_vol = -1;

var cur_mute = false;
var prev_mute = false;

// Target Keyboard Info 
const KEYBOARD_NAME = "phi";
const KEYBOARD_USAGE_ID =  0x61;
const KEYBOARD_USAGE_PAGE = 0xFF60;

// Code Setup
const KEYBOARD_UPDATE_TIME = 100;
let keyboard = null;
//const TUBE_REFRESH_INTERVAL = 810000;
//var tubeRefreshTimer = 0;


// Update Keyboard
function updateKeyboard() {

    // Get the current system volume
    cur_vol = sysvol.get();

    // Also check whether the system volume is set to mute or not
    cur_mute = sysvol.isMuted();

    // Initialise keyboard
    if (!keyboard) {
        // Search all devices for a matching keyboard for the first time
        const devices = hid.devices();

        for (const d of devices) {
            if (d.product === KEYBOARD_NAME && d.usage === KEYBOARD_USAGE_ID && d.usagePage === KEYBOARD_USAGE_PAGE) {
                // Create a new connection and store it as the keyboard
                keyboard = new hid.HID(d.path);
                keyboard.write([0, 1, 34, cur_vol, 2]);
                break;
            }
        }
    }
    else {
        // The target keyboard is found
        if (cur_mute != prev_mute)
            {
                if (cur_mute)
                    keyboard.write([0, 1,34, cur_vol, 1]);
                else
                    keyboard.write([0, 1,34, cur_vol, 0]);
                prev_mute = cur_mute;
            }
        // If mute state isn't changed send the volume even if the system is muted (doesn't change anything)
        else if (cur_vol != prev_vol)
        {
            //If the volume is different then send updated system volume to keyboard and note muted (lol)
            if (!sysvol.isMuted())
            {
                keyboard.write([0, 1,34, cur_vol, 0]);
                prev_vol = cur_vol;
            }
        }
    }    
}

// Update the data on the keyboard with the current info every 100ms if required
setInterval(updateKeyboard, KEYBOARD_UPDATE_TIME);
