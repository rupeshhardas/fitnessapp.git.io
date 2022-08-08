 export const exerciseoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5b0f1d7592msh0f0aad0e166ebb6p1b4f6bjsna0ac83da93a3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };





  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

