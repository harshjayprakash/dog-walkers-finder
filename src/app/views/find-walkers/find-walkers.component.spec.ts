import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWalkersComponent } from './find-walkers.component';

describe('Views.FindWalkersComponent', () => {
    let component: FindWalkersComponent;
    let fixture: ComponentFixture<FindWalkersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FindWalkersComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FindWalkersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
