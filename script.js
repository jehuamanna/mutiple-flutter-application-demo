const event_ = new Event("multi-view-initialized");

let p = null;
let flutterApp = (application) =>
  new Promise(async (resolve, reject) => {
    console.log(application);
    const baseElement = document.querySelector("base");
    baseElement.setAttribute("href", `/mutiple-flutter-application-demo/${application}/build/web/`);

    const response = await fetch(
      `/mutiple-flutter-application-demo/${application}/build/web/flutter_bootstrap.js`
    );
    const text = await response.text();
    const initialization =
      "_flutter={};if(!window._flutter){window._flutter={};}";
    const flutter = text.match(/\(\(\)=>{[\s\S]*}\)\(\);/)[0];
    const buildConfig = text.match(/_flutter\.buildConfig = {"[\s\S]*"}]};/)[0];
    const evalString = `${initialization}${buildConfig}${flutter}`;
    eval(evalString);

    _flutter.loader.load({
      onEntrypointLoaded: async function (engineInitializer) {
        let engine = await engineInitializer.initializeEngine({
          multiViewEnabled: true,
          renderer: "canvaskit",
          assetBase: `/mutiple-flutter-application-demo/${application}/build/web/`,
        });
        let app = engine.runApp();
        console.log(await app);
        resolve(app);
      },
    });
  });

const application_names = ["counter","gallery", "material_3_demo"];
let applications = {};
(async () => {
  for (i = 0; i < application_names.length; i++) {
    applications[application_names[i]] = await flutterApp(application_names[i]);
  }
  document.dispatchEvent(event_);
})();

let activeApplications = {};
let activeApplicationName = "";
const newElement = document.getElementById("application");

const addView = (application, newElement) =>
  application.addView({
    hostElement: newElement,
    initialData: {
      randomInt: Math.floor(Math.random() * 100),
      randomUUID: globalThis.crypto.randomUUID(),
      decimals: [Math.PI, Math.E, Math.SQRT2],
    },
    viewConstraints: {
      minWidth: 0,
      maxWidth: window.innerWidth,
      minHeight: 0,
      maxHeight: window.innerHeight,
    },
  });

const activateApplications =
  (applicationEle, newElement) => (application_name) =>
    applicationEle.addEventListener("click", async function () {
      const applicationState = activeApplications[application_name];
      if (applicationState?.application) {
        let application = applicationState.application;
        addView(application, newElement);
      } else {
        const application = await applications[application_name];
        activeApplications[application_name] = {}
        activeApplications[application_name]['application'] = application
        viewId = addView(application, newElement);
      }
      console.log(activeApplications)
    });

document.addEventListener("multi-view-initialized", function () {
  const applications_config = [
    {
      element: adderCounter,
      applicationName: "counter",
    },
    {
      element: adderGallery,
      applicationName: "gallery",
    },
    {
      element: adderMaterial,
      applicationName: "material_3_demo",
    },
  ];

  applications_config.forEach((app_config) => {
    activateApplications(
      app_config.element,
      newElement
    )(app_config.applicationName);
  });
});
