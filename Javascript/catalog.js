/*AJAX DATABASE*/
const album = [
  {
    title : "Orange Juice",
    date: "26/09/2035",
    author: "Heri Rudini",
    content: "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine. ",
    link: `../Html/post-orange.html`,
    image: `src="../Images/orange-juice.jpg" alt="orange-juice"`,
  },
  {
    title : "Lemonade Carrot",
    date: "26/12/2035",
    author: "Rudini Rudini",
    content: "Carrot juice is extracted from whole carrots and extremely nutritious. It not only provides potassium and vitamin C but also is very rich in provitamin A. Drinking carrot juice is thought to boost immunity and improve eye and skin health, among other benefits.",
    link: `../Html/post-carrot.html`,
    image: `src="../Images/carrot-juice.jpg" alt="Carrot juice with lemon"`,
  },
  {
    title : "Vita Milk",
    date: "26/10/2035",
    author: "Heri Rudini",
    content: "The vitamins A, C, K, and B complex all improve your immune system, making a mango a day the most delicious supplement you could take during cold and flu season.",
    link: `../Html/post-mango.html`,
    image: `src="../Images/mango-juice.jpg" alt="Manggo juice"`,
  },
  {
    title : "Banana Monkey",
    date: "26/01/2036",
    author: "Rudi",
    content: "The nutrition information comes from the United States Department of Agriculture’s (USDA) FoodData Central database. Daily requirements are from the 2015–2020 Dietary Guidelines for Americans. These are for adults, but they are approximate, as the values vary according to a person’s age and sex.",
    link: ``,
    image: `src="../Images/banana-juice.jpg" alt="Banana juice"`,
  },
  {
    title : "Qurma Blend",
    date: "26/11/2035",
    author: "Heri Heri",
    content: "A sweet-little dragon from arab could boost up your drinking experience. The taste it feels and the texture while we slurp up our juice through our kerongkongan it feels like we're falling in love forever.",
    link: ``,
    image: `src="../Images/qurma-topping.jpg" alt="Qurma palm fruit"`,
  },
  {
    title : "Kissmiss Blend",
    date: "26/02/2035",
    author: "Dini",
    content: "In general, and when people consume them in moderation, raisins are a healthful, tasty food to add to the diet. Raisins are a good source of essential nutrients, minerals, and energy in the form of calories and sugars.",
    link: ``,
    image: `src="../Images/kismis-topping.jpg" alt="Grape raisins"`,
  },
  {
    title : "Strawberry Cocktail",
    date: "26/03/2035",
    author: "Udin",
    content: "Strawberry Cocktails are wonderful for romantic date nights, Valentine's Day, or summer celebrations and are low carb, low sugar, and low-calorie. You won't miss a thing, and honestly, super sweet drinks are not as refreshing, so enjoy every sip of these &quot healthier &quot cocktails...",
    link: ``,
    image: `src="../Images/strawberry.jpg" alt="Strawberry cocktail"`,
  },
  {
    title : "Tradol Wine",
    date: "26/06/2035",
    author: "Guest",
    content: "People have been drinking wine for thousands of years, and the benefits of doing so have been well documented (1Trusted Source). Emerging research continues to suggest that drinking wine in moderation — about a glass per day — offers several benefits.",
    link: ``,
    image: `src="../Images/wine.jpg" alt="A glass of wine"`,
  }
];

const toplist = [album[1],album[2],album[3]];
const vitA = [album[1], album[2]];
const vitB = [album[3], album[4]];
const vitC = [album[5], album[6], album[7]];

const categoryPage = `
<article data-role="page" id="home" class="main card">
<h2>Category</h2>
<section data-role="header" id="album" class="album">
</section>
</article>
`
  function category(vit) {
    $("#firstchild-main").empty();
    $("#firstchild-main").append(categoryPage);
    for (let i=0; i<vit.length; i++) {
      const show =
      `<section id="" class="card">
        <img class="preview-img" ${vit[i].image}>
        <a href="${vit[i].link}"><h3>${vit[i].title}</h3></a>
        <p><em>${vit[i].date}</em>
        <br>Author: <strong>${vit[i].author}</strong></p>
        <p>${vit[i].content}</p>
        <p><a href="${vit[i].link}">Read more>></a></p>
      </section>`

      $("#album").append(show)
    }
  }




//   $(document).ready(function(){
//     const mainPage = `
//     <article data-role="page" id="home" class="main card">
//       <h1>Category</h1>
//       <section data-role="header" id="album" class="album">
//       </section>
//     </article>
//     `
//
//       $("#vitBbtn").click(function(){
//         $("#firstchild-main").empty();
//         $("#firstchild-main").append(mainPage);
//         for (let i=0; i<vitB.length; i++) {
//           const postThis = `
//                 <section id="" class="card">
//                   <img class="preview-img" ${vitB[i].image}>
//                   <a href="${vitB[i].link}"><h3>${vitB[i].title}</h3></a>
//                   <p><em>${vitB[i].date}</em>
//                   <br>Author: <strong>${vitB[i].author}</strong></p>
//                   <p>${vitB[i].content}</p>
//                   <p><a href="${vitB[i].link}">Read more>></a></p>
//                 </section>
//           `
//           $("#album").append(postThis)
//         }
//       })
// })

  // update.image = "${vitA[i].image}";
  // update.title = "${vitA[i].title}";
  // update.date = "${vitA[i].date}";
  // update.author = "${vitA[i].author}";
  // update.content = "${vitA[i].content}";
  // update.link = "${vitA[i].link}";
