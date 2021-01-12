import EventEmitter from 'events';

type NavigatorEvent = 'navigate';

export interface INavigateEvent {
  type: 'navigate';
  url: URL;
}

export interface INavigatorListener {
  (event: INavigateEvent): void;
}

export interface INavigator {
  readonly url: URL;
  addListener(event: NavigatorEvent, listener: INavigatorListener): this;
  navigate(to: string | URL): void;
  removeListener(event: NavigatorEvent, listener: INavigatorListener): this;
  update(to: string | URL): void;
}

export class Navigator extends EventEmitter implements INavigator {
  private location: Location;
  private history: History;

  constructor(
    location: Location,
    history: History,
    popstateEventTarget: EventTarget
  ) {
    super();

    this.location = location;
    this.history = history;
    this.popstateListener = this.popstateListener.bind(this);

    popstateEventTarget.addEventListener('popstate', this.popstateListener);
  }

  get url(): URL {
    return new URL(this.location.href);
  }

  navigate(to: string | URL) {
    const url = typeof to === 'string' ? new URL(to, this.location.href) : to;
    this.history.pushState(null, '', url.href);
    this.triggerNavigate(url);
  }

  update(to: string | URL) {
    const url = typeof to === 'string' ? new URL(to, this.location.href) : to;
    this.history.replaceState(null, '', url.href);
    this.triggerNavigate(url);
  }

  private popstateListener() {
    const url = new URL(this.location.href);
    this.triggerNavigate(url);
  }

  private triggerNavigate(url: URL) {
    this.emit('navigate', {
      type: 'navigate',
      url,
    });
  }
}
