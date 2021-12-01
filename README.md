# Uni Localization demo for Vue.js 2.x

Check out demo [here](https://uiwebkit.github.io/vue-loco-2.x/)

Check out our docs [here](https://uiwebkit.com/wgt/loc/1)

### Add to main.js

```js
Vue.config.ignoredElements = [/uni-\w*/];
```

### Add to index.html

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/icn@1.1.1/dist/icn/icn.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/mat@1.2.1/dist/mat.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/udk@1.3.3/dist/udk.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/loc@1.1.5/dist/loc/loc.esm.js"></script>
```

#### for the newest features add this instead the previous one

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/flag@0.0.1/dist/flag/flag.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/mat@2.0.0-1/dist/mat.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/udk@2.0.0-0/dist/udk.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/loc@2.0.0-1/dist/loc/loc.esm.js"></script>
```

#### to support Internet Explorer

```html
<script nomodule src="https://cdn.jsdelivr.net/npm/@uiwebkit/icn@latest/dist/icn/icn.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@uiwebkit/mat@latest/dist/mat.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@uiwebkit/udk@latest/dist/udk.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@uiwebkit/loc@latest/dist/loc/loc.js"></script>
```

#### Place Uni Language Menu into the header of your web app. Specify the path to the language list JSON file (ex. lang-menu.json) or backend API endpoint

```html
<uni-router shadow></uni-router>
<uni-lang-menu-shadow mini round routing list="lang-menu.json"></uni-lang-menu-shadow>
```

#### Wrap your content with Uni Translate globally (for more convenience)

```html
<uni-translate><ContentComponent/></uni-translate>
```

#### or wrap your text content with Uni Translate locally (for the better performance)

```html
<uni-translate>localized content</uni-translate>
```

#### override default bindings `{{` and `}}` for partial translation

```html
<uni-translate bind-start="${" bind-end="}">text and ${partially localized}</uni-translate>
```

#### localize even attributes

```html
<uni-translate bind-start="${" bind-end="}"><a href="https://your_domain/${localized}">link</a></uni-translate>
```

### See and modify ./public/lang-menu.json and translation files into ./public/i18n/ folder
