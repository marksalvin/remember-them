# Remember Them

## About

- React native + web app for saving personal details of others.
- Single state management for both React native and web apps using redux.
- Redux within src/state directory, following re-ducks pattern.
- Shared container components in src/component/containers.
- React Native and React web components separated in src/components/native and src/components/web respectively.
- Components following Atomic Design principles.

## Store links

[Google Play](https://play.google.com/store/apps/details?id=com.rememberthem.rememberthem&hl=en).

## TODO

- Loading component (web app)
- Consider placing native and web components side by side
- Deploy web app (infrastructure using Terraform)
- Export to ... (text)
- Use render item for rendering native list (iterator)
- Fix styling on web app (inline with native and remove unused styles)
- Use native theme variables for colors?
- Break molecules down into atoms?
- Redux time travel for undo delete and edit?
- React router material style transitions - https://marmelab.com/blog/2017/12/04/material-design-animations-react-router.html
- Implement service worker
- Replace instances of link with withRouter?
- Cypress tests (for react native too)

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
