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
  - [`(From Data Url(URL))`](#from-data-urlurl---image)
- [Visual](#visual)
  - [`Set Texture Of [TARGET] To [IMAGE]`](#set-texture-oftexturetoimage---command)
  - [`(Get Texture Of[TARGET])`](#get-texture-of-targe---image)
  - [`Remove Texture Of[TARGET]`](#remove-texture-of-target---command)
  - [`(Get Image Of(COSTUME))`](#get-image-ofcostume--image)
  - [`(Is(TARGET)Using A Texture)`](#istargetusing-a-texture---boolean)
  - [`(Costumes Of(TARGET))`](#costumes-oftarget---array)
- [Pixel Manipulation](#pixel-manipulation)
  - [`(Get Color Of Pixel(VECTOR)In(IMAGE))`](#set-texture-oftexturetoimage---command)
  - [`(Set Color Of Pixel(VECTOR)Of(IMAGE)To(COLOR))`](#set-color-of-pixelvectorofimagetocolor---image)
  - [`(Get Average Pixel Of(IMAGE))`](#get-average-pixel-ofimage---string)
  - [`(Pixels Of (IMAGE))`](#pixels-ofimage---array)
  - [`(From Pixels(ARRAY))`](#from-pixelsarray---image)
- [Image Effects](#image-effects)
  - [`(Invert(IMAGE))`](#invertimage---image)
  - [`(Brighten(IMAGE)By(OFFSET))`](#brightenimagebyoffset---image)
  - [`(Rotate(IMAGE)By(ANGLE))`](#rotateimagebyangle---image)
  - [`(Scale(IMAGE)By(VECTOR))`](#scaleimagebyvector---image)
  - [`(Change Transparency Of(IMAGE)By(OFFSET))`](#change-transparency-ofimagebyoffset---image)
  - [`(Tint(IMAGE)Color(COLOR))`](#tintimsgecolorcolor---image)
  - [`(Crop(IMAGE)At(V1)(V2))`](#cropimageatv1v2---image)
  - [`(Horizontally Flip(IMAGE))`](#horizontally-flipimage---image)
  - [`(Vertically Flip(IMAGE))`](#vertically-flipimage---image)
- [Image Mixxing](#image-mixxing)
   - [`((A) HSV Mix (B))`](#a-hsv-mix-b---image)
   - [`((A) RGB Mix (B))`](#a-rgb-mix-b---image)

# Image Givers

## `(Blank(X)x(Y)image)` -> Image
![no img?](Asset/Blocks/blankimage.png)

Returns A Blank Image Of Width `(X)` And Height `(Y)`

## `(Open Canvas)` -> Image
![no img?](Asset/Blocks/openCanvas)

Shows A Canvas That Returns Thet Painted Image In The Canvas

# Image Proportions

## `(Width Of(IMAGE))` -> Number
![no img?](Asset/Blocks/widthOf.png)

Gets The Width Of `(IMAGE)`

## `(Height Of(IMAGE))` -> Number
![no img?](Asset/Blocks/heightOf.png)

Gets The Height Of The `(IMAGE)`

# Data Urls

## `(Data URL Of(IMAGE))` -> String
![no img?](Asset/Blocks/dataurl.png)

Gets The `(IMAGE)` As A Data URL

## `(From Data URL(URL)) -> Image`
![no img?](Asset/Blocks/fromdataurl.png)

Makes A New Image From The `(URL)`

# Visual

## `Set Texture Of(TARGET)To(IMAGE)` -> Command
![no img?](Asset/Blocks/settextureof.png)

Sets The Texture Of `(TARGET)` to `(IMAGE)`

## `(Get Texture Of (TARGET))` -> Image
![no img?](Asset/Blocks/textureof.png)

Gets The Texture Of `(TARGET)` That Can Be Set By `Set Texture Of` Block

## `Remove Texture Of(TARGET)` -> Command
![no img?](Asset/Blocks/removetextureof.png)

Removes Any Textures Set To `(TARGET)`

## `(Is(TARGET)Using A Texture)` -> Boolean
![no img?](Asset/Blocks/isusingtexture.png)

Checks If The Target `(TARGET)` Is Using A Texture Set by The `Set Texture Of` Block

## `(Costumes Of(TARGET))` -> Array
![no img?](Asset/Blocks/costumesof.png)

Returns A Array Of All Costumes Of `(TARGET)` As Images

## `(Get Image Of(COSTUME))` -> Image
![no img?](Asset/Blocks/imgof.png)

Gets The `(COSTUME)` As A Image

# Pixel Manipulation

## `(Get Color Of Pixel(VECTOR)In(IMAGE))` -> String
![no img?](Asset/Blocks/getColorOfPixel.png)

Gets The Pixel On Location `(VECTOR)` In `(IMAGE)` (Top Left Is `(1,1)`)

## `(Set Color Of Pixel(VECTOR)Of(IMAGE)To(COLOR))` -> Image
![no img?](Asset/Blocks/setColorOfPixel.png)

Creates A New Image Thats `(IMAGE)` But The Color At Pixel `(VECTOR)` Is Set To `(COLOR)` (Same Logic As Before)

## `(Get Average Pixel Of(IMAGE))` -> String
![no img?](Asset/Blocks/averagepixelcolor.png)

It Gets The Average Color Of `(IMAGE)` As A Hex Color

## `(Pixels Of(IMAGE))` -> Array
![no img?](Asset/Blocks/pixels.png)

Gets An Array Of All The Pixels Of `(IMAGE)`

## `(From Pixels(ARRAY))` -> Image
![no img?](Asset/Blocks/frompixels.png)

Makes A New Image From Pixels `(ARRAY)`

# Image Effects

## `(Invert(IMAGE))` -> Image
![no img?](Asset/Blocks/invert.png)

Inverts The Colors Of `(IMAGE)`

## `(Brighten(IMAGE)By(OFFSET))` -> Image
![no img?](Asset/Blocks/brighten.png)

Brightens `(IMAGE)` By `(OFFSET)` That Goes From 0-255

## `(Rotate(IMAGE)By(ANGLE))` -> Image
![no img?](Asset/Blocks/rotate.png)

It Returns A Version Of ´(IMAGE)´ Rotated ´(ANGlE)´ Degreens In Radians

## `(Scale(IMAGE)By(VECTOR))` -> Image
![no img?](Asset/Blocks/scale.png)

Scales `(IMAGE)` Horizontally By `(VECTOR)`'s x Axis And Vertically By `(VECTOR)`'s y Axis

## `(Change Transparency Of(IMAGE)By(OFFSET))` -> Image
![no img?](Asset/Blocks/transparency.png)
Changes The Transparency Of `(IMAGE)` By `(OFFSET)` That Also Goes From 0-255

## `(Tint(IMAGE)Color(COLOR))` -> Image
![no img?](Asset/Blocks/tint.png)

It Returns A Version Of `(IMAGE)` That's Just Has The Color `(COLOR)`

## `(Crop(IMAGE)At(V1)(V2))` -> Image
![no img?](Asset/Blocks/crop.png)

Crops `(IMAGE)` Were It Starts At `(V1)` And Ends At `(V2)` (Same Logic As In The Pixel Manipulation Blocks)

## `(Horizontally Flip(IMAGE))` -> Image
![no img?](Asset/Blocks/horizontalyflip.png)

Returns A Version Of `(IMAGE)` Horizontally Flipped

## `(Vertically Flip(IMAGE))` -> Image
![no img?](Asset/Blocks/verticalflip.png)

Returns A Version Of `(IMAGE)` Vertically Flipped

# Image Mixxing

## `((A) HSV Mix (B))` -> Image
![no img?](Asset/Blocks/hsvmix.png)

Returns A Image Where It Gets All Pixels Of `(A)` And `(B)` And Gets The Average Of Their Hue, Saturation, And Value

## `((A) RGB Mix (B))` -> Image
![no img?](Asset/Blocks/rgbmix.png)

Returns A Image Where It Gets All Pixels Of `(A)` And `(B)` And Gets The Average Of Their Red, Green, And Blue
