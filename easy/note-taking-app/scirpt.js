const btnAdd = document.querySelector(".add");
const container = document.querySelector(".container");

btnAdd.addEventListener("click", () => {
  const newNote = `<textarea placeholder='Empty sticky note'></textarea>`;
  container.insertAdjacentHTML("afterbegin", newNote);

  const notes = document.querySelectorAll("textarea");

  notes.forEach((note) => {
    note.addEventListener("dblclick", (event) => {
      event.target.remove();
    });
  });
});
