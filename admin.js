const ADMIN_USER = "darkvenom";
const ADMIN_PASS = "DarkVenom@2026";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  document.getElementById("adminPanel").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}
