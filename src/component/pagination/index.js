import React from "react";
import "./index.css";

const Paginations = ({ count, onPageSet, page }) => {
  let countArr = [];
  for (let i = 1; i <= count; i++) {
    countArr.push(i);
  }
  const prevPage = () => {
    if (page === 1) {
      onPageSet(count);
    } else {
      onPageSet(page - 1);
    }
  };

  const nextPage = () => {
    if (page === count) {
      onPageSet(1);
    } else {
      onPageSet(page + 1);
    }
  };

  let pages = countArr.map((el) => {
    let styleActivPage = el === page ? { background: " #222" } : null;

    return (
      <>
        <li className="page-item" key={el} onClick={() => onPageSet(el)}>
          <div
            className="page-link tumb"
            aria-label="Previous"
            style={styleActivPage}
          >
            <span aria-hidden="true">{el}</span>
          </div>
        </li>
      </>
    );
  });
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={prevPage}>
          <div className="page-link tumb" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        {pages}
        <li className="page-item" onClick={nextPage}>
          <div className="page-link tumb" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
