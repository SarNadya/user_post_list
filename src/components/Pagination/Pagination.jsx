import React from 'react';
import styles from './Pagination.module.css';
import { usePagination } from '../../hooks/usePagination';

const Pagination = ({totalPages, changePost, page}) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div className={styles.wrapper}>
        {pagesArray.map(p => 
          <span
          onClick={() => changePost(p)}
          key={p}
          className={page === p ? styles.activePage + ' ' + styles.page: styles.page}
          >
            {p}
          </span>
        )}
      </div>
  );
};

export default Pagination;