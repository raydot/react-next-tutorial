import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MainMenu from "../components/MainMenu"
import Footer from "../components/Footer"


/*import exploreWineCounty from "/static/img/explore-wine-country.jpg"
import nallewinery from "/static/img/nalle-winery.jpg"
import tastingRoom from "/static/img/tasting-room.jpg"
import wineBarrels from "/static/img/wine-barrels.jpg"
import wineExplorerText from "/static/img/wine-explorer-text.png"*/


 
export default function Home () {
    return (
      <div>
		<MainMenu />
		<div className="bigImageHeader">
		  
		  	<div className="titleInfo">
		  		<GridContainer>
		  			<Grid desktop="50">
		  			<h1 className="pageTitleNoCenter">The Finest Membership to the Wine Country</h1>
		  			<p className="pageTitleNoCenter"><img src="../static/img/explore-wine-country.jpg" alt="Mustard Vines" className="imgFullCol pageTitleNoCenter" /></p>
		  			<strong><a href="#membership" className="white button fullWidth">LEARN MORE</a></strong>
		  			</Grid>
		  			<Grid desktop="50">
		  				
		  			</Grid>
		  		</GridContainer>
          	</div>
          	
          	<div className="hero-overlay-graident"></div>
          	<img src="../static/img/explore-wine-country.jpg" alt="Mustard Vines" className="wineryImage" />
          </div>
		
		<GridContainer><h2 className="center">Discover New Wines &amp; Wineries with the Wine Explorer Membership</h2>
	            	<Grid desktop="50">
	            	
	            	<p></p>
	            	<p className="biggerType">Have you ever looked at a wine map and wondered, “How much will this cost?” Or, “Will I like the wine there?” With over 400+ wineries in Sonoma County alone, it’s easy to get lost along the wine road. That’s where the Wine Explorer™ Membership comes in.</p>
	            	<p>We’ve tasted at every winery that we’ve listed on our website. We can say without a doubt that all the wineries you can explore utilizing your wine explorer membership will be beyond memorable.</p>
	            	<p>So go out and explore the wine country with the Wine Explorer Membership from Beyond Napa Valley</p>
	            	</Grid>
	            	<Grid desktop="50">
	            		<p><img src="../static/img/nalle-winery.jpg" alt="Mustard Vines" className="imgFullCol" /></p>
	            	</Grid>
	    </GridContainer>
	    
	    <div className="bigImageHeader">
		  	<div className="titleInfo">
		  		<h2 className="pageTitle extraMargin">As a Wine Explorer Member you get...</h2>
		  		
		  		<GridContainer>
	            	<Grid desktop="25">
	            		<h2 className="center pageTitle"><strong>Comped Tasting</strong></h2>
	            		<p className="center pageTitle">For you + a guest</p>
	            	</Grid>
	            	<Grid desktop="25">
	            		<h2 className="center pageTitle"><strong>25% Off</strong></h2>
	            		<p className="center pageTitle">Any reserved tastings</p>
	            	</Grid>
	            	<Grid desktop="25">
	            		<h2 className="center pageTitle"><strong>10% Off</strong></h2>
	            		<p className="center pageTitle">Any bottle of wine</p>
	            	</Grid>
	            	<Grid desktop="25">
	            		<h2 className="center pageTitle"><strong>Additional 5%</strong></h2>
	            		<p className="center pageTitle">Off your purchase the day you join the wine club</p>
	            	</Grid>
	            	<Grid>
	            	<p className="center"><strong><a href="#membership" className="white button ">LEARN MORE</a></strong></p>
	            	</Grid>
	    </GridContainer>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src="../static/img/wine-barrels.jpg" alt="Wine Barrels" className="wineryImage" />
          </div>
         
		  	
		<GridContainer>
		  			<h2 className="center">And there’s an app too!</h2>
	            	<Grid desktop="100">
	            		<p className="center">Coming Soon!</p>
	            	</Grid>
	    </GridContainer>
	    <Footer />
      </div>
    )
  }
