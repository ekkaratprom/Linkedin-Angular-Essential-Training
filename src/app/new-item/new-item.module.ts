import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItemFormComponent } from './media-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { newItemRouting } from './new-item.routing';




@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        newItemRouting

    ],
    declarations: [
        MediaItemFormComponent
    ]
})

export class NewItemModule { }