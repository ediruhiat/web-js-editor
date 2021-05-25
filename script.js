
const codeEditor = CodeMirror.fromTextArea(document.getElementById("editor"),
    {
        lineNumbers: true,
        mode: "javascript",
        theme: "seti",
        autoCloseBrackets: true,
        matchBrackets: true,
        keyMap: "vim",
    }
);

const runBtn = document.querySelector('#run');

runBtn.addEventListener('click', () => {
    CodeMirror.runMode(codeEditor.getValue(), "javascript", document.getElementById("console-container"));
});