import React from 'react'
import "./news.scss"
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../helpers";

function News() {
  const { recentNews } = useSelector((state: RootState) => state.news)
  return (
    <div className="newsContainer">
      <div className="newsInsideContainer">
        {recentNews.map((news) => (
          <div className="newsItem">
            <span className='date'>{formatDate(news.date_and_time_published)}</span>
            <span className='title'>{news.title}</span>
          </div>

        ))}
      </div>

    </div>
  )
}

export default News