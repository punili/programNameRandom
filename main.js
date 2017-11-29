    var arr1 = ['永續', '全面', '多元', '自主', '宏觀', '典範', '定期', '便利', '品保', '飛颺', '專業', '創意', '創新', '廣角', '廣域', '數位', '優質', '顯著', '友善', '跨領域'];
		var arr2 = ['反饋', '加值', '孕育', '交流', '合作', '成立', '成長', '自學', '放眼', '促進', '建置', '訂定', '追蹤', '培育', '培養', '強化', '接軌', '推動', '躍進', '提升' ];
		var arr3 = ['開拓', '傳承', '落實', '實踐', '精進', '銜接', '整合', '築夢', '豐富', '關懷', '打造', '生根', '共創', '厚植', '品味', '徜佯', '建構', '深耕', '激發', '躍進' ];
		var arr4 = ['人才', '人文', '風華', '心理', '生涯', '地球村', '成效', '自我', '步伐', '身心', '知能', '社會', '校友', '校園', '海外', '特色', '學涯', '素養', '培力', '國際' ]; //20個項目
		function getRandom(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		function progressFun() {
			var goA = arr1[getRandom(0, 19)];
		    var goB = arr2[getRandom(0, 19)];
		    var goC = arr3[getRandom(0, 19)];
		    var goD = arr4[getRandom(0, 19)];
			function goFunA(){
				document.getElementById("adv").innerHTML= '<div>' + goA + '</div>';
				return goA;
			}
		    function goFunB(){
				document.getElementById("verb").innerHTML= '<div>' + goB + '</div>';
				return goB;
			}		    
		    function goFunC(){
				document.getElementById("verb2").innerHTML= '<div>' + goC + '</div>';
				return goC;
			}
			function goFunD(){
				document.getElementById("noun").innerHTML= '<div>' + goD + '</div>';
				return goC;
			}
			setTimeout(function(){goFunA()}, 50);
			setTimeout(function(){goFunB()}, 50);
			setTimeout(function(){goFunC()}, 50);
			setTimeout(function(){goFunD()}, 50);
			return goA + goB + goC + goD;
		}
		
		var clickNum = 0;
		function myfun() {					
			var i = setInterval(function(){progressFun()}, 50);
			setTimeout(function( ) { endFun(i) }, 1000);
			setTimeout(function( ) {document.getElementById("start").value = '再一次';}, 990);
			
			clickNum++;			
			if ( clickNum == 5) {
				document.getElementById("reStart").style.display = "block";
				document.getElementById("start").style.display = "none";				
				return 	0;
					
			}else {
				return 	0;
				
			}		
		}
		function endFun(i){
		    clearInterval(i);
		    document.getElementById("result").innerHTML += '<li>' + progressFun() + '</li><hr>';
		}
		function reLoad(){
		    window.location.reload();    
		}
