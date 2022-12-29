import React, { Component} from "react";
import Footer from '../components/Footer/Footer'
import NewsPage from '../components/NewsPage/NewsPajes'



class News extends Component {
    render() {
          return ( 
    <div>
        <NewsPage />
        <Footer/>  
    </div>
  );
}
}

export default News;



