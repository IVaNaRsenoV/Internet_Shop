async function api(url, method, data, headers) {
  try {
    let response = await fetch(url, {
      method: method,
      headers: headers || {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    //обработать ошибки по статус кодам тут
    //вывести сообщение попап и тд
    console.log(err);
  }
}

export default api;
