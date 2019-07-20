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
            <h3 class="articles-item__title">${article.id} ${article.title}</h3>
            <div class="articles-item__body">${article.body}</div>
        </div>
        <a id="arrow" class="arrow" href="#">Learn more <div class="arrow__right inline"></div></a>
    </li>
        `
    ).join('');
    container.closest('div').style.display = "block";
}

prepareData = (data) => {
    let array = data.slice(0, 10);
    array.sort((a,b)=>{
        return (b.id - a.id);
    });
    return array;
}

getArticles();