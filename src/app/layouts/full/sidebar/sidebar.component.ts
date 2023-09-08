import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FullService } from '../full.service';
import { GetUserModel, UserModel } from '../models/user.model';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DemoMaterialModule, NgFor, NgIf, RouterModule, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  user: UserModel | undefined;
  id: string = '';

  private _mobileQueryListener: () => void;

  constructor(
    private route: ActivatedRoute,
    private fullService: FullService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.route.params.subscribe(params => {
      this.id = `${+params['id']}`;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);

    var user: GetUserModel = { id: this.id }
    this.fullService.getUser(user).subscribe((dados) => {
      this.user = dados
    })
  }
}
