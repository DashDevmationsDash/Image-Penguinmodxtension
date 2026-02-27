## Disclaimer: This Extension Must Run Unsandboxed
# Images
A [Penguinmod](https://studio.penguinmod.com/editor.html) Extension That Lets You Create/Manipulate Images For Visual Stuff Idk Man

Blocks:
- [Image Givers](#image-givers)
  - [`(Blank(X)x(Y)Image)`](#blankxxyimage---image)
  - [`(Open Canvas)`](#open-canvas---image)
- [Image Proportions](#image-proportions)
  - [`(Width Of (IMAGE))`](#width-ofimage---number)
  - [`(Height Of(IMAGE))`](#height-ofimage---number)
- [Data Urls](#data-urls)
  - [`(Data URL Of(IMAGE)`](#data-url-ofimage---string)
  - [`(From Data Url(URL))`](#from-data-urlurl---string)
- [Visual](#visual)
  - [`Set Texture Of [TARGET] To [IMAGE]`](#set-texture-oftexturetoimage---command)

# Image Givers

## `(Blank(X)x(Y)image)` -> Image
![no img?](Asset/Block/blankimage.png)

Returns A Blank Image Of Width `(X)` And Height `(Y)`

## `(Open Canvas)` -> Image
![no img?](Asset/Block/openCanvas.png)

Shows A Canvas That Returns Thet Painted Image In The Canvas

# Image Proportions

## `Width Of(IMAGE)` -> Number
![no img?](Asset/Block/widthOf.png)

Gets The Width Of `(IMAGE)`

## `Height Of(IMAGE)` -> Number
![no img?](Asset/Block/heightOf.png)

Gets The Height Of The `(IMAGE)`

# Data Urls

## `(Data URL Of(IMAGE))` -> String
![no img?](Asset/Block/dataurl.png)

Gets The `(IMAGE)` As A Data URL

## `(From Data URL(URL)) -> Image`
![no img?](Asset/Block/fromdataurl.png)

Makes A New Image From The `(URL)`

# Visual

## `Set Texture Of(TARGET)To(IMAGE)` -> Command
![no img?](Asset/Block/settextureof.png)

Sets The Texture Of `(TARGET)` to `(IMAGE)`

## `Get Texture Of (TARGET)` -> Image
![no img?](Asset/Block/textureof.png)

Gets The Texture Of `(TARGET)` That Can Be Set By `Set Texture Of` Block

## `Remove Texture Of [TARGET]` -> Command
![no img?](Asset/Block/removetextureof.png)

Removes Any Textures Set To `(TARGET)`
