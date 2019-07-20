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
        <div class="articles-item__container">
            <h3>${article.id} ${article.title}</h3>
            <div>${article.body}</div>
        </div>
        <a class="arrow" href="/features">Learn more <div class="arrow-right inline"></div></a>
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