window.onload = function () {
  fetch("http://127.0.0.1:5000/")
    .then((response) => response.json())
    .then((family) => {
      const table = document.getElementById("familyTable");
      const empty = document.getElementById("emptyFamily");
      if (family.length > 0) {
        table.style.display = "block";
        family.forEach(member => {
          const row = table.insertRow();
          const typeCell = row.insertCell(0);
          const nameCell = row.insertCell(1);
          typeCell.textContent = member.type;
          nameCell.textContent = member.name;
        });
      } else {
        table.style.display = "none";
        empty.style.display = "block";
      }
    });
};

document
  .getElementById("openFamilyForm")
  .addEventListener("click", openFamilyForm);

function openFamilyForm() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

document
  .getElementById("closeFamilyForm")
  .addEventListener("click", closeFamilyForm);

function closeFamilyForm() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}