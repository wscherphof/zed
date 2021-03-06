var projectWin = null;

function showProjects() {
    if (projectWin) {
        projectWin.show();
        return;
    }
    chrome.app.window.create('projects.html', {
        frame: 'none',
        width: 400,
        height: 400
    }, function(win) {
        projectWin = win;
        win.focus();
        win.show();
    });
}

chrome.app.runtime.onLaunched.addListener(showProjects);

chrome.commands.onCommand.addListener(function(command) {
    showProjects();
});