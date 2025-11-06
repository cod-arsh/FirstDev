document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('button1');
    const msg = document.getElementById('msg1');
    let count = 0;

    btn.addEventListener('click', () => {
        count++;
        msg.textContent = `You pressed ${count} time${count === 1 ? '' : 's'}.`;

        const originalBg = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#282b2eff';
        btn.textContent = 'Pressed!';
        setTimeout(() => {
            document.body.style.backgroundColor = originalBg;
            btn.textContent = 'Learn to count!';
        }, 300);
    });
});