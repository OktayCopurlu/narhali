export const getProductsFromDB = async () => {
  const URL ="https://halideneme-26fbb-default-rtdb.europe-west1.firebasedatabase.app/narhali.json"
  try {
    const data = await fetch(URL);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};
