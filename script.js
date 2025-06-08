document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const title = document.querySelector('.neon-title');
    const neonRing = document.querySelector('.neon-ring');

    // Mouse move effect for container
    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        title.style.textShadow = `
            ${x * 10}px ${y * 10}px 20px #0ff,
            ${-x * 10}px ${-y * 10}px 20px #0ff
        `;
    });

    // Random neon flicker effect
    function flicker() {
        const rand = Math.random();
        if (rand < 0.1) {
            title.style.opacity = '0.8';
            setTimeout(() => {
                title.style.opacity = '1';
            }, 50);
        }
    }

    // Apply flicker effect periodically
    setInterval(flicker, 500);

    // Mouse position affects neon ring
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        neonRing.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${Date.now() / 50}deg)`;
    });
});