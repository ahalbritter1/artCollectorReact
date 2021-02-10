import React from 'react';

/**
 * We need to import fetchQueryResultsFromURL since we will sometimes have urls in info.prev and info.next
 * which are query urls.
 */
import { fetchQueryResultsFromURL } from '../api';

const Preview = (props) => {
  const {
    setSearchResults,
    setFeaturedResult,
    setIsLoading,
  } = props;

  const {
    info,
    records
  } = props.searchResults;


  /**
   * Destructure setSearchResults, setFeaturedResult, and setIsLoading from props
   * and also destructure info and records from props.searchResults
   * 
   * You need info, records, setSearchResults, setFeaturedResult, and setIsLoading as available constants
   */


  /**
   * Don't touch this function, it's good to go.
   * 
   * It has to be defined inside the Preview component to have access to setIsLoading, setSearchResults, etc...
   */
  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <aside id="preview">
    <header className="pagination">
      {/* This button should be disabled if nothing is set in info.prev, and should call fetchPage with info.prev when clicked */}
      <button
        disabled={!info.prev ? true : false}
        className="previous"
        onClick={() => fetchPage(info.prev)}>Previous</button>
      {/* This button should be disabled if nothing is set in info.next, and should call fetchPage with info.next when clicked */}
      <button
        disabled={!info.next ? true : false}
        className="next"
        onClick={() => fetchPage(info.next)}>Next</button>
    </header>
    <section className="results">
      {
        records.map((record, index) => {
          return <div
            key={index}
            className="object-preview"
            onClick={(event) => {
              event.preventDefault();
              setFeaturedResult(record);
            }}>

            <img src={record.primaryimageurl ? record.primaryimageurl : null} alt={record.description ? record.description : null} />
            <h3> {record.title ? record.title : "MISSING INFO"}</h3>
          </div>
        })
      }
    </section>
  </aside>
}

export default Preview;