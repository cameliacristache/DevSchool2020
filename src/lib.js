export const request = async function (url, options) {
  const jwt = localStorage.getItem('jwt');
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    ...options,
  });

  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message);
  }

  return response.json();
};
