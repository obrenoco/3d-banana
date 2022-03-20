import { Fragment } from "react";

const App = () => {
  const windowSize = window.screen.width < 600 ? "40vh" : "80vh";

  return (
    <Fragment>
      <p>BANANA</p>
      <p>BANANA</p>
      <p>BANANA</p>
      <model-viewer
        id="reveal"
        ar
        modes="scene-viewer quick-look webxr"
        src={
          "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/banana/model.gltf"
        } // AR Android/Web
        camera-orbit="calc(100deg - env(window-scroll-y) * 100deg)"
        touch-action={"none"}
        auto-rotate
        field-of-view="50deg"
        style={{ width: "100%", height: windowSize }}
      ></model-viewer>
      <p>BANANA</p>
      <p>BANANA</p>
      <p>BANANA</p>
      <model-viewer
        id="reveal"
        ar
        modes="scene-viewer quick-look webxr"
        src={
          "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/banana/model.gltf"
        } // AR Android/Web
        camera-orbit="calc(100deg - env(window-scroll-y) * 100deg)"
        touch-action={"none"}
        auto-rotate
        field-of-view="50deg"
        camera-controls
        disable-zoom
        style={{ width: "100%", height: windowSize }}
      ></model-viewer>
      <p>BANANA</p>
      <p>BANANA</p>
      <p>BANANA</p>
      <model-viewer
        id="reveal"
        ar
        modes="scene-viewer quick-look webxr"
        src={
          "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/banana/model.gltf"
        } // AR Android/Web
        camera-orbit="calc(100deg - env(window-scroll-y) * 100deg)"
        touch-action={"none"}
        auto-rotate
        field-of-view="50deg"
        camera-controls
        style={{ width: "100%", height: windowSize }}
      ></model-viewer>
      <p>BANANA</p>
      <p>BANANA</p>
      <p>BANANA</p>
    </Fragment>
  );
};

export default App;
