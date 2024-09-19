


export async function fetchImages() {
  const endpoint = 'https://api.pexels.com/v1/collections/ylxa5x6?';
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
    console.log(data);
    return data;
    
  } catch (error) {
    console.log(error.message);
  }

}

export async function fetchCategoryImages(category) {
  const endpoint2 = 'https://api.pexels.com/v1/search?'
  
  const headers =  {
    'Content-Type': 'application/json',
    'Authorization': process.env.KEY
  }

  const params = {
    query: `${category}`,
    page: '1',
    per_page: '12',
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