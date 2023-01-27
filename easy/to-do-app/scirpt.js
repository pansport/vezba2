const input = document.querySelector(".inputText");
const btnAdd = document.querySelector(".btnAdd");
const listContainer = document.querySelector(".list");

btnAdd.addEventListener("click", () => {
  const html = `
    <div class="item">
      <p>${input.value}</p>
      <button class='deleteBtn'>X</button>
    </div>
  `;

  listContainer.insertAdjacentHTML("afterbegin", html);

  input.value = "";

  const deleteBtn = document.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", (event) => {
    const listItem = event.target.closest(".item");
    listItem.remove();
  });
});
