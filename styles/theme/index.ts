import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';
import { colors } from './colors';
import { fonts } from './typography';
import { Link } from "./components/link";

const overrides = {
  styles,
  colors,
  fonts,

  components: {
    Link,
  }
};

export default extendTheme(overrides);
