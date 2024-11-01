/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PagePropse {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PagePropse> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};