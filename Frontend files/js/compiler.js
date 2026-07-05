require.config({
    paths: {
        vs: "https://unpkg.com/monaco-editor@0.52.2/min/vs"
    }
});
const fileName = document.getElementById("file-name");
const fileNames = {

    c: "main.c",

    cpp: "main.cpp",

    java: "Main.java",

    python: "main.py"

};

const starterCode = {

    c:
`#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}`,

    cpp:
`#include <iostream>

using namespace std;

int main()
{
    cout << "Hello, World!";

    return 0;
}`,

    java:
`public class Main
{
    public static void main(String[] args)
    {
        System.out.println("Hello, World!");
    }
}`,

    python:
`print("Hello, World!")`

};
require(["vs/editor/editor.main"], function () {
    window.editor = monaco.editor.create(
    document.getElementById("monaco-editor"),
    {

        value: starterCode.c,

        language: "c",

        theme: "vs-dark",

        automaticLayout: true,

        fontFamily: "JetBrains Mono",

        fontSize: 15,

        minimap: {
            enabled: false
        },

        scrollBeyondLastLine: false,

        tabSize: 4,

        insertSpaces: true

    }
    
);
const cursorPosition = document.getElementById("cursor-position");
editor.onDidChangeCursorPosition(function (event) {

    const line = event.position.lineNumber;

    const column = event.position.column;

    cursorPosition.textContent = `Ln ${line}, Col ${column}`;

});
        }

        
    );
    
const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {

    const language = this.value;

    monaco.editor.setModelLanguage(
        editor.getModel(),
        language
    );
    

    editor.setValue(starterCode[language]);

    fileName.textContent = fileNames[language];
    languageIcon.className = languageIcons[language];
    languageStatus.textContent = languageNames[language];

});

const languageIcon = document.getElementById("language-icon");
const languageIcons = {

    c: "devicon-c-plain colored",

    cpp: "devicon-cplusplus-plain colored",

    java: "devicon-java-plain colored",

    python: "devicon-python-plain colored"

};

const languageStatus = document.getElementById("language-status");
const languageNames = {

    c: "C",

    cpp: "C++",

    java: "Java",

    python: "Python"

};
// Terminal Elements

const terminalOutput = document.getElementById("terminal-output");

const clearBtn = document.getElementById("clear-terminal");


// Clear Terminal

clearBtn.addEventListener("click", () => {

    terminalOutput.textContent = "";

    terminalOutput.classList.remove("terminal-error");

});





