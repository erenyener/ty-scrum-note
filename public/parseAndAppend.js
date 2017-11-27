

// $(document).ready(function(){
	

	

	
	// xmlS.replace(/\'/g,'"');
	// xmlS.replace(/\&/g,'ampersand');
	// xmlS = xmlS.replace(/(\r\n|\n|\r)/gm,"");
	
	// var template = '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">            <div class="post-it">              <p class="sticky taped">              <span class="subtask-type">                    {{subtasktype}}              </span>               <span class="parent-task">{{subtaskparentnumber}}</span><br>               <strong class="subtask-number">{{subtasknumber}}</strong>                           <span class="subtask-title">                    {{subtasktitle}}                </span>                <span class="subtask-remaining-time">                    {{remainingtime}}                </span>                <br>              </p>            </div>            </div>'
    // var jsonifiedJiraObject = xmlToJSON.parseString(xmlS); 
    // var items = jsonifiedJiraObject.rss[0].channel[0].item;
	// console.log(items);
	// var totalTime = 0;
	// items.forEach(function(item){
		// console.log(item);
		// var itemType = item.type[0]._text === "Test Sub-task" ? "T" : "D"
		// var replacableTitle = "[" + item.key[0]._text + "]";
		// var title = item.title[0]._text.replace(replacableTitle, "");

		// var timeInHours = 0;
		// console.log(replacableTitle);
		// if(!!item.timeestimate && item.timeestimate.length > 0 && item.timeestimate[0]._attr != null){
			// var remainingHoursParsed = parseInt(item.timeestimate[0]._attr.seconds._value)/3600;
			// if(remainingHoursParsed < 1){
				// remainingHoursParsed = 1;
			// }
			// totalTime+= remainingHoursParsed;
			// timeInHours= remainingHoursParsed + "h";
		// }
		  
		
		// if(timeInHours < 1){
			// timeInHours = '1h';
		// }
		
		
		
		// var subtaskNumber = (!!item && !!item.key && item.key.length > 0) ? item.key[0]._text : '';
		// var parentText = (!!item && !!item.parent && item.parent.length > 0) ? item.parent[0]._text : '';
		// var tempTemplate = template.replace("{{subtasktype}}", itemType);
		
		// tempTemplate = tempTemplate.replace("{{subtaskparentnumber}}", parentText);
		// tempTemplate = tempTemplate.replace("{{subtasknumber}}", subtaskNumber);
		// tempTemplate = tempTemplate.replace("{{subtasktitle}}", title);
		// tempTemplate = tempTemplate.replace("{{remainingtime}}", timeInHours);
		
		// $('.row').append(tempTemplate);
	// });
	
	// console.log("total time -> " + totalTime);
// })