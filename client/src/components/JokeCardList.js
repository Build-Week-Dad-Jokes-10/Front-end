import React, { useState, useContext } from "react";
import { JokeContext } from "../contexts/JokeContext";
import JokeCard from "./JokeCard";
import Pagination from "./Pagination";

export default function JokeCardList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { joke } = useContext(JokeContext);

  //get current number of posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = joke.slice(indexOfFirstPost, indexOfLastPost);

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
        />
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={joke.length}
        paginate={paginate}
      />
    </div>
  );
}
