import { Routes } from '@angular/router';
import { AuthComponent } from './home/pages/auth/auth.component';
import path from 'path';
import { Component } from '@angular/core';
import { ProductComponent } from './admin/product/pages/product/product.component';
import { ProductOnlyComponent } from './admin/product/pages/product-only/product-only.component';
import { proteccionGuard } from './guards/proteccion.guard';
import { NotFoundComponent } from './home/pages/not-found/not-found.component';

export const routes: Routes = [

    {
        path : "",
        component:AuthComponent
    },

    {
        path:"admin",
        canActivate : [ proteccionGuard ],
        children: [

        {
            path: "home",
            component:ProductComponent
        },
      
        {
            path: "product",
            component:ProductComponent
        },

        {
            path: "product/:id",
            component:ProductOnlyComponent
        },

        ]

    },
    {
        path : "**",
        component:NotFoundComponent
    }
];
