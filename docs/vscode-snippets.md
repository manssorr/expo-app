### A snippit for whole component

```json
{
  "React Native TS Org Component Template": {
    "prefix": "_rnfosc",
    "body": [
      "// ** Core Packages",
      "import {StyleSheet, Text, View} from 'react-native';",
      "",
      "// **** Assets ****",
      "// ** import icons",
      "",
      "// ** import assets",
      "",
      "// ** import third party",
      "",
      "// ** import shared components",
      "",
      "// ** import specific components",
      "",
      "// ** import sub pages/sections",
      "",
      "// ** import config",
      "",
      "// ** import state manager",
      "",
      "// ** import utils",
      "",
      "// ** import hooks",
      "",
      "// ** import apis",
      "",
      "// ** import/local types",
      "",
      "interface IProps {}",
      "",
      "// ** local constants",
      "",
      "const ${1:${TM_FILENAME_BASE}} = (props: IProps): React.ReactElement<IProps> => {",
      "  // ** Props",
      "  // Constants props",
      "  ",
      "  // Dynamic props",
      "  ",
      "  // ** Constants",
      "  ",
      "  // ** Redux State",
      "  ",
      "  // ** Local State",
      "  ",
      "  // ** useEffect",
      "  ",
      "  // ** Custom hooks",
      "  ",
      "  // ** Event Handlers",
      "  ",
      "  // ** Operations",
      "  ",
      "  return (",
      "    <View>",
      "      <Text>${1:${TM_FILENAME_BASE}}</Text>",
      "    </View>",
      "  );",
      "};",
      "",
      "export default ${1:${TM_FILENAME_BASE}};",
      "",
      "const styles = StyleSheet.create({});",
      ""
    ],
    "description": "Creates a React Native organized component template with the current file name."
  }
}
```

### Normal TS React-Native Component

```json
{
  "React Native TS Component Template": {
    "prefix": "_rnfsc",
    "body": [
      "import {StyleSheet, Text, View} from 'react-native';",
      "",
      "interface IProps {}",
      "",
      "const ${1:${TM_FILENAME_BASE}} = (props: IProps): React.ReactElement<IProps> => {",
      "  return (",
      "    <View>",
      "      <Text>${1:${TM_FILENAME_BASE}}</Text>",
      "    </View>",
      "  );",
      "};",
      "",
      "export default ${1:${TM_FILENAME_BASE}};",
      "",
      "const styles = StyleSheet.create({});",
      ""
    ],
    "description": "Creates a React Native component template with the current file name."
  }
}
```
