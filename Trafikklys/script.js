const lights = ['red', 'redYellow', 'green'];
let currentLightIndex = 0;

function switchLight() {
  const currentLight = lights[currentLightIndex];
  const nextLightIndex = (currentLightIndex + 1) % lights.length;
  const nextLight = lights[nextLightIndex];

  if (currentLight === 'red') {
    // Red light
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('yellow').style.backgroundColor = 'gray';
    document.getElementById('green').style.backgroundColor = 'gray';
  } else if (currentLight === 'redYellow') {
    // Red and yellow lights together
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('yellow').style.backgroundColor = 'yellow';
    document.getElementById('green').style.backgroundColor = 'gray';
  } else {
    // Green light
    document.getElementById('red').style.backgroundColor = 'gray';
    document.getElementById('yellow').style.backgroundColor = 'gray';
    document.getElementById('green').style.backgroundColor = 'green';
  }

  currentLightIndex = nextLightIndex;

  setTimeout(switchLight, getTimeoutDuration(nextLight));
}

function getTimeoutDuration(light) {
  if (light === 'red') {
    return 3000; // 3 seconds
  } else if (light === 'redYellow') {
    return 1000; // 1 second
  } else {
    return 2000; // 2 seconds
  }
}

switchLight(); // Start the initial cycle
