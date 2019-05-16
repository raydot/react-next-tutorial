import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

/*//import MustardVines from "/static/img/mustard-vines.jpg"*/
//import exploreWineCounty from "/static/img/explore-wine-country.jpg"
/*import MercurySquare from "/static/img/mercury-square.jpg"
import jRickards from "/static/img/jrickards.jpg"
import ramazzotti from "/static/img/ramazzotti-wine.jpg"
import nallewinery from "/static/img/nalle-winery.jpg"
import taltywine from "/static/img/talty-wine.jpg"
import alquimista from "/static/img/alquimista-cellars.jpg"
import hambycellars from "/static/img/hamby-cellars.jpg"
import camapanaranch from "/static/img/campana-ranch.jpg"
import brooksnote from "/static/img/brooks-note-winery.jpg"
*/
 
export default function Explore() {
    return (
      <div>
		  <div className="bigImageHeader">
		  
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Explore the Wine Country</h1>
          	</div>
          	
          	<div className="hero-overlay"></div>
          	<img src="/static/img/explore-wine-country.jpg" alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="mainContent">
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<h2>When you become a Wine Explorer, you have access to all of the wineries below. Simply walk in and show you're membership ID and that's it. Some are by appointment so do plan in advance. We recommend no more than 3-4 wineries per day too. That wine can easily sneak up on you!</h2>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          <div className="content">
	            <GridContainer>
				  <Grid desktop="50">
				    <h2><a href="/#">Download Our Partner List</a></h2>
				    <p>Sometimes you just need a paper list to take with you.</p>
				    <a href="#hi" className="button">Download the List</a>
				  </Grid>
				  <Grid desktop="50">
				    <h2><a href="#">Wineries Near Ne</a></h2>
				    <p>Find the closet winery to where you are.</p>
				    <p><a href="#" className="button">Find The Closet Winery</a></p>
				  </Grid>
				</GridContainer>
	          </div>
	       <GridContainer>
	       <h2>Sonoma - Alexander Valley AVA</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src="/static/img/jrickards.jpg" alt="J. Rickards Winery" className="imgFullCol" />
		   			<h3>J. Rickards Winery</h3>
		   			<ul>
		   				<li>Open to the Public | Daily 11-4pm</li>
		   				<li>24505 Chianti Rd, Cloverdale, CA 95425</li>
		   				<li>Phone: (707) 758-3441</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src="/static/img/mercury-square.jpg" alt="Mercury Winery" className="imgFullCol" />
		   			<h3>Mercury Winery</h3>
		   			<ul>
		   				<li>Open to the Public | Daily 11-6pm</li>
		   				<li>21015 Geyserville Ave, Geyserville, CA 95441</li>
		   				<li>Phone:  (707) 857-9870</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src="/static/img/ramazzotti-wine.jpg" alt="Ramazzotti Wine" className="imgFullCol" />
		   			<h3>Ramazzotti Winery</h3>
		   			<ul>
		   				<li>Open to the Public | Daily 11-5pm</li>
		   				<li>21015 Geyserville Ave, Geyserville, CA 95441</li>
		   				<li>Phone: (707) 814-0016</li>
		   			</ul>
          
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Sonoma - Dry Creek Valley AVA</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src="/static/img/nalle-winery.jpg" alt="Nalle Winery" className="imgFullCol" />
		   			<h3>Nalle Winery</h3>
		   			<ul>
		   				<li>Open Saturday - Sunday | 12:00 - 4:30pm</li>
		   				<li>2383 Dry Creek Rd, Healdsburg, CA 95448</li>
		   				<li>Phone: (707) 433-1040</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src="/static/img/talty-wine.jpg" alt="Talty Winery" className="imgFullCol" />
		   			<h3>Talty Vineyards</h3>
		   			<ul>
		   				<li>Public | Fri. - Sun. 12 - 4pm</li>
		   				<li>7127 Dry Creek Rd, Healdsburg, CA 95448</li>
		   				<li>Phone: (707) 433-8438</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Sonoma - Russian River Valley AVA</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src="/static/img/alquimista-cellars.jpg" alt="Alquimista Cellars" className="imgFullCol" />
		   			<h3>Alquimista Cellars</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>Sebastapol, CA (Address provided upon booking)</li>
		   				<li>Phone: (707) 217-9728</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src="/static/img/campana-ranch.jpg" alt="Campana Ranch Winery" className="imgFullCol" />
		   			<h3>Campana Ranch Winery</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>3631 Mark West Station Rd, Windsor, CA 95492</li>
		   				<li>Phone: (707) 337-0844</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src="/static/img/hamby-cellars.jpg" alt="Hamby Cellars" className="imgFullCol" />
		   			<h3>Hamby Cellars</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>Sebastapol, CA (Address provided upon booking)</li>
		   				<li><a href="">m.me/hambycellarswine</a></li>
		   			</ul>
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Marin County - San Francisco Bay Area</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src="/static/img/brooks-note-winery.jpg" alt="Brooks Note Winery" className="imgFullCol" />
		   			<h3>Brooks Note Winery</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>1026 Machin Ave, Novato, CA 94945</li>
		   				<li>Phone: (415) 637-8106</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       		
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       </GridContainer>
	       
	       	       
	       </div>
       </div> // Close mainContent
    )
  }