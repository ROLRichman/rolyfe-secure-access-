const LINKS = {
  hub: "https://rolrichman.github.io/rolyfe-funding/",
  jamal: "https://agent.jotform.com/019bdd1fe57172838101dccf3612b1e9e787"
};

function loginAccess(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(!email){
    alert("Enter your email first.");
    return;
  }

  localStorage.setItem("rolyfeLoginEmail", email);

  window.location.href = LINKS.hub;
}

function openJamal(){
  window.open(
    LINKS.jamal + "?embedMode=popup&parentURL=" + encodeURIComponent(window.location.href),
    "Jamal",
    "scrollbars=yes,toolbar=no,width=760,height=620"
  );
}
