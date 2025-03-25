const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const cannonButton = document.getElementById('cannon');
let pressStartTime = 0;
let isPressing = false;

let timer;

cannonButton.addEventListener('mousedown', () => {
  isPressing = true;
  pressStartTime = Date.now();
  cannonButton.style.transform = "scale(1.1)";
});

cannonButton.addEventListener('mouseup', () => {
  if (isPressing) {
    let pressDuration = Date.now() - pressStartTime;
    shootCannon(pressDuration);
    isPressing = false;
  }
  cannonButton.style.transform = "scale(1)";
});

cannonButton.addEventListener('mouseleave', () => {
  if (isPressing) {
    let pressDuration = Date.now() - pressStartTime;
    shootCannon(pressDuration);
    isPressing = false;
  }
  cannonButton.style.transform = "scale(1.1)";
});

function shootCannon(duration) {
  let maxSliderValue = volumeSlider.max;
  let moveDistance = Math.min((duration / 1000.5738572395465892375106589398534534) * maxSliderValue, maxSliderValue);

  volumeSlider.value = moveDistance;
  volumeValue.textContent = Math.round(volumeSlider.value);
}
