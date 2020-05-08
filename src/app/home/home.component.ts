import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'

declare var $: any;
@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{

    constructor(private router:Router){}
    value:string='1';
    servings=[25,50,100,200];
    servinselected:Number=2;
    monthly_price=[1,2]
    annually_price=[0.5,1]
    lollipopPrice:Number=100
    icecandyPrice:Number=200
    savings:Number=100
    noservings:Number=this.servings[2];
    packageselected=['year','month']
    isValue: number = 2;  // This is a class property. By initializing with a value, you can set the default button highlighted

    
    ngOnInit(){
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
          });
    }
    toggle(i) { this.isValue = i; }
    


istoggled(event :any){
    if(this.value=='1')
        this.value='0';
    else
    this.value='1';
    this.servingselected(this.servinselected);

}
servingselected(val){
    this.servinselected=val;
    this.toggle(val)
    this.noservings=this.servings[val]
    if(this.value=='1'){
        this.lollipopPrice=this.servings[val]*this.monthly_price[0];
        this.icecandyPrice=this.servings[val]*this.monthly_price[1];
    }
    else{
        this.lollipopPrice=this.servings[val]*this.annually_price[0];
        this.icecandyPrice=this.servings[val]*this.annually_price[1];
    }
    this.savings=Number(Number(this.icecandyPrice)-Number(this.lollipopPrice));
}
redirect(){
    this.router.navigate['/']
}
}