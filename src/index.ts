// import printMe from './print';

class GctComponent {
  readonly name: string;
  private readonly _nameSpan: HTMLSpanElement;

  private readonly _domGctComponent: HTMLDivElement;

  constructor(mountNode: HTMLElement, name: string) {
    this.name = name;

    this._domGctComponent = this._renderGctComponent();
    this._nameSpan = this._renderName();

    mountNode.appendChild(this._domGctComponent);
  }

  private _renderGctComponent = (): HTMLDivElement => {
    const elem = document.createElement('div');
    elem.className = 'gct-component';

    return elem;
  };

  private _renderName = (): HTMLSpanElement => {
    const elem = document.createElement('span');
    elem.className = 'gct-component__name';
    elem.textContent = this.name;
    this._domGctComponent.appendChild(elem);

    // printMe();

    return elem;
  };
}

const gctComponent = new GctComponent(document.body, 'Meu nome eh Eneias!');
