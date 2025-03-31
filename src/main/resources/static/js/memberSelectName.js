function select(this) {
  const form = document.createElement("form");
  const select = this.querySelector(".member").dataset.id;
  
  const input = document.createElement("input");
  input.type = "hidden";
  input.value = select;
  input.name = "memberId";
  
  form.appendChild(input);
  form.action = "/memberHome";
  form.method = "post";
  const er = document.querySelector(".error");
  if(select.value === "") {
    er.innerHTML = "名前を選択してください";
    return;
  } else {
    form.submit();
	form.remove();
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const select = document.querySelector(".member");
  const op = document.createElement("option");
  op.setAttribute("value","");
  op.disabled = true;
  op.selected = true;
  op.textContent = "名前を選択";
  select.prepend(op);
})