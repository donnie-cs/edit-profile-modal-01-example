// Edit Profile modal dialog.
// Renders the dialog markup, wires up the buttons, and keeps the dialog
// pinned in the centre of the screen while the user scrolls the page.

let overlayEl: any;
let dialogEl: any;

export function initProfileModal(trigger: HTMLElement) {
  // Build the dialog markup and append it to the page.
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="overlay" id="profile-overlay">
      <div class="dialog" id="profile-dialog">
        <div class="dialog__close" id="profile-close">&times;</div>
        <h2 class="dialog__title">Edit profile</h2>
        <p class="dialog__desc">
          Make changes to your profile here. Click save when you're done.
        </p>

        <div class="field">
          <input class="field__input" id="profile-name" placeholder="Name" />
        </div>
        <div class="field">
          <input class="field__input" id="profile-username" placeholder="Username" />
        </div>

        <div class="dialog__actions">
          <button class="save-btn" id="profile-save">Save changes</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);

  overlayEl = document.getElementById("profile-overlay");
  dialogEl = document.getElementById("profile-dialog");

  trigger.addEventListener("click", openModal);
  document.getElementById("profile-close")!.addEventListener("click", closeModal);
  document.getElementById("profile-save")!.addEventListener("click", save);

  // Close when the backdrop (but not the dialog) is clicked.
  overlayEl.addEventListener("click", (e: any) => {
    if (e.target.id === "profile-overlay") {
      closeModal();
    }
  });

  // Keep the dialog centred as the user scrolls.
  window.addEventListener("scroll", reposition);
}

function openModal() {
  overlayEl.style.display = "flex";
  dialogEl.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlayEl.style.display = "none";
  dialogEl.style.display = "none";
  document.body.style.overflow = "auto";
}

function save() {
  const name: any = document.getElementById("profile-name");
  const username: any = document.getElementById("profile-username");
  const profile = { name: name.value, username: username.value };
  console.log("Saving profile", profile);
  closeModal();
}

function reposition() {
  const top = window.innerHeight / 2 + window.scrollY;
  dialogEl.style.top = top + "px";
}
