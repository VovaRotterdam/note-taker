let text = document.getElementById("text_input");
let Add_Note = document.getElementById("add_note");

Add_Note.addEventListener("click", (e) => {
  const field_notes = document.getElementById("all_notes");

  const any_note = document.createElement("div");
  any_note.classList.add("elements");

  const short_str = text.value;
  let result = short_str.substr(0, 10);

  const any_text = document.createElement("h3");
  any_text.classList.add("text_inside");
  any_text.innerHTML = result;

  const view_detail = document.createElement("button");
  view_detail.classList.add("button");

  const but_rem = document.createElement("button");
  but_rem.innerHTML = "x";
  but_rem.classList.add("but_rem");

  let this_text = (text.innerHTML = result);
  view_detail.innerHTML = "View Detail";

  any_note.appendChild(any_text);
  any_note.appendChild(view_detail);
  field_notes.appendChild(any_note);

  text.value = "";

  const openPopUp = view_detail;
  const popUp = any_note;

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(123);
    any_note.removeChild(view_detail);
    any_note.appendChild(but_rem);
    popUp.classList.add("active");
  });

  const closePopUp = but_rem;

  closePopUp.addEventListener("click", () => {
    console.log("ok");
    any_note.appendChild(view_detail);
    popUp.classList.remove("active");
    any_note.removeChild(but_rem);
  });
});
