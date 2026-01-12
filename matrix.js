document.addEventListener('DOMContentLoaded', () => {
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";
    
    function generateMatrixText() {
        return Array.from({ length: 100 }, () => {
            return Array.from({ length: 20 }, () => {
                return matrixChars[Math.floor(Math.random() * matrixChars.length)];
            }).join(' ');
        }).join(' ');
    }

    // Update matrix characters periodically
    setInterval(() => {
        document.querySelectorAll('section').forEach(section => {
            if (!section.matches(':hover')) {
                section.style.setProperty('--matrix-chars', `"${generateMatrixText()}"`);
            }
        });
    }, 100);
});
