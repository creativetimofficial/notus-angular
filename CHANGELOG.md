# Change Log

## [1.1.0] date
### Bug fixing
- Rename `master` branch to `main`
- To make a lot of our changes, we've followed the instructions from here (minus the `colors` and `font-sizes`)
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-gray-{number}` classes were renamed to `{type}-coolGray-{number}`
  - After that, we've changed `{type}-coolGray-{number}` to `{type}-coolGray-{lower-number}`, i.e. (`100` became `50`, `200` became `100`, ..., `900` became `800`)
    - You can achieve this, by search in your whole project for `coolGray-100` and replace it with `coolGray-50`
    - Then, you search in your whole project for `coolGray-200` and replace it with `coolGray-100`
    - Then, you search in your whole project for `coolGray-300` and replace it with `coolGray-200`
    - Then, you search in your whole project for `coolGray-400` and replace it with `coolGray-300`
    - Then, you search in your whole project for `coolGray-500` and replace it with `coolGray-400`
    - Then, you search in your whole project for `coolGray-600` and replace it with `coolGray-500`
    - Then, you search in your whole project for `coolGray-700` and replace it with `coolGray-600`
    - Then, you search in your whole project for `coolGray-800` and replace it with `coolGray-700`
    - Then, you search in your whole project for `coolGray-900` and replace it with `coolGray-800`
- `lg:bg-transparent` is not working anymore, so we've changed it with `lg:bg-opacity-0`
### Major style changes

### Deleted components

### Added components

### Deleted dependencies
- `@tailwindcss/custom-forms`
### Added dependencies
- `@tailwindcss/forms` (replaces `@tailwindcss/custom-forms`)
### Updated dependencies
```
@angular/animations                   10.1.2   →     11.2.5
@angular/common                       10.1.2   →     11.2.5
@angular/compiler                     10.1.2   →     11.2.5
@angular/core                         10.1.2   →     11.2.5
@angular/forms                        10.1.2   →     11.2.5
@angular/platform-browser             10.1.2   →     11.2.5
@angular/platform-browser-dynamic     10.1.2   →     11.2.5
@angular/router                       10.1.2   →     11.2.5
@fortawesome/fontawesome-free         5.14.0   →     5.15.3
@popperjs/core                         2.5.1   →      2.9.1
chart.js                               2.9.3   →      2.9.4
rxjs                                   6.6.3   →      6.6.6
tailwindcss                           1.8.10   →      2.0.3
tslib                                  2.0.1   →      2.1.0
zone.js                               0.10.3   →     0.11.4
@angular-devkit/build-angular       0.1001.2   →   0.1102.4
@angular/cli                          10.1.2   →     11.2.4
@angular/compiler-cli                 10.1.2   →     11.2.5
@angular/language-service             10.1.2   →     11.2.5
@types/jasmine                        3.5.14   →      3.6.6
@types/node                          14.11.2   →   14.14.35
codelyzer                              6.0.0   →      6.0.1
karma                                  5.2.2   →      6.2.0
ts-node                                9.0.0   →      9.1.1
typescript                             4.0.3   →      4.1.5
```
### Warning
_On a clean install there may be some warnings from request, chokidar, fsevents - they come from node_modules, and they do not affect the product at all._

## [1.0.0] 2020-09-29
### Original Release
- Started project from [Tailwind Starter Kit by Creative Tim](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=na-changelog)
- Added design from Tailwind Starter Kit by Creative Tim
