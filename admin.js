const ADMIN_USERNAME = "darkvenom";
const ADMIN_PASSWORD = "DarkVenom@2026";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("Invalid login details");
  }
}

function logout() {
  document.getElementById("adminPanel").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}
