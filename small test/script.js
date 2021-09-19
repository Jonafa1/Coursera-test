function PizzaAnswer () {
	var answer =
		document.getElementById("answer").value;
		var message = "Hello " + answer;

	document
		.getElementById("content")
		.innerHTML = message;

	  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}