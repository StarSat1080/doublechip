const TOKEN = "7838429220:AAFbI-o3FdRHuCwdfcdTpnrLgg5scwUehtg";
const CHAT_ID = "5243056355";
const URI_API = `https://api.telegram.org{7838429220:AAFbI-o3FdRHuCwdfcdTpnrLgg5scwUehtg}/sendDocument`;

document.getElementById('tgForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert("Выберите файл!");
        return;
    }

    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', fileInput.files[0]);
    // Текст из формы добавляем в подпись к файлу (caption)
    formData.append('caption', `Имя: ${this.name.value}`);
    formData.append('parse_mode', 'html');

    fetch(URI_API, {
        method: 'POST',
        body: formData // Заголовки Content-Type браузер подставит сам
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) alert('Файл успешно отправлен!');
        else alert('Ошибка API: ' + data.description);
    })
    .catch(err => alert('Ошибка сети!'));
});
