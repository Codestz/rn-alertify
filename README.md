# React Native Alertify

Introducing RN-Alertify, your go-to library for seamlessly integrating alert notifications into your React Native (RN) applications for both Android and iOS platforms. RN-Alertify simplifies the process of displaying alerts, ensuring a hassle-free experience for developers and users alike.

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [AlertProvider](#alertprovider)
    - [AlertProvider Props](#alertproviderprops)
  - [AlertContext](#alert-context)
    - [AlertContext Props](#alertcontextprops)
  - [AlertCommonProps](#alertcommonprops)
- [Customization](#customization)
  - [AlertThemeProps](#alertthemeprops)
  - [AlertThemeColors](#alertthemecolors)
  - [AlertThemeColorSet](#alertthemecolorset)
  - [AlertThemeFontSizes](#alertthemefontsizes)
  - [AlertThemeShadow](#alertthemeshadow)
  - [Customization Example](#customization-example)
- [API Methods](#api-methods)
  - [Show Alert](#showalert)
    - [Example](#example)
    - [Props](#showalert-props)
  - [Change Content](#changecontent)
    - [Example](#example-1)
    - [Props](#props-1)
  - [Set Loader](#setloader)
    - [Example](#example-2)
    - [Props](#props-2)
  - [On Close](#closealert)
  - [On Open](#openalert)
  - [IsShowing](#isshowing)
  - [IsLoading](#isloading)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Creator](#creator)
- [License](#license)

## Features

- **Flexible Alert Configuration:** Customize the appearance and behavior of alerts by leveraging a wide range of configuration options.
- **Title and Message:** Display informative titles and descriptive messages to provide context within the alerts.
- **Alert Types:** Choose from various pre-defined alert types, including success, error, info, and warning, to convey different levels of urgency or importance.
- **Duration Control:** Set the duration for which alerts will be displayed before automatically closing, ensuring optimal visibility and user experience.
- **Indicator Options:** Choose between different types of indicators, such as icons or progress bars, to visually enhance the alerts.
- **Custom Icons:** Add custom icon components or elements to further enhance the visual representation of alerts.
- **Interaction Callbacks:** Attach callback functions to handle user interactions, such as pressing or interacting with alerts.
- **Stay Open Option:** Configure alerts to stay open until explicitly closed by the user, allowing extended visibility for critical information.
- **Dismissible Alerts:** Enable alerts to be dismissed when pressed, providing users with control over their display.
- **Shadow Customization:** Customize the shadow color and other properties of alerts to match your application's design language.
- **Progress Bar:** Show a progress bar within alerts to indicate ongoing processes or tasks.
- **Loading Indicator:** Display a loading indicator within alerts to indicate activity or loading states.
- **Animation Modes:** Choose between different animation modes for the loading indicator, allowing for unique visual effects.
- **Swipable Alerts:** Enable swiping gestures to dismiss alerts, offering intuitive and convenient user interaction.
- **Background Customization:** Customize the alert background to match the alert type color or your preferred color scheme.
- **Hide After Loading:** Automatically hide alerts after completion of loading, streamlining the user experience.
- **Responsive Design:** Ensure optimal rendering across different devices.
- **React Native Safe Area Support:** Seamlessly integrate with the `react-native-safe-area-context` library to handle safe areas in your app, ensuring proper rendering across different devices.

These features provide extensive customization options and enhance the engagement and usability of `rn-alertify`, making it a powerful and versatile library for creating interactive and visually appealing alerts in your React Native applications.

## Demo

Coming Soon.

## Installation

You can install React Native Alertify using either Yarn or npm.

```bash
yarn add rn-alertify
```

or

```bash
npm install rn-alertify
```

## Usage

This library, `rn-alertify`, makes use of the `react-native-safe-area-context` library, which provides functionality for handling safe areas in React Native applications. We would like to acknowledge and give credit to the creators of `react-native-safe-area-context` for their valuable contribution to the React Native ecosystem.

If you find `react-native-safe-area-context` useful, we encourage you to visit the [official documentation](https://www.npmjs.com/package/react-native-safe-area-context) of `react-native-safe-area-context` to learn more about its features and usage. The creators have put in significant effort to develop and maintain this library, and your support and recognition are greatly appreciated.

If you dont have `react-native-safe-area-context` installed in your project, you can install it using either Yarn or npm.

```bash
yarn add react-native-safe-area-context
```

or

```bash
npm install react-native-safe-area-context
```

### AlertProvider

To use React Native Alertify, you need to wrap your app with the `AlertProvider` component, ensure that the `react-native-safe-area-context` library is installed, and that the `SafeAreaProvider` component wrap the `AlertProvider` component to work properly.

```jsx
import { AlertProvider } from 'rn-alertify';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AlertProvider>{/* Your app content here */}</AlertProvider>
    </SafeAreaProvider>
  );
};
```

## AlertProviderProps

The `AlertProvider` component accepts the following props:

| Property            | Type               | Description                                                                        | Default Value |
| ------------------- | ------------------ | ---------------------------------------------------------------------------------- | ------------- |
| children            | React.ReactNode    | The children components to be wrapped by the AlertProvider.                        | -             |
| theme               | `AlertTheme`       | The theme to be used by the AlertProvider.                                         | DefaultTheme  |
| useDeviceTheme      | boolean            | Property to set if the AlertProvider should take the theme from the mobile device. | false         |
| preferredAppearance | 'light' \| 'dark'  | Property to set the preferred appearance of the AlertProvider.                     | 'light'       |
| commonConfig        | `AlertCommonProps` | The common configuration to be used by the AlertProvider.                          | {}            |

After wrapping your app with `AlertProvider`, you can use the alert by accessing the context using the `useAlertContext` hook.

## AlertCommonProps

| Property             | Type                | Description                                                                   | Default Value |
| -------------------- | ------------------- | ----------------------------------------------------------------------------- | ------------- |
| duration             | number              | The duration (in milliseconds) for which the alert will be displayed.         | 3000ms        |
| showIndicator        | boolean             | Specifies whether to display the indicator (icon or bar) with the alert.      | true          |
| dismissible          | boolean             | Specifies if the alert should hide when pressed.                              | false         |
| shadowColorByType    | boolean             | Specifies if the shadow color should be the same as the alert type color.     | false         |
| loadingAnimationMode | string              | Specifies the animation mode of the loading indicator.                        | 'normal'      |
| swipeable            | boolean             | Specifies if the alert should be swipable to dismiss.                         | undefined     |
| backgroundByType     | boolean             | Specifies if the alert background should be the same as the alert type color. | false         |
| hideAfterLoading     | boolean             | Specifies if the alert should hide after loading.                             | false         |
| messageProps         | `AlertMessageProps` | Specifies the message properties of the alert.                                | undefined     |

## AlertMessageProps

| Property         | Type    | Description                                                       |
| ---------------- | ------- | ----------------------------------------------------------------- |
| disableMultiLine | boolean | Specifies if the message should be displayed as a single line.    |
| maxMessageLines  | number  | Specifies the maximum number of lines to display for the message. |

### Alert Context

```jsx
import { useAlertContext } from 'rn-alertify';

const MyComponent = () => {
  const { showAlert, onClose, onOpen, isShowing } = useAlertContext();

  return {
    /* Your app content here */
  };
};
```

## AlertContextProps

The `useAlertContext` hook provides the following props:

| Property      | Type                             | Description                                                                          |
| ------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| showAlert     | `(params: AlertProps) => void`   | Displays an alert with the specified properties.                                     |
| onClose       | `(callback: () => void) => void` | Executes a callback when the alert changes its state to closed.                      |
| onOpen        | `(callback: () => void) => void` | Executes a callback when the alert changes its state to open.                        |
| setLoader     | `(value: boolean) => void`       | Triggers the loader based on the provided boolean value.                             |
| isShowing     | boolean                          | Returns the current state of the alert.                                              |
| isLoading     | boolean                          | Returns the current state of the loader.                                             |
| changeContent | `(params: AlertProps) => void`   | Changes the content of the alert based on the provided properties after some action. |

If you want to see more information and examples about each of these props, please refer to the [API Methods](#api-methods) section.

## Customization

The `AlertProvider` component allows users to customize the theme by providing a custom theme object of type `AlertTheme`.

### AlertThemeProps

The `AlertThemeProps` object consists of the following properties:

| Property  | Type                  | Description                                       |
| --------- | --------------------- | ------------------------------------------------- |
| colors    | `AlertThemeColors`    | Color values for different elements in the alert. |
| fontSizes | `AlertThemeFontSizes` | Font-related properties for the alert.            |

### AlertThemeColors

The `AlertThemeColors` object defines color values for various parts of the alert:

| Property | Type                 | Description                 |
| -------- | -------------------- | --------------------------- |
| light    | `AlertThemeColorSet` | Colors for the light theme. |
| dark     | `AlertThemeColorSet` | Colors for the dark theme.  |

### AlertThemeColorSet

The `AlertThemeColorSet` object defines color values for a specific theme (light or dark):

| Property         | Type               | Description                         |
| ---------------- | ------------------ | ----------------------------------- |
| backgroundColor  | string             | Background color of the alert.      |
| success          | string             | Color for success-themed alerts.    |
| error            | string             | Color for error-themed alerts.      |
| info             | string             | Color for info-themed alerts.       |
| warning          | string             | Color for warning-themed alerts.    |
| titleColor       | string             | Color for the title text.           |
| messageColor     | string             | Color for the message text.         |
| shadow           | `AlertThemeShadow` | Shadow configuration for the alert. |
| loadingIconColor | string             | Color for the loading icon.         |

### AlertThemeFontSizes

The `AlertThemeFontSizes` object specifies font-related properties for the alert:

| Property        | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| fontSizeTitle   | number | Font size for the title text.        |
| fontSizeMessage | number | Font size for the message text.      |
| fontFamily      | string | Font family to be used in the alert. |

### AlertThemeShadow

The `AlertThemeShadow` object defines properties related to the shadow effect of the alert:

| Property      | Type                              | Description                                        |
| ------------- | --------------------------------- | -------------------------------------------------- |
| shadowColor   | string                            | Color of the shadow.                               |
| shadowOpacity | number                            | Opacity of the shadow.                             |
| shadowOffset  | { width: number, height: number } | Offset of the shadow.                              |
| shadowRadius  | number                            | Radius of the shadow.                              |
| elevation     | number                            | Elevation value for the shadow (Android specific). |

By providing a custom theme object that conforms to the `AlertTheme` interface, users can customize the colors, font sizes, and other visual aspects of the alert component to match their application's design and branding.

## Customization Example

To customize the theme of the `AlertProvider`, you can provide a custom theme object of type `AlertTheme`. Here's an example of how you can define a custom theme:

```tsx
import { AlertProvider, AlertTheme } from 'rn-alertify';

const customTheme: AlertTheme = {
  colors: {
    light: {
      backgroundColor: '#F5F5F5',
      success: '#008000',
      error: '#FF0000',
      info: '#0000FF',
      warning: '#FFA500',
      titleColor: '#333333',
      messageColor: '#666666',
      shadow: {
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
      },
      loadingIconColor: '#555555',
    },
    dark: {
      backgroundColor: '#222222',
      success: '#00FF00',
      error: '#FF0000',
      info: '#FFFFFF',
      warning: '#FFA500',
      titleColor: '#FFFFFF',
      messageColor: '#CCCCCC',
      shadow: {
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowRadius: 6,
        elevation: 6,
      },
      loadingIconColor: '#CCCCCC',
    },
  },
  fontSizes: {
    fontSizeTitle: 18,
    fontSizeMessage: 14,
    fontFamily: 'Roboto',
  },
};

const App = () => {
  return (
    <AlertProvider theme={customTheme}>
      {/* Your app components */}
    </AlertProvider>
  );
};

export default App;
```

In this example, we define a custom theme object `customTheme` with color values and font-related properties for both the light and dark themes. You can adjust the color values, font sizes, and other properties according to your preferences. Then, you can wrap your app components with the `AlertProvider` component and provide the `theme` prop with your custom theme object.

By using a custom theme, you can ensure that the alerts rendered by `rn-alertify` align with your application's design and branding.

## API Methods

### showAlert

The `showAlert` method displays an alert with the specified properties.

### Example

```jsx
import { useAlertContext } from 'rn-alertify';

const MyComponent = () => {
  const { showAlert } = useAlertContext();

  const handleButtonPress = () => {
    showAlert({
      title: 'Hello',
      message: 'Welcome to React Native Alertify!',
      type: 'success',
      duration: 3000,
    });
  };

  return <Button title="Show Alert" onPress={handleButtonPress} />;
};
```

### ShowAlert Props

| Property             | Type                                                       | Description                                                                    | Default Value |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------- |
| title                | string                                                     | The title of the alert.                                                        | -             |
| message              | string                                                     | The message content of the alert.                                              | -             |
| type                 | `AlertType` \| 'success' \| 'error' \| 'info' \| 'warning' | The type of the alert.                                                         | 'success'     |
| duration             | number                                                     | The duration (in milliseconds) for which the alert will be displayed.          | 3000ms        |
| indicatorType        | `AlertIndicatorType` \| 'icon' \| 'bar'                    | The type of indicator to display with the alert.                               | 'icon'        |
| icon                 | React.ReactNode                                            | The custom icon component or element to display with the alert.                | null          |
| showIndicator        | boolean                                                    | Specifies whether to display the indicator (icon or bar) with the alert.       | true          |
| onPress              | () => void                                                 | A callback function to be called when the alert is pressed or interacted with. | null          |
| stayOpen             | boolean                                                    | Specifies if the alert should stay open until the user closes it.              | false         |
| dismissible          | boolean                                                    | Specifies if the alert should hide when pressed.                               | false         |
| shadowColorByType    | boolean                                                    | Specifies if the shadow color should be the same as the alert type color.      | false         |
| showProgress         | boolean                                                    | Specifies if the alert should show a progress bar.                             | false         |
| progressColor        | string                                                     | Specifies the color of the progress bar.                                       | -             |
| loadingAnimationMode | 'normal' \| 'divided'                                      | Specifies the animation mode of the loading indicator.                         | 'normal'      |
| swipeable            | boolean                                                    | Specifies if the alert should be swipable to dismiss.                          | false         |
| backgroundByType     | boolean                                                    | Specifies if the alert background should be the same as the alert type color.  | false         |
| hideAfterLoading     | boolean                                                    | Specifies if the alert should hide after loading.                              | false         |
| messageProps         | `AlertMessageProps`                                        | Specifies the message properties of the alert.                                 | undefined     |

### changeContent

The `changeContent` method allows you to change the content of the alert.

### Example

```tsx
const { showAlert, isShowing, setLoader, isLoading, changeContent } =
  useAlertContext();
const simulateAsync = (number: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      number > 0.5 ? resolve(true) : reject();
    }, 2000);
  });
};

const handleClick = async () => {
  const random = Math.random();
  setLoader(true);
  showAlert({
    title: 'Loading',
    message: 'Please wait...',
  });
  try {
    await simulateAsync(random);
    setLoader(false);
    changeContent({
      title: 'Success',
      message: 'You have successfully loaded the alert',
      type: 'success',
    });
  } catch (e) {
    setLoader(false);
    changeContent({
      title: 'Error',
      message: 'Something went wrong',
      type: 'error',
    });
  }
};
```

### Props

The `changeContent` method accepts the same props as the `showAlert` method, see the [ShowAlert Props](#showalert-props) section for more details.

### setLoader

The `setLoader` method allows you to handle the loading state of the alert.

### Example

```tsx
const { showAlert, isShowing, setLoader, isLoading } = useAlertContext();
const simulateAsync = (number: number) => {
  setLoader(true);
  showAlert({
    title: 'Loading',
    message: 'Please wait...',
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      number > 0.5 ? resolve(true) : reject();
    }, 2000);
  });
  setLoader(false);
};

React.useEffect(() => {
  const random = Math.random();
  simulateAsync(random);
}, []);
```

### Props

| Property | Default Value | Type    | Description                                             |
| -------- | ------------- | ------- | ------------------------------------------------------- |
| value    | false         | boolean | Specifies if the alert should show a loading indicator. |

### onClose

**Note: The `onClose` method is under development and may cause problems. Use it with caution.**

The `onClose` method allows you to register a callback function to be called when the alert's state changes to closed.

```typescript
onClose(callback: () => void): void;
```

Use this function if you want to perform certain actions when the alert's state changes to closed.

**Example:**

```typescript
onClose(() => {
  // Your code here
});
```

### onOpen

**Note: The `onOpen` method is under development and may cause problems. Use it with caution.**

The `onOpen` method allows you to register a callback function to be called when the alert's state changes to open.

```typescript
onOpen(callback: () => void): void;
```

Use this function if you want to perform certain actions when the alert's state changes to open.

**Example:**

```typescript
onOpen(() => {
  // Your code here
});
```

### isShowing

The `isShowing` property returns the current state of the alert.

```typescript
isShowing: boolean;
```

You can use this property to check if the alert is currently being displayed.

```typescript
if (isShowing) {
  // Alert is showing
} else {
  // Alert is not showing
}
```

### isLoading

The `isLoading` property returns the current loading state of the alert.

```typescript
isLoading: boolean;
```

You can use this property to check if the alert is currently loading.

```typescript
if (isLoading) {
  // Alert is loading
} else {
  // Alert is not loading
}
```

Please note that the `onClose` and `onOpen` methods are still under development and may have limitations or issues. Use them with caution and make sure to test thoroughly in your application.

If you find any issues with the library, please [create an issue](https://github.com/Codest-x/rn-alertify/issues/new), specifying the problem and how to reproduce it, if is possible upload a screenshot or video of the issue.

I'll try to fix it as soon as possible.

Certainly! Here's an example of a "Contributing" section for your README:

## Contributing

Thank you for considering contributing to the React Native Alertify library! We welcome any contributions that help improve the library and provide a better experience for users. To contribute, please follow these guidelines:

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

We appreciate your contributions and will review the pull request as soon as possible. Together, let's make React Native Alertify even better!

## Creator

This library was created by [Esteban Estrada](https://www.linkedin.com/in/esteban-estrada/), a passionate developer who loves to learn new technologies and build cool things.

<img src="https://scontent.feoh11-1.fna.fbcdn.net/v/t39.30808-6/348581216_200349392888581_4569084286294128402_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFVFKe96ckfA9M1czJWI7OqmpNwRRjjhPSak3BFGOOE9Oqy8NUQql_VUwLx4bOnoX8kxl_tXtpAIM5QbPNa1WCz&_nc_ohc=pd8N8-D6iYcAX8ccxdY&_nc_ht=scontent.feoh11-1.fna&oh=00_AfByWxV0LQe25RKhBd84eGpI6toMPmosDux80cnyffhHmw&oe=6487F962" alt="Esteban Estrada" width="400" height="400">

Esteban Estrada is an experienced full stack developer. He is passionate about creating efficient and user-friendly solutions for developers. This library, `rn-alertify`, is one of his contributions to the React Native community.

You can connect with Esteban Estrada on [LinkedIn](https://www.linkedin.com/in/esteban-estrada/) and [GitHub](https://github.com/Codest-x) to learn more about his work and other projects.

Feel free to reach out to Esteban Estrada with any questions, feedback, or suggestions related to `rn-alertify`.

## License

This library is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this library for personal or commercial purposes. However, it would be greatly appreciated if you provide support to the creator by giving credit and acknowledging their contribution.

Remember to follow the best practices and guidelines while using this library. If you encounter any issues or have suggestions for improvements, feel free to contribute to the repository or reach out to the creator for support.

By using `rn-alertify`, you agree to comply with the terms and conditions of the MIT License.

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
