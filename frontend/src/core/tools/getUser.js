const GetUserData = async () => {
  const url = 'http://127.0.0.1:8000/api/user';
  const currentToken = localStorage.getItem('token') ?? '';

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });

    if (!response.ok) console.error('Request failed with statue', response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default GetUserData;
