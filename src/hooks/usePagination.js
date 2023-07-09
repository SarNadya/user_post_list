import {useMemo} from 'react';

export const usePagination = (totalPages) => {
  let pagesArray = [];
  let pages = useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1)
    }
    return pagesArray;
  }, [totalPages])
  return pages;
}