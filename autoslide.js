HTMLElement.prototype.autoSlide = function(){

	//-----------cheacking correct element----------
	var correctEle = ( this.tagName === "UL" || this.tagName === "DIV" ) ? true : false;
	
	if(correctEle){

		//---------parent element----------
		correctEle = this;

		//---------------css properties------------
		var parentCss = "position: relative";
		var childCss =  "position: absolute; z-index: 10; top : 0px; left : 0px";
		var autoSlideCss = "position: absolute; z-index : 15; top: 0px; left : 0px;  animation-name : autoSlide; animation-duration : 4s;";

		//------------set relative to parent element---------
		correctEle.style = parentCss;

		//------------set abosolute to child elements----------
		for( var i = 0; i < correctEle.children.length; i++ ){

			correctEle.children[i].style = childCss;

			var eachGrandChild = correctEle.children[i].children;

		//-------------set absolute to grand child elemnts--------
			if(eachGrandChild.length > 1){
			
				for(var x = 0; x < eachGrandChild.length; x++){

					if(eachGrandChild[x].tagName !== "IMG"){

					eachGrandChild[x].style = "position : absolute";
					console.log(eachGrandChild[x]);

					};

				}
			}

		};


		//-------------created auto Slide-show--------------

		var slideIndex = 0;

		setInterval(createSlideShow, 3000);

		function createSlideShow(){

		//------------reset everty time children properties-------		
		for( var i = 0; i < correctEle.children.length; i++ ){

			correctEle.children[i].style = childCss;

		};

		//----------pass slide-css propeties to every children----------
		if(slideIndex > correctEle.children.length-1 ) slideIndex = 0;

		correctEle.children[slideIndex].style = autoSlideCss;

		slideIndex++;

		};	

		}else{

		console.log("please cheack api");

		}

};


	
slide.autoSlide();


