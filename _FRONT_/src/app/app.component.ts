import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
	studenten = ["Joey", "Vlad", "Marlene", "Lotte"];
	
	vakken = ["HTML", "CSS", "PHP", "Bootstrap"];
	
	fouten = ["kleine fouten", "medium fouten", "grote fouten"];
	
	clickbtn(){
		console.log("fout toevoegen");
	}
}