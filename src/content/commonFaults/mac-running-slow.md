---
title: Mac running slow
symptom: Mac feels sluggish, apps take a long time to open, beach ball spins frequently, system feels unresponsive
summary: "A Mac that's slowed down over time is usually one of four things: a near-full or failing storage drive, insufficient RAM for what you're doing, a software process eating CPU, or thermal throttling from a dusty cooling system. We diagnose which and fix accordingly."
affects: [All Macs]
order: 70
---

## What's happening

Slowness on a Mac generally tracks back to one of these:

1. **Storage drive nearly full or failing.** macOS needs free space to run. Below about 10-15% free, performance drops noticeably. A failing drive (even an SSD) shows up as long waits during reads and writes.
2. **Not enough RAM for current workload.** Heavy Chrome use, video editing, big files in Photos — RAM pressure forces macOS to swap to disk, which is slower.
3. **Background process consuming CPU.** Spotlight reindexing, Time Machine running, a misbehaving app, or in some cases malware.
4. **Thermal throttling.** Dust in the cooling system means the CPU runs hot, which makes macOS slow it down to protect itself.

## What to do first

1. Activity Monitor → CPU tab. Sort by % CPU. If something's at 100%+ and you don't recognise it, that's a clue.
2. Apple menu → About This Mac → Storage. If you're below 15% free, that's contributing. Move files off or clean up.
3. Memory tab in Activity Monitor. Look at "Memory Pressure". Red or yellow = you need more RAM (or fewer apps open).

## What we do

Workshop diagnostic looks at all four causes:

- Storage health (SMART data, drive speed test, SSD wear levels)
- RAM diagnostic (capacity vs workload)
- Process audit (what's actually running, what shouldn't be)
- Thermal inspection (dust, paste condition, fan health)

We give you a written summary of what's actually causing the slowdown and what would fix it. Often it's storage upgrade (SSD if not already, or larger SSD) plus a thermal clean. RAM upgrades where the model supports them.

## How we quote

The right fix for "slow Mac" varies (SSD upgrade, thermal clean, RAM upgrade, or sometimes just a software cleanup), so we don't publish a fixed figure. The £75 diagnostic fee covers proper assessment of what's actually causing it, then we provide a written quote covering parts and labour. Diagnostic fee deducted from any repair you go ahead with.
