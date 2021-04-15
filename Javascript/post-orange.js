const article = [
  {
    h2: `Orange Juice`,
    h3A: `Orange`,
    imageA: `src="./Images/orange.jpg" alt="Orange Fruit"`,
    pA: `The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.
    <br>The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo. The sweet orange has had its full genome sequenced.
    <br>The orange originated in a region encompassing Southern China, Northeast India, and Myanmar,and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world. Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel. As of 2012, sweet oranges accounted for approximately 70% of citrus production.
    <br>In 2017, 73 million tonnes of oranges were grown worldwide, with Brazil producing 24% of the world total, followed by China and India.[1]`,
    h3B: `Juice of Orange`,
    imageB: `src="./Images/orange-juice2.png" alt="Orange Juice"`,
    pB: `Orange juice is the most popular fruit juice worldwide and has long been a breakfast staple.
    <br>Television commercials and marketing slogans portray this drink as unquestionably natural and healthy.
    <br>Yet, some scientists and health experts are concerned that this sweet beverage could harm your health.
    <br>This article looks at orange juice and whether it’s good or bad for you.`,
    h4A: `From the Orchard to Your Glass`,
    imageC: `src="./Images/orange-juice.jpg" alt="Orange Juice"`,
    pC: `Most store-bought types of orange juice aren’t made by simply squeezing fresh-picked oranges and pouring the juice into bottles or cartons.
    <br>Rather, they’re produced through a multi-step, rigorously controlled process, and the juice can be stored in large tanks for up to a year before packaging.
    <br>First, oranges are washed and squeezed by a machine. Pulp and oils are removed. The juice is heat-pasteurized to inactivate enzymes and kill microbes that could otherwise cause deterioration and spoilage (1Trusted Source, 2Trusted Source, 3Trusted Source).
    <br>Next, some of the oxygen is removed, which helps reduce oxidative damage to vitamin C during storage. Juice to be stored as frozen concentrate is evaporated to remove most of the water (4).
    <br>Unfortunately, these processes also remove compounds that provide aroma and flavor. Some of them are later added back to the juice from carefully blended flavor packs (5).
    <br>Finally, before packaging, juice from oranges harvested at different times may be mixed to help minimize variations in quality. Pulp, which undergoes further processing after extraction, is added back to some juices (1Trusted Source).`,
    h4B: `Are Some Types Healthier?`,
    pD: `The healthiest type of orange juice is the kind you fresh-squeeze at home — but that can be time-consuming. Therefore, many people opt to buy orange juice from the supermarket.
    <br>The least healthy options are orange-flavored drinks that contain only a small percentage of real juice, along with several additives like high-fructose corn syrup and yellow food coloring.
    <br>A healthier choice is 100% orange juice — whether it’s made from frozen orange juice concentrate or never frozen. These two options are similar in nutritional value and taste (12, 13Trusted Source).
    <br>Stores also sell orange juice with added calcium, vitamin D and other nutrients. However, due to its high calorie count, you shouldn’t drink it just for these added nutrients. Instead, taking a supplement pill is a calorie-free way to fill in any dietary gaps (14Trusted Source).
    <br>If you’re watching your calorie intake, you can buy orange juice beverages that promote 50% fewer calories and less sugar than regular orange juice.
    <br>However, these drinks contain added water and sugar substitutes — either natural ones, such as stevia, or artificial ones, including sucralose and acesulfame potassium, which you may prefer to avoid. If included, these will be listed in the ingredients list.
    <br>Finally, you can choose how much pulp you want in your orange juice. Extra pulp doesn’t add enough fiber to change the count on the nutrition label compared to pulpless juice, but it does supply beneficial plant compounds, including flavonoids (13Trusted Source, 15).`,
    source: `<br>1.https://en.wikipedia.org/wiki/Orange_(fruit)
    <br>2.https://www.healthline.com/nutrition/orange-juice#juice-vs-fruit`
  }
]
$(document).ready(function(){

    for (let i=0; i<article.length; i++) {
      const postOrange = `
          <h2>${article[i].h2}</h2>
          <section class="post card">
            <h3>${article[i].h3A}</h3>
            <img ${article[i].imageA} class="post-img">
            <p>${article[i].pA}</p>
            <div class="clear"></div>
            <h3>${article[i].h3B}</h3>
            <img ${article[i].imageB} class="post-img">
            <p>${article[i].pB}</p>
            <div class="clear"></div>
            <h4>${article[i].h4A}</h4>
            <img ${article[i].imageC} class="post-img">
            <p>${article[i].pC}</p>
            <div class="clear"></div>
            <h4>${article[i].h4B}</h4>
            <p>${article[i].pD}</p>
            <div class="clear"></div>
            <h3>Source:</h3>
            <p>1.https://en.wikipedia.org/wiki/Orange_(fruit)
            <br>2.https://www.healthline.com/nutrition/orange-juice#juice-vs-fruit</p>
          </section>
          `
        console.log(postOrange);
}});

/*
$(document).ready(function(){
  $("#vitAbtn").click(function(){
    $("#firstchild-main").empty();
    $("#firstchild-main").append(articleArea);
    for (let i=0; i<vitA.length; i++) {
      const postPreview = `
            <section id="" class="card">
              <img class="preview-img" ${vitA[i].image}>
              <a href="post1.html"><h3>${vitA[i].title}</h3></a>
              <p><em>${vitA[i].date}</em>
              <br>Author: <strong>${vitA[i].author}</strong></p>
              <p>${vitA[i].content}</p>
              <p><a href="post1.html">Read more>></a></p>
            </section>
      `
      $("#album").append(postPreview)
    }
  })
});
*/
