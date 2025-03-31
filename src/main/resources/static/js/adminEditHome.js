function be() {
  const form = document.querySelector("form");
  form.action = "/editAdminRequestHome";
  form.method = "POST";
  form.submit();
}

function af() {
  const form = document.querySelector("form");
<<<<<<< HEAD
  form.action = "/editShift";
=======
  form.action = "/editShiftHome";
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
  form.method = "POST";
  form.submit();
}