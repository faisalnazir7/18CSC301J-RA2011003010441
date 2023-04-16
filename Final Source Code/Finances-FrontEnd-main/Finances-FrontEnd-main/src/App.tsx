import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar"; // since these folder have index.tsx files so no need to mention them
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";


function App() {
  const theme = useMemo(() => createTheme(themeSettings),[]) // we load the themes. And to do it only once on startup we used []
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}> {/*It give theme setting. Any component will have this particular theme*/}
          <CssBaseline/> {/*It give default css setting*/}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem"> {/* Box is from material ui */}
          <Navbar />
          <Routes>  {/* Our app has only two routes, one for home page and other for predictions page */}
            <Route path="/" element={<Dashboard />}/>
            <Route path="/predictions" element={<Predictions />} />
          </Routes>

          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
