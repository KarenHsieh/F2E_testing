// ===== Q1 =====
let name = "karen";
let temp = [];
let characters = name.split("");
let length = characters.length;

for (var i = 0; i < length; i++) {
	let pop = characters.pop();
	temp.push(pop);
}

let answer = temp.join("");

console.log(answer);

// ===== Q2 =====

let isPerfectSquare = function(input) {
	// num * num = input
	// if (input/num == num) return true else return false

	let input_number = input;
	if (
		input_number == undefined ||
		input_number == null ||
		typeof input_number != "number"
	) {
		return false;
	}

	let last_number = input_number % 10;
	let possible_last_number = [0, 1, 4, 5, 6, 9];
	if (possible_last_number.indexOf(last_number) === -1) {
		return false;
	}
	
	// 應該是還有存在更多的規則可以先過濾掉不可能成為 Perfect Square 的數值
};

// ===== Q3 =====

// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9]. 
 
/*
	如果以上述的例子作為範例
	
	第一次先比對第一組
	先判斷最大和最小值都超過現在這一組的數值，就直接比較下一組
	其他狀況的話就直接下面這段
	== block start ==
	將要insert的[2,5]裡的2去跟[1,3]裡的3比
	因為2比3小，就不作變動，如果是比較大，就取代掉
	所以再去判斷5不是比3大，是則將3取代成5，不是的話就保持原樣
	== block end ==
	
	如果這組數值有被取代掉，之後後面幾組都以被取代掉的這組做判斷
	邏輯跟上方 block 裡一樣
*/


// ===== Q4 =====

let board = [
	["A", "B", "C", "E"], 
	["S", "F", "C", "S"], 
	["A", "D", "E", "E"]
];

let getBoard = function(board) {
	let merged_board = board[0];
	for (let i = 1; i < board.length; i++) {
		merged_board = merged_board.concat(board[i]); // 合併陣列
		if (i + 1 > board.length) {
			break;
		}
	}
	return merged_board;
};

let checkWord = function(word, new_board) {
	let characters = word.split("");
	let clone_board = new_board; 
	
	for (let i = 0; i < characters.length; i++) {
		let char = characters[i];
		
		let index = clone_board.indexOf(char);
		if (index === -1) {
			return false;
		} else {
			delete clone_board[index];
		}
	}
	
	return true;
	
};

let new_board = getBoard(board);

//word = "ABCCED", -> returns true,
//word = "SEE", -> returns true,
//word = "ABCB", -> returns false.

let word_testing1 = checkWord("ABCCED", new_board);
console.log(word_testing1);
let word_testing2 = checkWord("SEE", new_board);
console.log(word_testing2);
let word_testing3 = checkWord("ABCB", new_board);
console.log(word_testing3);

// ===== Q5 =====

// 將數字轉為二進位表示，以二進位方式相加完後，再轉回10進位的數字
