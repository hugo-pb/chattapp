const socket = io();
const time = new Date();


$("form").on("submit", function () {



  let text = $("#name").val();
  let text2 = $("#input2").val();
  let text3 = `${text} says: ${text2} (sended at ${time.getHours()}:${ time.getMinutes()})`;
  socket.emit("message", text3);
  $("#name").val();
  $("#input2").val();
  return false;
});
/// display
socket.on("message", function (text3) {
  $("<li>").text(text3).appendTo("#history");
});
