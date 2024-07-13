document.addEventListener('mousemove', function(event) {
    var container = document.getElementById('container');
    var image = document.createElement('img');
    image.classList.add('image');
    image.src = 'logo.png'; // Replace with the path to your follower image
    container.appendChild(image);
  
    var size = 60; // Initial size of the image
    var x = event.clientX - size / 2;
    var y = event.clientY - size / 2;
    image.style.width = size + 'px';
    image.style.height = size + 'px';
    image.style.transform = `translate(${x}px, ${y}px)`;
  
    setTimeout(function() {
      image.style.opacity = '0'; // Fade out the image
      setTimeout(function() {
        container.removeChild(image); // Remove the image from the container
      }, 100); // Adjust the duration to match the CSS transition duration
    }, 80); // Adjust the delay before fading away
  });