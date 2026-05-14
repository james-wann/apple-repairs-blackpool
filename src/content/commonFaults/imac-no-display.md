---
title: iMac with no display (black screen)
symptom: iMac powers on (you hear the chime or fan), but the screen stays black
summary: A black-screen iMac that still chimes or shows signs of being on is almost always either a failed display panel, a failed display cable, or a graphics chip fault. We diagnose which, often within the first 30 minutes of opening the machine.
affects: [iMac]
order: 60
---

## What's happening

The iMac is booting (chime, fan, possibly even external audio) but the display isn't lighting up. Three common causes:

1. **Failed GPU.** Particularly on certain 2011-2013 iMacs which had a known graphics chip failure pattern.
2. **Failed display cable.** The internal LVDS or eDP cable that carries video from the logic board to the panel.
3. **Failed panel.** The LCD itself has died.

## What to do first

1. Shine a torch at the screen at an angle in a dark room. If you can see a very faint image, the backlight is dead but the panel is fine. That's typically a backlight inverter issue or fuse.
2. Connect to an external display in Target Display Mode (older iMacs) or via USB. If external works, the iMac itself is fine and only the internal display path is at fault.
3. Try a known-good display cable if you can.

## What we do

Workshop diagnostic. We open the iMac, test the panel directly, test the cable continuity, and check the GPU's output signals. Within 30 minutes we can tell you whether it's:

- A cable fault (cheapest, fastest fix)
- A panel fault (replace the panel)
- A GPU fault (reflow / reball where possible, or assess if it's beyond economical repair)

iMac displays are bonded to the chassis with adhesive, so it's a delicate job, but we do them regularly.

Indicative cost: cable replacement from £119. Panel replacement from £249 depending on model. GPU work quoted separately based on iMac generation.
