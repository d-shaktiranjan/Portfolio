import React from 'react';

// React Loading Skeleton imports
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const BlogLoading = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="rgb(248, 202, 202)">
            <h1><Skeleton height="2.5rem" width="50%" /></h1>
            <div className='blog-card-left flex accent margin-block'>
                <div>
                    <i className="fa-solid fa-user margin-right"></i>
                    <Skeleton width={200} height={30} className="margin-right-big" />
                </div>
                <div>
                    <i className="fa-solid fa-calendar-days margin-right"></i>
                    <Skeleton width={200} height={30} />
                </div>
            </div>
            <Skeleton height="60rem" highlightColor="rgb(255, 245, 191)" />
        </SkeletonTheme>
    )
}
