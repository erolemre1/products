export const getProduct = async (param) => {
  try {
    const response = await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products${param}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};


// export const login = async () => {
//   const newUser = {
//     User: 'asd',
//   };
//  const response =  await fetch('https://5fc9346b2af77700165ae514.mockapi.io/users/', {
//       method: 'POST',
//       headers: {'content-type':'application/json'},
//       body: JSON.stringify(newUser)
//     })
//     const data = await response.json();
//     return data;
// }