export function getList(url,func, com = ''){
  let urlF = url + com
  fetch(urlF)
    .then((res) => res.json())
    .then(res => func(res))
}

export function sendPost(userId, theme, message, setPosts, newPostnumber){
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: theme,
    body: message,
    userId
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{
    for(let key in json){
      if(key == 'id') {json[key] = newPostnumber}
    }
  setPosts( el => [...el, json])
  })
}