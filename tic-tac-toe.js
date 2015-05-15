// Define tic-tac-toe board layout.
var board = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

// Player clicks a div/spot on the board.
// Function determines whether player is X or O and writes the text to the selected/clicked div.
	var currentPlayer = "X"

	$(".column-four").click(function() {
		$(this).css("background-color", "#ED8702");
		$(this).text(currentPlayer);
			if (currentPlayer == "O") {
				(currentPlayer = "X");
			}
			else if (currentPlayer == "X") {
				(currentPlayer = "O");
			}
	});

// Play continues until one player wins by getting (a,b,c), (d,e,f), (g,h,i), (a,d,g), (b,e,h), (c,f,i), (a,e,i) or (c,e,g) OR until the game is tied with all 9 spots on the board filled.

// Function will clear the board.

