document.addEventListener("DOMContentLoaded", function(event) {
    var form = document.forms[0];
	if (form) {
		var button = form["submit"];

		button.addEventListener("click", function(event) {
			var formdata = new FormData(form);
			console.log(formdata);
			console.log("Name: " + formdata.get("name"));
			console.log("Phone: " + formdata.get("phone"));
			console.log("E-mail: " + formdata.get("email"));
			console.log("Type: " + formdata.get("type"));
			console.log("Message: " + formdata.get("msg"));

			var isValid = form.checkValidity();
			if (isValid) {
				Swal.fire({
					icon: 'success',
					title: 'Сообщение!',
					text: 'Сообщение успешно отправлено'
				})
				event.preventDefault();
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Сообщение!',
					text: 'Пожалуйста, заполните все поля'
				})
			}
		})
	}
})
