fetch('https://reqres.in/api/users')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.page);
console.log(post.data);
});
const update = {
    title: 'Aula Tecnologias Web',
    body: 'Testando API',
    userId: 1,
    };
    
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };
    fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
         return data.json();
        }).then(update => {
        console.log(update);
        // {
        //
        title: 'Tecnologias Web';
        //
        body: 'Treinando uso de API';
        //
        userId: 1;
        //
        id: 101
        // };
        }).catch(e => {
        console.log(e);
        });