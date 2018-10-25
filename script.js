 function start() {
			 field = [[], [], []];
			 count = 0;
			 win_check = false;
			 $("p").fadeIn("fast");
			 $("p").fadeOut("slow");
			 $(".row").on("click",function(){
				if((count % 2 == 0) && ($(this).attr("data-check") == "false")){
					$(this).html("X");
					$(this).attr("data-check","true");
					count++;
					field[$(this).attr("data-x")][$(this).attr("data-y")] = 1;

				}
				if ((count % 2 !== 0) && ($(this).attr("data-check") == "false"))
				{
					$(this).html("O");
					$(this).attr("data-check","true");
					count++;
					field[$(this).attr("data-x")][$(this).attr("data-y")] = 0;
				}
				//Проверка строчек
				if (field[0].length == 3){
					if((field[0][0] == field[0][1]) && (field[0][0] == field[0][2])){
						 if (count % 2 ==0){
						$("h1").html("Выиграли нолики");
						$(".row").off();
						win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
					}
				}
				if (field[1].length == 3){
					if((field[1][0] == field[1][1]) && (field[1][0] == field[1][2])){
					 if (count % 2 ==0){
						 $("h1").html("Выиграли нолики");
						 $(".row").off();
						 win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
					}
				}
				if (field[2].length == 3){
					if((field[2][0] == field[2][1]) && (field[2][0] == field[2][2])){
						if (count % 2 ==0){
						$("h1").html("Выиграли нолики");
						$(".row").off();
						win_check = true;
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
					}
				}
				//Проверка столбиков
				if ((((field[0][0] !== undefined) && (field[1][0] !== undefined)) && (field[2][0] !== undefined)) && ((field[0][0] == field[1][0]) && (field[2][0] == field[1][0]))){
					 if (count % 2 ==0){
						 $("h1").html("Выиграли нолики");
						 $(".row").off();
						 win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
				}
				if ((((field[0][1] !== undefined) && (field[1][1] !== undefined)) && (field[2][1] !== undefined)) && ((field[0][1] == field[1][1]) && (field[0][1] == field[2][1]))){
					 if (count % 2 ==0){
						 $("h1").html("Выиграли нолики");
						 $(".row").off();
						 win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
				}
				
				if ((((field[0][2] !== undefined) && (field[1][2] !== undefined)) && (field[2][2] !== undefined)) && ((field[0][2] == field[1][2]) && (field[2][2] == field[0][2]))){
					 if (count % 2 ==0){
						 $("h1").html("Выиграли нолики");
						 $(".row").off();
						 win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
				}
				//проверка диагоналей
				if ((((field[0][0] !== undefined) && (field[1][1] !== undefined)) && (field[2][2] !== undefined)) && ((field[0][0] == field[1][1])) && (field[2][2] == field[0][0])){
					 if (count % 2 ==0){
						 $("h1").html("Выиграли нолики");
						 $(".row").off();
						 win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
				}
				if ((((field[0][2] !== undefined) && (field[1][1] !== undefined)) && (field[2][0] !== undefined)) && ((field[0][2] == field[1][1])) && (field[2][0] == field[0][2])){
					 if (count % 2 ==0){
						 $("h1").html("Выиграли нолики");
						 $(".row").off();
						 win_check = true;
					
					}else{
						$("h1").html("Выиграли крестики");
						$(".row").off();
						win_check = true;
					}
				}
				//Проверка на ничью
				if ((count == 9) && (win_check == false)){
					$("h1").html("Ничья");
						$(".row").off();	
				}

			});
			
		}
function repeat() {
	for (var i = 0;i<9;i++){
		$(".row").attr("data-num",i).html("");
		$(".row").attr("data-num",i).attr("data-check","false");
	}
	$("h1").html("");
	 start();
}