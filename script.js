let text_input = document.getElementById("text_input");
let Add_Note = document.getElementById("add_note");
// CREATE NEW NOTE
Add_Note.addEventListener("click", (e) => {
  const field_notes = document.getElementById("all_notes");

  // create new note item
  const new_note = document.createElement("div");
  new_note.classList.add("new_note_style");

  // make short variant of text
  const full_text = text_input.value;
  let short_text = full_text.substr(0, 10);

  // create text field in new note
  const note_text = document.createElement("h3");
  note_text.classList.add("text_inside");
  note_text.innerHTML = short_text;

  // create checkbox in note
  const check_box = document.createElement("input");
  check_box.type = "checkbox";
  check_box.classList.add("checkbox");

  // create button "view detail"
  const view_detail = document.createElement("button");
  view_detail.innerHTML = "View Detail";
  view_detail.classList.add("button");

  // create button "remove"
  const remove_note = document.createElement("button");
  remove_note.innerHTML = "Delete";
  remove_note.classList.add("button_delete");

  // create note with all components
  field_notes.appendChild(new_note);
  new_note.appendChild(note_text);
  new_note.appendChild(view_detail);
  new_note.appendChild(remove_note);
  new_note.appendChild(check_box);

  text_input.value = "";

  // create button to turn off view details mode
  const but_rem = document.createElement("button");
  but_rem.innerHTML = "x";
  but_rem.classList.add("but_rem");

  //open full text
  view_detail.addEventListener("click", function (e) {
    e.preventDefault();
    new_note.removeChild(view_detail);
    new_note.removeChild(remove_note);
    new_note.removeChild(check_box);
    note_text.innerHTML = full_text;
    new_note.appendChild(but_rem);
    new_note.classList.add("active");
  });

  // close full text
  but_rem.addEventListener("click", () => {
    new_note.classList.remove("active");
    note_text.innerHTML = short_text;
    new_note.appendChild(view_detail);
    new_note.appendChild(remove_note);
    new_note.appendChild(check_box);
    new_note.removeChild(but_rem);
  });
  //open full text
  remove_note.addEventListener("click", function (e) {
    e.preventDefault();
    field_notes.removeChild(new_note);
  });
});
