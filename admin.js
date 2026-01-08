const USER = "darkvenom";
const PASS = "DarkVenom@2026";

window.onload = () => {
  if (localStorage.getItem("logged") === "yes") {
    showAdmin();
  }
};

function login() {
  if (
    username.value === USER &&
    password.value === PASS
  ) {
    localStorage.setItem("logged", "yes");
    showAdmin();
  } else {
    alert("Wrong username or password");
  }
}

function logout() {
  localStorage.removeItem("logged");
  location.reload();
}

function showAdmin() {
  loginBox.classList.add("hidden");
  adminPanel.classList.remove("hidden");
}

function generateJSON() {
  const app = {
    latest_version: version.value,
    apk: apkLink.value,
    force_update: forceUpdate.checked
  };

  const message = {
    title: msgTitle.value,
    body: msgBody.value,
    active: msgActive.checked
  };

  const tweak = {
    name: tweakName.value,
    enabled: tweakEnabled.checked,
    sni: tweakSNI.value,
    payload: tweakPayload.value
  };

  output.textContent =
    "app.json\n" +
    JSON.stringify(app, null, 2) +
    "\n\nmessage.json\n" +
    JSON.stringify(message, null, 2) +
    "\n\ntweak.json\n" +
    JSON.stringify(tweak, null, 2);
}
