import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule, MatIconModule, MatToolbarModule],
    exports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule, MatIconModule, MatToolbarModule],
})
export class MaterialModule { }