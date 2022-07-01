import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import LayOut from "./components/layout/LayOut";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/new-quotes" element={<NewQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetails />} />
        <Route path="*" element={<NotFound/>} />
        {/* <Route path='/quotes/:quoteId/comments' element={<Comments/>}/> */}
      </Routes>
    </LayOut>
  );
}

export default App;
