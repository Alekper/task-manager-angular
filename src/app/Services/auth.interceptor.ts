// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // throw new Error("Method not implemented.");
//         const token = localStorage.getItem('token')

//         if(token){
//             req = req.clone({
//                 setHeaders: {Authorization: `Bearer ${token}`}
//             })
//         }
//         return next.handle(req)
//     }
    
// }