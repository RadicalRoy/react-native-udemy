# react-native-udemy

Note that blog project depends on running jsonserver.
Must update ngrok url in blog/api file for every run.
Must execute npm run db in separate terminal
url can be obtained from terminal output in running npm run tunnel from jsonserver project

## Track App and Track Server

To run track app, must have track-server running on port 3000.

Additionally the track app will send requests to the server through an ngrok url specified in src/api/tracker. This url serves as a consistent tunnel for sending requests using devices or emulators.
To create ngrok url run `npx ngrok http --log=stdout 3000` from the tracks project (if using global install then `ngrok http 3000`).

`npm start -c` should start the app once

### Mocking movement

The tracker app uses a mock function to test movement during development. This can be toggled at the top of TrackCreateScreen by (un)commenting the import.

### Bugs

- Currently the app will stop tracking location while phone is dark or on another app. Likely due to tracking depending on whether the TrackCreateScreen isFocused. Should remove this condition.
