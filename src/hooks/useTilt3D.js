const maxTiltDefault = 8;
const scaleDefault = 1.02;
const speedDefault = 400;

export function handleTiltMove(e, { maxTilt = maxTiltDefault, scale = scaleDefault, speed = speedDefault } = {}) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;

  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  el.style.transition = `transform ${speed * 0.1}ms ease`;
}

export function handleTiltLeave(e, { speed = speedDefault } = {}) {
  const el = e.currentTarget;
  el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  el.style.transition = `transform ${speed}ms ease`;
}
