document.querySelector('body').onclick = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const listItem = e.target.closest('.listItem');
    const amountEl = listItem.querySelector('.amount');
    const amount = amountEl.value;
    const id = listItem.getAttribute('data-id');

    const data = {
      amount,
      id
    };

    amountEl.value = '';

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('/cart', {
      method: 'PUT',
      headers: headers,
      credentials: 'same-origin',
      body: JSON.stringify(data)
    }).then(() => {
      amountEl.value = '1';
    });
  }
}