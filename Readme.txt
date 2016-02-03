/* File Comments
Date:	January 24, 2016
Author: Alex Cholakis
E-Mail: coder314159@gmail.com
Source:	Lynda.com - Web - Web Design
Course:	JavaScript: Functions Course
URL:	www.lynda.com/JavaScript-tutorials/
		Challenge-Social-media-navigation/148137/158400-4.html
Task:	Place a list of picture objects with links into the DOM
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

This was an exercise in a video I watch from the Lynda.com site.  The assign
ment was to insert social media icons into the DOM.  Images, css script, html
page were given.  The JavaScript inserts the social media icons of "Facebook",
"Twitter", "Flickr", YouTube" into the dom.  The solution given was less 
complex then the code I wrote.  I took advantage of a number of the attribute 
functions and functions pertaining to nodes such as appending. Below is the
elements which were inserted.  Thank you.

<nav class="socialmediaicons">
  <ul>
    <li id="facebook">
	  <a href="http://facebook.com/viewsource">
	    <img alt="icon for facebook" src="images/facebook.png">
	  </a>
	</li>
	<li id="twitter">
	  <a href="http://twitter.com/planetoftheweb">
	    <img alt="icon for twitter" src="images/twitter.png">
	  </a>
	</li>
	<li id="flickr">
	  <a href="http://flickr.com/planetotheweb">
	    <img alt="icon for flickr" src="images/flickr.png">
	  </a>
	</li>
	<li id="youtube">
	  <a href="http://youtube.com/planetoftheweb">
	    <img alt="icon for youtube" src="images/youtube.png">
	  </a>
	</li>
  </ul>
</nav>