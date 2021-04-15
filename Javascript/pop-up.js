$(document).ready(function(){
  let notifPopUp = `
  <div id="notification" class="notif">
    <div class="notif-header">
      <strong>Vitamix</strong>
      <small>10 second ago</small>
      <button type="button" class="notif-button" onclick="notifButton()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="notif-body">
      <a href="login.html" target="_blank" id="go">Sign-up now and get 20% cut coupon</a>
    </div>
  </div>
  <style media="screen">
  .notif {
    position: fixed;
    top: 20%;
    left: 10%;
    min-height: 10%;
    min-width: 20%;
    background-color: rgba(0,0,0, 0.4);
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .notif-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .notif-button {
    background-color: orange;
  }
  .notif-body {
    background-color: rgba(255,255,255, 0.9);
    min-height: 10px;
    padding: 0;
  }
  </style>
  `
  setTimeout(function(){
    $("body").prepend(notifPopUp);
  },10000)


})

function notifButton(){
  $("#notification").remove();
}
