import React, { useState, useContext } from "react";
import { JokeContext } from "../contexts/JokeContext";
import JokeCard from "./JokeCard";
import Pagination from "./Pagination";
import { UserContext } from "../contexts/UserContext";

export default function JokeCardList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { state, dispatch } = useContext(JokeContext);

  //get current number of posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.jokes.slice(indexOfFirstPost, indexOfLastPost);

  //change the page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentPosts.map(j => (
        <JokeCard
          setup={j.setup}
          punchline={j.punchline}
          username={j.username}
          key={j.id}
        />
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={state.jokes.length}
        paginate={paginate}
      />
    </div>
  );
}
