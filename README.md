# nixie-macropad

<img src="/Images/mainphoto.PNG" width="400" ></p>

Simple 2x3 macropad with encoder that has a 3 digit nixie tube display that can be programmed for various functions over QMK.

## Usage:
Feel free to try replicate with care, as this is an unpolished proof of concept that I will probably build on later. Enjoy!

### Hardware Notes:
- Not sure but it seems the boards that I am using to drive the Nixie tubes [might be discontinued](https://www.tindie.com/products/dekuNukem/exixe-miniture-nixie-tube-driver-modules/). However the developer open-sourced them, so you might be able to make them yourself. (Planning to make my own for future builds)

## Main Features:
- 3x IN-14 Nixie Tubes with numbers 0-9 plus left comma
- Uses [QMK](https://qmk.fm/)
- Display current volume of connected Windows device [via RAWHID](https://github.com/BlankSourceCode/qmk-hid-display)
- EC11 Encoder + button
- 2x3 Macropad with Kailh Hotswap
- Only USB connected to PC needed

## Software Installation:
### Windows Node Script:
1. Download the 'Node Script' folder
1. Follow the steps in 'Development Setup' and/or 'Using the Script' from [BlankSourceCode's repo](https://au.element14.com/harwin/m20-7821246/connector-rcpt-12pos-2-54mm-1row/dp/3225929) 

### QMK:
1. You need to flash the Pro Micro with custom QMK firmware
    - Fork: [Use my fork](https://github.com/klefff/qmk_firmware/)
    - How to flash: [QMK Docs](https://docs.qmk.fm/#/newbs_flashing)

## Hardware:
### Before Assembling:
1. For the Exixes, you need to attach the Nixie tubes to the boards. 
    - I just soldered machine sockets to the boards and shoved the Nixie tube pins into the sockets (gingerly)
    - Or follow their [recommended method](https://github.com/dekuNukem/exixe/blob/master/getting_started.md)
### Assembly
1. Make the custom PCBs (needs 2, or make a case)
1. Solder on the required components below (see pictures)
1. Assemble such that two of the custom PCBs make a basic case thing
1. Choose some cool keycaps and knob

<img src="/Images/pcbfront.PNG" width="400" ></p>
<img src="/Images/pcbrear.PNG" width="400" ></p>
<img src="/Images/mcfront.PNG" width="400" ></p>
<img src="/Images/mcback.PNG" width="400" ></p>

## Bill of Materials:
- 2x Custom PCBS
    - Sandwich with 7x 15mm standoffs (M3 Size)
- 3x [Exixe](https://github.com/dekuNukem/exixe)
    - Nixie tube driver modules with SPI communication
- 3x IN-14 Nixie Tubes with 0-9 digit and left comma (at least)
- 1x Pro Micro or similar pinout with QMK support
- 2x Custom base PCB that doubles as stand
    - See PCB build files
- 6x Kailh Hotswap switch sockets
- 1x [2.5-15VDC to 170VDC DC-DC convertor](https://omnixie.com/products/nch8200hv-nixie-hv-power-module) or similar
- 1x Any type of EC11 rotary encoder
    - [I used this one](https://www.digikey.com.au/en/products/detail/bourns-inc/PEC11R-4020K-S0024/4499637)
- 1x [SMD 3.3V Voltage Regulator](https://au.element14.com/stmicroelectronics/ld1117s33ctr/ic-v-reg-ldo-3-3v-smd/dp/146777902)
    - Needed to power the Exixes
- 3x 10uF [Electrolytic Capacitors](https://au.element14.com/wurth-elektronik/865230542002/cap-10-f-35v-smd/dp/2466435)
    - Required for the Voltage Reg
- 1x 0.1uF [Ceramic Capacitor](https://au.element14.com/yageo/cc0805krx7r8bb104/cap-0-1-f-25v-10-x7r-0805/dp/644249)
- 7x [Diodes](https://www.digikey.com.au/en/products/detail/onsemi/1N4148/458603)
- 3x [470 Ohm SMD Resistors](https://au.element14.com/multicomp-pro/mc0805s8f4700t5e/res-thick-film-470r-1-0-125w-0805/dp/1632491)
- Some 2.54mm pitch connectors (if you don't want to direct solder)
    - I like [machine sockets](https://www.digikey.com.au/en/products/detail/adam-tech/SMC-1-40-1-GT/9831942) but normal ['Arduino'-esque ones are good too](https://au.element14.com/harwin/m20-7821246/connector-rcpt-12pos-2-54mm-1row/dp/3225929)
    - 3x 7 pin for Exixe comms
    - 2x 12 pin for Pro Micro
    - 7x 1 pin (if you can find them or just cut bigger ones)
        - For 170V DC-DC convertor and Exixe 170V
    - 2x 2 pin for Exixe 3V
    - For the above 2, you can also just get 7 pin ones and take out the middle 4 pins
- Some keycaps
- An encoder knob

## Additional:
### Housekeeping:
- Every ~15 mins the tubes will cycle all digits to reduce change of cathode poisoning

### Future Work:
- Possible adding VIA capabilities for flashing
- Adding more uses for the 3 tube digits; current weather, CPU usage etc
- Adding another digit for RTC time
- Bluetooth/Wireless with battery

## References:
- [Exixe](https://github.com/dekuNukem/exixe)
- [RAW HID communication via node script](https://github.com/BlankSourceCode/qmk-hid-display)
