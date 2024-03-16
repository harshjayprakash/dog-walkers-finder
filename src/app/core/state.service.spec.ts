import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';

describe('CoreModule::StateService', () => {
    let service: StateService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`'displaySideNav' should have default value of false`, () => {
        expect(service.isSideNavShown()).toBeFalse();
    });

    it(`'displaySideNav' toggle should change value to true`, () => {
        service.toggleSideNav();
        expect(service.isSideNavShown()).toBeTrue();
    });

    it(`'set 'displaySideNav' to false`, () => {
        service.hideSideNav();
        expect(service.isSideNavShown()).toBeFalse();
    });

    it(`set 'displaySideNav' to true`, () => {
        service.showSideNav();
        expect(service.isSideNavShown()).toBeTrue();
    });
});
