import * as PIXI from 'pixi.js';

let app = new PIXI.Application();

document.body.appendChild(app.view);

app.loader
  .add('assets/bunny.png')
  .load(setup);

function setup() {
  let bunny = new PIXI.Sprite(
    app.loader.resources['assets/bunny.png'].texture
  );

  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;

  bunny.height = 100;
  bunny.width = 100;

  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;

  app.stage.addChild(bunny);
}
