const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

// タイプライター風に表示
function typeWriter(text, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      terminal.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 30);
    } else {
      terminal.innerHTML += "\n";
      if (callback) callback();
    }
  }
  typing();
}

// コマンド処理
function processCommand(cmd) {
  const response = COMMANDS[cmd] || `Unknown command: ${cmd}`;
  typeWriter("> " + cmd + "\n" + response + "\n");
}

// 入力処理
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    input.value = "";
    processCommand(cmd);
  }
});
