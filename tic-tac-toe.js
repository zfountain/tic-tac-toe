// Player clicks a div/spot on the board.
// Function determines whether player is X or O and writes the text to the selected/clicked div.
var currentPlayer = "X"

$(".column-four").click(function() {
	$(this).css("background-color", "#ED8702");
	$(this).text(currentPlayer);
		if (currentPlayer == "O") {
			(currentPlayer = "X");
			checkBoard();
			findWinner();
			onClick();
		}
		else if (currentPlayer == "X") {
			(currentPlayer = "O");
			checkBoard();
			findWinner();
			onClick();
		}
});

// Declare variables for each square.
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;

// Match each square to the corresponding element's ID.
checkBoard = function() {
	a = $("#a").text();
	b = $("#b").text();
	c = $("#c").text();
	d = $("#d").text();
	e = $("#e").text();
	f = $("#f").text();
	g = $("#g").text();
	h = $("#h").text();
	i = $("#i").text();
};

// Play continues until one player wins by getting (a,b,c), (d,e,f), (g,h,i), (a,d,g), (b,e,h), (c,f,i), (a,e,i) or (c,e,g) OR until the game is tied with all 9 spots on the board filled.

var clickCount = 0;
	function onClick() {
	clickCount += 1;
	document.getElementsByClassName("column-four").innerHTML = clickCount;
};
 


findWinner = function() {
// Check to see if X won
	if ((a === "X" && b === "X" && c === "X") || (d === "X" && e === "X" && f === "X") || (g === "X" && h === "X" && i === "X") || (a === "X" && d === "X" && g === "X") || (b === "X" && e === "X" && h === "X") || (c === "X" && f === "X" && i === "X") || (a === "X" && e === "X" && i === "X") || (c === "X" && e === "X" && g === "X")) {
// Return winner X
		alert("X wins!");
// Check to see if O won
	} else if ((a === "O" && b === "O" && c === "O") || (d === "O" && e === "O" && f === "O") || (g === "O" && h === "O" && i === "O") || (a === "O" && d === "O" && g === "O") || (b === "O" && e === "O" && h === "O") || (c === "O" && f === "O" && i === "O") || (a === "O" && e === "O" && i === "O") || (c === "O" && e === "O" && g === "O")) {
// Return winner O
		alert("O wins!");
	}
}

// Function will clear the board.
// TO DO: Add functionality to reset column color
var resetBoard = $("#reset").click(function(event) {
	a = $("#a").text("").css("background-color", "#F2E4AA");
	b = $("#b").text("").css("background-color", "#F2E4AA");
	c = $("#c").text("").css("background-color", "#F2E4AA");
	d = $("#d").text("").css("background-color", "#F2E4AA");
	e = $("#e").text("").css("background-color", "#F2E4AA");
	f = $("#f").text("").css("background-color", "#F2E4AA");
	g = $("#g").text("").css("background-color", "#F2E4AA");
	h = $("#h").text("").css("background-color", "#F2E4AA");
	i = $("#i").text("").css("background-color", "#F2E4AA");
	currentPlayer = "X";
	clickCount = 0;
});
