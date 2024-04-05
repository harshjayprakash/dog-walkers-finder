import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDogsComponent } from './manage-dogs.component';

describe('Views.ManageDogsComponent', () => {
    let component: ManageDogsComponent;
    let fixture: ComponentFixture<ManageDogsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ManageDogsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ManageDogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
