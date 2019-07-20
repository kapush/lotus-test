async function getArticles(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await response.json();

      renderArticles(prepareData(data));

    } catch (error) {
      console.log(`Rejected: ${error}`);
    }
}

renderArticles = (articles) => {
    const container = document.getElementById('articles');
    container.innerHTML = articles.map(article => `
    <li class="articles-item">
        <h3>${article.id} ${article.title}</h3>
        <div>${article.body}</div>
    </li>
        `
    ).join('');
}

prepareData = (data) => {
    let array = data.slice(0, 10);
    array.sort((a,b)=>{
        return (b.id - a.id);
    });
    return array;
}

getArticles();