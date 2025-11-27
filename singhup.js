function togglePasswordVisibility(id) {
  const input = document.getElementById(id);
  const icon = document.getElementById(`icon-${id}`);

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
}

function handleSignup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const name = document.getElementById("fullName").value;
  const msgBox = document.getElementById("msgBox");
  msgBox.classList.add("hidden");
  msgBox.textContent = "";
  msgBox.className = "p-3 text-sm rounded-lg";

  const showMsg = (message, type) => {
    msgBox.textContent = message;
    msgBox.classList.remove("hidden");

    if (type === "error") {
      msgBox.classList.add("bg-red-100", "text-red-800");
    } else if (type === "success") {
      msgBox.classList.add("bg-green-100", "text-green-800");
    }
  };

  if (pass !== confirmPass) {
    showMsg("পাসওয়ার্ড দুটি মিলছে না। আবার চেষ্টা করুন।", "error");
    return;
  }

  showMsg(`অভিনন্দন, ${name}! অ্যাকাউন্ট তৈরি হয়েছে।`, "success");

  console.log("Signup Successful:", { name, email, pass });
}
