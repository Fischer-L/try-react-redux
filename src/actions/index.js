export function updateText(newText) {
  console.log("actions - updateText -", newText);
  console.log("");
  return {
    type: "update_text",
    newText
  }
}
