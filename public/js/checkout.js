document.querySelector('body').onclick = (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.id !== 'buy') {
    const listItem = e.target.closest('.listItem');
    const amountEl = listItem.querySelector('.amount');
    const amount = amountEl.value;
    const id = listItem.getAttribute('data-id');

    const data = {
      amount,
      id
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('/updatecart', {
      method: 'PUT',
      headers: headers,
      credentials: 'same-origin',
      body: JSON.stringify(data)
    });
  }
}

document.querySelector('#buy').onclick = (e) => {
  window.location.href = 'buy';
}