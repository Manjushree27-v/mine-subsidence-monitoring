const historicalData = {
  N01: [
    { time: "10:00", tilt: 2.1, displacement: 2.4, vibration: 0.9, crack: 0.5 },
    { time: "10:10", tilt: 2.2, displacement: 2.6, vibration: 1.0, crack: 0.5 },
    { time: "10:20", tilt: 2.2, displacement: 2.8, vibration: 1.0, crack: 0.6 },
    { time: "10:30", tilt: 2.3, displacement: 3.0, vibration: 1.1, crack: 0.7 },
    { time: "10:40", tilt: 2.4, displacement: 3.2, vibration: 1.1, crack: 0.8 }
  ],

  N02: [
    { time: "10:00", tilt: 2.7, displacement: 4.1, vibration: 1.1, crack: 0.7 },
    { time: "10:10", tilt: 2.8, displacement: 4.4, vibration: 1.2, crack: 0.8 },
    { time: "10:20", tilt: 2.9, displacement: 4.8, vibration: 1.3, crack: 0.9 },
    { time: "10:30", tilt: 3.0, displacement: 5.1, vibration: 1.3, crack: 1.0 },
    { time: "10:40", tilt: 3.1, displacement: 5.4, vibration: 1.4, crack: 1.0 }
  ],

  N03: [
    { time: "10:00", tilt: 3.2, displacement: 5.1, vibration: 1.5, crack: 1.1 },
    { time: "10:10", tilt: 3.4, displacement: 5.6, vibration: 1.6, crack: 1.2 },
    { time: "10:20", tilt: 3.6, displacement: 6.1, vibration: 1.8, crack: 1.4 },
    { time: "10:30", tilt: 3.9, displacement: 6.7, vibration: 1.9, crack: 1.6 },
    { time: "10:40", tilt: 4.1, displacement: 7.3, vibration: 2.1, crack: 1.8 }
  ],

  N04: [
    { time: "10:00", tilt: 4.8, displacement: 10.1, vibration: 2.1, crack: 1.5 },
    { time: "10:10", tilt: 5.1, displacement: 11.0, vibration: 2.3, crack: 1.7 },
    { time: "10:20", tilt: 5.4, displacement: 11.9, vibration: 2.5, crack: 1.8 },
    { time: "10:30", tilt: 5.8, displacement: 13.0, vibration: 2.7, crack: 2.0 },
    { time: "10:40", tilt: 6.2, displacement: 14.2, vibration: 2.8, crack: 2.1 }
  ],

  N05: [
    { time: "10:00", tilt: 5.4, displacement: 8.0, vibration: 2.1, crack: 2.3 },
    { time: "10:10", tilt: 6.2, displacement: 10.4, vibration: 2.6, crack: 2.9 },
    { time: "10:20", tilt: 7.1, displacement: 13.0, vibration: 3.1, crack: 3.6 },
    { time: "10:30", tilt: 8.2, displacement: 15.7, vibration: 3.7, crack: 4.3 },
    { time: "10:40", tilt: 9.2, displacement: 18.7, vibration: 4.2, crack: 5.1 }
  ],

  N06: [
    { time: "10:00", tilt: 6.9, displacement: 12.8, vibration: 2.8, crack: 2.1 },
    { time: "10:10", tilt: 7.3, displacement: 14.2, vibration: 3.0, crack: 2.5 },
    { time: "10:20", tilt: 7.7, displacement: 15.8, vibration: 3.3, crack: 2.9 },
    { time: "10:30", tilt: 8.1, displacement: 17.6, vibration: 3.5, crack: 3.3 },
    { time: "10:40", tilt: 8.6, displacement: 19.5, vibration: 3.8, crack: 3.5 }
  ],

  N07: [
    { time: "10:00", tilt: 1.7, displacement: 3.0, vibration: 0.8, crack: 0.4 },
    { time: "10:10", tilt: 1.8, displacement: 3.2, vibration: 0.9, crack: 0.4 },
    { time: "10:20", tilt: 1.8, displacement: 3.4, vibration: 0.9, crack: 0.5 },
    { time: "10:30", tilt: 1.9, displacement: 3.6, vibration: 1.0, crack: 0.5 },
    { time: "10:40", tilt: 2.0, displacement: 3.8, vibration: 1.0, crack: 0.6 }
  ],

  N08: [
    { time: "10:00", tilt: 2.8, displacement: 4.7, vibration: 1.2, crack: 0.8 },
    { time: "10:10", tilt: 3.0, displacement: 5.0, vibration: 1.3, crack: 0.9 },
    { time: "10:20", tilt: 3.2, displacement: 5.4, vibration: 1.4, crack: 1.0 },
    { time: "10:30", tilt: 3.5, displacement: 5.8, vibration: 1.5, crack: 1.1 },
    { time: "10:40", tilt: 3.7, displacement: 6.1, vibration: 1.6, crack: 1.2 }
  ],

  N09: [
    { time: "10:00", tilt: 3.8, displacement: 6.2, vibration: 1.6, crack: 1.0 },
    { time: "10:10", tilt: 4.1, displacement: 7.0, vibration: 1.8, crack: 1.2 },
    { time: "10:20", tilt: 4.4, displacement: 7.8, vibration: 1.9, crack: 1.4 },
    { time: "10:30", tilt: 4.8, displacement: 8.7, vibration: 2.1, crack: 1.6 },
    { time: "10:40", tilt: 5.1, displacement: 9.7, vibration: 2.2, crack: 1.7 }
  ],

  N10: [
    { time: "10:00", tilt: 4.9, displacement: 8.1, vibration: 2.0, crack: 1.4 },
    { time: "10:10", tilt: 5.3, displacement: 9.2, vibration: 2.2, crack: 1.6 },
    { time: "10:20", tilt: 5.7, displacement: 10.5, vibration: 2.4, crack: 1.8 },
    { time: "10:30", tilt: 6.2, displacement: 11.9, vibration: 2.7, crack: 2.1 },
    { time: "10:40", tilt: 6.8, displacement: 13.5, vibration: 2.9, crack: 2.3 }
  ],

  N11: [
    { time: "10:00", tilt: 5.7, displacement: 10.2, vibration: 2.4, crack: 1.8 },
    { time: "10:10", tilt: 6.2, displacement: 11.8, vibration: 2.7, crack: 2.1 },
    { time: "10:20", tilt: 6.7, displacement: 13.5, vibration: 3.0, crack: 2.4 },
    { time: "10:30", tilt: 7.3, displacement: 15.4, vibration: 3.3, crack: 2.8 },
    { time: "10:40", tilt: 7.9, displacement: 17.4, vibration: 3.5, crack: 3.1 }
  ],

  N12: [
    { time: "10:00", tilt: 6.5, displacement: 12.0, vibration: 2.7, crack: 2.2 },
    { time: "10:10", tilt: 7.1, displacement: 13.9, vibration: 3.0, crack: 2.6 },
    { time: "10:20", tilt: 7.7, displacement: 15.8, vibration: 3.3, crack: 3.0 },
    { time: "10:30", tilt: 8.4, displacement: 18.2, vibration: 3.7, crack: 3.5 },
    { time: "10:40", tilt: 9.1, displacement: 21.2, vibration: 4.1, crack: 4.0 }
  ]
};

export default historicalData;