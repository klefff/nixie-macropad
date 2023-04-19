# nixie-macropad
Simple 2x3 macropad with encoder that has a 3 digit nixie tube display that can be programmed for various functions over QMK.

## Current Features:
- 3 IN-14 Nixie Tubes with numbers 0-9 plus left comma
- Uses QMK
- Display current volume of connected Windows device [via RAWHID](https://github.com/BlankSourceCode/qmk-hid-display)
- EC11 Encoder + button
- 2x3 Macropad with Kailh Hotswap

## Hardware:
- Communication to tubes via SPI using [Exixes](https://github.com/dekuNukem/exixe)
- Pro Micro
- Custom base PCB

## References:
- [Exixe](https://github.com/dekuNukem/exixe)
- [RAW HID communication via node script](https://github.com/BlankSourceCode/qmk-hid-display)
