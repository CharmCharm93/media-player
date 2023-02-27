import ToggleTheme from "./components/ToggleTheme";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import ThemeContextProvider from "./context/ThemeContext";
import MediaContainer from "./layouts/MediaContainer";
import { Welcome } from "./layouts/Welcome";

function App() {
  return (
    <ThemeContextProvider>
      <Welcome />
      <MusicPlayerProvider>
        <MediaContainer />
        <ToggleTheme />
      </MusicPlayerProvider>
    </ThemeContextProvider>
  );
}

export default App;
