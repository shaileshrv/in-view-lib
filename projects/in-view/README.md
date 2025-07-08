# ngx-in-view

> 🔍 Angular directive to detect when an element enters the viewport using `IntersectionObserver`. Add animation classes or trigger callbacks with ease.

![npm](https://img.shields.io/npm/v/ngx-in-view)
![downloads](https://img.shields.io/npm/dw/ngx-in-view)
![license](https://img.shields.io/npm/l/ngx-in-view)

---

## ✨ Features

- 🔁 Automatically detect when an element comes into view
- 🎨 Add CSS animation classes
- 🔔 Trigger callbacks via `(inView)` event
- ⚙️ Configurable threshold and trigger behavior
- 🧩 Works great with lazy-loading and animation libraries like Animate.css or GSAP

---

## 📦 Installation

```bash
npm install ngx-in-view

## 🧰 Parameters

| Parameter         | Type                    | Default  | Description                                                                 |
|-------------------|-------------------------|----------|-----------------------------------------------------------------------------|
| `appInView`       | `string`                | `''`     | (Optional) Space-separated CSS classes to apply when element is in view     |
| `threshold`       | `number`                | `0.1`    | (Optional) Visibility ratio (0 to 1) required to trigger the directive       |
| `triggerOnce`     | `boolean`               | `true`   | (Optional) If true, the directive triggers only once                        |
| `(inView)`        | `EventEmitter<void>`    | —        | Emits when the element becomes visible in the viewport                      |


## Example

<div
  [appInView]="'fade-in bounce'"
  [threshold]="0.3"
  [triggerOnce]="true"
>
  This will animate when it appears in the viewport!
</div>