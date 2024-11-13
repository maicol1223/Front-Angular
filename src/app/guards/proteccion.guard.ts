import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const proteccionGuard: CanActivateFn = (route, state) => {
const router = inject(Router)
  console.log("Pase por el guard")
  let token = localStorage.getItem("token")
  if (token) {
    return true
  }
  
  return router.createUrlTree([""]); ;
};
