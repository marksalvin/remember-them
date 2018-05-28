# Remember Them

## TODO

- Fix typography ✅
- Rename components? ✅
- Sort out title stuff and using correct template for each route in native ✅
- Can card go full screen on native or should actions move to header? ✅
- Native app ✅
- Fix roboto font error on toasts (Android only) ✅
- Build native app and deploy to phone (fastlane, expo, etc) ✅
- Export app strings to constants file or language file ✅
- Loading component (web app)
- Deploy web app
- Export to ... (text)
- Use render item for rendering native list (iterator)
- Fix styling on web app (inline with native and remove unused styles)
- Upgrade webpack to v4
- Create screenshots folder
- Implement basic tests around redux using jest runner
- Use native theme variables for colors?
- Break molecules down in atoms?
- Redux time travel for undo delete and edit?
- React router material style transitions - https://marmelab.com/blog/2017/12/04/material-design-animations-react-router.html
- Implement service worker
- Implement i18n
- Replace instances of link with withRouter?
- Webdriver tests (how do react native tests work?)

---

## 🚀 Getting Started

#### 1. Clone and Install

_*It's recommended that you install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases)._

```bash
# Clone the repo
git clone [repo]

# Install dependencies
npm i
```

#### 2.1. Run the _React Native_ App

```bash
# Start the React Native packager
npm start
```

Instructions are shown in the terminal. You can select to open it in:

- An emulator (either iOS or Android)
- Your mobile device with the [Expo app](https://expo.io/). It will reload if you save edits to your files and you will see build errors and logs in the terminal.

#### 2.2. Run the _Web_ App

```bash
# Starts are local live-reload server at:
# http://localhost:3001
npm run web
```

Via webpack, starts a localhost server on port 3001 [http://localhost:3001](http://localhost:3001).

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux

---
