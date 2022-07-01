import React, { Fragment, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetails = () => {
  const params = useParams();
  const {quoteId } = params;
  const {sendRequest, status, data : loadedQuote, error} = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if(status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )    
  }

  if(error) {
    return <p className='centered focus'>{error}</p>
  }

  if(!loadedQuote.text) {
    return <p >No quote Found</p>  
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path={`/`} element={
          <div className="centered">
            <Link
              className="btn--flat"
              to={`/quotes/${params.quoteId}/comments`}
            >
              comment
            </Link>
          </div>
        } />
      </Routes>
      <Routes>
        <Route
          path={`/comments`}
          element={<Comments text={params.quoteId} />}
        />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetails;
