Setup environment:

- Run `npm install`
- Download and install the Android SDK from the official website.
- Extract the `.zip`. You will see the `android-studio` folder.
- Move it to your `home` directory
- Set the environment variable in your fish or bash terminal: `export ANDROID_HOME=$HOME/Android/Sdk; export PATH=$PATH:$ANDROID_HOME/tools`
- Run `~/android-studio/bin/studio.sh` to open Android Studio
- Install android tools and updates
- Create the `local.properties` file on your `android/` directory
- Run `~/Android/Sdk/tools/bin/sdkmanager --licenses` and accept the licenses
- Install the following libraries:
  - sudo apt-get install lib32z1
  - sudo apt-get install zlib1g:i386
- Go again to Android Studio. Create a new project. Inside, create a new AVD (Download the Android OS image as well)
- Run `react-native run-android`
- Create a fish alias to run: `~/Android/Sdk/tools/emulator`
- Run `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
- Run `emulator @NAME_OF_YOUR_DEVICE`
- Happy Develop!
