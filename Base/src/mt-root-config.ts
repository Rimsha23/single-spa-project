import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mt/react-single",
  app: () =>
    System.import<LifeCycles>('@mt/react-single'),
    activeWhen: (location) => location.pathname === '/'
});

registerApplication({
  name: "@mt/react-multiples",
  app: () =>
    System.import<LifeCycles>('@mt/react-multiples'),
    activeWhen: ['/react-multiples'],
});
registerApplication({
  name: "@mt/react-import",
  app: () =>
    System.import<LifeCycles>('@mt/react-import'),
    activeWhen: ['/react-import'],
});
registerApplication({
  name: "@mt/react-task",
  app: () =>
    System.import<LifeCycles>('@mt/react-task'),
    activeWhen: ['/react-task'],
});


start({
  urlRerouteOnly: true,
});
