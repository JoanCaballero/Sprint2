// Gestió d'events
document.querySelectorAll('.toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;

    clearConsole();

    document.querySelectorAll('.exercici-content').forEach((ex) => {
      ex.classList.remove('active');
    });

    const target = document.getElementById(targetId);
    if (target){
      target.classList.add('active');
    }
    
  });
});

// Imprimir la consola
function printToConsole(...args) {
  const consoleBlock = document.getElementById('console-block');
  if (!consoleBlock) return;

  const message = args.map(arg =>
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ');

  const line = document.createElement('div');
  line.textContent = message;
  consoleBlock.appendChild(line);
}

console.log = printToConsole;

function clearConsole() {
  const consoleBlock = document.getElementById('console-block');
  if (consoleBlock) {
    consoleBlock.innerHTML = '';
  }
}