const previewPage = `
<article id="home" class="main card">
  <h2>Top Article</h2>
  <section data-role="header" id="album" class="album">
  </section>
</article>
`

$(document).ready(function(){
  $("#firstchild-main").append(previewPage);
  for (let i=0; i<toplist.length; i++) {
    const show =
    `<section id="" class="card">
      <img class="preview-img" ${toplist[i].image}>
      <a href="${toplist[i].link}"><h3>${toplist[i].title}</h3></a>
      <p><em>${toplist[i].date}</em>
      <br>Author: <strong>${toplist[i].author}</strong></p>
      <p>${toplist[i].content}</p>
      <p><a href="${toplist[i].link}">Read more>></a></p>
    </section>`

    $("#album").append(show)
  }

  // for (let i=0; i<album.length; i++) {
  //   const postPreview = `
  //         <section data-role="content" class="card">
  //           <img class="preview-img" ${album[i].image}>
  //           <a href="${album[i].link}"><h3>${album[i].title}</h3></a>
  //           <p><em>${album[i].date}</em>
  //           <br>Author: <strong>${album[i].author}</strong></p>
  //           <p>${album[i].content}</p>
  //           <p><a href="${album[i].link}">Read more>></a></p>
  //         </section>
  //   `
  //   $("#album").append(postPreview)
  // }
});
