import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ marginTop: "20%" }}>
      <ul className="pagination">
        {pageNumbers.map(num => (
          <li key={num} className="page-item">
            <a
              onClick={e => {
                e.preventDefault();
                paginate(num);
              }}
              href="/"
              className="page-link"
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
