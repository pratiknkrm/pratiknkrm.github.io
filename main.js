// ========================================
// TYPED TEXT ANIMATION
// ========================================

document.addEventListener('DOMContentLoaded', function () {
  const typedTextElement = document.querySelector('.typed-text');
  const commands = [
    "sudo apt-get install expertise",
    "ping -c 4 192.168.1.1",
    "nmap -sV 10.0.0.1",
    "ssh admin@corp.local",
    "sudo systemctl restart nginx"
  ];

  let commandIndex = 0;
  let charIndex = 0;

  function typeCommand() {
    if (charIndex < commands[commandIndex].length) {
      typedTextElement.textContent += commands[commandIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeCommand, 100);
    } else {
      setTimeout(eraseCommand, 2000); // Wait before erasing
    }
  }

  function eraseCommand() {
    if (charIndex > 0) {
      typedTextElement.textContent = commands[commandIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseCommand, 50);
    } else {
      commandIndex = (commandIndex + 1) % commands.length;
      setTimeout(typeCommand, 500);
    }
  }

  // Start the typing animation
  setTimeout(typeCommand, 1000);
});
