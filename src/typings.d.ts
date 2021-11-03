interface ApiParams {
  netWorkErrorNum: number;
}

declare interface Window {
  api: ApiParams;
  _config: {
    [index: string]: string;
  };
}
