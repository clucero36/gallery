
const endpoint = 'https://api.pexels.com/v1/collections/ylxa5x6?';
const endpoint2 = 'https://api.pexels.com/v1/search?'

export async function fetchImages() {

  const headers =  {
    'Content-Type': 'application/json',
    'Authorization': process.env.KEY,
  }

  const params = {
    page: '1',
    per_page: '4',
    type: 'photos'
  }

  const searchParams = new URLSearchParams(params)

  try {
    const res = await fetch(endpoint + searchParams.toString(), {headers});
    const data = await res.json();
    return data;
    
  } catch (error) {
    console.log(error.message);
  }

}

export async function fetchCategoryImages(category) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  const headers =  {
    'Content-Type': 'application/json',
    'Authorization': process.env.KEY
  }

  const params = {
    query: `${category}`,
    page: '1',
    per_page: '24',
  }

  const searchParams = new URLSearchParams(params);

  try {
    const res = await fetch(endpoint2 + searchParams.toString(), {headers});
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}