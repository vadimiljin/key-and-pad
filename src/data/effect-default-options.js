export default {
  filter: {
    filterType: 'lowpass',
    resonance: 10,
  },
  reverb: {
    dry: 1,
    wet: 0,
    time: 3,
    cutoff: 20000,
  },
  delay: {
    dryLevel: 0.8,
    wetLevel: 0.8,
    delayTime: 450,
    cutoff: 2000,
  },
  distortion: {
    clarity: 1,
  },
  chorus: {
    rate: 0.2,
    delay: 0.01,
  },
  tremolo: {
    intensity: 0.6,
    stereoPhase: 0,
  },
  wahWah: {
    excursionOctaves: 2,
  },
};
