# Quadruped Robot – Mechanical Design (Task 1)

Mechanical design for a 4-legged (quadruped) walking robot, developed as the
first task of the Smart Methods engineering training program.

## Overview

| Item | Value |
|---|---|
| Degrees of Freedom | 8 DOF (2 per leg × 4 legs) |
| Body dimensions | 120 × 100 × 40 mm |
| Material | 3D-printed PLA (3 mm wall thickness) |
| Total mass budget | 0.5 kg |
| Actuators | 8 × MG90S metal-gear micro servos |
| Battery | 2000 mAh Li-Po (bottom-mounted) |

## Body Structure

- Rectangular two-plate chassis (top + bottom plates connected by standoffs)
- Electronics (microcontroller + servo driver) mounted on the top plate
- Battery mounted on the bottom plate to keep the center of gravity low
- Hip servos placed at the four corners to maximize the support polygon

## Leg Design (2 DOF per leg)

| Joint | Function |
|---|---|
| Hip (shoulder) | Swings the leg forward/backward for stepping |
| Knee (lift) | Raises and lowers the foot |

- Two rigid PLA links per leg: femur 40 mm + tibia 40 mm (total arm L = 80 mm)
- Rubber foot caps for grip
- Legs angled ~10° outward for a wider support polygon

## Servo Selection: MG90S

| Option | Torque | Weight | Verdict |
|---|---|---|---|
| SG90 | 1.8 kg·cm | 9 g | Rejected – plastic gears, low margin |
| **MG90S** | **2.2 kg·cm** | **13.4 g** | **Selected – metal gears, ~2.2× safety factor** |
| MG996R | 9–11 kg·cm | 55 g | Rejected – too heavy for 0.5 kg robot |

## Torque Calculation (per joint)



MG90S rated torque (2.2 kg·cm) ⇒ safety factor ≈ 2.2.

## Walking Gait (Trot)

1. Front-Left + Back-Right step forward
2. Pause (all four feet on ground)
3. Front-Right + Back-Left step forward
4. Repeat

## Expected Problems & Solutions

| Problem | Cause | Solution |
|---|---|---|
| Tipping over | High center of gravity | Lower body, widen support base, bottom-mounted battery |
| Short battery life | High servo power draw | 2000 mAh Li-Po battery |

## Files

- `smart methods mechanical first task.docx` – full design document
- `sketch.jpg` – hand sketch (top view + leg side view)
