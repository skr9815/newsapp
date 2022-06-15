import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles =[
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Faras Ghani",
            "title": "T20 World Cup: Pakistan vs Afghanistan – Live updates - Al Jazeera English",
            "description": "Unbeaten Pakistan looking for third win; Afghanistan will join Pakistan at the top of the group with a win.",
            "url": "https://www.aljazeera.com/sports/2021/10/29/t20-world-cup-pakistan-v-afghanistan-live",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/10/2015-10-24T000000Z_1267653889_MT1ACI14118834_RTRMADP_3_CRIC.jpg?resize=1200%2C630",
            "publishedAt": "2021-10-29T14:37:30Z",
            "content": "<ul><li>Pakistan top of Group 2 with two wins out of two.</li><li>Afghanistan hammered Scotland by 130 runs in their first match.</li><li>Pakistan won the only T20 these sides have played against eac… [+6089 chars]"
        },
        {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "Google and Jio’s smartphone with custom Android OS for India launches November 4 for $87 - TechCrunch",
            "description": "Google and top Indian telecom network Jio Platforms say that their much-anticipated budget smartphone, JioPhone Next, will go on sale in India on November 4.",
            "url": "http://techcrunch.com/2021/10/29/google-and-jios-smartphone-with-custom-android-os-for-india-launches-november-4-for-87/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/jiophone-next-google.jpg?w=711",
            "publishedAt": "2021-10-29T12:08:40Z",
            "content": "Google and top Indian telecom network Jio Platforms said on Friday that their much-anticipated budget smartphone, JioPhone Next, will go on sale in the world’s second largest smartphone market on Nov… [+3920 chars]"
            },
            {
                "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Diabetes is not caused by eating too much sugar and three other shocking facts revealed - Times of India",
                "description": "More than 70 million people suffer from diabetes in India, making it the diabetes capital of the world.",
                "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/diabetes-is-not-caused-by-eating-too-much-sugar-and-three-other-shocking-facts-revealed/photostory/87364778.cms",
                "urlToImage": "https://static.toiimg.com/photo/87364833.cms",
                "publishedAt": "2021-10-29T10:59:57Z",
                "content": "Fact: Sugary foods, a glass of soda and processed foods directly do not increase your risk of diabetes. All these things increase your risk of obesity, which can lead to diabetes. But eating too much… [+401 chars]"
                },{
                    "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                    },
                    "author": "Manish Singh",
                    "title": "Google and Jio’s smartphone with custom Android OS for India launches November 4 for $87 - TechCrunch",
                    "description": "Google and top Indian telecom network Jio Platforms say that their much-anticipated budget smartphone, JioPhone Next, will go on sale in India on November 4.",
                    "url": "http://techcrunch.com/2021/10/29/google-and-jios-smartphone-with-custom-android-os-for-india-launches-november-4-for-87/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/jiophone-next-google.jpg?w=711",
                    "publishedAt": "2021-10-29T12:08:40Z",
                    "content": "Google and top Indian telecom network Jio Platforms said on Friday that their much-anticipated budget smartphone, JioPhone Next, will go on sale in the world’s second largest smartphone market on Nov… [+3920 chars]"
                    },   
    ]


    constructor(){
        super();
        this.state ={
            articles: this.articles,
            loading:false
        }
    }
    async componentDidMount(){
        let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ed4bed6e3dbb40c48e70e3b2dfa375d9";
        let data = await data.json()
         this.setState({articles:parsedData.articles })
 
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2> NewsMonkey - TopHeadLines</h2>
                    <div className="row">
                        {this.state.articles.map((element)=> {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.url} description={element.description} imageUrl={element.urlToImage} newsUrl={element.Url} />
                            </div>
                        }

                        )}



                    </div>
                </div>



            </div>
        )
    }
}

export default News
