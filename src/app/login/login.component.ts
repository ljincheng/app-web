import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TreeComponent, TreeNode, ITreeItem } from 'ng-devui/tree';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE2MDgwMTM3NjAsInVzZXJOYW1lIjoibGluamluY21mIiwiZXhwIjozMjE2MDQ5MTIwLCJ1c2VySWQiOiIxMDAwMDAwIiwiaWF0IjoxNjA4MDEzNzYwfQ==.a98b94aa701c6324caff028341b55934f7f32172af91848e62d4f7e0f3823a95'
  })
};

const DevHost={host:"http://127.0.0.1",port:9600};

 
export interface MyHttpResult {
  code: number;
  msg: string;
  data:Object;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
  detail="TEST";

  searchText = "/approval/instance/detail/e9ef1476-45c8-45a0-8bc4-a6c2c68c28db";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getServerUrl(v:string): string{
    var myUrl=DevHost.host+":"+DevHost.port+v;
   // alert(myUrl);
    return myUrl;
  }

  onSearch(term: any) {
    console.log(term);
    this.searchText=term; 
    var mysV=this.getServerUrl(this.searchText);
    alert(mysV)
    this.caicheweiReq(mysV,{"test":"hello"});
  }

  approvalAction(url: string){ 
    //  var myUrl='http://dev.cn:9600'+url;
    this.caicheweiReq(this.getServerUrl(url),{"test":"hello"});
    return 1;
  }

  

  authConfig(data: any){
    this.detail=JSON.stringify(data);
  }

  clearActionData(){
    this.detail="";
  }

  caicheweiReq(url:string,reqData:any){
    this.http.post<MyHttpResult>(this.getServerUrl("/login"),{"userName":"linjincmf","password":"888888"},httpOptions).subscribe(data=>{
      if(data.code==0){
        var ssoToken=data.data.ssoToken.token;
        httpOptions.headers=httpOptions.headers.set("token",ssoToken);
        this.authGet(url,reqData);
      }
     
    });
  }

  authPost(url:string,data:any){
    this.http.post<MyHttpResult>(url,data,httpOptions).subscribe(data=>{ this.authConfig(data);
    });
  }
  authGet(url:string,data:any){
    this.http.get(url,httpOptions).subscribe(data=>{ this.authConfig(data);});
  }


   
}
