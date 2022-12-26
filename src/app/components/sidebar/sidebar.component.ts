import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() onColor = new EventEmitter<string>();
  @Input() bgColor: string = '#fff';

  changeColor() {
    this.onColor.emit(this.bgColor);
  }
}
