- Go to https://console.firebase.google.com and create a new firebase project.
- Copy all settings to both environment file settings under firebase property.
  eg: export const environment = {
        production: true,
        firebase: {
          apiKey: 'AIzaSyD4ysZRO5pqEgiaUsg2z4GtAjxZry4Uu1M',
          authDomain: 'oshop-2fe8c.firebaseapp.com',
          databaseURL: 'https://oshop-2fe8c.firebaseio.com',
          projectId: 'oshop-2fe8c',
          storageBucket: 'oshop-2fe8c.appspot.com',
          messagingSenderId: '781912959720'
        }
      };

- npm install --save firebase@4.2.0 angularfire2@4.0.0-rc.1
- npm install --save bootstrap
-

- User ngBootstrap for getting the Bootstrap 4 components powered by Angular

- To deploy :
  1. Install firebase tools
  2. Init firebase
  3. ng build --prod
  4. firebase deploy
