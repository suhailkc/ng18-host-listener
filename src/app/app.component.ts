import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host-listener';

  showsWebIcon = false;
  showsPublicIcon = false;

  @ViewChild('five') divFive !: ElementRef;
  @ViewChild('eight') divEight !: ElementRef;

  private hideAllIcons () {
    this.showsWebIcon = false;
    this.showsPublicIcon = false;
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.divFive.nativeElement.getBoundingClientRect();
    const boundingRectEight = this.divEight.nativeElement.getBoundingClientRect();

    console.log(boundingRectFive);
    if (boundingRectFive.top >= 0 && boundingRectFive.bottom <= windowHeight) {
      setTimeout(() => {this.showsWebIcon = true}, 500);
    } else if (boundingRectEight.top >= 0 && boundingRectEight.bottom <= windowHeight) {
      setTimeout(() => {this.showsPublicIcon = true}, 500);
    } else {
      this.hideAllIcons();
    }

  }



}
