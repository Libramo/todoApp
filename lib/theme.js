import { extendTheme } from "@chakra-ui/react";

// Changer le mode par defaut en blanc plutot que le theme dus système
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
