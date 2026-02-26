/*
To Do

-Make Target Extension Auto Add Itself ✅
-Make Image Custom Type ✅
-Make Arguments That Accept Only One Custom Type ✅
-Make Open Canvas Block ✅
-Set Texture Of Target Block ✅
-Make Get Image Of Costume Blocks ✅
-Make More Blocks aaaasasdsamjfankdhf ✅
--Make height Of Image Block ✅
--Make From Data URL Block ✅
--Make Get Color Of Pixel Block ✅
--Make Set Color Of Pixel Block ✅
--Get Texture Of Target Block ✅
--Remove Texture From Target Block ✅
-Change A Bit The Custom Display Of The Image Type ✅
-Make Custom Display In Arrays ✅

Ext Done!!!!!!! yay
*/

(function (Scratch) {
  'use strict';

  let textures = Object.create(null);

  const vm = Scratch.vm;

  function loadExtension(id) {
    if (!vm.extensionManager.isExtensionLoaded(id)) {
      vm.extensionManager.loadExtensionIdSync(id);
    }
  }

  loadExtension('jwArray');
  loadExtension('jwVector');
  loadExtension('jwTargets');

  function createElement(tag, styles = {}) {
    const el = document.createElement(tag);
    Object.assign(el.style, styles);
    return el;
  }

  function rgbaToHex(r, g, b, a) {
    return (
      "#" +
      r.toString(16).padStart(2, "0") +
      g.toString(16).padStart(2, "0") +
      b.toString(16).padStart(2, "0") +
      a.toString(16).padStart(2, "0")
    );
  }

  class Image {
    constructor(matrix, width, height) {
      this.customId = 'dvImage';
      this.color = matrix;
      this.x = width;
      this.y = height;
    }

    toString() {
      return JSON.stringify(this.color);
    }

    toReporterContent() {
      const Container = createElement("div");
      const canvas = this.toCanvas();
      canvas.style.width = "60px";
      canvas.style.height = `${60 - (this.x - this.y)}px`;
      canvas.style.imageRendering = "pixelated";
      Container.appendChild(canvas);
      const Paragraph = document.createElement("p");
      const TextNode = document.createTextNode(`${this.x}x${this.y}`);
      Paragraph.appendChild(TextNode);
      Container.appendChild(Paragraph);
      Container.style.textAlign = "center";
      return Container;
    }

    toCanvas() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = this.x;
      canvas.height = this.y;

      for (let y = 0; y < this.y; y++) {
        for (let x = 0; x < this.x; x++) {
          const pixel = this.color[y][x];
          if (!pixel || pixel === "#00000000") continue;
          ctx.fillStyle = pixel;
          ctx.fillRect(x, y, 1, 1);
        }
      }

      return canvas;
    }

    jwArrayHandler() {
      const size = 24;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = this.x;
      canvas.height = this.y;
      for (let y = 0; y < this.y; y++) {
        for (let x = 0; x < this.x; x++) {
          const pixel = this.color[y][x];
          if (!pixel || pixel === "#00000000") continue;
          const r = parseInt(pixel.slice(1, 3), 16);
          const g = parseInt(pixel.slice(3, 5), 16);
          const b = parseInt(pixel.slice(5, 7), 16);
          const a = parseInt(pixel.slice(7, 9), 16) / 255;
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      const imgURL = canvas.toDataURL();
      const container = document.createElement("div");
      container.style.display = "inline-flex";
      container.style.flexDirection = "column";
      container.style.alignItems = "center";
      container.style.border = "1px solid #ccc";
      container.style.padding = "2px";
      container.style.background = "#fff";
      const img = document.createElement("img");
      img.src = imgURL;
      img.style.width = size + "px";
      img.style.height = size + "px";
      img.style.imageRendering = "pixelated";
      container.appendChild(img);
      return container.outerHTML;
    }
  }

  class ImagesExtension {
    getInfo() {
      return {
        id: 'dvImages',
        name: 'Images',
        menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCwwLDIwLDIwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLC0xNzApIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMzEsMTgwYzAsLTQuOTcwNTYgNC4wMjk0NCwtOSA5LC05YzQuOTcwNTYsMCA5LDQuMDI5NDQgOSw5YzAsNC45NzA1NiAtNC4wMjk0NCw5IC05LDljLTQuOTcwNTYsMCAtOSwtNC4wMjk0NCAtOSwtOXoiIGZpbGw9IiNjZDA3ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjYmIwMGQ0IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjM5LjE2NjY3LDE3Ny41NDMxbDEuNjUxMTQsMi43NjI2OWwwLjgzNDUsLTEuMjY4NDNsMS4wMTg3NSwxLjU0ODVjMC4wODI4MSwtMC4xMzIzOSAwLjEzMDY4LC0wLjI4ODg3IDAuMTMwNjgsLTAuNDU2NTR2LTEuNzM2ODdjLTAuMDg5ODYsMC4wMDg0MyAtMC4xODA5MiwwLjAxMjczIC0wLjI3Mjk5LDAuMDEyNzNjLTEuNTIyNDcsMCAtMi43Njk3NywtMS4xNzgxMSAtMi44ODAwMSwtMi42NzI0MWgtMS41ODgzOGMtMC40NzYxMSwwIC0wLjg2MjA3LDAuMzg1OTYgLTAuODYyMDcsMC44NjIwN3YzLjM1Mjc4ek0yMzcuMTU1MTcsMTg1Yy0wLjQ3NjExLDAgLTAuODYyMDcsLTAuMzg1OTYgLTAuODYyMDcsLTAuODYyMDd2LTguMjc1ODZjMCwtMC40NzYxMSAwLjM4NTk2LC0wLjg2MjA3IDAuODYyMDcsLTAuODYyMDdoNS42ODk2NmMwLjQ3NjExLDAgMC44NjIwNywwLjM4NTk2IDAuODYyMDcsMC44NjIwN3Y4LjI3NTg2YzAsMC40NzYxMSAtMC4zODU5NiwwLjg2MjA3IC0wLjg2MjA3LDAuODYyMDd6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L3N2Zz4=',
        color1: '#cd07f5',
        customTypes: ['dvImage'],
        blocks: [
          {
            opcode: 'blankImage',
            text: 'Blank [X]x[Y] Image',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            forceOutputType: 'dvImage',
            disableMonitor: true,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            }
          },
          {
            opcode: 'widthOf',
            text: 'Width Of [IMAGE]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              IMAGE: {
                shape: Scratch.BlockShape.SCRAPPED,
                check: ['dvImage'],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'heightOf',
            text: 'Height Of [IMAGE]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              IMAGE: {
                shape: Scratch.BlockShape.SCRAPPED,
                check: ['dvImage'],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'openCanvas',
            text: 'Open Canvas',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            forceOutputType: 'dvImage',
            disableMonitor: true
          },
          {
            opcode: 'dataurl',
            text: "Data URL Of[IMAGE]",
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              IMAGE: {
                shape: Scratch.BlockShape.SCRAPPED,
                check: ["dvImage"],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'fromdataurl',
            text: "From Data URL [URL]",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            forceOutputType: 'dvImage',
            disableMonitor: true,
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'settextureof',
            text: 'Set Texture Of [TARGET] To [IMAGE]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              TARGET: {
                shape: Scratch.BlockShape.OCTAGONAL,
                check: ["Target"],
                exemptFromNormalization: true
              },
              IMAGE: {
                shape: Scratch.BlockShape.SCRAPPED,
                check: ["dvImage"],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'textureof',
            text: 'Get Texture Of [TARGET]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            forceOutputType: 'dvImage',
            disableMonitor: true,
            arguments: {
              TARGET: {
                shape: Scratch.BlockShape.OCTAGONAL,
                check: ["Target"],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'removetextureof',
            text: 'Remove Texture Of [TARGET]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              TARGET: {
                shape: Scratch.BlockShape.OCTAGONAL,
                check: ["Target"],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'imgof',
            text: 'Get Image Of [COSTUME]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            forceOutputType: 'dvImage',
            disableMonitor: true,
            arguments: {
              COSTUME: {
                type: Scratch.ArgumentType.COSTUME
              }
            }
          },
          {
            opcode: 'getColorOfPixel',
            text: 'Get Color Of Pixel [VECTOR] Of [IMAGE]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              VECTOR: {
                shape: Scratch.BlockShape.LEAF,
                check: ["Vector"],
                exemptFromNormalization: true
              },
              IMAGE: {
                shape: Scratch.BlockShape.SCRAPPED,
                check: ["dvImage"],
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: 'setColorOfPixel',
            text: 'Set Color Of Pixel [VECTOR] Of [IMAGE] To [COLOR]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            disableMonitor: true,
            forceOutputType: 'dvImage',
            arguments: {
              VECTOR: {
                shape: Scratch.BlockShape.LEAF,
                check: ["Vector"],
                exemptFromNormalization: true
              },
              IMAGE: {
                shape: Scratch.BlockShape.SCRAPPED,
                check: ["dvImage"],
                exemptFromNormalization: true
              },
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#ff0000"
              }
            }
          }
        ]
      };
    }

    blankImage(args) {
      const width = Math.max(1, Math.floor(args.X));
      const height = Math.max(1, Math.floor(args.Y));

      const matrix = Array.from({ length: height }, () =>
        new Array(width).fill("#00000000")
      );

      return new Image(matrix, width, height);
    }

    widthOf(args) {
      return args.IMAGE?.x || 0;
    }

    heightOf(args) {
      return args.IMAGE.y
    }

    async openCanvas() {
      return new Promise(resolve => {
        const overlay = createElement("div", {
          position: "fixed",
          inset: "0",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        });

        const container = createElement("div", {
          background: "#fff",
          padding: "10px",
          borderRadius: "6px",
          fontFamily: "sans-serif"
        });

        overlay.appendChild(container);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 32;
        canvas.height = 32;
        Object.assign(canvas.style, {
          width: "256px",
          height: "256px",
          border: "2px solid black",
          imageRendering: "pixelated"
        });

        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = "#577bfb";

        const widthInput = document.createElement("input");
        widthInput.type = "number";
        widthInput.value = 32;
        widthInput.min = 1;
        widthInput.max = 256;

        const heightInput = document.createElement("input");
        heightInput.type = "number";
        heightInput.value = 32;
        heightInput.min = 1;
        heightInput.max = 256;

        widthInput.oninput = () => canvas.width = Math.floor(widthInput.value);
        heightInput.oninput = () => canvas.height = Math.floor(heightInput.value);
        let drawing = false;
        let erase = false;

        canvas.addEventListener("contextmenu", e => e.preventDefault());

        function paint(e) {
          const rect = canvas.getBoundingClientRect();
          const scaleX = canvas.width / rect.width;
          const scaleY = canvas.height / rect.height;

          const x = Math.floor((e.clientX - rect.left) * scaleX);
          const y = Math.floor((e.clientY - rect.top) * scaleY);

          if (erase) {
            ctx.clearRect(x, y, 1, 1);
          } else {
            ctx.fillStyle = colorInput.value;
            ctx.fillRect(x, y, 1, 1);
          }
        }

        canvas.addEventListener("mousedown", e => {
          drawing = true;
          erase = (e.button === 2);
          paint(e);
        });

        canvas.addEventListener("mousemove", e => {
          if (drawing) paint(e);
        });

        window.addEventListener("mouseup", () => drawing = false);
        const ok = document.createElement("button");
        ok.textContent = "OK";
        container.append(
          canvas,
          document.createElement("br"),
          colorInput,
          document.createTextNode(" Width "),
          widthInput,
          document.createTextNode(" Height "),
          heightInput,
          document.createElement("br"),
          document.createTextNode("Left click = draw | Right click = erase"),
          document.createElement("br"),
          ok
        );

        document.body.appendChild(overlay);
        ok.onclick = () => {
          const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
          const matrix = [];

          for (let y = 0; y < canvas.height; y++) {
            const row = [];
            for (let x = 0; x < canvas.width; x++) {
              const i = (y * canvas.width + x) * 4;
              row.push(rgbaToHex(data[i], data[i+1], data[i+2], data[i+3]));
            }
            matrix.push(row);
          }

          document.body.removeChild(overlay);
          resolve(new Image(matrix, canvas.width, canvas.height));
        };
      });
    }
    dataurl(args) {
      return args.IMAGE.toCanvas().toDataURL();
    }
    settextureof(args) {
      const Target = args.TARGET.target;
      const Renderer = vm.renderer;
      const skinId = Renderer.createBitmapSkin(args.IMAGE.toCanvas());
      Renderer.updateDrawableProperties(Target.drawableID, {skinId: skinId});
      textures[args.TARGET] = args.IMAGE
    }
    async imgof(args, util) {
      const Target = util.target;
      const Index = Target.getCostumeIndexByName(args.COSTUME);
      const Costume = Target.sprite.costumes[Index];
      const Img =  document.createElement('img');
      Img.src = Costume.asset.encodeDataURI();
      await new Promise(resolve => Img.onload = resolve);
      const Canvas = document.createElement('canvas');
      const Context = Canvas.getContext('2d');
      Canvas.width = Img.width;
      Canvas.height = Img.height;
      Context.drawImage(Img, 0, 0);
      const ImageData = Context.getImageData(0, 0, Canvas.width, Canvas.height).data;
      const Matrix = [];
      for (let y = 0; y < Canvas.height; y++) {
        const Row = [];
        for (let x = 0; x < Canvas.width; x++) {
          const i = (y * Canvas.width + x) * 4;
          const r = ImageData[i].toString(16).padStart(2, '0');
          const g = ImageData[i + 1].toString(16).padStart(2, '0');
          const b = ImageData[i + 2].toString(16).padStart(2, '0');
          const a = ImageData[i + 3].toString(16).padStart(2, '0');
          Row.push(`#${r}${g}${b}${a}`)
        }
        Matrix.push(Row);
      }
      return new Image(Matrix, Img.width, Img.height);
    }

    async fromdataurl(args) {
      const Img = document.createElement('img');
      Img.crossOrigin = "anonymous";
      Img.src = args.URL;
      await new Promise((resolve, reject) => {
        Img.onload = resolve;
        Img.onerror = reject;
      });
      const Canvas = document.createElement('canvas');
      const Context = Canvas.getContext('2d');
      Canvas.width = Img.width;
      Canvas.height = Img.height;
      Context.drawImage(Img, 0, 0);
      const ImageData = Context.getImageData(0, 0, Canvas.width, Canvas.height).data;
      const Matrix = [];
      for (let y = 0; y < Canvas.height; y++) {
        const Row = [];
        for (let x = 0; x < Canvas.width; x++) {
          const i = (y * Canvas.width + x) * 4;
          const r = ImageData[i].toString(16).padStart(2, '0');
          const g = ImageData[i + 1].toString(16).padStart(2, '0');
          const b = ImageData[i + 2].toString(16).padStart(2, '0');
          const a = ImageData[i + 3].toString(16).padStart(2, '0');
          Row.push(`#${r}${g}${b}${a}`)
        }
        Matrix.push(Row);
      }
      return new Image(Matrix, Canvas.width, Canvas.height);
    }

    getColorOfPixel(args) {
      const x = Math.floor(args.VECTOR.x);
      const y = Math.floor(args.VECTOR.y);
      const Matrix = args.IMAGE.color;
      return Matrix[y][x];
    }

    setColorOfPixel(args) {
      const x = Math.floor(args.VECTOR.x);
      const y = Math.floor(args.VECTOR.y);
      const Matrix = args.IMAGE.color;
      Matrix[y][x] = args.COLOR + "ff";
      return new Image(Matrix, args.IMAGE.x, args.IMAGE.y);
    }

    textureof(args) {
      return textures[args.TARGET];
    }

    removetextureof(args) {
      const Target = args.TARGET.target;
      const Renderer = vm.renderer;
      Target.updateAllDrawableProperties();
      delete textures[args.TARGET]
    }
  }

  Scratch.extensions.register(new ImagesExtension());

})(Scratch);