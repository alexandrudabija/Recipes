import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})







export class ApiService {
 apiKey :string = JSON.parse(localStorage.getItem('apiKey') || '[]') ;
//  string = 

 index:any = JSON.parse(localStorage.getItem('index') || '0') || 0;

  constructor(private http:HttpClient ) {
    
    // console.log('apiKey ='+this.apiKey);
    // console.log('index =' + this.index);
    
  }

   


    changeKey ()
    {
 var keys = ['44e304de135c4b53b669bd7a861384e2','98e3946d163c460e8911b538b5e6e668','e64bf7102e5d459ba9b9ee8d0d942781',
 '2e798d5ee8d34f1cbd17a791c357522f','f837dfea39b54fec8772ecfd11bbc0a0','4c180a7ed1f945ad878e66d6bc82b739','fd2481dbbc6e49839e3020591a67e423',
 '40f527e427de4e8c81efea57d84c8605','0b99f521dfd940d0b4ebeda9ee8599cc','0fbc08f3f7d24b7c8b34016436892a9a','896ace2ee7e04a33ab9ab9ca5dc30015','9163b951ef4b46e79a9e99f20ffb76b0']
       
      
      



     
 
        
        if(this.index >keys.length-1)
          {this.index=0}

          this.index = this.index+1;
          this.apiKey=keys[this.index]
        //  console.log(this.apiKey);
         localStorage.setItem("index",JSON.stringify(this.index))
         localStorage.setItem("apiKey",JSON.stringify(this.apiKey))
         
    }

  



  
srcImage(name: string): string {
  return `https://spoonacular.com/recipeImages/ ${name}?apiKey=${this.apiKey}`;
}

search(params?: any) {
  return this.getRequest("recipes/complexSearch", params);
}

getRecipe(id: number) {
  return this.getRequest(`recipes/${id}/information`);
}


randomRecipes(num: number = 30)
 {
  return this.getRequest("recipes/random", { number: num });

}



 getRequest(request: string, params?: any) 
 {  
//        const httpOptions ={
//         headers: new HttpHeaders ({
// 'Content-Type' : 'application/json',
// 'Authorization':'fd2481dbbc6e49839e3020591a67e423'

// })
//       }       

           
       const url = (`https://api.spoonacular.com/`) + request;

       params = {
                  ...params,
                  apiKey: this.apiKey
// this.apiKey,


                 };
// join adauga la inceput sirului =,si & la inceputul parametrului 
       const urlParameters = Object.entries(params).map((e:any) => e.join("=")).join("&");

        // console.log(urlParameters);


// for verify key !
 this.http.get(`${url}?${urlParameters}`).subscribe(
  
  
  response => {}, error => {
  if(error.status==401 ||error.status==402)
  {
    this.changeKey ();
    window.location.reload();
  } 

    
  }
  
  
  
  ) 


       return this.http.get(`${url}?${urlParameters}`)
       
  .pipe(
        
        
          catchError(

                        (error)=>{ 
                          
                          // if (error){this.changeKey ();}
                                      return  throwError(() => new Error('error'))


                                }

                    )
     )
       
       
       
 }













} 