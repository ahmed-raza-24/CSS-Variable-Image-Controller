let input = document.querySelectorAll('input');

function handleUpdates(){

    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}` ,this.value + suffix );


}

input.forEach(inputs => inputs.addEventListener('change', handleUpdates));
input.forEach(inputs => inputs.addEventListener('mousemove', handleUpdates));