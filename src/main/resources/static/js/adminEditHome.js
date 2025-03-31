function be() {
  const form = document.querySelector("form");
  form.action = "/editAdminRequestHome";
  form.method = "POST";
  form.submit();
}

function af() {
  const form = document.querySelector("form");
  form.action = "/editShift";
  form.method = "POST";
  form.submit();
}