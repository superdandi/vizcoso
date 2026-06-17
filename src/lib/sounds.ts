let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) {
    const Ctor = window.AudioContext || (window as any).webkitAudioContext;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function playHoverEnter() {
  const c = getCtx();
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain);
  gain.connect(c.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(500, c.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.1);
  gain.gain.setValueAtTime(0.06, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.1);
  osc.start(c.currentTime);
  osc.stop(c.currentTime + 0.1);
}

export function playHoverLeave() {
  const c = getCtx();
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain);
  gain.connect(c.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(800, c.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, c.currentTime + 0.08);
  gain.gain.setValueAtTime(0.04, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
  osc.start(c.currentTime);
  osc.stop(c.currentTime + 0.08);
}

export function playClick() {
  const c = getCtx();

  const osc = c.createOscillator();
  const oscGain = c.createGain();
  osc.connect(oscGain);
  oscGain.connect(c.destination);
  osc.type = "square";
  osc.frequency.setValueAtTime(200, c.currentTime);
  oscGain.gain.setValueAtTime(0.1, c.currentTime);
  oscGain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
  osc.start(c.currentTime);
  osc.stop(c.currentTime + 0.05);

  const noiseLen = 0.03;
  const sr = c.sampleRate;
  const buf = c.createBuffer(1, sr * noiseLen, sr);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = c.createBufferSource();
  const noiseGain = c.createGain();
  noise.buffer = buf;
  noise.connect(noiseGain);
  noiseGain.connect(c.destination);
  noiseGain.gain.setValueAtTime(0.06, c.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + noiseLen);
  noise.start(c.currentTime);
  noise.stop(c.currentTime + noiseLen);
}
