import React, {useState} from "react"
import Link from "next/link";
import styles from "../../../styles/Pagination.module.css"

const LEFT_PAGE = 'LEFT'; 
const RIGHT_PAGE = 'RIGHT';

const Pagination = ({page, numberTotalOfPage, hasNextPage, nextPage}) => {
    const [pageNeighbours, setPageNeighbours] = useState(1);

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }
    
        return range;
    }

    const fetchPageNumbers = () => {
        const totalPages = numberTotalOfPage;
        const currentPage = page;
        const pageNeighbours = 1;
    
        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
         */
        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;
        
        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, (currentPage + 1) - pageNeighbours);
            const endPage = Math.min(totalPages - 1, (currentPage + 1) + pageNeighbours);
            let pages = range(startPage, endPage);
        
                /**
                * hasLeftSpill: has hidden pages to the left
                * hasRightSpill: has hidden pages to the right
                * spillOffset: number of hidden pages either to the left or to the right
                */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
        
            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }
        
                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }
        
                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    console.log("KK");
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }
        
            return [1, ...pages, totalPages];
        }
    
        return range(1, totalPages, 1);
    }

    const pages = fetchPageNumbers();
    
    return (
        <div className = {styles.container}>
            {
                page ? (
                    <Link href = {`/admin/blog/page/${page - 1}`}>
                        <a className = {styles.arrow} >
                            <i className ="fas fa-chevron-left"></i>
                        </a>
                    </Link>
                ): null
            }
            <div className = {styles.pagination}>
                {
                    pages.map((item, idx) => {
                        if(item === LEFT_PAGE) return (
                            <Link href = {`/admin/blog/page/${page - (pageNeighbours * 2) }`}>
                                <a className = {`${styles.arrow} ${styles.double}`}>
                                    <i className="fas fa-angle-double-left"></i>
                                </a>
                            </Link>
                        )

                        if(item === RIGHT_PAGE) return (
                            <Link href = {`/admin/blog/page/${page + (pageNeighbours * 2) }`}>
                                <a className = {`${styles.arrow} ${styles.double}`}>
                                    <i className="fas fa-angle-double-right"></i>
                                </a>
                            </Link>
                        )

                        return(
                            <Link key = {idx} href = {`/admin/blog/page/${item - 1} `}>
                                <a className= {`${styles.item} ${page === (item - 1) ? styles.selected : ``}`}>
                                        {(item) < 10 ? `0${item}`: (item) }
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
            {
                !hasNextPage ? (
                    <Link href = {`/admin/blog/page/${page + 1}`}>
                        <a className = {styles.arrow}>
                            <i className ="fas fa-chevron-right"></i> 
                        </a>
                    </Link>
                ): null
            }
        </div>   
    )
}

export default Pagination;