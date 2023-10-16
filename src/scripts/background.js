if (typeof document !== "undefined") {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const numDots = 5000; // Number of dots

  // Wait for the DOM to load before appending the canvas
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dataBackground").appendChild(canvas);

    // Resize canvas to fill window
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function createDot() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2, // Dot size
        pulseSpeed: Math.random() * 0.02 + 0.01, // Pulse speed
        maxOpacity: Math.random() * 0.5 + 0.2, // Max dot opacity
        opacityDirection: 1,
        currentOpacity: Math.random() * 0.5 + 0.2,
      };
    }

    const dots = Array.from({ length: numDots }, createDot);

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        ctx.fillStyle = `rgba(128, 128, 128, ${dot.currentOpacity})`; // Adjust color here
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (dot.currentOpacity >= dot.maxOpacity || dot.currentOpacity <= 0) {
          dot.opacityDirection *= -1;
        }
        
        dot.currentOpacity += dot.pulseSpeed * dot.opacityDirection;
      });

      requestAnimationFrame(animateDots);
    }

    animateDots();
  });
}
