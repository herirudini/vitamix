$(document).ready(function(){
  $("form#comment-form").submit(function(){
    event.preventDefault();
    const komentator = $("input#name").val();
    const komentar = $("textarea#comment").val();
    const dt = new Date();
    const date = dt.getMonth()+"/"+dt.getDay()+"/"+dt.getFullYear();
    const time = dt.getHours()+":"+dt.getMinutes();
    $("#comment-list").prepend(`
      <tr>
        <td><b>${komentator}</b><br><em>${date}<br>${time}</em></td>
        <td>${komentar}</td>
      </tr>
    `);
    $("input#name").val("");
    $("textarea#comment").val("");
    window.alert("Comment added!");
  });
});
