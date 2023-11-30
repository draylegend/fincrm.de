import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'svg[icon=angular]',
  standalone: true,
  template: `<defs>
      <linearGradient
        id="logosAngularIcon0"
        x1="25.071%"
        x2="96.132%"
        y1="90.929%"
        y2="55.184%"
      >
        <stop offset="0%" stop-color="#E40035" />
        <stop offset="24%" stop-color="#F60A48" />
        <stop offset="35.2%" stop-color="#F20755" />
        <stop offset="49.4%" stop-color="#DC087D" />
        <stop offset="74.5%" stop-color="#9717E7" />
        <stop offset="100%" stop-color="#6C00F5" />
      </linearGradient>
      <linearGradient
        id="logosAngularIcon"
        x1="21.863%"
        x2="68.367%"
        y1="12.058%"
        y2="68.21%"
      >
        <stop offset="0%" stop-color="#FF31D9" />
        <stop offset="100%" stop-color="#FF5BE1" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path
      fill="url(#logosAngularIcon0)"
      d="m256 45.179l-9.244 145.158L158.373 0L256 45.179Zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4l13.583 32.918ZM128.001 72.249l34.994 85.076h-69.99l34.996-85.076ZM9.149 190.337L0 45.179L97.627 0L9.149 190.337Z"
    />
    <path
      fill="url(#logosAngularIcon1)"
      d="m256 45.179l-9.244 145.158L158.373 0L256 45.179Zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4l13.583 32.918ZM128.001 72.249l34.994 85.076h-69.99l34.996-85.076ZM9.149 190.337L0 45.179L97.627 0L9.149 190.337Z"
    />`,
  schemas: [NO_ERRORS_SCHEMA],
})
export class AngularComponent {
  @HostBinding('attr.viewBox') viewBox = '0 0 256 271';
  @HostBinding('attr.width') width = '30.23';
  @HostBinding('attr.height') height = '32';

  @Input({ required: true })
  icon!: string;
}
