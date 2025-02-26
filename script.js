const API_URL = "http://127.0.0.1:5000";

// בהפעלת האתר הוא טוען את הטבלה עם פרטי המשפחה מהשרת
window.onload = function () {
  fetch(API_URL)
    .then((response) => response.json())
    .then((family) => {
      const table = document.getElementById("familyTable");
      const empty = document.getElementById("emptyFamily");
      if (family.length > 0) {
        table.style.display = "block";
        family.forEach((member) => {
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

//בלחיצה על הוסף בן משפחה נפתח  או נסגר חלון פופאפ עם טופס להוספת בן משפחה
document
  .getElementById("openFamilyForm")
  .addEventListener("click", openFamilyForm);

function openFamilyForm() {
  const popup = document.getElementById("popup");
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else popup.style.display = "block";
}

//בלחיצה על ביטול בטופס נסגר חלון הפופאפ ומתאפס הטופס
document
  .getElementById("closeFamilyForm")
  .addEventListener("click", closeFamilyForm);

function closeFamilyForm() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  document.getElementById("familyForm").reset();
}

//בבחירת סוג בן משפחה נפתח תיבת טקסט להזנת שם
document.getElementById("type").addEventListener("change", openNameInput);

function openNameInput() {
  const nameInput = document.getElementById("nameInput");
  nameInput.style.display = "block";
}

//בהזנת שם נפתח כפתור הוסף
document.getElementById("name").addEventListener("change", openSubmitButton);

function openSubmitButton() {
  const submitButton = document.getElementById("addFamilyMember");
  submitButton.style.display = "block";
}

//בלחיצה על הוסף בטופס נשלחת בקשה לשרת להוספת בן משפחה חדש
document
  .getElementById("addFamilyMember")
  .addEventListener("click", addFamilyMember);

function addFamilyMember() {
  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;

  fetch(`${API_URL}/add_family_member`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: type, name: name }),
  });
}
