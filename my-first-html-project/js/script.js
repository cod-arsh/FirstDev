document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('myButton');
    const msg = document.getElementById('message');
    let count = 0;

    btn.addEventListener('click', () => {
        count++;
        msg.textContent = `Button clicked ${count} time${count === 1 ? '' : 's'}.`;

        // brief visual feedback
        const originalBg = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#f0f8ff';
        btn.textContent = 'Clicked!';
        setTimeout(() => {
            document.body.style.backgroundColor = originalBg;
            btn.textContent = 'Click Me!';
        }, 300);
    });
});


$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com