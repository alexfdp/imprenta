import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  // mobileQuery: MediaQueryList;
  // private _mobileQueryListener: () => void;
  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //    this.mobileQuery = media.matchMedia('(max-width: 768px)');
  //    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

  // }
}
