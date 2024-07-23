document.getElementById('settings-button').addEventListener('click', function() {
    const menu = document.getElementById('settings-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('user-button').addEventListener('click', function() {
    const userWindow = document.getElementById('user-window');
    userWindow.style.display = userWindow.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('window-button').addEventListener('click', function() {
    const windowPopup = document.getElementById('window-popup');
    windowPopup.style.display = windowPopup.style.display === 'block' ? 'none' : 'block';
});

function setupWindowInteractions() {
    const sections = {
        window1: 'section1',
        window2: 'section2',
        window3: 'section3',
        window4: 'section4'
    };

    document.querySelectorAll('.inner-window').forEach(innerWindow => {
        innerWindow.addEventListener('click', function() {
            const windowId = this.id;
            const targetSectionId = sections[windowId];
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                const content = windowId === 'window1' ? createTerminalContent() : createCodeEditorContent(windowId);
                targetSection.innerHTML = content;
            }
        });
    });
}

function createTerminalContent() {
    return `
        <div class="terminal-content">
            <div class="terminal-prompt">user@terminal:~$</div>
            <div class="terminal-input">
                <div class="terminal-command">echo "Hello, World!"</div>
                <div class="terminal-command">ls -la</div>
            </div>
        </div>
    `;
}

function createCodeEditorContent(windowId) {
    return `
        <div class="code-editor-container">
            <div class="code-editor-header">
                <span class="file-name">File: ${windowId}.js</span>
            </div>
            <div class="code-editor-body">
                <textarea class="code-editor" spellcheck="false">console.log('Hello, ${windowId}');</textarea>
            </div>
        </div>
    `;
}

setupWindowInteractions();
