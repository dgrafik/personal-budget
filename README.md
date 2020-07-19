# Personal Budget App

## Backend

### Install
```
cd backend
pip install -e .
```

### Run server in development mode
```
FLASK_ENV=development start-app
```

### Run tests
```
python setup.py test
```

## Frontend


### Install
```
cd frontend
npm install
```

### Run dev server
```
npm start
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Run tests
```
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Production build
```
npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!
