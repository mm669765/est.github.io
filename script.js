//Создаем переменные
var emojis__container = document.getElementById('emojis');
var emojis__button = document.getElementById('emoji-button');
var showed = false;

function getEmojis() {//Получаем смайлики из PHP-файла
	$.post('/includes/chat.php',{act: 'load-emojis'}).done(function (data) {
		emojis__container.innerHTML = data;
	});
}

function showEmojis() {//Добавляем отображение и скрытие окна
	if(showed) {
		emojis__container.setAttribute('class','emojis-container emojis-container_hidden');
		showed = false;
	} else {
		emojis__container.setAttribute('class','emojis-container');
		showed = true;
	}
}
